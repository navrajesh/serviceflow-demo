import Link from "next/link";
import { Workflow } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceFlowLogoProps = {
  className?: string;
};

export function ServiceFlowLogo({ className }: ServiceFlowLogoProps) {
  return (
    <Link
      href="/"
      aria-label="ServiceFlow home"
      className={cn(
        "focus-visible:ring-ring inline-flex min-h-11 items-center gap-2 rounded-md font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <span className="bg-primary text-primary-foreground grid size-8 place-items-center rounded-lg shadow-sm">
        <Workflow aria-hidden="true" className="size-4" strokeWidth={2.25} />
      </span>
      <span>ServiceFlow</span>
    </Link>
  );
}
