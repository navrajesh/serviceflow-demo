import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";

import { ServiceFlowLogo } from "@/components/brand/serviceflow-logo";
import { DemoBanner } from "@/components/layout/demo-banner";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

type PortalShellProps = {
  role: string;
  title: string;
  description: string;
  navigation: readonly string[];
  children: ReactNode;
};

export function PortalShell({
  role,
  title,
  description,
  navigation,
  children,
}: PortalShellProps) {
  return (
    <div className="bg-muted/30 min-h-screen">
      <DemoBanner />
      <header className="border-border bg-background border-b">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <ServiceFlowLogo className="me-auto" />
          <span className="bg-accent text-accent-foreground hidden rounded-full px-3 py-1 text-xs font-medium sm:inline-flex">
            {role} shell
          </span>
          <ThemeToggle />
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[14rem_1fr] lg:px-8">
        <aside className="border-border bg-card rounded-xl border p-4">
          <p className="text-muted-foreground px-3 text-xs font-semibold tracking-[0.12em] uppercase">
            Planned navigation
          </p>
          <nav aria-label={`${role} portal`}>
            <ul className="mt-3 space-y-1">
              {navigation.map((item, index) => (
                <li key={item}>
                  <span
                    aria-current={index === 0 ? "page" : undefined}
                    aria-disabled="true"
                    className="text-muted-foreground aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground flex min-h-10 items-center rounded-md px-3 text-sm"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main id="main-content" className="min-w-0">
          <div className="mb-8">
            <Button asChild variant="ghost" className="-ms-3 mb-4 min-h-11">
              <Link href="/">
                <ArrowLeft aria-hidden="true" />
                Back to public site
              </Link>
            </Button>
            <p className="text-brand-accent text-sm font-semibold">{role}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-7">
              {description}
            </p>
          </div>
          <section
            aria-labelledby="checkpoint-heading"
            className="border-border bg-card rounded-2xl border p-6 sm:p-8"
          >
            <div className="bg-brand-accent/10 text-brand-accent flex size-11 items-center justify-center rounded-xl">
              <LockKeyhole aria-hidden="true" className="size-5" />
            </div>
            <h2 id="checkpoint-heading" className="mt-6 text-xl font-semibold">
              Foundation checkpoint
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-7">
              Authentication and operational data begin in later milestones.
              This route currently demonstrates only the responsive, theme-aware
              portal shell.
            </p>
            <div className="mt-7">{children}</div>
          </section>
        </main>
      </div>
    </div>
  );
}
