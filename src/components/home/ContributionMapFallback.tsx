const intensityClasses = [
  'bg-secondary/25',
  'bg-secondary/75',
  'bg-secondary',
  'bg-text-muted/50',
  'bg-text-muted/75',
] as const;

const contributionCellSize = '0.6875rem';

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
    date: `${weekIndex}-${dayIndex}`,
  })),
);

function getMonthGridColumn(
  months: readonly { startWeek: number }[],
  index: number,
  totalWeeks: number,
) {
  const start = months[index]?.startWeek ?? 1;
  const end = months[index + 1]?.startWeek ?? totalWeeks + 1;

  return `${start} / ${Math.max(start + 1, end)}`;
}

export function ContributionMapFallback() {
  return (
    <section className="w-fit max-w-full">
      <div className="overflow-x-auto pb-2">
        <div className="w-max">
          <div
            className="mb-4 grid gap-x-1 text-lg tracking-tight text-text-muted/65"
            style={{
              gridTemplateColumns: `repeat(${placeholderWeeks.length}, ${contributionCellSize})`,
            }}
          >
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
                className="justify-self-start whitespace-nowrap"
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
        </div>
      </div>
    </section>
  );
}
