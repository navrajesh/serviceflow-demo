# ServiceFlow

ServiceFlow is a production-style SaaS operations portfolio project for
home-service businesses. The fictional demo customer, **BrightHome Services**,
offers plumbing, electrical, HVAC, and handyman services in the San Francisco
Bay Area.

> Demo only: all people, addresses, appointments, payments, invoices, and
> messages are fictional. ServiceFlow does not process real service requests or
> charges.

## Project status

Milestone 1, the repository foundation, is implemented. It includes the Next.js
application, semantic light/dark themes, responsive public and portal shells,
test foundations, CI, and project documentation. Authentication, persistence,
booking, payments, and operational features intentionally begin in later
milestones.

- Live demo: _added after deployment approval_
- Walkthrough video: _added in the portfolio documentation milestone_
- Screenshots: _added after feature UI is stable_
- [Implementation plan](docs/implementation-plan.md)
- [Architecture](docs/architecture.md)
- [Security model](docs/security.md)
- [Testing strategy](docs/testing.md)

## Business problem

Home-service teams coordinate appointments across customers, dispatchers, and
field technicians. When those handoffs live in disconnected tools, customers
lose visibility, dispatchers create conflicts, and job completion no longer
connects cleanly to payment records and invoices.

ServiceFlow follows one cohesive journey:

`visitor books → simulated deposit → admin assigns → technician completes → customer sees invoice`

## Product direction

The finished showcase will include:

- A public BrightHome service catalog and booking journey
- Real server-side demo sessions for customer, technician, and administrator
- Server-enforced booking rules and ownership checks
- A provider-neutral simulated payment boundary
- Customer booking timelines, payments, invoices, and notifications
- A mobile-first technician workflow with controlled status transitions
- Administrator dispatch, service management, audit history, and demo reset
- Deterministic fictional data for reliable demos and end-to-end tests

## Technology

- Next.js 16 App Router and React 19
- TypeScript in strict mode
- Tailwind CSS 4 and shadcn/ui with Radix primitives
- `next-themes`
- Vitest and React Testing Library
- Playwright
- pnpm
- PostgreSQL, Prisma, Auth.js, and Zod in upcoming milestones

The foundation was generated with Next.js 16.2.12. Node 24 is the documented
local and CI runtime. React and ESLint remain on the versions selected by the
official scaffold because that set is tested together; independent upgrades are
handled as explicit maintenance work.

## Architecture at a glance

```text
Browser
  │
  ▼
Next.js App Router ── route composition and server rendering
  │
  ├── modules/* ───── domain rules, validation, authorized workflows
  ├── components/* ── shared UI and layout primitives
  └── lib/* ───────── cross-cutting infrastructure
           │
           ▼
      Prisma boundary ── PostgreSQL / Neon (Milestone 2)
```

ServiceFlow is a modular monolith. Important workflows belong in domain or
server services, not React components. Server operations will authenticate,
authorize, validate, and scope database access at every trust boundary.

## Local setup

Prerequisites:

- Node.js 24
- pnpm 11

```bash
git clone https://github.com/navrajesh/serviceflow-demo.git
cd serviceflow-demo
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

The Milestone 1 shell does not require a database. Values in `.env.example` are
safe placeholders only; do not reuse them for a deployed environment.

## Commands

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start the local development server            |
| `pnpm format`       | Format supported repository files             |
| `pnpm format:check` | Check formatting without changing files       |
| `pnpm lint`         | Run ESLint with zero warnings allowed         |
| `pnpm typecheck`    | Run strict TypeScript checking                |
| `pnpm test`         | Run Vitest unit and integration tests         |
| `pnpm test:e2e`     | Run Playwright desktop and mobile smoke tests |
| `pnpm build`        | Create a production Next.js build             |
| `pnpm check`        | Run formatting, lint, types, and Vitest       |

Install Playwright's browser once before the first E2E run:

```bash
pnpm exec playwright install chromium
```

## Environment variables

See [.env.example](.env.example). Variables are grouped by the milestone that
first uses them. Demo authentication and reset behavior default to disabled.
Server-only secrets must never use the `NEXT_PUBLIC_` prefix.

## Database, seed, and reset

The Prisma schema, version-controlled initial migration, and deterministic seed
are Milestone 2 work. No database command exists yet. Future migration commands
will distinguish safe deploys from destructive local resets and will require an
explicit database target. The protected reset design will restore demo data
without dropping the schema.

## Deployment

The target is Vercel with Neon PostgreSQL. Deployment, environment configuration,
and migration execution are not performed without explicit authorization.
Preview and production databases will use separate Neon branches.

Rollback will use a previous Vercel deployment plus a forward-only corrective
database migration when data shape has changed; destructive down migrations are
not the default strategy.

## Security and privacy

The app contains no real customer or payment data. Security headers and
server/client boundaries begin in Milestone 1; authentication, authorization,
ownership enforcement, idempotency, audit integrity, and reset protection are
implemented and tested in their corresponding milestones.

This project does not claim a compliance certification. See
[docs/security.md](docs/security.md) for the threat model and simulated controls.

## Accessibility

The target is WCAG 2.2 AA where practical. The foundation includes semantic
landmarks, a skip link, visible focus states, touch-sized primary controls,
system-aware themes, and reduced-motion handling. Automated checks complement,
but do not replace, keyboard, screen-reader, contrast, zoom, and mobile testing.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Conventional commits are expected and
unrelated changes should not be mixed into a feature diff.

## License

[MIT](LICENSE)
