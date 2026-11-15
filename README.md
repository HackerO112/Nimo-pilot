<p align="center">
  <a href="https://github.com/HackerO112/Nimo-pilot">
    <img src="/logo-horizontal.png" alt="NimoPilot logo" width="260" />
  </a>
</p>

<p align="center">
  <b>NimoPilot</b> — a free AI browser agent that works beside the page in your Chrome or Edge side panel.
</p>

<p align="center">
  <a href="https://github.com/HackerO112/Nimo-pilot"><img src="https://img.shields.io/badge/status-development-orange" alt="Development status"></a>
  <a href="https://wxt.dev/"><img src="https://img.shields.io/badge/built%20with-WXT-4a154b" alt="Built with WXT"></a>
  <a href="https://developer.chrome.com/docs/extensions/mv3/"><img src="https://img.shields.io/badge/Manifest%20V3-supported-4285f4" alt="Manifest V3"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue" alt="Apache 2.0"></a>
</p>

## What NimoPilot does

NimoPilot is an AI agent for browser tasks. Give it a goal in plain language. It can inspect pages, navigate, read content, click controls, fill forms, work across tabs, and prepare files while showing its actions in the side panel.

### Core capabilities

- **Side-panel agent:** work alongside the page without switching to another app.
- **Browser automation:** observe pages, navigate, click, scroll, and fill forms.
- **Task history:** revisit conversations and continue tasks.
- **Stop and steer:** stop a run, queue follow-up instructions while it works, and edit or remove queued messages.
- **Recovery:** resume a task after a service-worker interruption when its saved state can be restored.
- **User hand-off:** complete sensitive or consequential steps yourself when the agent asks you to take over.
- **Write approvals:** submitting, sending, deleting, and uploading can require confirmation.
- **Site permissions:** allow, ask, or block automation by site.
- **Multiple AI providers:** configure supported cloud providers or compatible local model servers.
- **Vision and attachments:** use supported models with images and screenshots.
- **Shortcuts and exports:** reuse prompts and export conversation history.
- **Multilingual interface:** English, Simplified Chinese, and Traditional Chinese.

## Free by design

NimoPilot has no subscription, paid tier, account requirement, or NimoPilot usage charge. You can configure a supported provider using your own key, or connect a supported local model.

Third-party AI providers may apply their own API charges, quotas, and rate limits. Those are provider policies, not NimoPilot fees. Local model usage depends on your own hardware and server.

## Privacy and safety

- Conversations, settings, attachments, and provider keys are stored locally in your browser.
- API keys are sent only to the provider you configured.
- The distributed NimoPilot build has no configured NimoPilot analytics destination; analytics settings are off by default.
- Webpage content is untrusted data and must not override your instructions.
- Sensitive actions are subject to permission checks and user confirmation. Payments, access grants, and secret entry remain your responsibility.
- Chrome controls access to protected browser pages and system UI. NimoPilot cannot bypass those restrictions or suppress browser security indicators.

Read the [Privacy Policy](PRIVACY.md) before use. Browser automation can make mistakes; supervise tasks, especially on pages that send messages, change records, upload files, or spend money.

## Install

A verified release ZIP will be published in [GitHub Releases](https://github.com/HackerO112/Nimo-pilot/releases) after the source build, tests, security review, and packaging checks pass.

Until then, this repository is under development. Do not treat the existing historical ZIP files as the new production build.

## Build from source

Requirements: Node.js 24 and pnpm 10.34.7.

```bash
corepack enable
corepack prepare pnpm@10.34.7 --activate
pnpm install --frozen-lockfile
pnpm type-check
pnpm lint
pnpm test
pnpm build
pnpm zip
```

The unpacked extension is produced in `dist/`; the release archive is produced in `dist-zip/`.

To load a development build:

1. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
2. Enable Developer mode.
3. Choose **Load unpacked** and select the `dist/` folder.

## Upstream acknowledgements and licensing

NimoPilot builds on the open-source [Nanobrowser](https://github.com/nanobrowser/nanobrowser) project. The imported upstream source is licensed under the Apache License 2.0; see [LICENSE](LICENSE) for the license text. NimoPilot branding and project-specific changes are maintained in this repository.

