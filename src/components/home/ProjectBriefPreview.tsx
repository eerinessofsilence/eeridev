'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';

interface ProjectBrief {
  project: string;
  goals: readonly string[];
  timeline: string;
  stack: readonly string[];
}

interface ProjectBriefPreviewProps {
  projectBriefs?: readonly ProjectBrief[];
  projectBrief?: ProjectBrief;
}

interface PreviewSegment {
  text: string;
  className?: string;
}

interface PreviewLine {
  key: string;
  indent: 0 | 1 | 2;
  tone?: 'muted';
  segments: PreviewSegment[];
}

const INITIAL_DELAY_MS = 180;
const LINE_PAUSE_MS = 110;
const HOLD_DURATION_MS = 1100;
const BRIEF_SWAP_DELAY_MS = 120;

const DEFAULT_PROJECT_BRIEFS: readonly ProjectBrief[] = [
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

function getTypingDelay(character: string) {
  if (character === ' ') {
    return 14;
  }

  if (character === '"' || character === "'") {
    return 18;
  }

  if (',:]}'.includes(character)) {
    return 26;
  }

  return 20;
}

function getDeletingDelay(character: string) {
  if (character === ' ') {
    return 8;
  }

  if (character === '"' || character === "'") {
    return 10;
  }

  if (',:]}'.includes(character)) {
    return 12;
  }

  return 9;
}

function getLineText(segments: PreviewSegment[]) {
  return segments.map((segment) => segment.text).join('');
}

function buildPreviewLines(projectBrief: ProjectBrief): PreviewLine[] {
  return [
    {
      key: 'open',
      indent: 0,
      tone: 'muted',
      segments: [{ text: '{' }],
    },
    {
      key: 'project',
      indent: 1,
      segments: [
        { text: '"project"', className: 'text-sky-300' },
        { text: ': ', className: 'text-text-muted/35' },
        {
          text: `"${projectBrief.project}"`,
          className: 'text-emerald-300',
        },
        { text: ',', className: 'text-text-muted/35' },
      ],
    },
    {
      key: 'goals-open',
      indent: 1,
      segments: [
        { text: '"goals"', className: 'text-sky-300' },
        { text: ': [', className: 'text-text-muted/35' },
      ],
    },
    ...projectBrief.goals.map((goal, index) => ({
      key: `goal-${goal}`,
      indent: 2 as const,
      segments: [
        { text: `"${goal}"`, className: 'text-emerald-300' },
        ...(index < projectBrief.goals.length - 1
          ? [{ text: ',', className: 'text-text-muted/35' }]
          : []),
      ],
    })),
    {
      key: 'goals-close',
      indent: 1,
      tone: 'muted',
      segments: [{ text: '],' }],
    },
    {
      key: 'timeline',
      indent: 1,
      segments: [
        { text: '"timeline"', className: 'text-sky-300' },
        { text: ': ', className: 'text-text-muted/35' },
        {
          text: `"${projectBrief.timeline}"`,
          className: 'text-emerald-300',
        },
        { text: ',', className: 'text-text-muted/35' },
      ],
    },
    {
      key: 'stack-open',
      indent: 1,
      segments: [
        { text: '"stack"', className: 'text-sky-300' },
        { text: ': [', className: 'text-text-muted/35' },
      ],
    },
    ...projectBrief.stack.map((item, index) => ({
      key: `stack-${item}`,
      indent: 2 as const,
      segments: [
        { text: `"${item}"`, className: 'text-emerald-300' },
        ...(index < projectBrief.stack.length - 1
          ? [{ text: ',', className: 'text-text-muted/35' }]
          : []),
      ],
    })),
    {
      key: 'stack-close',
      indent: 1,
      tone: 'muted',
      segments: [{ text: ']' }],
    },
    {
      key: 'close',
      indent: 0,
      tone: 'muted',
      segments: [{ text: '}' }],
    },
  ];
}

function renderTypedSegments(segments: PreviewSegment[], visibleChars: number) {
  let remainingChars = visibleChars;

  return segments.map((segment, index) => {
    if (remainingChars <= 0) {
      return null;
    }

    const visibleText = segment.text.slice(0, remainingChars);

    remainingChars -= visibleText.length;

    if (visibleText.length === 0) {
      return null;
    }

    return (
      <span
        key={`${index}-${visibleText.length}`}
        className={segment.className}
      >
        {visibleText}
      </span>
    );
  });
}

export function ProjectBriefPreview({
  projectBriefs,
  projectBrief,
}: ProjectBriefPreviewProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentBriefIndex, setCurrentBriefIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>(
    'typing',
  );
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [activeCharCount, setActiveCharCount] = useState(0);
  const hasMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const resolvedBriefs = useMemo(() => {
    if (projectBriefs && projectBriefs.length > 0) {
      return projectBriefs;
    }

    if (projectBrief) {
      return [projectBrief] as const;
    }

    return DEFAULT_PROJECT_BRIEFS;
  }, [projectBrief, projectBriefs]);

  const currentBrief = resolvedBriefs[currentBriefIndex] ?? resolvedBriefs[0];
  const hasStarted = prefersReducedMotion || isVisible;

  const lines = useMemo<PreviewLine[]>(
    () => (currentBrief ? buildPreviewLines(currentBrief) : []),
    [currentBrief],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const element = panelRef.current;

    if (!hasMounted || prefersReducedMotion || !element || isVisible) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    let observer: IntersectionObserver | null = null;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer?.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, [hasMounted, isVisible, prefersReducedMotion]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion || lines.length === 0) {
      return;
    }

    const currentLine = lines[activeLineIndex];

    if (!currentLine) {
      return;
    }

    const currentText = getLineText(currentLine.segments);
    const nextCharacter = currentText[activeCharCount] ?? '';
    const previousCharacter = currentText[activeCharCount - 1] ?? '';

    const timeoutId = window.setTimeout(
      () => {
        if (phase === 'holding') {
          setPhase('deleting');
          return;
        }

        if (phase === 'typing') {
          if (activeCharCount < currentText.length) {
            setActiveCharCount((previousCharCount) => previousCharCount + 1);
            return;
          }

          if (activeLineIndex < lines.length - 1) {
            setActiveLineIndex((previousLineIndex) => previousLineIndex + 1);
            setActiveCharCount(0);
            return;
          }

          setPhase('holding');
          return;
        }

        if (activeCharCount > 0) {
          setActiveCharCount((previousCharCount) => previousCharCount - 1);
          return;
        }

        if (activeLineIndex > 0) {
          const previousLine = lines[activeLineIndex - 1];

          setActiveLineIndex((previousLineIndex) => previousLineIndex - 1);
          setActiveCharCount(getLineText(previousLine?.segments ?? []).length);
          return;
        }

        setCurrentBriefIndex(
          (previousBriefIndex) =>
            (previousBriefIndex + 1) % resolvedBriefs.length,
        );
        setPhase('typing');
        setActiveLineIndex(0);
        setActiveCharCount(0);
      },
      (() => {
        if (phase === 'holding') {
          return HOLD_DURATION_MS;
        }

        if (phase === 'typing') {
          if (activeCharCount < currentText.length) {
            return activeLineIndex === 0 && activeCharCount === 0
              ? INITIAL_DELAY_MS
              : getTypingDelay(nextCharacter);
          }

          if (activeLineIndex < lines.length - 1) {
            return LINE_PAUSE_MS;
          }

          return HOLD_DURATION_MS;
        }

        if (activeCharCount > 0) {
          return getDeletingDelay(previousCharacter);
        }

        if (activeLineIndex > 0) {
          return 28;
        }

        return BRIEF_SWAP_DELAY_MS;
      })(),
    );

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    activeCharCount,
    activeLineIndex,
    hasStarted,
    lines,
    phase,
    prefersReducedMotion,
    resolvedBriefs.length,
  ]);

  const getVisibleChars = (line: PreviewLine, lineIndex: number) => {
    const fullLength = getLineText(line.segments).length;

    if (!hasMounted || prefersReducedMotion) {
      return fullLength;
    }

    if (!hasStarted) {
      return 0;
    }

    if (lineIndex < activeLineIndex) {
      return fullLength;
    }

    if (lineIndex === activeLineIndex) {
      return activeCharCount;
    }

    return 0;
  };

  if (!currentBrief) {
    return null;
  }

  return (
    <div
      ref={panelRef}
      className="project-brief-panel group relative overflow-hidden rounded-xl border border-border/25 bg-background"
    >
      <div className="border-b border-border/15 bg-foreground px-4 py-3">
        <div className="font-mono text-xs tracking-wide text-text-muted/75">
          project-brief.json
        </div>
      </div>

      <div className="overflow-x-auto px-4 py-4">
        <div className="min-w-[18rem] font-mono text-sm leading-7 tracking-tight">
          {lines.map((line, index) => {
            const visibleChars = getVisibleChars(line, index);
            const isActiveLine =
              hasStarted &&
              !prefersReducedMotion &&
              index === activeLineIndex &&
              phase !== 'holding';

            return (
              <div
                key={line.key}
                className="brief-line flex min-h-7 items-center gap-4"
              >
                <span className="w-4 shrink-0 pt-0.5 text-right text-[10px] leading-7 text-text-muted/20 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className={`flex-1 whitespace-nowrap ${
                    line.indent === 0 ? '' : line.indent === 1 ? 'pl-4' : 'pl-8'
                  } ${line.tone === 'muted' ? 'text-text-muted/35' : ''}`}
                >
                  {renderTypedSegments(line.segments, visibleChars)}
                  {isActiveLine ? (
                    <span
                      aria-hidden="true"
                      className="brief-cursor ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-text-muted/50 align-middle"
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
