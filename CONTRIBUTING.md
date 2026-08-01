# Contributing

ServiceFlow is a milestone-driven portfolio project. Open an issue before
expanding product scope or adding a major production dependency.

## Workflow

1. Read `AGENTS.md` and the relevant documents in `docs/`.
2. Keep changes within one coherent milestone or issue.
3. Preserve unrelated work and avoid destructive database commands.
4. Add tests for observable behavior.
5. Run `pnpm check`, `pnpm build`, and applicable Playwright tests.
6. Review the complete diff and check for secrets before opening a pull request.

Use conventional commits, for example:

- `feat(bookings): enforce advance notice`
- `fix(auth): scope customer booking lookup`
- `test(payments): cover repeated idempotency key`
- `docs(architecture): record reset transaction boundary`

Pull requests should explain the business behavior, security implications,
verification evidence, known limitations, and rollback approach.
