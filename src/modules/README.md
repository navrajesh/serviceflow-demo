# Domain modules

Business capabilities will be added here as vertical modules. Each module may
contain domain rules, Zod schemas, server-only services, repositories, and
tests. Route components in `src/app` should compose these capabilities rather
than owning business logic.

Planned modules: authentication, customers, technicians, services,
availability, bookings, payments, invoices, notifications, audit, and demo
management.
