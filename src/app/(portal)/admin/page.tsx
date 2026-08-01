import { PortalShell } from "@/components/layout/portal-shell";

const navigation = [
  "Operations",
  "Bookings",
  "Technicians",
  "Services",
  "Payments",
  "Audit log",
] as const;

export default function AdminShellPage() {
  return (
    <PortalShell
      role="Administrator"
      title="The operating picture, clearly."
      description="The administrator portal will help Morgan Lee dispatch technicians, manage services, review payments, and inspect audit history."
      navigation={navigation}
    >
      <p className="text-muted-foreground text-sm">
        Planned demo account:{" "}
        <span className="text-foreground font-mono">
          admin@serviceflow.demo
        </span>
      </p>
    </PortalShell>
  );
}
