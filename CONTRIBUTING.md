# Contributing to NimoPilot

Thank you for helping improve NimoPilot.

## Development setup

Requirements: Node.js 24 and pnpm 10.34.7.

```bash
corepack enable
corepack prepare pnpm@10.34.7 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Load the `dist/` folder as an unpacked extension in Chrome or Edge with Developer mode enabled.

## Before opening a pull request

Run the checks relevant to your change:

```bash
pnpm type-check
pnpm lint
pnpm test
pnpm build
pnpm zip
```

For browser automation scenarios, install Chrome for Testing and run:

```bash
pnpm install-chrome
pnpm autorun scenarios
```

Describe the behavior changed, the tests run, and any browser permissions or data-handling changes. Do not include API keys, cookies, passwords, private browsing data, or user files in commits, screenshots, logs, or test fixtures.

## Security-sensitive changes

Changes involving browser permissions, debugger/CDP access, page scripts, downloads, uploads, form submission, payments, secrets, or prompt-injection handling require focused tests and a security review. Never weaken a confirmation or hand-off safeguard merely to make automation appear more autonomous.

## Licensing

NimoPilot includes code from Nanobrowser under Apache License 2.0. Keep the upstream license and attribution notice when redistributing modified source or builds.
