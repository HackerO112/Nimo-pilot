<p align="center">
  <a href="https://github.com/HackerO112/Nimo-pilot">
    <img src="/logo-horizontal.png" alt="NimoPilot logo" width="260" />
  </a>
</p>

<p align="center">
  <b>NimoPilot</b> — an AI web agent powered by NVIDIA NIM, in a side panel beside the page.
</p>

<p align="center">
  <a href="https://github.com/HackerO112/Nimo-pilot/releases"><img src="https://img.shields.io/github/release/HackerO112/Nimo-pilot?label=latest&color=blue" alt="Latest release"></a>
  <a href="https://github.com/HackerO112/Nimo-pilot/releases/download/v0.4.0/nimopilot-0.4.0.zip"><img src="https://img.shields.io/badge/download-v0.4.0.zip-059669?logo=zip" alt="Download v0.4.0"></a>
  <a href="https://wxt.dev/"><img src="https://img.shields.io/badge/built%20with-wxt-4a154b?logo=google-chrome" alt="Built with wxt"></a>
  <a href="https://developer.chrome.com/docs/extensions/mv3/"><img src="https://img.shields.io/badge/manifest%20v3-supported-4285f4?logo=google-chrome" alt="Manifest V3"></a>
</p>

---

## What is NimoPilot?

NimoPilot is a browser extension that puts an **AI web agent in a side panel right beside the page you're browsing**. Powered by [NVIDIA NIM](https://www.nvidia.com/en-us/ai-nim/), it can look at a page, read its contents, and act on it for you — navigating, clicking buttons, filling forms, uploading files — while **you stay in control**.

Open it with a single shortcut (`Alt+Shift+N`) and start working with an agent that lives alongside your tabs, not in a separate window.

---

## ✨ Features

| Feature | What it does |
|---------|--------------|
| **Side panel agent** | Open NimoPilot beside any page and chat with an AI agent that can see and act on the current tab. |
| **Browser control** | Navigate pages, click links and buttons, read page content, and interact with forms. |
| **File uploads** | Attach files to page file inputs; the agent uploads what you give it, nothing more. |
| **Downloads** | Downloads started by the page are reported in the agent's receipts — saved by Chrome, not held by the extension. |
| **Ask about selection** | Right-click any text on a page → **"Ask NimoPilot about this"** to send it to the agent. |
| **Human-in-the-loop** | Write actions (submit, delete, upload) show a confirmation **card** first. Sensitive steps (like entering a password) are handed back to **you** to complete. |
| **Remember per site** | Choose "Allow on this site" and NimoPilot remembers your decision for that site going forward. |
| **Developer test panel** | A built-in **Browser control test panel** for developers to exercise the agent's capabilities. |
| **Multilingual** | English, Simplified Chinese (zh_CN), and Traditional Chinese (zh_TW). |

---

## 🚀 Install

NimoPilot is distributed as a ready-to-load extension zip.

### Option 1: Load the release zip (recommended)

1. Download [`nimopilot-0.4.0.zip`](https://github.com/HackerO112/Nimo-pilot/releases/download/v0.4.0/nimopilot-0.4.0.zip) from the [Releases](https://github.com/HackerO112/Nimo-pilot/releases) page.
2. Unzip the archive to a folder.
3. Open Chrome or Edge and go to `chrome://extensions` (or `edge://extensions`).
4. Enable **Developer mode** (toggle in the top-right).
5. Click **Load unpacked** and select the unzipped folder.

### Option 2: Load directly from the zip

Some browsers let you load an unpacked extension from a folder, so unzipping first is the most reliable path. The zip contains the compiled extension (`manifest.json`, `background.js`, panels, locales, icons) — no build step required.

> **Requires:** Chrome 125+ or a Manifest V3–compatible browser.

---

## ⌨️ Quick start

| Action | How |
|--------|-----|
| Open the panel | Press **`Alt+Shift+N`**, or click the NimoPilot toolbar icon |
| Ask about a selection | Select text on any page, right-click → **"Ask NimoPilot about this"** |
| Open settings | Open the panel → options, or visit the extension's **options page** |
| Developer tools | Open the **Browser control test panel** from the extension commands |

---

## 🛡️ Privacy & security

NimoPilot is designed so **you remain in the driver's seat**:

* **Writes need your OK.** Form submissions, deletions, and uploads show a confirmation card before anything is sent. You can decline, approve once, or "Allow on this site."
* **Sensitive steps are yours.** If a page asks for a password or other secret, NimoPilot hands the step back to you — it never types secrets for you.
* **Blocked destinations stay blocked.** `chrome://`, `javascript:`, and `file:` URLs are refused, and blocked sites can't be reached through any agent route (navigate, click, form, script, popup).
* **Downloads are Chrome's.** Files the page downloads are saved by Chrome directly and reported in receipts — the extension never holds your files.
* **No silent exfiltration.** `eval`, devtools, unknown tools, and other dangerous calls are refused in both Ask and Auto modes.

---

## 🧩 Under the hood

* **Manifest V3** extension
* Built with [**wxt**](https://wxt.dev/) — the modern web extension framework
* Service-worker background script, side panel, options page, and offscreen documents
* Internationalized with `_locales/en`, `_locales/zh_CN`, `_locales/zh_TW`
* Broad host permission (`<all_urls>`) so the agent can act on the pages you visit

---

## 🌐 Supported browsers

| Browser | Minimum version |
|---------|-----------------|
| Google Chrome | 125+ |
| Microsoft Edge | Manifest V3 support |

---

## 📄 Locales

| Locale | Language |
|--------|----------|
| `en` | English |
| `zh_CN` | Simplified Chinese |
| `zh_TW` | Traditional Chinese |

Contributions for additional translations are welcome.

---

## 🛠️ For developers

The zip is the compiled release. To hack on the extension yourself:

1. Clone the repo:
   ```bash
   git clone https://github.com/HackerO112/Nimo-pilot.git
   cd Nimo-pilot
   ```
2. Load the `nimopilot-0.4.0.zip` contents unpacked in Chrome with Developer mode on.
3. Open the **Browser control test panel** (command: `open-test-panel`) to drive and test the agent's browser-control APIs.

The extension exposes an agent that can `snapshot`, `read`, `navigate`, `click`, `fill_form`, `upload`, and `download` on pages — with confirmation cards and user hand-overs built in.

---

## 📄 License

This project is provided as-is. See the repository for any licensing information.

---

<p align="center">
  Built with ❤️ and <a href="https://www.nvidia.com/en-us/ai-nim/">NVIDIA NIM</a> · <a href="https://github.com/HackerO112/Nimo-pilot">github.com/HackerO112/Nimo-pilot</a>
</p>
