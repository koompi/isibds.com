# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ISI Building Solutions is a corporate website for a pre-engineered building and steel structures company (ISI Building Solutions, Cambodia). Built as a modern single-page application with client-side routing.

**Stack:** React 19 + TypeScript (strict) + Vite 7 + Tailwind CSS 3 + Framer Motion + React Router DOM 7

## Common Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check with `tsc -b` then build for production
- `npm run lint` — Run ESLint (flat config, ESLint 9+)
- `npm run preview` — Preview the production build locally

No test runner is currently configured.

## Architecture

**Routing:** Defined in `src/App.tsx` using React Router DOM. Routes: `/`, `/about`, `/services`, `/portfolios`, `/contact`, plus a `*` catch-all 404.

**Layout pattern:** `src/components/layout/Layout.tsx` wraps all routes, providing Navbar + Footer + scroll-to-top on navigation.

**Home page composition:** `src/pages/Home.tsx` composes 8 standalone section components from `src/components/home/` (HeroSection, VisionValuesSection, CompanyProfileSection, ServicesSection, PortfoliosHighlightSection, TechnologySection, PeopleCultureSection, CTASection).

**Pages:** `src/pages/` — About, Services, Portfolios, and Contact are placeholder pages awaiting content.

## Styling & Theming

Tailwind-only styling (no CSS modules or CSS-in-JS). Custom theme in `tailwind.config.js`:

- **Primary:** `#1B2D4F` (navy) with `light`/`dark` variants
- **Accent:** `#D4622B` (construction orange)
- **Steel:** `#64748B` (steel grey)
- **Font:** ABC Ginto (local, loaded via @font-face in index.css)

Use `clsx` and `tailwind-merge` for conditional/merged class names.

## Conventions

- All components are functional with hooks
- Framer Motion for scroll-triggered (`whileInView`) and hover animations throughout
- Icons from `lucide-react`
- Mobile-first responsive design using `md:`/`lg:` breakpoints
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters` enforced
- No border-radius (sharp edges for steel construction aesthetic)
- Swiss Modernism 2.0 design: editorial asymmetry, 12-column grids, numbered elements
