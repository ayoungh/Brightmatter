# Contributing

Thank you for helping improve Brightmatter AI.

## Before you begin

- Search existing issues before opening a new one.
- Use GitHub private vulnerability reporting for security concerns.
- Keep contributions focused and avoid unrelated formatting or dependency changes.
- Do not submit copied branding, copy, interfaces, or imagery from third-party websites.

## Local setup

```bash
corepack enable
pnpm install
pnpm dev
```

The project targets Node.js 20.9 or newer and recommends Node.js 22 LTS.

## Development workflow

1. Fork the repository and create a focused branch.
2. Make the smallest coherent change that solves the issue.
3. Add or update tests for behavior changes.
4. Run the full local quality gate.

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

5. Open a pull request with a clear description, verification notes, and screenshots for visual changes.

## Design contributions

- Preserve the typed `siteConfig` boundary between content and layout.
- Keep meaningful content available in the server-rendered document.
- Respect reduced-motion preferences.
- Maintain keyboard access, visible focus, semantic landmarks, and WCAG AA contrast.
- Add original or properly licensed assets only, with attribution where required.
- Check both the 1440×900 and 390×844 layouts.

## Commit and pull-request guidance

Use concise, imperative commit messages. Pull requests should explain the user-facing outcome, any important implementation tradeoffs, and the commands used for verification.

By contributing, you agree that your contribution will be licensed under the MIT License.
