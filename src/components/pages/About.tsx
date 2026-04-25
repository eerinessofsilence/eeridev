import { Mail } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  );
}

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.2c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 5.8c1.02 0 2.05.14 3 .41 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-text">{children}</strong>;
}

const journeyParagraphs: ReactNode[] = [
  <>
    My path into programming started with a very practical task: I needed to{' '}
    <Highlight>automate actions on a cryptocurrency platform</Highlight>. It was
    a simple browser scenario with a few repetitive steps, and I decided to
    optimize it with code. Once it worked, I became genuinely interested in
    going deeper into <Highlight>software development</Highlight>.
  </>,
  <>
    At first, I learned the basics on my own through YouTube materials. Later, I
    decided to approach learning more systematically and took private in-depth
    courses in <Highlight>Python and Web3</Highlight>. That knowledge was enough
    to solve several more real tasks related to{' '}
    <Highlight>automation and crypto tools</Highlight>.
  </>,
  <>
    Over time, I wanted to expand my technical stack, so I moved toward{' '}
    <Highlight>backend web development</Highlight>. I chose{' '}
    <Highlight>Django</Highlight> as my main framework and started building my
    first complete websites: working with <Highlight>backend logic</Highlight>,{' '}
    <Highlight>Jinja templates</Highlight>, <Highlight>HTML and CSS</Highlight>,{' '}
    <Highlight>CRUD flows</Highlight>, and internal service-oriented features.
  </>,
  <>
    In parallel, I needed to build a software solution for testing and
    interacting with a cryptocurrency application. That led me to{' '}
    <Highlight>Playwright</Highlight>, which I used for{' '}
    <Highlight>browser automation and end-to-end scenarios</Highlight>.
  </>,
  <>
    Later, I went deeper into <Highlight>Java</Highlight> while working on my
    own <Highlight>Minecraft server</Highlight>. I wrote several solid plugins
    for it that solved real gameplay and server-side problems. The project
    itself was eventually paused for external reasons, but that stage gave me a
    strong understanding of{' '}
    <Highlight>
      architecture, event-driven systems, and server-side logic
    </Highlight>
    .
  </>,
  <>
    After that, I completed a <Highlight>Rust course</Highlight>. Out of all the
    languages I had studied, it felt the most interesting in terms of{' '}
    <Highlight>architecture, performance, and memory safety</Highlight>. I
    genuinely liked it, but at that point I decided not to go deeper because I
    did not see a fast enough career path for myself in the areas where Rust is
    most commonly used.
  </>,
  <>
    The next step was <Highlight>TypeScript</Highlight>, and that is where I
    reached the level of <Highlight>full-stack web development</Highlight>. I
    started building production-ready websites with{' '}
    <Highlight>React and Tailwind CSS</Highlight>, shaping frontend
    architecture, thinking through UX, components, and the interaction between
    frontend and backend.
  </>,
  <>
    That stage led directly to my first job offer for a{' '}
    <Highlight>Full Stack Developer role</Highlight>. It felt like the natural
    result of the entire journey: from a simple browser automation script to
    building <Highlight>complete web products</Highlight>.
  </>,
];

const buildPrinciples = [
  {
    title: 'Real Problems First',
    description:
      'I got into programming through automation, so I naturally focus on practical value, clear use cases, and software that solves a concrete task.',
  },
  {
    title: 'Learning Through Building',
    description:
      'Every step in my stack came through real implementation work: automation, backend systems, testing tools, plugins, and full-stack product development.',
  },
  {
    title: 'End-to-End Thinking',
    description:
      'I am comfortable moving between backend logic, frontend architecture, browser automation, and the technical details that connect them into one product.',
  },
  {
    title: 'Built for the Long Run',
    description:
      'Architecture, event-driven logic, testing, maintainability, and UX all matter because software has to keep working after the first release.',
  },
];

