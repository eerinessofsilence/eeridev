export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionCell = {
  count: number;
  date: string;
  inRange: boolean;
  level: ContributionLevel;
};

export type ContributionMonth = {
  label: string;
  startWeek: number;
};

export type ContributionData = {
  months: ContributionMonth[];
  rangeLabel: string;
  totalContributions: number;
  weeks: ContributionCell[][];
};

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
});

function clampLevel(value: number): ContributionLevel {
  if (Number.isNaN(value) || value <= 0) {
    return 0;
  }

  if (value >= 4) {
    return 4;
  }

  return value as ContributionLevel;
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function parseDate(dateString: string) {
  return new Date(`${dateString}T00:00:00.000Z`);
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

function startOfWeek(date: Date) {
  return addDays(date, -date.getUTCDay());
}

function endOfWeek(date: Date) {
  return addDays(date, 6 - date.getUTCDay());
}

function parseAttributes(tag: string) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)="([^"]*)"/g)].map(([, key, value]) => [
      key,
      value,
    ]),
  );
}

function parseCountFromAttributes(attributes: Record<string, string>) {
  const directCount = Number(attributes['data-count']);

  if (!Number.isNaN(directCount)) {
    return directCount;
  }

  const labelCount = attributes['aria-label']?.match(/(\d+)\s+contribution/i)?.[1];

  if (!labelCount) {
    return 0;
  }

  return Number(labelCount);
}

export function getContributionRangeLabel(start: Date, end: Date) {
  const startYear = start.getUTCFullYear();
  const endYear = end.getUTCFullYear();

  if (startYear === endYear) {
    return `${startYear}`;
  }

  return `${startYear}-${String(endYear).slice(-2)}`;
}

function parseTooltipCounts(markup: string) {
  return new Map(
    [
      ...markup.matchAll(
        /<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g,
      ),
    ].map(([, targetId, content]) => {
      const normalized = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const countMatch = normalized.match(/(\d+)\s+contributions?/i);

      return [targetId, countMatch ? Number(countMatch[1]) : 0] as const;
    }),
  );
}

export function parseGitHubContributionsMarkup(
  markup: string,
): ContributionData | null {
  const tooltipCounts = parseTooltipCounts(markup);
  const dayTags = [
    ...markup.matchAll(
      /<(?:rect|td)\b[^>]*data-date="[^"]+"[^>]*>/g,
    ),
  ].map(([tag]) => tag);

  if (!dayTags.length) {
    return null;
  }

  const parsedCells = dayTags
    .map((tag) => {
      const attributes = parseAttributes(tag);
      const date = attributes['data-date'];

      if (!date) {
        return null;
      }

      return {
        count:
          tooltipCounts.get(attributes.id ?? '') ??
          parseCountFromAttributes(attributes),
        date,
        level: clampLevel(Number(attributes['data-level'] ?? 0)),
      };
    })
    .filter((cell): cell is NonNullable<typeof cell> => cell !== null)
    .sort((left, right) => left.date.localeCompare(right.date));

  if (!parsedCells.length) {
    return null;
  }

  const rangeStart = parseDate(parsedCells[0].date);
  const rangeEnd = parseDate(parsedCells.at(-1)!.date);
  const byDate = new Map(parsedCells.map((cell) => [cell.date, cell]));
  const windowStart = formatDate(rangeStart);
  const windowEnd = formatDate(rangeEnd);
  const firstVisibleDate = startOfWeek(rangeStart);
  const lastVisibleDate = endOfWeek(rangeEnd);
  const days: ContributionCell[] = [];

  for (
    let cursor = new Date(firstVisibleDate);
    cursor <= lastVisibleDate;
    cursor = addDays(cursor, 1)
  ) {
    const date = formatDate(cursor);
    const cell = byDate.get(date);

    days.push({
      count: cell?.count ?? 0,
      date,
      inRange: date >= windowStart && date <= windowEnd,
      level: cell?.level ?? 0,
    });
  }

  const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, index) =>
    days.slice(index * 7, index * 7 + 7),
  );

  const months: ContributionMonth[] = [
    {
      label: monthFormatter.format(rangeStart),
      startWeek: 1,
    },
  ];

  weeks.forEach((week, index) => {
    if (index === 0) {
      return;
    }

    const monthStartDay = week.find((day) => {
      if (!day.inRange) {
        return false;
      }

      return parseDate(day.date).getUTCDate() === 1;
    });

    if (!monthStartDay) {
      return;
    }

    months.push({
      label: monthFormatter.format(parseDate(monthStartDay.date)),
      startWeek: index + 1,
    });
  });

  return {
    months,
    rangeLabel: getContributionRangeLabel(rangeStart, rangeEnd),
    totalContributions: days.reduce(
      (sum, day) => sum + (day.inRange ? day.count : 0),
      0,
    ),
    weeks,
  };
}
