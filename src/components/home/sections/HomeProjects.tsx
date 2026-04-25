import Image from 'next/image';
import { Globe } from 'lucide-react';
import { GitHubMark } from '@/components/home/GitHubMark';
import { TechnologyIcon } from '@/components/home/TechnologyIcon';
import { featuredProjects } from '@/components/home/homeData';

export function HomeProjects() {
  return (
    <section className="space-y-5">
      <p className="text-sm tracking-tight text-text-muted/50 uppercase">
        Selected Projects
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl border border-border/50 bg-foreground font-sans transition-colors duration-200 hover:border-border/75"
          >
            <div className="flex items-center justify-center">
              <Image
                src={project.imageSrc}
                alt={project.name}
                width={1200}
                height={675}
                className="h-auto w-full rounded-t-2xl"
              />
            </div>
            <div className="space-y-5 p-5">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium text-text">
                  {project.name}
                </h1>
                <div className="flex gap-3">
                  {project.githubLink ? (
                    <a href={project.githubLink}>
                      <GitHubMark className="h-5 w-5 transition-colors duration-200 hover:text-text" />
                    </a>
                  ) : null}
                  <a href={project.projectLink}>
                    <Globe className="h-5 w-5 transition-colors duration-200 hover:text-text" />
                  </a>
                </div>
              </div>
              <p className="leading-6 text-pretty">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((technology) => (
                  <TechnologyIcon
                    key={technology.name}
                    technology={technology}
                    imageClassName="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
