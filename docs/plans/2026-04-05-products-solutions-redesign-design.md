# Products & Solutions Page Redesign - Design Document

**Date:** 2026-04-05
**Status:** Approved
**Designer:** Claude (Sonnet 4.6)

---

## Overview

Redesign the `/services/building-systems` page to use a hierarchical flowchart navigation structure with separate dedicated pages for each of the 5 core products. The goal is to simplify the user experience by providing clear visual navigation and focused product detail pages.

---

## Products & Content

### Product List (5 total)
1. ISI PEB
2. Heavy Steel Structures
3. ISI Greenhouse
4. ISI Roofing Solutions
5. ISI Home

### Content Source
Content sourced from provided PDF document (`WEBSITE BDS PRODUCT CONTENT (1).pptx`):
- Product descriptions (1-2 paragraphs)
- Key features/benefits (4-6 bullet points each)
- Special features with image references
- Existing images from current website

---

## Page Structure

### Main Page: `/services/building-systems`

**Sections:**
1. Hero banner (existing - keep)
2. Industry Vertical Solutions (existing - keep)
3. **NEW:** Product Tree Diagram
4. CTA section (existing - keep)

**Removed:**
- All detailed product sections (moved to individual pages)

### Product Pages (5 new routes)

```
/services/building-systems/isi-peb
/services/building-systems/heavy-steel-structures
/services/building-systems/isi-greenhouse
/services/building-systems/isi-roofing-solutions
/services/building-systems/isi-home
```

---

## Component Architecture

### New Components

#### `ProductTreeDiagram`
Main flowchart visualization component
- Vertical tree layout (top to bottom)
- 5 product nodes arranged horizontally
- Animated connecting lines
- Responsive: stacks vertically on mobile

#### `ProductNode`
Individual product card in the tree
- Displays product name
- Shows "About | Key Features" branches
- Hover state triggers tooltip
- Click navigates to product page

#### `ProductTooltip`
Hover preview popup
- Product name
- 1-line description (shortDescription)
- "View Details →" button
- Fade + slide animation

#### `BreadcrumbNav`
Navigation component for product pages
- "Products & Solutions ← [Product Name]"
- Clickable breadcrumb links

#### `ProductDetailPage`
Template for product detail pages
- Hero section with title
- Full description
- Key features/benefits list
- Image slider (reused from existing)
- Related products section
- CTA section

### Modified Components

#### `BuildingSystems.tsx`
- Remove all detailed product sections
- Add `ProductTreeDiagram` component
- Keep hero, Industry Vertical Solutions, CTA

#### `App.tsx`
- Add 5 new routes for product pages

### Reused Components
- Image slider (extract from current page)
- CTA section
- Hero section pattern

---

## Data Structure

```typescript
interface Product {
  id: string;
  title: string;
  shortDescription: string; // For tooltip (1 line)
  fullDescription: string; // From PDF
  keyFeatures: string[]; // From PDF
  images: string[]; // Existing URLs from current site
  specialFeatures: string; // Image references
}

const products: Product[] = [
  {
    id: "isi-peb",
    title: "ISI PEB",
    shortDescription: "Complete pre-engineered building systems...",
    fullDescription: "ISI Pre-Engineered Buildings (PEB) is a complete systems package...",
    keyFeatures: [
      "Adaptable building codes",
      "Superior materials specifications",
      "Fast design and delivery timelines",
      "Cost savings up to 30% vs conventional",
      "Wide clear spans up to 60+ meters",
      "Easy future expansion capabilities"
    ],
    images: [
      "https://storage.koompi.cloud/.../project-sunfair.jpg",
      "https://storage.koompi.cloud/.../project-marvel.jpg"
    ],
    specialFeatures: "Sunfair Factory and Marvel Garment"
  },
  // ... 4 more products
];
```

---

## Visual Design

### Tree Diagram Layout (Desktop)
```
┌─────────────────────────┐
│  Products & Solutions   │
└─────────────┬───────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼────┐        ┌────▼────┐
│ ISI    │        │ Heavy   │
│ PEB    │        │ Steel   │
└────────┘        └─────────┘
    │                   │
About | Key       About | Key
Features            Features

[... 3 more products below ...]
```

### Mobile Layout
Single column stack with arrows between cards:
```
┌─────────────────────────┐
│  Products & Solutions   │
└─────────────┬───────────┘
              ↓
┌─────────────────────────┐
│  ISI PEB                │
│  About | Key Features   │
└─────────────┬───────────┘
              ↓
┌─────────────────────────┐
│  Heavy Steel Structures │
│  About | Key Features   │
└─────────────────────────┘
```

