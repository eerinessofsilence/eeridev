'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  ContributionCell,
  ContributionMonth,
} from '@/lib/github-contributions';
import { siteProfile } from '@/lib/site';

const intensityClasses = [
  'bg-secondary/25',
  'bg-secondary/75',
  'bg-secondary',
  'bg-text-muted/50',
  'bg-text-muted/75',
] as const;

const contributionCellSize = '0.6875rem';
const isDevelopment = process.env.NODE_ENV === 'development';

const placeholderMonths = [
  { label: 'Apr', startWeek: 1 },
  { label: 'May', startWeek: 6 },
  { label: 'Jun', startWeek: 10 },
  { label: 'Jul', startWeek: 15 },
  { label: 'Aug', startWeek: 19 },
  { label: 'Sep', startWeek: 24 },
  { label: 'Oct', startWeek: 28 },
  { label: 'Nov', startWeek: 32 },
  { label: 'Dec', startWeek: 37 },
  { label: 'Jan', startWeek: 41 },
  { label: 'Feb', startWeek: 45 },
  { label: 'Mar', startWeek: 49 },
] as const;

const placeholderWeeks = Array.from({ length: 53 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => ({
    count: 0,
    date: `${weekIndex}-${dayIndex}`,
    inRange: true,
    level: 0 as const,
  })),
);

type ContributionResponse = {
  months: ContributionMonth[];
  profileUrl: string;
  rangeLabel: string;
  totalContributions: number;
  username: string;
  weeks: ContributionCell[][];
};

type ActiveTooltip = {
  cellDate: string;
  label: string;
  left: number;
  top: number;
  visible: boolean;
};

type CellGeometry = {
  centerX: number;
  centerY: number;
  top: number;
};

const tooltipDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

function getMonthGridColumn(
  months: readonly Pick<ContributionMonth, 'startWeek'>[],
  index: number,
  totalWeeks: number,
) {
  const start = months[index]?.startWeek ?? 1;
  const end = months[index + 1]?.startWeek ?? totalWeeks + 1;

  return `${start} / ${Math.max(start + 1, end)}`;
}

function formatContributionTooltip(cell: ContributionCell) {
  const date = tooltipDateFormatter.format(
    new Date(`${cell.date}T00:00:00.000Z`),
  );

  if (cell.count === 0) {
    return `No contributions on ${date}`;
  }

  const contributionLabel =
    cell.count === 1 ? '1 contribution' : `${cell.count} contributions`;

  return `${contributionLabel} on ${date}`;
}

