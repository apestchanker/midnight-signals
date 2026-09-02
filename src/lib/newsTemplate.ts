/** Prefilled body for the "create a news item on GitHub" link and the /contribute docs. */
export const NEWS_TEMPLATE = [
  '---',
  'title: "Short, factual headline"',
  'date: 2026-09-01',
  'source: "https://link-to-the-primary-source"',
  'category: "protocol"   # protocol | tooling | ecosystem | governance | research | other',
  'summary: "One or two sentences a developer can skim in the feed."',
  'submittedBy: "your-github-handle"',
  '---',
  '',
  'A short paragraph with the technical detail: what changed, which versions,',
  'and why a builder should care. Keep it neutral and cite the source.',
  '',
].join('\n');

export const EXAMPLE_NEWS = [
  '---',
  'title: "Midnight Node 2.1.0 prepares the network for Ledger 9"',
  'date: 2026-08-28',
  'source: "https://github.com/midnightntwrk/midnight-node/releases"',
  'category: "protocol"',
  'summary: "Node 2.1.0-beta.1 ships the live-chain upgrade path and the Ledger 8 -> 9 hard fork."',
  'submittedBy: "apestchanker"',
  '---',
  '',
  'Node 2.1.0 bundles the 2.0.0 feature set plus later security patches and adds',
  'the infrastructure for a live-chain upgrade from the active 1.0.3 chains...',
].join('\n');
