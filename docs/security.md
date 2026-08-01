# Security and privacy

## Context

ServiceFlow is a public portfolio demo with entirely fictional data. It must
never collect genuine card details, customer records, service requests, or
private messages. Simulated behavior is labeled in the UI and documentation.

## Trust boundaries

The browser is untrusted. Every protected server operation will:

1. authenticate the server-side session;
2. authorize the role and specific resource ownership;
3. validate untrusted input with Zod;
4. map accepted fields explicitly;
5. scope persistence queries to the authorized subject;
6. enforce state and money rules in domain code;
7. record audit events where required;
8. return a normalized error without secret or private detail.

Navigation visibility is never treated as authorization.

## Demo controls

One-click demo access is planned for Milestone 3. It must create a real
server-side session, default to disabled, and fail closed outside an explicitly
recognized demo deployment.

Demo reset is planned from the data model onward and implemented in Milestone 9.
It must be administrator-only, CSRF-conscious, rate-limited, resistant to
accidental invocation, transactionally scoped to known fictional data, and
audited. A future cron credential remains server-only.

## Payments

The payment form will offer only named fictional scenarios and will not accept
card numbers. The server calculates the fixed $49 deposit. Provider calls and
database writes use idempotency keys and explicit state transitions. No real
charge or refund occurs.

## Secrets and logs

- Real `.env*` files are ignored; `.env.example` contains placeholders.
- Secrets never use the `NEXT_PUBLIC_` prefix.
- Logs exclude credentials, sessions, fake payment inputs, and private customer
  fields.
- Error responses avoid stack traces and internal identifiers where disclosure
  would add risk.
- No reset secret, password hash, or provider credential is sent to the browser.

## Foundation controls

Milestone 1 disables the framework signature header and adds `nosniff`,
clickjacking, referrer, and browser-permission headers. A content security policy,
rate limiting, authenticated CSRF analysis, session cookie review, and Sentry
configuration depend on later implementation details and are not claimed yet.

## Review checklist

Before release, inspect authentication versus authorization, horizontal and
vertical access, ORM scoping, validation, mass assignment, CSRF, XSS, injection,
open redirects, rate limits, session cookies, logs, amount integrity,
idempotency, audit integrity, reset protection, and error leakage.

ServiceFlow does not claim PCI, SOC 2, HIPAA, or any other certification.
