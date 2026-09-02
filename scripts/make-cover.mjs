/**
 * Generate a monthly edition cover from the base key art by swapping the month
 * wordmark. The base art (assets/cover-base.png) is the official September key
 * art; this script blacks out the "SEPTEMBER" wordmark and stacks a small
 * qualifier ("EARLY" / "LATE") above the month name, keeping everything else
 * (logo, portrait, SIGNALS, pillars, code, grid) untouched.
 *
 *   node scripts/make-cover.mjs "EARLY" "SEPTEMBER" public/covers/2026-09.png
 *   node scripts/make-cover.mjs ""      "OCTOBER"   public/covers/2026-10.png
 */
import sharp from 'sharp';

const [, , QUALIFIER = '', MONTH = 'SEPTEMBER', OUT = 'public/covers/out.png'] = process.argv;
const BASE = 'assets/cover-base.png';
const W = 1536, H = 1024;

const qualifier = QUALIFIER
  ? `<text x="110" y="300" font-family="Avenir Next, 'Helvetica Neue', Arial, sans-serif"
        font-weight="700" font-size="38" fill="#ffffff" letter-spacing="17">${QUALIFIER.toUpperCase()}</text>`
  : '';
const monthBaseline = QUALIFIER ? 422 : 408;

const overlay = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgb(0,0,2)" stop-opacity="1"/>
      <stop offset="0.90" stop-color="rgb(0,0,2)" stop-opacity="1"/>
      <stop offset="1" stop-color="rgb(0,0,2)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="80" y="${QUALIFIER ? 256 : 292}" width="930" height="${QUALIFIER ? 188 : 150}" fill="url(#fade)"/>
  ${qualifier}
  <text x="104" y="${monthBaseline}"
        font-family="Avenir Next, Futura, 'Helvetica Neue', Arial, sans-serif"
        font-weight="800" font-size="120" fill="#ffffff" letter-spacing="1">${MONTH.toUpperCase()}</text>
</svg>`;

const base = await sharp(BASE).toBuffer();
await sharp(base).composite([{ input: Buffer.from(overlay), top: 0, left: 0 }]).png().toFile(OUT);
const m = await sharp(OUT).metadata();
console.log('wrote', OUT, `${m.width}x${m.height}`, m.format);
