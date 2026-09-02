# Edition covers

One image per edition, named to match the edition file:

| Edition file | Cover |
| --- | --- |
| `2026-08-signals-1.md` (Early August) | `2026-08.png` |
| `2026-08-signals-2.md` (Late August) | `2026-08-2.png` |
| `2026-09-signals-1.md` (Early September) | `2026-09.png` |

Reference from the edition frontmatter: `cover: "covers/2026-09.png"`.

## Generating a cover

Covers are derived from the official key art (`assets/cover-base.png`, kept
outside `public/`) by swapping only the month wordmark — the Midnight logo,
portrait, "SIGNALS", pillars and background are never redrawn.

```bash
# node scripts/make-cover.mjs "<QUALIFIER>" "<MONTH>" <output path>
node scripts/make-cover.mjs "LATE" "SEPTEMBER" public/covers/2026-09-2.png
node scripts/make-cover.mjs ""     "OCTOBER"   public/covers/2026-10.png
```

The month text renders in Avenir Next (a system font) — a close stand-in for the
Midnight display face. Swap in the real brand font or a hand-made image if an
exact match is needed.
