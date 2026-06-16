# i18n: English / Simplified Chinese Language Switcher

**Date:** 2026-05-27
**Status:** Approved

## Summary

Add a language switcher (EN / 中文) to the navbar and implement Simplified Chinese translations across all 25 text-bearing files in the ISI Building Solutions website. Language preference is stored in the `?lang=` URL query param and detected automatically on page load.

---

## 1. Architecture & i18n Setup

### Dependencies
- `i18next` — core translation engine
- `react-i18next` — React bindings (`useTranslation` hook, `<Trans>`)
- `i18next-browser-languagedetector` — auto-detects language from URL query param

### File Structure
```
src/
  locales/
    en.json       ← all English strings (~500 keys)
    zh.json       ← all Simplified Chinese strings (~500 keys)
  i18n.ts         ← react-i18next initialization
```

### Initialization (`src/i18n.ts`)
- Configures `i18next-browser-languagedetector` with detection order: `['querystring', 'localStorage', 'navigator']`
- Query string key: `lang`
- Supported languages: `['en', 'zh']`
- Fallback language: `'en'`
- Imported once at the top of `main.tsx` before React mounts (side-effect import: `import './i18n'`)

### URL Param Behavior
- On page load: detector reads `?lang=zh` and activates Chinese automatically
- On switcher click: `useSearchParams` updates `?lang=zh` or removes the param for English; `i18n.changeLanguage()` is called in the same handler; the detector also caches the selection to `localStorage` (via `caches: ['localStorage']` in detector config)
- **Cross-page navigation:** React Router `<Link>` components do not carry query params forward. When a user navigates internally (e.g. clicks "About" in the navbar), the `?lang=` param is dropped from the new URL — but `localStorage` retains the language selection, so the page still renders in the correct language. The URL param is useful for: initial load detection and external link sharing.
- Sharing `https://isibds.com/about?lang=zh` always opens the Chinese version

---

## 2. Language Switcher — Navbar

### Desktop
Placed between the nav links row and the "Download" CTA button:
```
[About] [Products & Solutions ▾] ... [Contact Us]   [ EN | 中文 ]   [ Download → ]
```

- Two text buttons separated by a thin divider (`|`)
- Active language: `text-accent` (`#D4622B`) + bottom underline using the existing `nav-indicator` Framer Motion `layoutId` pattern
- Inactive language: `text-steel` with hover to `text-primary`
- Text size/tracking matches existing nav items (`text-[11px] font-semibold tracking-[0.08em] uppercase`)

### Mobile
Appears in the mobile menu drawer, above the "Download" button:
```
[ EN ]  [ 中文 ]   ← two full-width buttons side by side
[ Download ]
```
Active language styled with `bg-accent/10 text-accent border-accent` (matches existing active mobile nav item pattern).

### Component
Language switcher is a small `LanguageSwitcher` component extracted into `src/components/layout/LanguageSwitcher.tsx`, used in both desktop and mobile sections of `Navbar.tsx`.

---

## 3. Translation Keys & Component Integration

### Key Naming Convention
Flat keys with dot-notation prefixes matching the component/page:

```json
"nav.about": "About",
"nav.products": "Products & Solutions",
"nav.industrySpecific": "Industry Specific",
"nav.portfolios": "Portfolios",
"nav.technology": "Technology",
"nav.careers": "Careers",
"nav.contact": "Contact Us",
"nav.download": "Download",
"nav.learnMore": "Learn more",

"hero.eyebrow": "ISI Building Solutions",
"hero.title": "Leader in\nPre-Engineered\nBuilding &\nSteel Structures",
"hero.subtitle": "Pioneering prefabrication to transform the construction industry...",
"hero.cta.explore": "Explore Projects",
"hero.cta.contact": "Contact Us",
"hero.stats.projects": "Projects Completed",
"hero.stats.years": "Years of Innovation",
"hero.stats.team": "Team Members",
```

