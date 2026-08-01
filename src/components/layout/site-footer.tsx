import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          {siteConfig.name} is a fictional public portfolio project for{" "}
          {siteConfig.demoCompany}.
        </p>
        <div className="flex gap-5">
          <a
            href={`${siteConfig.repositoryUrl}/tree/master/docs`}
            className="hover:text-foreground rounded-sm underline-offset-4 hover:underline"
          >
            Project docs
          </a>
          <a
            href={siteConfig.repositoryUrl}
            className="hover:text-foreground rounded-sm underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