function LoadingState() {
  return (
    <>
      <div className="mb-4 flex justify-between text-lg tracking-tight text-text-muted/75">
        {placeholderMonths.map((month, index) => (
          <span
            key={month.label}
            style={{
              gridColumn: getMonthGridColumn(
                placeholderMonths,
                index,
                placeholderWeeks.length,
              ),
            }}
            className="justify-self-center whitespace-nowrap"
          >
            {month.label}
          </span>
        ))}
      </div>

      <div
        className="grid grid-rows-7 gap-0.5"
        style={{
          gridAutoFlow: 'column',
          gridTemplateColumns: `repeat(${placeholderWeeks.length}, ${contributionCellSize})`,
        }}
      >
        {placeholderWeeks.flat().map((cell) => (
          <span
            key={cell.date}
            className="aspect-square animate-pulse rounded-[0.26rem] bg-white/4"
          />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-6 text-lg tracking-tight text-text-muted/55">
        <p>Loading live GitHub activity...</p>
        <div className="flex items-center gap-3">
          <span>Less</span>
          <div className="flex gap-1.5">
            {intensityClasses.map((tone, index) => (
              <span
                key={index}
                className={`h-5 w-5 rounded-[0.26rem] ${tone}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </>
  );
}

function ErrorState() {
  return (
    <div className="flex min-h-56 flex-col justify-between gap-6 rounded-[1.25rem] border border-dashed border-white/10 bg-white/2 p-5 text-lg tracking-tight text-text-muted/70">
      <p>Unable to load live GitHub contributions right now.</p>
      <a
        href={siteProfile.githubUrl}
        className="w-fit text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-text"
      >
        Open GitHub profile
      </a>
    </div>
  );
}

export function ContributionMap() {
  const [data, setData] = useState<ContributionResponse | null>(null);
  const [status, setStatus] = useState<'error' | 'loading' | 'ready'>(
    'loading',
  );
  const [activeTooltip, setActiveTooltip] = useState<ActiveTooltip | null>(
    null,
  );
  const cellRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const cellGeometryRef = useRef<CellGeometry[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const cells = data?.weeks.flat() ?? [];

  const loadContributions = useCallback(async () => {
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    const searchParams = new URLSearchParams({
      username: siteProfile.githubUsername,
    });

    if (isDevelopment) {
      searchParams.set('_ts', String(Date.now()));
    }

    abortControllerRef.current = controller;

    try {
      const response = await fetch(
        `/api/github-contributions?${searchParams.toString()}`,
        {
          signal: controller.signal,
          ...(isDevelopment ? { cache: 'no-store' as const } : {}),
        },
      );

      if (!response.ok) {
        throw new Error('Unable to fetch contributions');
      }

      const payload = (await response.json()) as ContributionResponse;

      setData(payload);
      setStatus('ready');
    } catch {
      if (controller.signal.aborted) {
        return;
      }

      setStatus((current) => (current === 'ready' ? current : 'error'));
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  }, []);

  useEffect(() => {
    void loadContributions();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [loadContributions]);

  useEffect(() => {
    if (!isDevelopment) {
      return;
    }

    function refreshContributions() {
      if (document.visibilityState !== 'visible') {
        return;
      }

      void loadContributions();
    }

    window.addEventListener('focus', refreshContributions);
    document.addEventListener('visibilitychange', refreshContributions);

    return () => {
      window.removeEventListener('focus', refreshContributions);
      document.removeEventListener('visibilitychange', refreshContributions);
    };
  }, [loadContributions]);

  useEffect(() => {
    if (!activeTooltip?.visible) {
      return;
    }

    function hideTooltip() {
      cellGeometryRef.current = [];
      setActiveTooltip((current) =>
        current ? { ...current, visible: false } : current,
      );
    }

    window.addEventListener('resize', hideTooltip);
    window.addEventListener('scroll', hideTooltip, true);

    return () => {
      window.removeEventListener('resize', hideTooltip);
      window.removeEventListener('scroll', hideTooltip, true);
    };
  }, [activeTooltip]);

  useEffect(() => {
    cellRefs.current = [];
    cellGeometryRef.current = [];
    setActiveTooltip(null);
  }, [data]);

  function measureCellGeometry() {
    cellGeometryRef.current = cellRefs.current.map((button) => {
      if (!button) {
        return {
          centerX: Number.NaN,
          centerY: Number.NaN,
          top: 0,
        };
      }

      const rect = button.getBoundingClientRect();

      return {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
        top: rect.top - 12,
      };
    });
  }

  function hideTooltip() {
    setActiveTooltip((current) =>
      current ? { ...current, visible: false } : current,
    );
  }

  function showTooltipForCell(cell: ContributionCell, geometry: CellGeometry) {
    setActiveTooltip((current) => {
      if (
        current?.cellDate === cell.date &&
        current.left === geometry.centerX &&
        current.top === geometry.top &&
        current.visible
      ) {
        return current;
      }

      return {
        cellDate: cell.date,
        label: formatContributionTooltip(cell),
        left: geometry.centerX,
        top: geometry.top,
        visible: true,
      };
    });
  }

  function showTooltipForIndex(index: number) {
    const cell = cells[index];
    const geometry = cellGeometryRef.current[index];

    if (!cell || !geometry || !cell.inRange) {
      return;
    }

    showTooltipForCell(cell, geometry);
  }

  function showNearestTooltip(clientX: number, clientY: number) {
    if (!cells.length) {
      return;
    }

    if (cellGeometryRef.current.length !== cells.length) {
      measureCellGeometry();
    }

    let closestIndex = -1;
    let closestDistance = Number.POSITIVE_INFINITY;

    cellGeometryRef.current.forEach((geometry, index) => {
      if (!cells[index]?.inRange) {
        return;
      }

      if (Number.isNaN(geometry.centerX) || Number.isNaN(geometry.centerY)) {
        return;
      }

      const deltaX = geometry.centerX - clientX;
      const deltaY = geometry.centerY - clientY;
      const distance = deltaX * deltaX + deltaY * deltaY;

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex >= 0) {
      showTooltipForIndex(closestIndex);
    }
  }

  return (
    <section className="md:rounded-2xl md:border md:border-border/25 md:bg-foreground md:p-5 lg:mx-5">
      <div className="overflow-x-auto">
        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorState />}

        {status === 'ready' && data && (
          <>
            <div
              className="mb-4 flex justify-between text-lg tracking-tight text-text-muted/50"
              style={{
                gridTemplateColumns: `repeat(${data.weeks.length}, ${contributionCellSize})`,
              }}
            >
              {data.months.map((month, index) => (
                <span
                  key={`${month.label}-${month.startWeek}`}
                  style={{
                    gridColumn: getMonthGridColumn(
                      data.months,
                      index,
                      data.weeks.length,
                    ),
                  }}
                  className="justify-self-center text-xs whitespace-nowrap"
                >
                  {month.label}
                </span>
              ))}
            </div>

            <div className="relative">
              {activeTooltip && (
                <div
                  className="pointer-events-none fixed z-30 transition-[left,top] duration-150 ease-out"
                  style={{
                    left: activeTooltip.left,
                    top: activeTooltip.top,
                    transform: 'translate(-50%, -100%)',
                  }}
                >
                  <div
                    className={`relative rounded-xl border border-border/25 bg-foreground px-4 py-2 text-sm tracking-tight text-text-muted transition-[opacity,transform] duration-150 ease-out ${activeTooltip.visible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}
                  >
                    {activeTooltip.label}
                    <span
                      aria-hidden="true"
                      className="absolute top-full left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-2 rotate-45 rounded-xs border-r border-b border-border/25 bg-foreground"
                    />
                  </div>
                </div>
              )}

              <div
                className="grid grid-rows-7 gap-1"
                style={{
                  gridAutoFlow: 'column',
                  gridTemplateColumns: `repeat(${data.weeks.length}, ${contributionCellSize})`,
                }}
                onPointerEnter={(event) => {
                  measureCellGeometry();
                  showNearestTooltip(event.clientX, event.clientY);
                }}
                onPointerMove={(event) => {
                  showNearestTooltip(event.clientX, event.clientY);
                }}
                onPointerLeave={() => {
                  hideTooltip();
                }}
              >
                {cells.map((cell, index) => (
                  <button
                    key={cell.date}
                    type="button"
                    ref={(element) => {
                      cellRefs.current[index] = element;
                    }}
                    disabled={!cell.inRange}
                    aria-label={formatContributionTooltip(cell)}
                    className={`aspect-square h-2.75 w-2.75 rounded-xs transition-colors duration-150 outline-none ${intensityClasses[cell.level]} ${cell.inRange ? 'hover:brightness-125 focus-visible:brightness-125' : 'cursor-default'}`}
                    onFocus={(event) => {
                      if (!cell.inRange) {
                        hideTooltip();
                        return;
                      }

                      const rect = event.currentTarget.getBoundingClientRect();

                      showTooltipForCell(cell, {
                        centerX: rect.left + rect.width / 2,
                        centerY: rect.top + rect.height / 2,
                        top: rect.top - 12,
                      });
                    }}
                    onBlur={() => {
                      hideTooltip();
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-6 text-sm tracking-tight text-text-muted/75">
              <p>
                <span className="font-medium text-text-muted">
                  {data.totalContributions}
                </span>{' '}
                contributions in {data.rangeLabel}
              </p>

              <div className="flex items-center gap-3 text-sm">
                <span>Less</span>
                <div className="flex gap-1.5">
                  {intensityClasses.map((tone, index) => (
                    <span
                      key={index}
                      className={`h-4 w-4 rounded-xs ${tone}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
