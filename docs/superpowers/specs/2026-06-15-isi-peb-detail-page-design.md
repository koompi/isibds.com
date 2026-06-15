# ISI PEB Detail Page — Design Spec

**Date:** 2026-06-15  
**Status:** Approved

---

## Overview

Add an "Explore" button to the ISI PEB section in the Products & Solutions page. The button links to a new dedicated ISI PEB detail page that mirrors the structure of Fuxin's PEB page (fuxin.com.kh/building-systems/pre-engineered-building/) adapted with ISI branding and content.

---

## Changes Required

### 1. Explore Button — `src/pages/ProductsSolutions.tsx`

- Add an "Explore ISI PEB" button at the bottom of the content column for **index 0 only** (ISI PEB section), below the key features grid
- Style: filled accent (`bg-accent`) button with `ArrowRight` icon, matching the CTA button style already used in the file
- Links to: `/products-solutions/isi-peb` using React Router `<Link>`
- Alignment: left-aligned (index 0 is always left column)

### 2. New Page — `src/pages/IsiPeb.tsx`

### 3. New Route — `src/App.tsx`

- Add `<Route path="/products-solutions/isi-peb" element={<IsiPeb />} />`

---

## Page Structure: `IsiPeb.tsx`

### Section A — Hero Banner

Same pattern as `ProductsSolutions.tsx` hero:
- `pt-[72px]`, `h-[50vh] min-h-[400px]`, `bg-cover bg-center`, `bg-primary-dark/80` overlay
- Eyebrow: "ISI Building Solutions" (accent color, tracked uppercase)
- H1: "ISI PRE-ENGINEERED BUILDINGS" (bold, uppercase, white)
- Subtitle: "A complete building system providing superior performance in speed, cost, durability, and water leakage prevention."
- Background image: placeholder (`/images/peb-hero.jpg`) — user will supply link later

### Section B — Why ISI PEB

- Layout: `py-20 bg-white`, 5-column grid on desktop (`lg:grid-cols-5`), single column on mobile
- Each item: large accent-colored number (`01`–`05`), bold label, short description
- Content (adapted from Fuxin's Top 5):
  1. **Adaptable Building Codes** — Flexible design meets local and international building standards
  2. **Superior Material Specifications** — ISI PALM steel with AZ100/AZ150/AZ180 coating options
  3. **360° Roof Seaming System** — Electric seaming machine ensures the tightest interlocking between panel side laps
  4. **Watertight Trim & Sealant Systems** — Aesthetic flashings and sealants that actively prevent water leakage
  5. **Fast-Track Delivery** — Streamlined project management from design to installation

### Section C — System Components Grid

- Layout: `py-28 bg-surface-light`, section header ("BUILDING SYSTEM COMPONENTS"), then a `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- 13 component cards, always fully visible (no accordion)
- Each card: white background, sharp edges (no border-radius), top accent line (`border-t-2 border-accent`), lucide icon, component name (bold uppercase), short description paragraph, bullet list of key specs

**Component cards (content):**

| # | Name | Icon | Key specs |
|---|------|------|-----------|
| 1 | Primary Frame | `Layers` | High strength steel plate & hot-rolled members; Protective self-priming coating |
| 2 | Secondary Framing | `Grid3x3` | C/Z sections; Hot-dipped galvanized steel; Yield strength 450MPa; Z275 coating; Supports roof purlins & wall girts |
| 3 | Bracing Systems | `Triangle` | X-Bracing (rod & cable, tension-only); Portal Bracing (two columns + rafter attached to sidewall) |
| 4 | Roof & Wall Cladding | `Square` | ISI PALM high-quality steel; 8 colors available; AZ100 / AZ150 standard; AZ180 on special order |
| 5 | Roof System | `Cloud` | Concealed-fastener system; 360° seaming technology; Machine-applied sealant; On-site roll-former; Slope up to 3%; Allows thermal movement; Length as per requirement |
| 6 | Wall Cladding System | `PanelLeftOpen` | Watertight construction; Improved wall function; Colored-head fasteners; Stiffer edge profile; Aesthetically unique finish |
| 7 | Mezzanine Systems | `FlipHorizontal2` | Spans up to 9m; Joist beam spacing 2.5m; Maximum flexibility for openings; In-situ concrete on metal decking |
| 8 | Crane Systems | `MoveHorizontal` | Overhead Crane; Gantry Crane; Cantilever Crane; Integrated into building structural design |
| 9 | Stair & Handrail | `ArrowUpDown` | Modular components; Adaptable to building design and complexity |
| 10 | Accessories | `Package` | Doors, windows, louvers; High-spec bolts, nuts, screws & cable connections; Corrosion class C3 fasteners |
| 11 | Insulation | `Thermometer` | Air Bubble (heat penetration blocking); Polyurethane foam (flexible & rigid sandwich panels); Glass Wool (best thermal performance) |
| 12 | Ventilator System | `Wind` | Roof monitor integration; Wind-induced natural ventilation; Pulls hot air out; Minimizes cooling load; Two standard types |
| 13 | Skylight | `Sun` | Sufficient daylighting; Reduces energy consumption; Compatible watertight system between roof and skylight |

### Section D — CTA

Identical to the CTA in `ProductsSolutions.tsx`:
- `py-20 bg-primary-dark text-white`
- Left: heading + subtitle
- Right: "Contact Us" (`/contact`) + "View Projects" (`/portfolios`) buttons

---

## i18n

- All new text uses `useTranslation` + `t()` keys, consistent with all other pages in the project
- New keys added to `src/locales/en.json` under namespace `isiPeb.*`
- Same keys added to `src/locales/zh.json` with English text as placeholder (user to supply Chinese translations later)
- The Explore button label uses existing key or new `"isiPeb.exploreBtn": "Explore ISI PEB"`

---

## Design Constraints

- No border-radius (sharp edges, steel construction aesthetic)
- Framer Motion `whileInView` animations on Section B items and Section C cards
- `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`
- Staggered delay on component cards: `delay: index * 0.05`
- Icons from `lucide-react@^0.563.0` only — icon names in the component table are indicative; verify against installed version at implementation time
- Tailwind-only styling (no CSS modules)
- TypeScript strict mode — no unused vars/params

---

## Files Touched

| File | Change |
|------|--------|
| `src/pages/ProductsSolutions.tsx` | Add Explore button to index-0 content column |
| `src/pages/IsiPeb.tsx` | New file — full PEB detail page |
| `src/App.tsx` | Register new route `/products-solutions/isi-peb` |
