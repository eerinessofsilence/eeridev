import Image from 'next/image';
import type { ComponentType } from 'react';
import {
  ArrowRight,
  Clock3,
  Code2,
  Globe,
  Mail,
  MapPin,
  ArrowUpRight,
  Users,
} from 'lucide-react';
import { ContributionMapClient } from '@/components/pages/ContributionMapClient';
import { ProjectBriefPreview } from '@/components/pages/ProjectBriefPreview';

interface Fact {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const primaryFacts: Fact[] = [
  {
    icon: Code2,
    label: 'Specialty',
    value: 'Full-Stack Engineering',
  },
  {
    icon: MapPin,
    label: 'Base',
    value: 'Bucharest, Romania',
  },
  {
    icon: Mail,
    label: 'Contact',
    value: 'eeri.dev@gmail.com',
    href: 'mailto:eeri.dev@gmail.com',
  },
  {
    icon: Clock3,
    label: 'Hours',
    value: 'UTC+2 with flexible overlap',
  },
  {
    icon: Globe,
    label: 'Site',
    value: 'eeri.dev',
    href: 'https://eeri.dev',
  },
  {
    icon: Users,
    label: 'Pronouns',
    value: 'he/him',
  },
] as const;

const socialLinks = [
  {
    href: 'https://github.com/eerinessofsilence',
    label: 'GitHub',
    icon: GitHubMark,
  },
  {
    href: 'mailto:eeri.dev@gmail.com',
    label: 'Email',
    icon: Mail,
  },
] as const;

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.2c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 5.8c1.02 0 2.05.14 3 .41 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function StackPill({
  src,
  name,
  tone,
}: {
  src: string;
  name: string;
  tone: string;
}) {
  const toneClass =
    tone === 'blue'
      ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
      : tone === 'cyan'
        ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300'
        : tone === 'teal'
          ? 'border-teal-500/30 bg-teal-500/10 text-teal-300'
          : 'border-white/15 bg-white/[0.05] text-white/90';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-dashed px-2 py-1 tracking-tight ${toneClass}`}
    >
      <Image
        src={src}
        alt={name}
        width={16}
        height={16}
        className="h-4 w-auto shrink-0"
      />
      {name}
    </span>
  );
}

interface Technology {
  name: string;
  src: string;
}

const technologies: Technology[] = [
  { name: 'TypeScript', src: '/technologies/typescript.svg' },
  { name: 'JavaScript', src: '/technologies/javascript.svg' },
  { name: 'React', src: '/technologies/react.svg' },
  { name: 'Tailwind CSS', src: '/technologies/tailwindcss.svg' },
  { name: 'Vite', src: '/technologies/vite.svg' },
  { name: 'Next.js', src: '/technologies/nextjs.svg' },
  { name: 'HTML', src: '/technologies/html.svg' },
  { name: 'CSS', src: '/technologies/css.svg' },
  { name: 'Python', src: '/technologies/python.svg' },
  { name: 'Django', src: '/technologies/django.svg' },
  { name: 'PostgreSQL', src: '/technologies/postgresql.svg' },
  { name: 'Docker', src: '/technologies/docker.svg' },
  { name: 'Git', src: '/technologies/git.svg' },
  { name: 'GitHub', src: '/technologies/github.svg' },
  { name: 'Rust', src: '/technologies/rust.svg' },
  { name: 'Java', src: '/technologies/java.svg' },
];

interface FeaturedProject {
  imageSrc: string;
  name: string;
  githubLink?: string;
  projectLink: string;
  description: string;
  techStack: Technology[];
}

const featuredProjects: FeaturedProject[] = [
  {
    imageSrc: '/ai-def-screen.jpg',
    name: 'AI-DEF',
    projectLink: 'https://www.ai-def.com',
    description:
      'A corporate site that presents defense products, tactical systems, and AI-driven security capabilities in a clearer product narrative.',
    techStack: [
      technologies[0],
      technologies[2],
      technologies[3],
      technologies[4],
      technologies[6],
      technologies[7],
      technologies[8],
      technologies[9],
      technologies[10],
    ],
  },
  {
    imageSrc: '/tactica-screen.jpg',
    name: 'Tactica',
    githubLink: 'https://github.com/eerinessofsilence/tactica',
    projectLink: 'https://tactica-six.vercel.app',
    description:
      'A revenue operations concept that pairs a React-based public experience with a lightweight Django backend for authenticated flows.',
    techStack: [
      technologies[0],
      technologies[2],
      technologies[3],
      technologies[4],
      technologies[6],
      technologies[7],
      technologies[8],
      technologies[9],
      technologies[10],
    ],
  },
  {
    imageSrc: '/4seasons-screen.jpg',
    name: '4Seasons',
    githubLink: 'https://github.com/eerinessofsilence/4seasons',
    projectLink: 'https://4seasons-one.vercel.app',
    description:
      'A provider website built to showcase broadband services, connection plans, and reliable network support for homes and businesses.',
    techStack: [
      technologies[0],
      technologies[2],
      technologies[3],
      technologies[4],
      technologies[6],
      technologies[7],
    ],
  },
];

const experienceJobs = [
  {
    logo: '/ive-studio-logo.png',
    position: 'Full Stack Developer',
    name: 'IVE Studio',
    date: 'Jan 2025 - Present',
    description:
      'Building end-to-end web products with attention to maintainable architecture, interface quality, and measurable performance.',
    bullets: [
      'Delivered responsive applications with Next.js, Vite, TypeScript, and backend integrations shaped around product needs',
      'Refined architecture and frontend patterns to improve load time, code clarity, and long-term maintainability',
    ],
  },
  {
    logo: '/ai-def-logo.png',
    position: 'Full Stack Developer',
    name: 'AI-DEF',
    date: 'Apr 2023 - Dec 2024',
    description:
      'Worked on company and product websites focused on defense technology and supporting internal information platforms.',
    bullets: [
      'Implemented frontend and backend features for product pages, content structure, and supporting information systems',
      'Standardized UI patterns and performance improvements across several internal and public-facing interfaces',
    ],
  },
];

const projectBriefs = [
  {
    project: 'new product site, redesign, or internal dashboard',
    goals: ['cleaner UX', 'stronger frontend', 'faster shipping'],
    timeline: 'urgent launch support or planned iteration',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'backend support'],
  },
  {
    project: 'landing page refresh or conversion-focused marketing site',
    goals: ['clearer messaging', 'better performance', 'higher conversion'],
    timeline: 'launch in 2-4 weeks',
    stack: ['Next.js', 'CMS integration', 'analytics', 'SEO', 'motion polish'],
  },
  {
    project: 'internal dashboard, admin panel, or ops workspace',
    goals: ['simpler flows', 'reliable data views', 'less manual work'],
    timeline: 'phased rollout with quick wins',
    stack: ['React', 'TypeScript', 'API integration', 'auth', 'tables/charts'],
  },
] as const;

export default function Home() {
  return (
    <section className="container-small relative w-full pb-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-4xl font-semibold text-text shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
              <video
                src="/avatar.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full rounded-2xl object-cover"
                aria-hidden="true"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="flex items-center gap-3">
                <h1 className="font-sans text-3xl font-semibold tracking-tight text-text">
                  Aleksandr Hubanov
                </h1>
                <span className="inline-flex h-6 w-fit items-center gap-3 rounded-full border border-border/25 bg-foreground px-3 text-sm text-text-muted">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Open to new projects
                </span>
              </div>

              <p className="text-xl text-text-muted/75">Full-stack engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {primaryFacts.map((fact) => {
              const Icon = fact.icon;
              const content = (
                <div className="flex gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border/25 bg-secondary/50 text-text-muted">
                    <Icon className="h-3 w-3" />
                  </span>
                  <p className="tracking-tight wrap-break-word">{fact.value}</p>
                </div>
              );

              if (fact.href) {
                return (
                  <a
                    key={fact.label}
                    href={fact.href}
                    className="group flex items-center gap-4 rounded-3xl transition-colors hover:text-text"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={fact.label} className="flex items-center gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="tracking-tight text-text-muted">
          <p>
            I design and ship polished web products with{' '}
            <StackPill
              src="/technologies/typescript.svg"
              name="TypeScript"
              tone="blue"
            />
            ,{' '}
            <StackPill src="/technologies/react.svg" name="React" tone="cyan" />
            ,{' '}
            <StackPill
              src="/technologies/nextjs.svg"
              name="Next.js"
              tone="neutral"
            />
            , and{' '}
            <StackPill
              src="/technologies/tailwindcss.svg"
              name="Tailwind CSS"
              tone="teal"
            />
            . My work stays centered on fast interfaces, clear product
            structure, and codebases that are still comfortable to extend six
            months later.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="mailto:eeri.dev@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border/50 bg-foreground px-4 tracking-tight transition-colors duration-200 hover:bg-secondary/50"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </div>

          <span className="hidden h-6 w-px bg-border/50 md:block" />

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground text-text transition-colors hover:bg-secondary/50"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 text-text-muted" />
                </a>
              );
            })}
          </div>
        </div>

        <ContributionMapClient />

        <section className="space-y-5">
          <p className="text-sm tracking-tight text-text-muted/50 uppercase">
            Toolkit
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="group relative flex items-center justify-center"
              >
                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 rounded-lg border border-border/25 bg-foreground px-3 py-1 text-xs tracking-tight text-nowrap text-text opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {technology.name}
                  <span
                    aria-hidden="true"
                    className="absolute top-full left-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xs border-r border-b border-border/25 bg-foreground"
                  />
                </span>
                <Image
                  className="h-9 w-auto max-w-9 transition-transform duration-200 group-hover:scale-110"
                  src={technology.src}
                  alt={technology.name}
                  width={36}
                  height={36}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-5">
          <p className="text-sm tracking-tight text-text-muted/50 uppercase">
            Selected Projects
          </p>
          <div className="grid grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-border/50 bg-foreground font-sans transition-colors duration-200 hover:border-border/75"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={project.imageSrc}
                    className="rounded-t-2xl"
                    alt={project.name}
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
                    {project.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="group relative flex items-center justify-center"
                      >
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 rounded-lg border border-border/25 bg-foreground px-3 py-1 text-xs tracking-tight text-nowrap text-text opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                          {tech.name}
                          <span
                            aria-hidden="true"
                            className="absolute top-full left-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xs border-r border-b border-border/25 bg-foreground"
                          />
                        </span>
                        <Image
                          className="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
                          src={tech.src}
                          alt={tech.name}
                          width={24}
                          height={24}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
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
                      className="h-16 w-16 rounded-2xl"
                      alt={job.name}
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
        <section className="space-y-5">
          <p className="text-sm tracking-tight text-text-muted/50 uppercase">
            Start a Project
          </p>
          <div className="flex flex-col justify-between space-y-3 rounded-xl border border-border/50 bg-foreground p-5 font-sans">
            <ProjectBriefPreview projectBriefs={projectBriefs} />
            <div className="space-y-3">
              <div className="space-y-2">
                <h1 className="text-xl font-medium text-text">Reach Out</h1>
                <p>
                  Use whichever channel is easiest and send a few details about
                  what you need.
                </p>
              </div>
              <a
                href="mailto:eeri.dev@gmail.com"
                className="flex items-center justify-between rounded-xl border border-border/75 bg-foreground p-3 transition-colors duration-200 hover:border-border hover:bg-secondary/25"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-text-muted/75" />
                  <div>
                    <h1>eeri.dev@gmail.com</h1>
                    <p className="text-xs text-text-muted/75">
                      Project inquiries and short questions
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-text-muted/75" />
              </a>
              <a
                href="https://x.com/eeridev"
                className="flex items-center justify-between rounded-xl border border-border/75 bg-foreground p-3 transition-colors duration-200 hover:border-border hover:bg-secondary/25"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-4.5 w-4.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  <div>
                    <h1>Say hello on X</h1>
                    <p className="text-xs text-text-muted/75">
                      Updates, notes, and work in progress
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-text-muted/75" />
              </a>
              <div className="border-t border-border/25 bg-foreground pt-3">
                <p className="text-xs text-text-muted/50">
                  Usually replies within one business day • Open to freelance
                  and team roles
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
