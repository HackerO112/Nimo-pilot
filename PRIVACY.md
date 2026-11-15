# NimoPilot Privacy Policy

Last updated: November 15, 2026

## Overview

NimoPilot is a free, open-source browser automation extension for Chrome and Microsoft Edge. It has no NimoPilot account, subscription, billing system, or hosted agent service.

## Data stored in your browser

NimoPilot stores its settings, provider configuration, API keys, conversations, attachments, task history, and site permission rules locally in your browser. Your API keys are not included in conversation exports or logs.

NimoPilot does not collect your browsing history, page contents, messages, files, or credentials for its own service. Password, payment-card, and one-time-code field values are treated as sensitive and are not supplied to the model by the browser-control layer.

## AI provider requests

When you run a task, the content needed for that task (which can include your prompt, selected page content, page text, attachments, and screenshots for a vision-capable model) is sent from your browser to the AI provider you configured. This may be a cloud provider you choose or a local model server you operate.

Your provider handles that data under its own terms and privacy policy. If you use a local model server, requests go to the server address you configured. Do not add confidential data to a task unless you are comfortable sending it to that provider.

API keys are stored locally and sent only to the provider they belong to. NimoPilot does not operate a proxy or route your keys through a NimoPilot server.

## Analytics and telemetry

The NimoPilot build does not include a configured NimoPilot analytics destination. Anonymous analytics and usage-count settings are off by default. No analytics event is sent to a NimoPilot-operated service.

If a future build adds an analytics destination, this policy and the settings UI must be updated before collection is enabled. Analytics must remain opt-in.

## Browser permissions and control

NimoPilot requests browser permissions required for its features, including access to the tabs it operates on and Chrome's debugger interface for deterministic page observation and interaction. Some optional features request additional permissions only when you enable them.

The extension reads page content and performs browser actions only to carry out the task you asked it to perform. Page content is treated as untrusted data, not as instructions that can override your request.

Write actions such as submitting, sending, deleting, and uploading are subject to the extension's permission policy and may require your approval. Payments, account-access grants, and entering secrets are handed back to you. These safeguards reduce risk but cannot guarantee that every page or action will be classified correctly. Supervise browser automation and use trusted sites.

## Free use and provider costs

NimoPilot is free to use and does not charge a subscription or usage fee. When you choose a third-party cloud AI provider, that provider may impose its own pricing, quotas, and rate limits. Local models may be used where supported.

## Contact and policy changes

For questions, use the contact details published in the NimoPilot repository. This policy will be updated when data handling changes.