### Color Scheme
- Primary: `#1B2D4F` (navy)
- Accent: `#D4622B` (orange)
- Steel: `#64748B` (grey)

### Typography
- Product titles: Uppercase, bold, tracking-tight
- Descriptions: Regular, leading-relaxed
- Features: Bullet points with orange dots

### Animations
- Tree lines draw from top to bottom on scroll
- Hover: Scale up node + shadow
- Page transitions: Fade in/out
- Tooltip: Fade in with slight slide

---

## Product Page Layout

```
┌─────────────────────────────────────┐
│ ← Products & Solutions / ISI PEB    │ ← Breadcrumb
├─────────────────────────────────────┤
│                                     │
│  [Hero: Product Title + Description]│
│                                     │
├─────────────────────────────────────┤
│  Key Features & Benefits            │
│  • Bullet 1                         │
│  • Bullet 2                         │
│  • Bullet 3                         │
│  ...                                │
├─────────────────────────────────────┤
│  [Image Slider - keep existing]     │
│  ← [Image 1/3] →                    │
├─────────────────────────────────────┤
│  Related Products                   │
│  [Heavy Steel] [Greenhouse] ...     │
├─────────────────────────────────────┤
│  [CTA Section]                      │
│  Contact Us | View Projects         │
└─────────────────────────────────────┘
```

---

## Responsive Design

### Breakpoints
- `md:` (768px+) - 2-column tree
- `lg:` (1024px+) - Full tree with all 5 products visible

### Mobile Adaptations
- Stack vertically with arrow connectors
- Full-width product cards
- Touch-optimized tooltips (tap instead of hover)
- Simplified tree structure

---

## SEO & Metadata

### Each Product Page Includes
- **Title:** "[Product Name] | Products & Solutions | ISI Building Solutions"
- **Meta Description:** From PDF content
- **Open Graph Tags:** og:title, og:description, og:type, og:url
- **Canonical URL:** Specific to product
- **Structured Data:** Product schema markup

---

## File Structure

```
src/
├── pages/
│   ├── BuildingSystems.tsx (modified)
│   ├── products/
│   │   ├── ISIPeb.tsx
│   │   ├── HeavySteelStructures.tsx
│   │   ├── ISIGreenhouse.tsx
│   │   ├── ISIRoofingSolutions.tsx
│   │   └── ISIHome.tsx
├── components/
│   ├── products/
│   │   ├── ProductTreeDiagram.tsx
│   │   ├── ProductNode.tsx
│   │   ├── ProductTooltip.tsx
│   │   └── BreadcrumbNav.tsx
│   └── common/
│       └── ImageSlider.tsx (extracted)
├── data/
│   └── products.ts
└── App.tsx (add routes)
```

---

## Implementation Phases

### Phase 1: Setup
- Create `data/products.ts` with all product content from PDF
- Add 5 new routes to `App.tsx`
- Create empty product page components

### Phase 2: Product Pages
- Build `ProductDetailPage` template component
- Add breadcrumb navigation
- Implement content sections (description, features)
- Add image slider (reuse existing logic)
- Add "Related Products" navigation
- Implement SEO metadata

### Phase 3: Flowchart Diagram
- Build `ProductTreeDiagram` component
- Implement vertical tree layout with 5 nodes
- Add hover tooltips with preview content
- Add animated connecting lines
- Implement mobile responsive layout

### Phase 4: Integration
- Modify `BuildingSystems.tsx` to use new diagram
- Remove old detailed product sections
- Test navigation between all pages
- Verify all images load correctly
- Test responsive behavior

---

## Success Criteria

✅ Main page loads with flowchart diagram
✅ All 5 product nodes visible on desktop
✅ Hover tooltips show correct preview content
✅ Clicking nodes navigates to correct product page
✅ All 5 product pages display content correctly
✅ Image sliders work on all product pages
✅ Breadcrumb navigation works correctly
✅ Mobile layout stacks vertically
✅ All images load without errors
✅ SEO metadata present on all pages
✅ Page transitions are smooth
✅ No console errors

---

## Notes

- **ISI Roofing Solutions** included (confirmed by user)
- **ISI Truss** removed (not in PDF or flowchart)
- Use existing images from current website
- Keep image slider from current design
- Preview tooltips show mini preview before navigation
- Vertical tree layout (top to bottom)
- Mobile stacks vertically with arrows
- Simple breadcrumb navigation on product pages
