# Architecture

## Shape

ServiceFlow is a modular monolith deployed as one Next.js application. The
choice keeps transactions, authorization, and the core booking journey easy to
trace while preserving domain boundaries that can evolve independently.

```text
public/customer/technician/admin routes
                    │
                    ▼
        Server Components and actions
                    │
                    ▼
    authorization + Zod validation boundary
                    │
                    ▼
  domain services (bookings, payments, invoices)
                    │
                    ▼
       repositories / Prisma transactions
                    │
                    ▼
           Neon PostgreSQL
```

## Boundaries

- `src/app` owns routing and composition, not business rules.
- `src/modules/<capability>` owns domain types, schemas, server services, and
  tests for one business capability.
- `src/components/ui` contains owned shadcn primitives.
- `src/components` contains shared presentation and layout.
- `src/lib` contains small cross-cutting adapters such as logging and errors.
- `src/config` contains non-secret application configuration.

Server Components render server data. Client Components are isolated to genuine
interaction. Server Actions will serve UI mutations; route handlers will serve
HTTP/integration boundaries such as health and a future protected cron trigger.

## Planned persistence

Prisma models will use explicit relations, indexes, constraints, enums, integer
cents, and UTC timestamps. Financial and audit history will use restrictive
deletion behavior. Multi-record booking, payment, assignment, completion, and
reset workflows will use database transactions.

The exact schema is a Milestone 2 decision and is not prematurely represented by
placeholder TypeScript models.

## Deployment

The target is Vercel with separate Neon branches for preview and production.
Node.js is the default runtime. Schema migrations use a direct database URL;
runtime traffic may use a pooled URL. Deployment and external resource changes
require explicit authorization.

## Key trade-offs

- Modular monolith over services: less operational overhead and clearer
  transactions for a portfolio-scale product.
- Integer cents over floating point or UI-formatted amounts: deterministic
  calculations and simple provider boundaries.
- Explicit workflow transitions over editable status fields: enforceable
  business invariants and meaningful audit history.
- Deterministic seed over random fixtures: repeatable demos and stable E2E tests.
- Simulated provider behind an interface over Stripe: safe public demo today
  with a clear future production seam.
