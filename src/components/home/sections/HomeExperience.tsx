import Image from 'next/image';
import { experienceJobs } from '@/components/home/homeData';

export function HomeExperience() {
  return (
    <section className="space-y-5">
      <p className="text-sm tracking-tight text-text-muted/50 uppercase">
        Recent Experience
      </p>
      <div className="grid gap-6">
        {experienceJobs.map((job) => (
          <div
            key={job.name}
            className="space-y-3 rounded-2xl border border-border/50 bg-foreground p-5 font-sans transition-colors duration-200 hover:border-border/75"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={job.logo}
                  alt={job.name}
                  className="h-18 w-18 rounded-2xl md:h-16 md:w-16"
                />
                <div className="space-y-1 md:space-y-2">
                  <h1 className="text-lg font-medium text-text md:text-xl">
                    {job.position}
                  </h1>
                  <span className="flex flex-col text-text-muted/50 md:flex-row md:items-center md:gap-3">
                    <p className="md:text-md text-sm text-text-muted">
                      {job.name}
                    </p>
                    <p className="md:text-md hidden text-sm font-bold md:inline">
                      •
                    </p>
                    <p>Remote, Full-time</p>
                  </span>
                </div>
              </div>
              <div className="md:text-md text-sm text-text-muted/50">
                <p>{job.date}</p>
              </div>
            </div>
            <p className="md:text-md text-sm">{job.description}</p>
            <ul className="md:text-md space-y-3 text-sm">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-secondary/75 to-secondary shadow-inner shadow-text-muted/25"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
