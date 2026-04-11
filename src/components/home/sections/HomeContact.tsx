import { ArrowUpRight, Mail } from 'lucide-react';
import { ProjectBriefPreview } from '@/components/home/ProjectBriefPreview';
import { projectBriefs } from '@/components/home/homeData';

export function HomeContact() {
  return (
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
              Use whichever channel is easiest and send a few details about what
              you need.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:eeri.dev@gmail.com"
              className="flex w-full items-center justify-between rounded-xl border border-border/75 bg-foreground p-3 transition-colors duration-200 hover:border-border hover:bg-secondary/25"
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
              className="flex w-full items-center justify-between rounded-xl border border-border/75 bg-foreground p-3 transition-colors duration-200 hover:border-border hover:bg-secondary/25"
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
          </div>
          <div className="border-t border-border/25 bg-foreground pt-3">
            <p className="text-xs text-text-muted/50">
              Usually replies within one business day • Open to freelance and
              team roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
