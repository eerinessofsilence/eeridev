import Image from 'next/image';
import type { ComponentType } from 'react';
import { Clock3, Code2, Globe, Mail, MapPin, UserRound } from 'lucide-react';

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
    label: 'Base',
    value: 'Remote / Europe',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'eeri.dev@gmail.com',
    href: 'mailto:eeri.dev@gmail.com',
  },
] as const;

const secondaryFacts: Fact[] = [
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
    icon: UserRound,
    label: 'Focus',
    value: 'Develop systems',
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
      <Image src={src} alt={name} width={16} height={16} className="h-4 w-4" />
      {name}
    </span>
  );
}

const technologies = [
  'python',
  'django',
  'html',
  'css',
  'typescript',
  'react',
  'tailwindcss',
  'nextjs',
  'docker',
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
                <h1 className="text-3xl font-medium tracking-tight text-text">
                  Aleksandr Hubanov
                </h1>
                <span className="inline-flex h-6 w-fit items-center gap-3 rounded-full border border-border/25 bg-foreground px-3 text-sm text-text-muted">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available for work
                </span>
              </div>

              <p className="text-xl text-text-muted/75">Full-Stack developer</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-2">
              {primaryFacts.map((fact) => {
                const Icon = fact.icon;
                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-white/4 text-text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-lg tracking-tight wrap-break-word">
                        {fact.value}
                      </p>
                    </div>
                  </>
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
            <div className="space-y-2">
              {secondaryFacts.map((fact) => {
                const Icon = fact.icon;
                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-white/4 text-text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-lg tracking-tight wrap-break-word">
                        {fact.value}
                      </p>
                    </div>
                  </>
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
        </div>

        <div className="tracking-tight text-text-muted">
          <p>
            I build clean, interactive web products with{' '}
            <StackPill src="/typescript.svg" name="TypeScript" tone="blue" />,{' '}
            <StackPill src="/react.svg" name="React" tone="cyan" />,{' '}
            <StackPill src="/nextjs.svg" name="Next.js" tone="neutral" />, and{' '}
            <StackPill src="/tailwindcss.svg" name="Tailwind CSS" tone="teal" />
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
      </div>
    </section>
  );
}
