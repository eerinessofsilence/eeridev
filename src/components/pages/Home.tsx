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

interface Fact {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const primaryFacts: Fact[] = [
  {
    icon: Code2,
    label: 'Role',
    value: 'Full-Stack Developer',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bucharest, Romania, Europe',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'eeri.dev@gmail.com',
    href: 'mailto:eeri.dev@gmail.com',
  },
  {
    icon: Clock3,
    label: 'Timezone',
    value: 'UTC+2 / flexible overlap',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'eeri.dev',
    href: 'https://eeri.dev',
  },
  {
    icon: Users,
    label: 'Focus',
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

const technologies = [
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

const featuredProjects = [
  {
    imageSrc: '/ai-def-screen.jpg',
    name: 'AI-DEF',
    projectLink: 'https://www.ai-def.com',
    description:
      'AI-DEF is an informational website presenting the company’s military and defense products, advanced tactical systems, and AI-powered security technologies.',
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
      'Tactica is a revenue workspace prototype. The project currently combines a React marketing site and demo shell with a minimal Django backend for session-based authentication.',
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
      '4Seasons is an internet service provider website offering high-speed broadband, reliable connectivity, and modern network solutions for homes and businesses.',
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
    logo: '/',
    position: 'Full Stack Developer',
    name: 'IVE Studio',
    date: 'Jan 2025 - Present',
    description:
      'Developing modern full-stack web applications with a focus on scalable architecture, clean UI, and performance optimization.',
    bullets: [
      'Built responsive web platforms using Next.js, TypeScript, and modern backend services',
      'Improved application speed, maintainability, and user experience through optimized architecture',
    ],
  },
  {
    logo: '/',
    position: 'Full Stack Developer',
    name: 'AI-DEF',
    date: 'Apr 2023 - Dec 2024',
    description:
      'Contributed to the development of corporate and product-focused web platforms for defense and technology solutions.',
    bullets: [
      'Developed scalable frontend and backend features for product showcase and information systems',
      'Enhanced performance, UI consistency, and maintainability across multiple internal platforms',
    ],
  },
];

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
                  Available for work
                </span>
              </div>

              <p className="text-xl text-text-muted/75">Developer</p>
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
            I build clean, interactive web products with{' '}
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
            . The focus is on sharp UI, clear structure, and interfaces that
            stay readable as the product grows.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="mailto:eeri.dev@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border/50 bg-foreground px-4 tracking-tight transition-colors duration-200 hover:bg-secondary/50"
            >
              <Mail className="h-4 w-4" />
              Contact
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
            Tech Stack
          </p>
          <div className="flex gap-4">
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
            Featured Projects
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
                      <a href={project.githubLink}>
                        <GitHubMark className="h-5 w-5 transition-colors duration-200 hover:text-text" />
                      </a>
                      <a href={project.projectLink}>
                        <Globe className="h-5 w-5 transition-colors duration-200 hover:text-text" />
                      </a>
                    </div>
                  </div>
                  <p className="leading-6 text-pretty">{project.description}</p>
                  <div className="flex gap-2">
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
                          className="h-9 w-auto max-w-9 transition-transform duration-200 group-hover:scale-110"
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
            Experience
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
            Let's work together
          </p>
          <div className="grid grid-cols-2 gap-6 font-sans">
            <div className="flex flex-col justify-between space-y-3 rounded-xl border border-border/50 bg-foreground p-5">
              <div className="space-y-2">
                <h1 className="text-xl font-medium text-text">Get in Touch</h1>
                <p>
                  Choose your preferred method to connect and let's discuss your
                  project
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:eeri.dev@gmail.com"
                  className="flex items-center justify-between rounded-xl border border-border/75 bg-foreground p-3 transition-colors duration-200 hover:border-border hover:bg-secondary/25"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-text-muted/75" />
                    <div>
                      <h1>eeri.dev@gmail.com</h1>
                      <p className="text-xs text-text-muted/75">
                        Quick inquiries & questions
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
                    </svg>{' '}
                    <div>
                      <h1>Connect on X</h1>
                      <p className="text-xs text-text-muted/75">
                        Follow for updates & insights
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-muted/75" />
                </a>
                <div className="border-t border-border/25 bg-foreground pt-3">
                  <p className="text-xs text-text-muted/50">
                    Response within 24 hours • Available for hire
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-border/50 bg-foreground p-5">
              <div className="space-y-2">
                <h1 className="text-xl font-medium text-text">
                  Send a Message
                </h1>
                <p>
                  Prefer to write? Fill out the form and I'll get back to you
                  within 24 hours
                </p>
              </div>
              <form className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2 text-text transition-colors duration-200 outline-none placeholder:text-text-muted/50 focus:border-border focus:bg-secondary/10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2 text-text transition-colors duration-200 outline-none placeholder:text-text-muted/50 focus:border-border focus:bg-secondary/10"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  rows={6}
                  className="h-30 w-full resize-none rounded-xl border border-border/50 bg-background px-4 py-2 text-lg text-text transition-colors duration-200 outline-none placeholder:text-text-muted/35 focus:border-border focus:bg-secondary/15"
                />
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-border/50 bg-secondary/15 px-6 py-2 text-lg font-medium text-text-muted transition-colors duration-200 hover:border-border hover:bg-secondary/25 hover:text-text"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
