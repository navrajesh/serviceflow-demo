import { PortalShell } from "@/components/layout/portal-shell";

const navigation = ["Today", "Assigned jobs", "Job history"] as const;

export default function TechnicianShellPage() {
  return (
    <PortalShell
      role="Technician"
      title="A focused field workflow."
      description="The technician portal will give Alex Rivera a tap-friendly daily schedule and enforce valid job-state progression."
      navigation={navigation}
    >
      <p className="text-muted-foreground text-sm">
        Planned demo account:{" "}
        <span className="text-foreground font-mono">alex@serviceflow.demo</span>
      </p>
    </PortalShell>
  );
}
