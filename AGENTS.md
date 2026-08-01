# ServiceFlow engineering guide

## Purpose

ServiceFlow is a public, fictional SaaS operations portfolio demo for
BrightHome Services. Its core journey is booking → simulated deposit → dispatch
→ technician completion → customer timeline and invoice. Never imply the demo
serves real customers or processes real money.

## Architecture and directories

Use a modular monolith.

- `src/app`: App Router composition, layouts, pages, route handlers, boundaries
- `src/components/ui`: owned shadcn/ui primitives
- `src/components`: shared presentation and layout components
- `src/modules`: vertical business capabilities and their domain/server code
- `src/lib`: small cross-cutting infrastructure and utilities
- `src/config`: static, non-secret product configuration
- `src/test`: shared test setup
- `tests/e2e`: Playwright journeys
- `docs`: architecture, security, testing, delivery, and roadmap decisions

Route components compose modules. Business rules do not live in UI components.

## Approved stack

Next.js App Router, React, strict TypeScript, Tailwind CSS, shadcn/ui with Radix,
PostgreSQL, Prisma, Auth.js, Zod, React Hook Form, Vitest, Testing Library,
Playwright, next-themes, GitHub Actions, Neon, and Vercel.

Ask before adding a major production dependency outside this stack. Prefer the
framework, existing packages, or a small local utility. Avoid experimental
features unless a documented requirement justifies them.

## Commands

- `pnpm dev`
- `pnpm format` / `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test` / `pnpm test:watch`
- `pnpm test:e2e`
- `pnpm build`
- `pnpm check`

Run every applicable quality command before declaring a milestone complete.

## Coding conventions

- Prefer named exports for reusable components and functions.
- Keep files focused; choose plain names that expose product meaning.
- Use `@/*` imports across architectural boundaries.
- Use semantic design tokens instead of foundational palette literals.
- Use shadcn primitives for established interactions and preserve accessibility.
- Avoid barrel files when direct imports are clear.
- Keep structured logs free of credentials and private customer fields.

## Server and client components

Default to Server Components. Add `"use client"` only for hooks, event handlers,
or browser APIs. Never make a Client Component async. Pass only serializable
data across the server/client boundary. Use the default Node.js runtime unless a
documented need requires Edge.

Use Server Actions for UI-scoped mutations and route handlers for HTTP or
integration boundaries. Apply the choice consistently within a workflow.

## Validation, authentication, and authorization

- Validate all untrusted server input with centralized Zod schemas.
- Client validation improves usability but never replaces server validation.
- Authenticate every protected server operation.
- Enforce role and resource ownership on the server and in ORM query scopes.
- Hidden navigation is not authorization.
- Prevent mass assignment with explicit input mappings.
- Demo one-click access must create a real server-side session.
- Demo authentication and reset controls default off and fail closed.

## Money and dates

Store and calculate money as integer cents on the server. Never trust a browser
amount. Use explicit payment states and idempotency keys.

Store instants in UTC. Present business times deliberately in the configured
Bay Area timezone. Do not rely on the host machine timezone for domain rules.

## Database and migrations

- Commit Prisma migrations; do not use schema push as production migration.
- Use explicit foreign keys, constraints, indexes, and intentional cascade rules.
- Preserve payment, invoice, and audit history.
- Never run a destructive database reset against an unidentified target.
- Ask before any destructive database operation.
- Demo reset restores deterministic data without dropping schema or migrations.

## Testing

Test business rules below the UI. Add integration coverage for authorization,
ownership, transactions, idempotency, and audit events. Use Playwright for
complete user journeys and stable accessible selectors.

Tests must prove observable behavior, not mocked implementation details. Every
bug fix should add the smallest meaningful regression test.

## Accessibility

Target WCAG 2.2 AA where practical: semantic landmarks, logical headings,
keyboard access, visible focus, associated labels, useful errors, adequate
contrast, reduced motion, touch-friendly controls, and non-color status cues.
Complete manual keyboard, zoom, mobile, and screen-reader checks where relevant.

## Security restrictions

Never commit secrets, production data, password hashes, sessions, reset
credentials, or real payment inputs. Never collect genuine card details. Check
authorization, ownership, validation, CSRF, XSS, injection, redirects, rate
limits, session security, log safety, amount integrity, idempotency, and error
leakage for sensitive changes.

Do not claim compliance certification. Clearly document simulated or incomplete
production controls.

## Git and diff discipline

Preserve unrelated user changes. Inspect status before and after edits. Do not
use destructive Git commands to discard work. Keep changes milestone-scoped,
review the complete diff, and check for secrets, dead code, and unnecessary
dependencies. Use conventional commit messages.

## Definition of done

A change is done only when acceptance criteria and relevant authorization,
business-rule, state, mobile, theme, accessibility, documentation, and security
needs are addressed; applicable format, lint, type, test, build, and E2E checks
pass; and unverified items are reported.

Special care: authentication, authorization helpers, booking state transitions,
money calculations, timezone rules, payment adapters, demo reset, audit events,
Prisma migrations, and deployment configuration require explicit review.
