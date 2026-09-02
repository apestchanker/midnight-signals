/** Format a frontmatter date in UTC so it doesn't shift across timezones. */
export function formatDate(
  date: Date,
  opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
): string {
  return date.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
}

export function formatShort(date: Date): string {
  return formatDate(date, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function formatMonth(date: Date): string {
  return formatDate(date, { year: 'numeric', month: 'long' });
}
