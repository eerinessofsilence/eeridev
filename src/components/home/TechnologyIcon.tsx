import Image from 'next/image';
import type { Technology } from '@/components/home/homeData';

interface TechnologyIconProps {
  technology: Technology;
  imageClassName: string;
  width: number;
  height: number;
}

export function TechnologyIcon({
  technology,
  imageClassName,
  width,
  height,
}: TechnologyIconProps) {
  return (
    <div className="group relative flex items-center justify-center">
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 rounded-lg border border-border/25 bg-foreground px-3 py-1 text-xs tracking-tight text-nowrap text-text opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        {technology.name}
        <span
          aria-hidden="true"
          className="absolute top-full left-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xs border-r border-b border-border/25 bg-foreground"
        />
      </span>
      <Image
        className={imageClassName}
        src={technology.src}
        alt={technology.name}
        width={width}
        height={height}
      />
    </div>
  );
}
