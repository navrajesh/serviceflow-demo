# Testing strategy

## Pyramid

1. Unit tests cover booking windows, notice/horizon rules, cancellation and
   rescheduling, service zones, money, state transitions, payment outcomes, and
   idempotency.
2. Integration tests cover authorization, ownership, assignment conflicts,
   transactional booking/payment/refund behavior, audit events, and reset.
3. Playwright proves the user-visible cross-role journey with deterministic data.

Tests assert observable behavior and invariants, not mocked implementation
details.

## Commands

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Install Chromium once with `pnpm exec playwright install chromium`.

Playwright 1.62 no longer ships a browser build for macOS 12. On that legacy
development host, use the installed stable Chrome without weakening CI:

```bash
PLAYWRIGHT_CHANNEL=chrome pnpm test:e2e
```

The foundation E2E suite runs desktop Chromium and a Pixel 7 profile. Later
milestones add the required booking, assignment, completion, invoice,
unauthorized-access, declined-payment, conflict, mobile, and theme scenarios.

## Accessibility

Automated semantic and accessibility assertions will be added where practical.
Manual checks remain required for keyboard order, visible focus, dialog focus,
screen-reader announcements, 200% zoom, contrast, reduced motion, and touch
targets in both themes.

## CI policy

CI installs from the frozen pnpm lockfile and runs formatting, lint, type-check,
Vitest, production build, and Playwright. A missing database or browser must
fail a test job clearly; tests are not silently skipped.
