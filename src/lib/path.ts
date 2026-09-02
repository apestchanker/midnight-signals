const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured `base` (for GitHub Pages sub-paths). */
export function withBase(path = ''): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}
