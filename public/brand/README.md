# Brand assets

Official Midnight brand assets and the editor portrait, used **as-is**.
**Do not recreate, redraw, or modify the Midnight logo.** When updating, replace
these files with the official assets from the Midnight brand kit.

| File | What it is | Used by |
| --- | --- | --- |
| `midnight-wordmark-white.png` | Official horizontal "midnight" wordmark, white (RGB, @3x) | site header + hero lockup (`src/components/Logo.astro`) |
| `midnight-symbol-white.png` | Official Midnight symbol mark, white (RGB, @3x) | browser tab icon (`src/layouts/Base.astro`) |
| `portrait.png` | Editor portrait, transparent background | homepage hero (`src/components/Hero.astro`) |

Graceful degradation: if `midnight-wordmark-white.png` is missing the header
falls back to the plain text "Midnight"; if `portrait.png` is missing the hero
omits the image.

Edition key art (e.g. the September cover) lives in `public/covers/`, not here.
