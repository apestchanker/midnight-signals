export const SITE = {
  name: 'Midnight Signals',
  tagline: 'Technical updates for developers',
  description:
    'A community-maintained archive of Midnight Technical Signals — monthly technical updates for developers building on Midnight.',
  /** Update if you fork this repo. Used for "Edit on GitHub" / "Contribute" links. */
  repo: 'https://github.com/apestchanker/midnight-signals',
  lang: 'en',
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  protocol: 'Protocol',
  tooling: 'Tooling',
  ecosystem: 'Ecosystem',
  governance: 'Governance',
  research: 'Research',
  other: 'Other',
};
