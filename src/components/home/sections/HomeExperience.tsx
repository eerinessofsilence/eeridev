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
                <Image
                  src={job.logo}
                  alt={job.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl"
                />
                <div className="space-y-2">
                  <h1 className="text-xl font-medium text-text">
                    {job.position}
                  </h1>
                  <span className="flex gap-3 text-text-muted/50">
                    <p className="text-text-muted">{job.name}</p>
                    <p>•</p>
                    <p>Remote, Full-time</p>
                  </span>
                </div>
              </div>
              <div className="text-text-muted/50">
                <p>{job.date}</p>
              </div>
            </div>
            <p>{job.description}</p>
            <ul className="space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-linear-to-br from-secondary/75 to-secondary shadow-inner shadow-text-muted/25"></span>
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