### Component Integration Pattern
Every component rendering user-visible text:
```tsx
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return <h1>{t('hero.title')}</h1>;
};
```

### Scope — All 25 Files
**Layout components (3):**
- `Navbar.tsx` — nav item labels, mega menu names & descriptions, "Download", "Learn more"
- `Footer.tsx` — footer links, copyright, address
- `LanguageSwitcher.tsx` — new component, no translation keys needed

**Home section components (8):**
- `HeroSection.tsx` — headline, subtitle, CTA buttons, stat labels
- `VisionValuesSection.tsx` — section titles, vision/values copy
- `CompanyProfileSection.tsx` — company description, stats
- `ServicesSection.tsx` — service names and descriptions
- `PortfoliosHighlightSection.tsx` — section titles, project labels
- `TechnologySection.tsx` — section titles, technology descriptions
- `PeopleCultureSection.tsx` — section titles, culture copy
- `CTASection.tsx` — headline, CTA button

**Pages (16):**
- `About.tsx`, `Team.tsx`, `Careers.tsx`
- `ProductsSolutions.tsx`, `DesignBuild.tsx`, `BuildingSystems.tsx`
- `IndustryManufacturing.tsx`, `IndustryAgriculture.tsx`, `IndustryFoodBeverage.tsx`, `IndustryResidential.tsx`, `IndustryLogistics.tsx`, `IndustrySpecific.tsx`
- `Technology.tsx`, `Portfolios.tsx`
- `Services.tsx`, `Contact.tsx`

**Helmet/SEO:** Each page's `<Helmet>` title and meta description are also translated via `t()`.

---

## 4. What Stays Hardcoded (Not Translated)

- Route paths (`/about`, `/portfolios`, etc.)
- Brand product names: ISI PEB, ISI TRUSS, ISI Home, ISI Greenhouse, Heavy Steel Structures
- Company name: ISI Building Solutions
- Certification labels: ISO 9001:2015
- Email addresses, phone numbers
- Proper nouns: Cambodia, Kandal Province, Phum Kraing Sbov

---

## 5. Chinese Translation Quality 

- **Variant:** Simplified Chinese (简体中文)
- **Tone:** Formal, professional B2B — standard Mandarin business register
- **Target audience:** Chinese-speaking clients in Southeast Asia (primarily mainland China, Singapore)
- **Font:** No custom font needed — browser falls back to system CJK fonts (PingFang SC on macOS/iOS, Noto Sans SC on Android/Linux, Microsoft YaHei on Windows)

### Sample Translations
| English | Chinese |
|---|---|
| Leader in Pre-Engineered Building & Steel Structures | 预制建筑与钢结构领域的行业领导者 |
| Products & Solutions | 产品与解决方案 |
| Industry Specific | 行业解决方案 |
| Explore Projects | 探索项目 |
| Contact Us | 联系我们 |
| Years of Innovation | 年创新经验 |
| Manufacturing | 制造业 |
| Foods & Beverages | 食品与饮料 |
| Logistics | 物流 |
| Agriculture | 农业 |
| Residential | 住宅 |
| About | 关于我们 |
| Portfolios | 项目案例 |
| Technology | 技术 |
| Careers | 招聘 |
| Download | 下载 |

---

## 6. Build Sequence

1. Install dependencies: `i18next`, `react-i18next`, `i18next-browser-languagedetector`
2. Create `src/i18n.ts` and import in `main.tsx`
3. Create `src/locales/en.json` with all ~500 English keys
4. Create `src/locales/zh.json` with all ~500 Simplified Chinese translations
5. Create `src/components/layout/LanguageSwitcher.tsx`
6. Update `Navbar.tsx` — add `LanguageSwitcher`, wrap all text in `t()`
7. Update `Footer.tsx` — wrap all text in `t()`
8. Update all 8 home section components — wrap all text in `t()`
9. Update all 16 pages — wrap all text in `t()`
10. Run `npm run build` to confirm TypeScript passes with no unused locals errors
