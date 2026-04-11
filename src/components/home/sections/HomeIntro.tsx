import Image from 'next/image';
import type { ComponentType } from 'react';
import { Clock3, Code2, Globe, Mail, MapPin, Users } from 'lucide-react';
import { ContributionMapClient } from '@/components/home/ContributionMapClient';
import { GitHubMark } from '@/components/home/GitHubMark';

interface Fact {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

interface StackPillProps {
  src: string;
  name: string;
  tone: 'blue' | 'cyan' | 'neutral' | 'teal';
}

const primaryFacts: readonly Fact[] = [
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

function StackPill({ src, name, tone }: StackPillProps) {
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
      className={`inline-flex items-center gap-2 rounded-md border border-dashed px-2 py-1 text-sm tracking-tight ${toneClass}`}
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

export function HomeIntro() {
  return (
    <>
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

          <div className="space-y-2 md:space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="font-sans text-2xl font-semibold tracking-tight text-text md:text-3xl">
                Aleksandr Hubanov
              </h1>
              <span className="inline-flex h-6 w-fit items-center gap-3 rounded-full border border-border/25 bg-foreground px-3 text-sm text-text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to new projects
              </span>
            </div>

            <p className="text-lg text-text-muted/75 md:text-xl">
              Full-stack engineer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {primaryFacts.map((fact) => {
            const Icon = fact.icon;
            const content = (
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border/25 bg-secondary/50 text-text-muted">
                  <Icon className="h-3 w-3" />
                </span>
                <p className="tracking-tight wrap-break-word max-md:text-sm">
                  {fact.value}
                </p>
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

      <div className="leading-8 tracking-tight text-text-muted">
        <p>
          I design and ship polished web products with{' '}
          <StackPill
            src="/technologies/typescript.svg"
            name="TypeScript"
            tone="blue"
          />
          , <StackPill src="/technologies/react.svg" name="React" tone="cyan" />
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
          . My work stays centered on fast interfaces, clear product structure,
          and codebases that are still comfortable to extend six months later.
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
    </>
  );
}
