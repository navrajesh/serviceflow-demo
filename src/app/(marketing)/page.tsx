import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  Route,
  ShieldCheck,
} from "lucide-react";

import { DemoBanner } from "@/components/layout/demo-banner";
import { MarketingHeader } from "@/components/layout/marketing-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const workflow = [
  {
    title: "Book",
    description: "A customer selects a service and appointment window.",
    icon: CalendarCheck2,
  },
  {
    title: "Deposit",
    description: "A clearly simulated $49 deposit confirms the request.",
    icon: CircleDollarSign,
  },
  {
    title: "Dispatch",
    description: "Operations assigns a qualified, available technician.",
    icon: Route,
  },
  {
    title: "Complete",
    description: "The technician follows a controlled job state machine.",
    icon: ClipboardCheck,
  },
  {
    title: "Invoice",
    description: "The customer sees the final timeline and invoice.",
    icon: FileCheck2,
  },
] as const;

const portalShells = [
  {
    href: "/customer",
    eyebrow: "Customer",
    title: "Booking clarity",
    description:
      "A mobile-first home for appointments, status updates, payments, and invoices.",
  },
  {
    href: "/technician",
    eyebrow: "Technician",
    title: "Work in the field",
    description:
      "A focused daily schedule with tap-friendly, valid job progression.",
  },
  {
    href: "/admin",
    eyebrow: "Administrator",
    title: "Operational control",
    description:
      "Dispatch, service management, payments, audit history, and demo controls.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />
      <MarketingHeader />
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="bg-brand-accent/12 absolute inset-x-0 top-0 -z-10 h-px"
          />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
            <div>
              <p className="text-brand-accent mb-5 text-sm font-semibold tracking-[0.16em] uppercase">
                SaaS operations, shown end to end
              </p>
              <h1 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
                One clear workflow from booking to invoice.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
                ServiceFlow is a production-style portfolio project that helps
                home-service teams coordinate customers, technicians, jobs, and
                payment records without losing the operational thread.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11 px-5">
                  <a href="https://github.com/navrajesh/serviceflow-demo/blob/master/docs/implementation-plan.md">
                    View project plan
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 px-5"
                >
                  <Link href="/#foundation">See foundation status</Link>
                </Button>
              </div>
            </div>

            <aside
              aria-label="Demo company context"
              className="border-border bg-card relative rounded-2xl border p-6 shadow-[0_24px_60px_-36px_oklch(0.22_0.06_245_/_0.35)] sm:p-8"
            >
              <div className="bg-brand-accent/10 text-brand-accent mb-6 flex size-11 items-center justify-center rounded-xl">
                <ShieldCheck aria-hidden="true" className="size-5" />
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                Seeded fictional customer
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                {siteConfig.demoCompany}
              </h2>
              <p className="text-muted-foreground mt-3 leading-7">
                Plumbing, electrical, HVAC, and handyman services across a
                fictional {siteConfig.region} service area.
              </p>
              <div className="border-border mt-7 grid grid-cols-2 gap-4 border-t pt-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Environment</p>
                  <p className="mt-1 font-medium">Portfolio demo</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Data</p>
                  <p className="mt-1 font-medium">Entirely fictional</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="workflow"
          aria-labelledby="workflow-heading"
          className="border-border bg-card border-y"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-brand-accent text-sm font-semibold">
                The product spine
              </p>
              <h2
                id="workflow-heading"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                One journey, five accountable handoffs
              </h2>
              <p className="text-muted-foreground mt-4 leading-7">
                Each milestone strengthens this same journey instead of adding
                disconnected dashboard screens.
              </p>
            </div>
            <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-5">
              {workflow.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-background relative min-h-48 p-5"
                >
                  <div className="text-muted-foreground flex items-center justify-between">
                    <step.icon aria-hidden="true" className="size-5" />
                    <span className="font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="platform"
          aria-labelledby="platform-heading"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-brand-accent text-sm font-semibold">
              Purpose-built views
            </p>
            <h2
              id="platform-heading"
              className="mt-2 text-3xl font-semibold tracking-tight"
            >
              Shared operations, role-specific focus
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {portalShells.map((portal) => (
              <article
                key={portal.eyebrow}
                className="border-border bg-card group rounded-2xl border p-6 transition-transform motion-safe:hover:-translate-y-1"
              >
                <p className="text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
                  {portal.eyebrow}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{portal.title}</h3>
                <p className="text-muted-foreground mt-3 min-h-18 leading-6">
                  {portal.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-11 px-0 text-sm"
                >
                  <Link href={portal.href}>
                    Preview shell
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="foundation"
          aria-labelledby="foundation-heading"
          className="border-border border-t"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-brand-accent text-sm font-semibold">
                Milestone 1
              </p>
              <h2
                id="foundation-heading"
                className="mt-2 text-2xl font-semibold tracking-tight"
              >
                Repository foundation
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 leading-7">
              <p>
                This checkpoint establishes the framework, architecture, themes,
                test harnesses, documentation, and continuous integration.
                Operational features and authentication are intentionally not
                implemented yet.
              </p>
              <p>
                No real customer data is used, and the application cannot
                process real appointments or payments.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
