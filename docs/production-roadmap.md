# Production-readiness roadmap

The portfolio release deliberately simulates several controls. A real customer
deployment would require product, legal, security, and operational work beyond
the showcase.

## Before a real pilot

- Replace demo access with a production identity and account-recovery strategy.
- Add tenant isolation if more than one service company is supported.
- Replace the payment simulator with a reviewed provider adapter and hosted
  payment fields; complete provider webhook verification and reconciliation.
- Add verified email/SMS providers, consent, preferences, delivery tracking, and
  abuse controls.
- Complete privacy notices, retention/deletion policy, data-subject workflows,
  terms, and incident response.
- Add production rate limiting, CSP rollout, secret rotation, backup/restore
  drills, audit retention, vulnerability management, and dependency scanning.
- Establish SLOs, alerting, on-call ownership, observability retention, and
  disaster recovery.
- Perform professional accessibility and penetration testing.
- Validate taxes, invoice requirements, cancellations, refunds, and service-area
  rules with domain experts.

## Deliberate exclusions

The initial showcase does not include real charges/refunds, real messages, GPS,
route optimization, AI scheduling, payroll, accounting integrations, native
mobile apps, recurring subscriptions, production multi-tenancy, or regulated
data.
