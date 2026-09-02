# Brand assets

Official Midnight brand assets, used as-is. **Do not recreate, redraw, or modify
the Midnight logo.** Replace the files here with the official assets from the
Midnight brand kit.

| File | What it is | Used by |
| --- | --- | --- |
| `midnight-wordmark.svg` | Horizontal "midnight" wordmark, white/light version | site header, hero lockup (`src/components/Logo.astro`) |
| `favicon.svg` | Midnight icon mark (square-ish), SVG | browser tab (`src/layouts/Base.astro`) |
| `favicon.png` | Same icon mark, PNG fallback (32–64px) | browser tab fallback |
| `portrait.png` | Editor portrait, transparent background | homepage hero (`src/components/Hero.astro`) |

If `midnight-wordmark.svg` is missing, the header falls back to the plain text
"Midnight". If `portrait.png` is missing, the hero simply omits the image.

Edition key art (e.g. the September cover) goes in `public/covers/`, not here.
