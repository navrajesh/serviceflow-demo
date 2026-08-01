import Link from "next/link";

import { ServiceFlowLogo } from "@/components/brand/serviceflow-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/#platform", label: "Platform" },
  { href: "/#workflow", label: "Workflow" },
  { href: "/#foundation", label: "Build status" },
] as const;

export function MarketingHeader() {
  return (
    <header className="border-border/80 bg-background/90 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <ServiceFlowLogo className="me-auto" />
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="text-muted-foreground flex items-center gap-1 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" className="min-h-11 px-3">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
