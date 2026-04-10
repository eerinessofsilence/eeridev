import { Mail } from 'lucide-react';

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

export default function About() {
  return (
    <main className="container-small space-y-12 py-16 font-sans">
      <section className="space-y-2">
        <h1 className="text-4xl font-medium text-text">
          From browser automation to <br />
          <strong className="font-semibold text-text-muted">
            building full-stack products.
          </strong>
        </h1>
        <p className="leading-6 text-pretty">
          I&apos;m Aleksandr Hubanov, a developer whose path started with a
          practical automation task and gradually expanded into backend
          development, browser testing, server-side systems, and production web
          products. I care about useful software, clear architecture, and
          interfaces that feel solid in real use.
        </p>
      </section>
      <section className="space-y-6 leading-6">
        <h1 className="text-2xl font-medium text-text">How it started</h1>
        <p>
          My path into programming started with a very practical task: I needed
          to automate actions on a cryptocurrency platform. It was a simple
          browser scenario with a few repetitive steps, and I decided to
          optimize it with code. Once it worked, I became genuinely interested
          in going deeper into software development.
        </p>
        <p>
          At first, I learned the basics on my own through YouTube materials.
          Later, I decided to approach learning more systematically and took
          private in-depth courses in Python and Web3. That knowledge was enough
          to solve several more real tasks related to automation and crypto
          tools.
        </p>
        <p>
          Over time, I wanted to expand my technical stack, so I moved toward
          backend web development. I chose Django as my main framework and
          started building my first complete websites: working with backend
          logic, Jinja templates, HTML and CSS, CRUD flows, and internal
          service-oriented features.
        </p>
        <p>
          In parallel, I needed to build a software solution for testing and
          interacting with a cryptocurrency application. That led me to
          Playwright, which I used for browser automation and end-to-end
          scenarios.
        </p>
        <p>
          Later, I went deeper into Java while working on my own Minecraft
          server. I wrote several solid plugins for it that solved real gameplay
          and server-side problems. The project itself was eventually paused for
          external reasons, but that stage gave me a strong understanding of
          architecture, event-driven systems, and server-side logic.
        </p>
        <p>
          After that, I completed a Rust course. Out of all the languages I had
          studied, it felt the most interesting in terms of architecture,
          performance, and memory safety. I genuinely liked it, but at that
          point I decided not to go deeper because I did not see a fast enough
          career path for myself in the areas where Rust is most commonly used.
        </p>
        <p>
          The next step was TypeScript, and that is where I reached the level of
          full-stack web development. I started building production-ready
          websites with React and Tailwind CSS, shaping frontend architecture,
          thinking through UX, components, and the interaction between frontend
          and backend.
        </p>
        <p>
          That stage led directly to my first job offer for a Full Stack
          Developer role. It felt like the natural result of the entire journey:
          from a simple browser automation script to building complete web
          products.
        </p>
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-medium text-text">How I Work</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2 rounded-xl border border-border/25 bg-foreground p-5">
            <h1 className="text-lg text-text">Start with a real problem</h1>
            <p>
              I got into programming through automation, so I naturally focus on
              practical value, clear use cases, and software that solves a
              concrete task.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-border/25 bg-foreground p-5">
            <h1 className="text-lg text-text">Learn by building</h1>
            <p>
              Every step in my stack came through real implementation work:
              automation, backend systems, testing tools, plugins, and
              full-stack product development.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-border/25 bg-foreground p-5">
            <h1 className="text-lg text-text">Think across the stack</h1>
            <p>
              I am comfortable moving between backend logic, frontend
              architecture, browser automation, and the technical details that
              connect them into one product.
            </p>
          </div>
          <div className="space-y-2 rounded-xl border border-border/25 bg-foreground p-5">
            <h1 className="text-lg text-text">Build systems that hold up</h1>
            <p>
              Architecture, event-driven logic, testing, maintainability, and UX
              all matter because software has to keep working after the first
              release.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-medium text-text">Beyond the Code</h1>
        <div className="flex flex-col gap-6 rounded-2xl border border-border/25 bg-foreground p-5">
          <div className="space-y-2">
            <h1 className="inline-flex items-center gap-3 text-text">
              <span className="h-0.5 w-4 bg-border/50"> </span>What shaped me
            </h1>
            <p className="text-sm leading-6">
              Different technologies taught me different ways of thinking.
              Python gave me speed, Django taught structure, Playwright
              sharpened my approach to automation and testing, Java strengthened
              my understanding of server-side event systems, and Rust changed
              how I think about performance, architecture, and memory safety.
            </p>
          </div>
          <hr className="text-border/25" />
          <div className="space-y-2">
            <h1 className="inline-flex items-center gap-3 text-text">
              <span className="h-0.5 w-4 bg-border/50"> </span>What drives me
            </h1>
            <p className="text-sm leading-6">
              What interests me most now is building complete products where
              architecture, usability, and reliability matter equally. I enjoy
              turning an idea into working software and bringing it to a level
              that is ready for real users and real business needs.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-2xl font-medium text-text">Let&apos;s connect</h1>
        <p className="max-w-lg leading-6 text-pretty">
          Whether you have a product idea, want to collaborate, or just want to
          talk about web development, automation, or backend systems, I&apos;d
          be glad to hear from you.
        </p>
        <div className="flex gap-3">
          <a
            href="mailto:eeri.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-foreground px-4 py-2 transition-colors duration-200 hover:border-border hover:bg-secondary/50"
          >
            <Mail className="h-4 w-4 text-text-muted" />
            Email
          </a>
          <a
            href="https://x.com/eeridev"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-foreground px-4 py-2 transition-colors duration-200 hover:border-border hover:bg-secondary/50"
          >
            <XMark className="h-4 w-4 text-text-muted" />
            Twitter
          </a>
          <a
            href="https://github.com/eerinessofsilence"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-foreground px-4 py-2 transition-colors duration-200 hover:border-border hover:bg-secondary/50"
          >
            <GitHubMark className="h-4 w-4 text-text-muted" />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
