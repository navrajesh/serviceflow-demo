# ServiceFlow implementation plan

## Delivery model

Work proceeds one milestone at a time. Each milestone starts by reinspecting
relevant code and ends with acceptance checks, automated verification, a full
diff review, updated documentation, and a clean review checkpoint. A later
milestone does not begin in the same execution unless explicitly requested.

Status values: `complete`, `next`, `planned`.

| Milestone                              | Status   | Outcome                                                      |
| -------------------------------------- | -------- | ------------------------------------------------------------ |
| 1. Repository foundation               | complete | Runnable, tested, documented application foundation          |
| 2. Database and deterministic data     | next     | Versioned schema, migration, seed, and safe reset design     |
| 3. Authentication and authorization    | planned  | Server-side sessions, roles, ownership, and demo entry       |
| 4. Public site and catalog             | planned  | Complete BrightHome marketing and service discovery          |
| 5. Booking workflow                    | planned  | Validated booking, availability, and confirmation            |
| 6. Simulated payments                  | planned  | Provider-neutral deposit and refund simulation               |
| 7. Customer portal                     | planned  | Self-service booking, timeline, payment, and invoice views   |
| 8. Technician portal                   | planned  | Mobile field workflow and controlled job progression         |
| 9. Administrator portal                | planned  | Dispatch, management, reporting, audit, and reset            |
| 10. Defensive states and observability | planned  | Failure handling, health, logging, and monitoring boundary   |
| 11. Verification and security review   | planned  | Complete E2E, accessibility, responsive, and security review |
| 12. Portfolio documentation            | planned  | Case study, screenshots, final demo story, and handoff       |
| 13. Vercel readiness and deployment    | planned  | Preview/production configuration and authorized deployment   |

## Milestone 1 — Repository foundation

Scope:

- Next.js App Router, strict TypeScript, pnpm, Tailwind CSS, and shadcn/ui
- Semantic warm-white/navy/teal tokens for complete light and dark themes
- System-default, persistent theme selection without initial theme flash
- Responsive public shell and clearly non-operational role portal shells
- Module boundaries, shared layout primitives, and product configuration
- Prettier, ESLint, TypeScript, Vitest/Testing Library, and Playwright commands
- Desktop and mobile foundation smoke tests
- Security header baseline and safe environment template
- CI, dependency updates, pull request guidance, and MIT license
- Root engineering instructions and documentation foundation

Acceptance criteria:

- The app clearly identifies all data and behavior as a fictional demo.
- The public page and three portal shells render at mobile and desktop widths.
- Theme selection defaults to the OS, toggles explicitly, and persists.
- No database, authentication, booking, or payment feature is implied to work.
- Format, lint, type-check, Vitest, production build, and Playwright pass.
- The full diff is reviewed for secrets, scope creep, and dead scaffold assets.

## Milestone 2 — Database and deterministic demo data

Deliver:

- Prisma and Neon-compatible PostgreSQL configuration
- Deliberate enums and relations for the full core entity set
- Integer-cent money, UTC timestamps, constraints, indexes, and safe cascades
- Version-controlled initial migration
- Deterministic BrightHome reference and transactional seed
- Transactional, idempotent, administrator-reset design without schema deletion
- Database integration-test harness and data-model decision record

Exit checks:

- A fresh database migrates and seeds reproducibly.
- A second seed/reset produces the same known scenario without duplicates.
- Financial and audit records cannot be silently erased by parent deletion.
- No destructive command can target an unidentified database.

## Milestone 3 — Authentication and authorization

Deliver:

- Current stable Auth.js conventions and Prisma integration
- Conventional demo login plus customer, technician, and administrator one-click
  entry that creates genuine server-side sessions
- Fail-closed environment gating for insecure demo conveniences
- Central role and ownership authorization helpers
- Protected route and server-operation enforcement
- Tests for horizontal and vertical privilege escalation

Exit checks:

- Each role sees only allowed records and operations.
- Direct URL, Server Action, and route-handler access reject unauthorized users.
- Browser state alone cannot switch identity or role.

## Milestone 4 — Public site and service catalog

Deliver:

- Final BrightHome product story, catalog, starting prices, service areas, trust
  content, calls to action, responsive navigation, and demo entry points
- Server-rendered service data with explicit loading, empty, and error behavior
- Accessible light-first marketing experience

Exit checks:

- Visitors understand ServiceFlow versus BrightHome and what is simulated.
- Catalog and service-zone data originate from persisted demo data.

## Milestone 5 — Booking workflow

Deliver:

- Mobile-first multi-step wizard for service, address, details, and availability
- Server-enforced two-hour windows, notice, horizon, zone, and overlap rules
- Booking state machine beginning at `PENDING_PAYMENT`
- Transactional creation and duplicate-submission protection
- Booking rule unit tests and creation integration tests

Exit checks:

- Invalid zone, time, ownership, or duplicate requests fail safely.
- The browser never controls canonical price or appointment rules.

## Milestone 6 — Simulated payments

Deliver:

