# Portfolio Modal Gallery Redesign

**Date:** 2026-05-18  
**Scope:** `src/pages/Portfolios.tsx` — modal/lightbox UI only

---

## Goal

Redesign the project modal from a horizontal split layout (image left, sidebar right) to a full-width stacked layout with a multi-image gallery. Each project will show one large hero image with 4 clickable thumbnails below it, then project details underneath.

---

## Layout (top to bottom inside modal)

1. **Close button** — fixed top-right corner, always visible
2. **Main image** — full width, `60vh` height, `object-cover`, prev/next project navigation arrows overlaid at mid-height
3. **Thumbnail row** — 4 equal-width thumbnails in a horizontal strip; clicking crossfades the main image; active thumbnail highlighted with `accent` (`#D4622B`) border
4. **Details section** — white background, single column:
   - Accent bar + category label (small caps, accent color)
   - Project title (large bold, `primary` color)
   - Location + year with `MapPin` / `Calendar` icons
   - Project counter: "Project X of Y"

---

## Data Structure

Each project object gains an `images: string[]` field replacing the single `image` string.

```ts
{
  id: number,
  title: string,
  location: string,
  year: string,
  category: string,
  images: string[], // index 0 = hero; indices 1-4 = thumbnails (placeholders for now)
}
```

All 5 entries in `images` will initially use the same URL (current `image` value repeated) as placeholders. The user will supply real photos per-project later.

---

## State

- `selectedProjectIndex: number | null` — existing, unchanged
- `selectedImageIndex: number` — new; tracks which thumbnail is active; resets to `0` whenever `selectedProjectIndex` changes

---

## Interactions

| Action | Result |
|--------|--------|
| Click project card | Opens modal, `selectedImageIndex` = 0 |
| Click thumbnail | `selectedImageIndex` updates, main image crossfades |
| Click prev/next arrows | `selectedProjectIndex` changes, `selectedImageIndex` resets to 0 |
| Press Escape | Modal closes |
| Press ArrowLeft / ArrowRight | Navigate between projects (existing keyboard behavior) |

---

## Animations

- **Modal entrance:** fade + slide-up (`y: 40 → 0`) replacing current scale animation
- **Main image switch:** `AnimatePresence` with crossfade (`opacity: 0 → 1`) keyed on `selectedImageIndex`
- **Thumbnails:** `opacity: 0.5` on inactive, `1.0` on active; 2px `accent` border on active; `scale(1.05)` on hover

---

## Constraints

- No border-radius (sharp edges — project convention)
- Tailwind-only styling
- TypeScript strict mode — no unused vars/params
- Mobile-first: thumbnail row scrolls horizontally on small screens if needed
- `AnimatePresence` already imported from `framer-motion`

---

## Out of Scope

- No changes to the project grid cards
- No changes to the hero banner, filters, or stats section
- No new routes or pages
- Real project images are provided by the user separately — only placeholder structure is wired up now
