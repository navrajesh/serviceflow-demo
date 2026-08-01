import { PortalShell } from "@/components/layout/portal-shell";

const navigation = [
  "Overview",
  "Bookings",
  "Payments",
  "Invoices",
  "Notifications",
  "Profile",
] as const;

export default function CustomerShellPage() {
  return (
    <PortalShell
      role="Customer"
      title="Your service, without the guesswork."
      description="The customer portal will keep Jamie Chen's bookings, job timeline, payment history, and final invoices in one mobile-first view."
      navigation={navigation}
    >
      <p className="text-muted-foreground text-sm">
        Planned demo account:{" "}
        <span className="text-foreground font-mono">
          customer@serviceflow.demo
        </span>
      </p>
    </PortalShell>
  );
}