const craftNotes = [
  {
    title: 'What Shaped My Thinking',
    description:
      'Different technologies taught me different ways of thinking. Python gave me speed, Django taught structure, Playwright sharpened my approach to automation and testing, Java strengthened my understanding of server-side event systems, and Rust changed how I think about performance, architecture, and memory safety.',
  },
  {
    title: 'What Keeps Me Building',
    description:
      'What interests me most now is building complete products where architecture, usability, and reliability matter equally. I enjoy turning an idea into working software and bringing it to a level that is ready for real users and real business needs.',
  },
];

type ContactLink = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  radiusClassName: string;
};

const contactLinks: ContactLink[] = [
  {
    href: 'mailto:eeri.dev@gmail.com',
    label: 'Email',
    Icon: Mail,
    radiusClassName: 'rounded-lg',
  },
  {
    href: 'https://x.com/eeridev',
    label: 'Twitter',
    Icon: XMark,
    radiusClassName: 'rounded-xl',
  },
  {
    href: 'https://github.com/eerinessofsilence',
    label: 'GitHub',
    Icon: GitHubMark,
    radiusClassName: 'rounded-xl',
  },
];

export default function About() {
  return (
    <main className="space-y-12 py-16 font-sans">
      <section className="space-y-2">
        <h1 className="text-3xl font-medium text-text md:text-4xl">
          From browser automation to <br />
          <strong className="font-semibold text-text-muted">
            building full-stack products.
          </strong>
        </h1>
        <p className="md:text-md text-sm leading-6 text-pretty">
          I&apos;m Aleksandr Hubanov, a developer whose path started with a
          practical automation task and gradually expanded into backend
          development, browser testing, server-side systems, and production web
          products. I care about useful software, clear architecture, and
          interfaces that feel solid in real use.
        </p>
      </section>
      <section className="space-y-6 leading-6">
        <h1 className="text-xl font-medium text-text md:text-2xl">
          Where It All Began
        </h1>
        {journeyParagraphs.map((paragraph, index) => (
          <p className="md:text-md text-sm" key={index}>
            {paragraph}
          </p>
        ))}
      </section>
      <section className="space-y-6">
        <h1 className="text-xl font-medium text-text md:text-2xl">
          The Way I Build
        </h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
          {buildPrinciples.map(({ title, description }) => (
            <div
              className="space-y-2 rounded-xl border border-border/25 bg-foreground p-5"
              key={title}
            >
              <h1 className="md:text-md text-sm text-text">{title}</h1>
              <p className="text-xs md:text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-xl font-medium text-text md:text-2xl">
          Behind the Craft
        </h1>
        <div className="flex flex-col gap-3 rounded-2xl border border-border/25 bg-foreground p-4 md:gap-6 md:p-5">
          {craftNotes.map(({ title, description }, index) => (
            <div className="contents" key={title}>
              {index > 0 && <hr className="text-border/25" />}
              <div className="space-y-2">
                <h1 className="md:text-md inline-flex items-center gap-3 text-sm text-text">
                  <span className="h-0.5 w-4 bg-border/50"> </span>
                  {title}
                </h1>
                <p className="text-xs leading-5 md:text-sm md:leading-6">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-xl font-medium text-text md:text-2xl">
          Start the Conversation
        </h1>
        <p className="md:text-md max-w-lg text-sm leading-5 text-pretty md:leading-6">
          Whether you have a product idea, want to collaborate, or just want to
          talk about web development, automation, or backend systems, I&apos;d
          be glad to hear from you.
        </p>
        <div className="flex gap-3">
          {contactLinks.map(({ href, label, Icon, radiusClassName }) => (
            <a
              className={`inline-flex items-center gap-2 rounded-lg border border-border/50 bg-foreground px-3 py-1 transition-colors duration-200 hover:border-border hover:bg-secondary/50 md:rounded-xl md:px-4 md:py-2`}
              href={href}
              key={href}
            >
              <Icon className="h-4 w-4 text-text-muted" />
              {label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
