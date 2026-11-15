// NimoPilot project links. There is no separate NimoPilot hosted website.

export type WebsitePath = '/' | '/docs';
export type LinkPlace = 'side-panel' | 'settings' | 'about';

/** Opens the public project repository; no tracking parameters or browsing data are attached. */
export const websiteUrl = (_path: WebsitePath, _place: LinkPlace) =>
  'https://github.com/HackerO112/Nimo-pilot';
