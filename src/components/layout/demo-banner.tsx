import { Info } from "lucide-react";

import { siteConfig } from "@/config/site";

export function DemoBanner() {
  return (
    <div className="border-border bg-secondary/60 border-b">
      <div className="text-muted-foreground mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:px-6">
        <Info
          aria-hidden="true"
          className="text-brand-accent size-3.5 shrink-0"
        />
        <span>{siteConfig.disclaimer}</span>
      </div>
    </div>
  );
}
