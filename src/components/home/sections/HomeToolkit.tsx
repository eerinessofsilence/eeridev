import { TechnologyIcon } from '@/components/home/TechnologyIcon';
import { technologies } from '@/components/home/homeData';

export function HomeToolkit() {
  return (
    <section className="space-y-5">
      <p className="text-sm tracking-tight text-text-muted/50 uppercase">
        Toolkit
      </p>
      <div className="flex flex-wrap items-center gap-5">
        {technologies.map((technology) => (
          <TechnologyIcon
            key={technology.name}
            technology={technology}
            imageClassName="h-9 w-auto max-w-9 transition-transform duration-200 group-hover:scale-110"
            width={36}
            height={36}
          />
        ))}
      </div>
    </section>
  );
}