- `PaymentProvider` contract and `SimulatedPaymentProvider`
- Success, decline, processing, and eligible refund scenarios
- Explicit attempt/history models, server-calculated $49 deposit, idempotency
- Professional form that cannot accept genuine card details and says demo only
- Transaction tests coordinating booking and payment state

Exit checks:

- Replayed requests do not duplicate charges or records.
- Payment outcome and booking state remain consistent after failures.

## Milestone 7 — Customer portal

Deliver:

- Dashboard, bookings, status timeline, reschedule/cancel, payments, invoices,
  notifications, profile, and addresses
- Ownership-scoped queries and server operations
- Twelve-hour reschedule and 24-hour cancellation rules with clear explanations
- Responsive, theme-complete customer states

Exit checks:

- Jamie can complete all allowed actions and cannot access another customer.
- Restricted actions explain why without leaking private information.

## Milestone 8 — Technician portal

Deliver:

- Today schedule, assigned jobs, necessary customer/address detail, internal
  notes, and completion summary
- Controlled `ASSIGNED → EN_ROUTE → IN_PROGRESS → COMPLETED` progression
- Mobile-first tap targets and slow-network/duplicate-submission behavior
- Assignment scoping and transition tests

Exit checks:

- Alex cannot view unrelated work, skip states, reassign, or alter payment data.

## Milestone 9 — Administrator portal

Deliver:

- Operational overview, useful booking/workload and deposit/revenue trends
- Booking table and schedule, technician assignment/conflict prevention
- Service/pricing, customer, technician, payment, invoice, and audit views
- Audited override operations and protected demo reset

Exit checks:

- Assignment conflicts are transactionally prevented.
- Overrides and reset operations are authorized, CSRF-conscious, rate-limited,
  and audited.

## Milestone 10 — Defensive states and observability

Deliver:

- Purposeful loading, empty, validation, error, forbidden, and duplicate states
- Root and route error boundaries, safe normalization, correlation IDs
- Structured server logger, health endpoint, and Sentry-ready adapter

Exit checks:

- Failures are useful to users but do not leak secrets or private fields.
- Health and logs distinguish runtime failure without requiring Sentry locally.

## Milestone 11 — Full verification and security review

Deliver:

- Complete unit/integration suite and the required end-to-end demo journey
- Automated accessibility checks plus documented manual checks
- Responsive and light/dark review of every meaningful state
- Authentication, authorization, ownership, validation, CSRF, XSS, injection,
  redirects, sessions, logging, amount, idempotency, audit, and reset review
- Performance and dependency review

Exit checks:

- All quality gates pass against deterministic data.
- Unresolved risks have owners and visible production-roadmap entries.

## Milestone 12 — Portfolio documentation

Deliver:

- Final README, screenshots, case study, architecture/data diagrams
- Two-minute cohesive demo script and walkthrough-video link
- Final trade-offs, limitations, security, accessibility, local/deploy/rollback,
  and handoff guidance

Exit checks:

- A reviewer can understand, run, verify, and present the project independently.

## Milestone 13 — Vercel readiness and deployment

Deliver:

- Validated Vercel config, environment schema, Neon preview/production strategy
- Safe migration and rollback procedure
- Protected reset/cron design; scheduling only when the environment is ready
- Preview verification and, only with explicit authorization, production deploy

Exit checks:

- Preview and production isolation is proven.
- Post-deploy smoke tests pass and the public demo remains visibly fictional.

## Version decisions and compatibility

Validated on 2026-07-30:

- Node.js 24.15.0 and pnpm 11.1.2
- Next.js 16.2.12 requiring Node.js 20.9 or later
- React/React DOM 19.2.4 selected by the official Next.js scaffold
- Tailwind CSS 4.3.3 and shadcn CLI 4.16.0 with Radix primitives
- next-themes 0.4.6
- Vitest 4.1.10 requiring Node 20, 22, or 24+
- Playwright 1.62.x requiring Node 20+

Standalone React 19.2.8 and ESLint 10 were newer in registry metadata, but the
official scaffold selected React 19.2.4 and ESLint 9.39.x. The plan preserves
that tested framework set and treats upgrades as separate, verified maintenance.

## Risks and controls

| Risk                                | Control                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Auth.js conventions change          | Revalidate official docs immediately before Milestone 3                           |
| Prisma/Neon connection modes differ | Choose pooled runtime and direct migration URLs explicitly in Milestone 2         |
| Demo shortcuts leak into production | Environment gates default off; production validation fails closed                 |
| Timezone and DST errors             | UTC storage plus explicit `America/Los_Angeles` domain presentation/tests         |
| Booking/payment replay              | Unique idempotency records and transactional state coordination                   |
| Technician race condition           | Database-backed overlap check inside the assignment transaction                   |
| Reset destroys the wrong data       | Known demo tenant scope, admin/secret checks, CSRF/rate controls, no schema reset |
| Theme hydration mismatch            | Server-safe provider, system default, and explicit browser smoke test             |
| Supply-chain scripts                | pnpm allowlist is limited to reviewed `sharp` and `unrs-resolver` scripts         |
| Transitive WASM peer warnings       | Track upstream; do not add direct application dependencies solely to silence them |
