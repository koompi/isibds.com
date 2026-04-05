# Products & Solutions Page Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the `/services/building-systems` page from a long-scroll detailed content page into a hierarchical flowchart navigation with 5 separate product detail pages.

**Architecture:**
- Main page becomes a navigation hub with interactive tree diagram
- Product content moves to dedicated routes with SEO optimization
- Component-based architecture with reusable UI elements
- Mobile-first responsive design with Framer Motion animations

**Tech Stack:** React 19, TypeScript, React Router DOM 7, Framer Motion, Tailwind CSS 3, Lucide React icons

---

## Phase 1: Setup & Data Structure

### Task 1.1: Create Product Data File

**Files:**
- Create: `src/data/products.ts`

**Step 1: Create TypeScript interface and product data**

```typescript
// src/data/products.ts
export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  images: string[];
  specialFeatures: string;
}

export const products: Product[] = [
  {
    id: "isi-peb",
    title: "ISI PEB",
    shortDescription: "Complete pre-engineered building systems for industrial and commercial applications",
    fullDescription: "ISI Pre-Engineered Buildings (PEB) is a complete systems package that incorporates new features of standing seam roofing solution, attractive wall cladding, standardized trim, and other accessories, providing excellent performance in terms of speed, cost effectiveness, long-term durability, functionality, appearance, and especially water leakage prevention. Ideal for both industrial and commercial applications such as warehouses, logistics facilities, and complex structures.",
    keyFeatures: [
      "Adaptable building codes",
      "Superior materials specifications",
      "Fast design and delivery timelines",
      "Cost savings up to 30% vs conventional",
      "Wide clear spans up to 60+ meters",
      "Easy future expansion capabilities"
    ],
    images: [
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-sunfair.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg"
    ],
    specialFeatures: "Sunfair Factory and Marvel Garment"
  },
  {
    id: "heavy-steel-structures",
    title: "Heavy Steel Structures",
    shortDescription: "Specialized steel structural systems for vertical construction projects",
    fullDescription: "Specialized steel structural systems for vertical construction projects, including office buildings, shopping malls, showrooms, parking structures, and mixed-use developments. Engineered for strength, efficiency, and architectural flexibility. Our steel structures are fabricated into precise shapes and sizes according to the technical requirements of each project.",
    keyFeatures: [
      "Launch business sooner with 30% faster construction",
      "Maximize space with 90-meter column-free spans",
      "Reduce foundation costs with lightweight steel frames",
      "Ensure perfect assembly using precision 3D design",
      "Achieve modern looks impossible with traditional concrete"
    ],
    images: [
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/aeon.jpg"
    ],
    specialFeatures: "Aeon Mall Mean Chey"
  },
  {
    id: "isi-greenhouse",
    title: "ISI Greenhouse",
    shortDescription: "High-quality pre-engineered structural solution for modern agriculture",
    fullDescription: "ISI Greenhouse is designed as a high-quality, pre-engineered structural solution tailored for the modern agricultural landscape. It focuses on durability, climate control, and rapid assembly to support sustainable farming and commercial operations.",
    keyFeatures: [
      "Control climate for consistent, year-round farming success",
      "Maximize profits with durable and stable structures",
      "Withstand high winds using UV-protected, rust-resistant steel",
      "Expand easily with fast installation and relocation",
      "Aesthetic design, built for multi-purpose creativity"
    ],
    images: [
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/fdbb47e0-1a89-4d40-873f-db814d12c4fc.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/29e4080a-07b0-43e5-a85d-d6ab1b9b4bb3.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/b606730b-936b-421f-8047-dacdc4e39861.jpg"
    ],
    specialFeatures: "Greenhouse projects"
  },
  {
    id: "isi-roofing-solutions",
    title: "ISI Roofing Solutions",
    shortDescription: "Comprehensive roofing systems designed for tropical climates",
    fullDescription: "ISI Roofing Solutions offers a comprehensive range of roofing systems designed for durability, aesthetic appeal, and high performance in tropical climates. We cater to residential, commercial, warehouse, and heavy industrial applications, focusing on advanced coating technologies and structural integrity.",
    keyFeatures: [
      "Water leakage prevention",
      "Lower electricity bills with heat-reflecting advanced insulation",
      "Lock out water with 360-degree seaming technology",
      "Extend building life with climate-resistant protective coatings"
    ],
    images: [
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-solution-1.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-2.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-3.jpg"
    ],
    specialFeatures: "Roofing solutions gallery"
  },
  {
    id: "isi-home",
    title: "ISI Home",
    shortDescription: "Innovative housing solutions blending Khmer aesthetics with modern engineering",
    fullDescription: "ISI Homes offers innovative housing solutions that blend traditional Khmer aesthetics with modern engineering. Designed for safety, health, and affordability, we provide rural and suburban communities with high-quality homes built for lasting stability.",
    keyFeatures: [
      "Integrated bathrooms and clean water for a healthy home",
      "Advanced insulation to maintain a cool, energy-efficient interior",
      "Strong steel frames built to last generations",
      "Quick on-site assembly without cutting quality"
    ],
    images: [
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-1.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-2.jpg",
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-3.jpg"
    ],
    specialFeatures: "ISI Home projects"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsExcept(currentId: string): Product[] {
  return products.filter(p => p.id !== currentId);
}
```

**Step 2: Commit**

```bash
git add src/data/products.ts
git commit -m "feat: add product data structure with 5 products"
```

---

### Task 1.2: Add Routes to App.tsx

**Files:**
- Modify: `src/App.tsx:8-42`

**Step 1: Add imports for new product pages**

```typescript
// Add after line 8
import ISIPeb from "./pages/products/ISIPeb";
import HeavySteelStructures from "./pages/products/HeavySteelStructures";
import ISIGreenhouse from "./pages/products/ISIGreenhouse";
import ISIRoofingSolutions from "./pages/products/ISIRoofingSolutions";
import ISIHome from "./pages/products/ISIHome";
```

**Step 2: Add routes in Routes component**

```typescript
// Add after line 35 (before closing Routes tag)
<Route
  path="/services/building-systems/isi-peb"
  element={<ISIPeb />}
/>
<Route
  path="/services/building-systems/heavy-steel-structures"
  element={<HeavySteelStructures />}
/>
<Route
  path="/services/building-systems/isi-greenhouse"
  element={<ISIGreenhouse />}
/>
<Route
  path="/services/building-systems/isi-roofing-solutions"
  element={<ISIRoofingSolutions />}
/>
<Route
  path="/services/building-systems/isi-home"
  element={<ISIHome />}
/>
```

**Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add routes for 5 product detail pages"
```

---

### Task 1.3: Create Product Pages Directory

**Files:**
- Create: `src/pages/products/`

**Step 1: Create directory**

```bash
mkdir -p src/pages/products
```

**Step 2: Create placeholder components**

Create 5 empty files:
- `src/pages/products/ISIPeb.tsx`
- `src/pages/products/HeavySteelStructures.tsx`
- `src/pages/products/ISIGreenhouse.tsx`
- `src/pages/products/ISIRoofingSolutions.tsx`
- `src/pages/products/ISIHome.tsx`

Each file should contain:
```typescript
const ComponentName = () => {
  return <div>Coming soon</div>;
};

export default ComponentName;
```

**Step 3: Commit**

```bash
git add src/pages/products/
git commit -m "feat: create product page placeholders"
```

---

## Phase 2: Product Page Components

### Task 2.1: Create BreadcrumbNav Component

**Files:**
- Create: `src/components/products/BreadcrumbNav.tsx`

**Step 1: Create breadcrumb component**

```typescript
// src/components/products/BreadcrumbNav.tsx
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbNavProps {
  productName: string;
}

const BreadcrumbNav = ({ productName }: BreadcrumbNavProps) => {
  return (
    <nav className="container mx-auto px-4 lg:px-8 pt-8 pb-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to="/services/building-systems"
            className="text-steel hover:text-accent transition-colors"
          >
            Products & Solutions
          </Link>
        </li>
        <li>
          <ChevronRight size={16} className="text-steel/40" />
        </li>
        <li className="text-primary font-semibold">{productName}</li>
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
```

**Step 2: Commit**

```bash
git add src/components/products/BreadcrumbNav.tsx
git commit -m "feat: add breadcrumb navigation component"
```

---

### Task 2.2: Extract ImageSlider Component

**Files:**
- Create: `src/components/common/ImageSlider.tsx`
- Reference: `src/pages/BuildingSystems.tsx:279-367`

**Step 1: Extract slider logic into reusable component**

```typescript
// src/components/common/ImageSlider.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  title: string;
  alignment?: "left" | "right";
}

const ImageSlider = ({ images, title, alignment = "left" }: ImageSliderProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  const positionClass = alignment === "right" ? "left-6" : "right-6";
  const counterClass = alignment === "right" ? "right-6" : "left-6";
  const borderClass = alignment === "right" ? "-left-6" : "-right-6";

  return (
    <div className="relative group">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={images[currentImg]}
            alt={`${title} scene ${currentImg + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className={`absolute bottom-6 ${positionClass} flex gap-2 z-10`}>
        <button
          onClick={prevImg}
          className="w-12 h-12 bg-white/90 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImg}
          className="w-12 h-12 bg-white/90 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={`absolute top-6 ${counterClass} font-bold text-white drop-shadow-md text-xs tracking-widest`}>
        {currentImg + 1} / {images.length}
      </div>

      <div className={`absolute -bottom-6 ${borderClass} w-full h-full border-2 border-accent/10 -z-10`}></div>
    </div>
  );
};

export default ImageSlider;
```

**Step 2: Commit**

```bash
git add src/components/common/ImageSlider.tsx
git commit -m "feat: extract reusable image slider component"
```

---

### Task 2.3: Create ProductDetailPage Template

**Files:**
- Create: `src/components/products/ProductDetailPage.tsx`

**Step 1: Create product detail page template component**

```typescript
// src/components/products/ProductDetailPage.tsx
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BreadcrumbNav from "./BreadcrumbNav";
import ImageSlider from "../common/ImageSlider";
import { Product, getProductsExcept } from "../../data/products";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const relatedProducts = getProductsExcept(product.id);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{product.title} | Products & Solutions | ISI Building Solutions</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={`${product.title} | ISI Building Solutions`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://isibds.com/services/building-systems/${product.id}`} />
        <link rel="canonical" href={`https://isibds.com/services/building-systems/${product.id}`} />
      </Helmet>

      <BreadcrumbNav productName={product.title} />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                Products & Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight uppercase mb-8">
              {product.title}
            </h1>
            <p className="text-steel text-lg leading-relaxed max-w-3xl">
              {product.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              Key Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {product.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2"></div>
                  <span className="text-steel text-[15px] font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              Gallery
            </h2>
            <ImageSlider images={product.images} title={product.title} />
          </motion.div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/services/building-systems/${related.id}`}
                  className="group bg-white p-6 border-t-2 border-accent/20 hover:border-accent transition-all"
                >
                  <h3 className="text-primary font-bold mb-2 group-hover:text-accent transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-steel text-sm line-clamp-2">{related.shortDescription}</p>
                  <span className="text-accent text-xs font-bold mt-4 inline-block group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 mb-8 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Ready to Start
                <br />
                Your Project?
              </h2>
              <p className="text-white/45 text-base leading-relaxed mt-4 max-w-lg">
                Let's discuss how our {product.title} can meet your specific requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolios"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-8 hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
```

**Step 2: Commit**

```bash
git add src/components/products/ProductDetailPage.tsx
git commit -m "feat: create product detail page template component"
```

---

### Task 2.4: Implement All 5 Product Pages

**Files:**
- Modify: All 5 product page files in `src/pages/products/`

**Step 1: Update ISIPeb.tsx**

```typescript
// src/pages/products/ISIPeb.tsx
import ProductDetailPage from "../../components/products/ProductDetailPage";
import { getProductById } from "../../data/products";

const ISIPeb = () => {
  const product = getProductById("isi-peb");
  if (!product) return <div>Product not found</div>;
  return <ProductDetailPage product={product} />;
};

export default ISIPeb;
```

**Step 2: Update HeavySteelStructures.tsx**

```typescript
// src/pages/products/HeavySteelStructures.tsx
import ProductDetailPage from "../../components/products/ProductDetailPage";
import { getProductById } from "../../data/products";

const HeavySteelStructures = () => {
  const product = getProductById("heavy-steel-structures");
  if (!product) return <div>Product not found</div>;
  return <ProductDetailPage product={product} />;
};

export default HeavySteelStructures;
```

**Step 3: Update ISIGreenhouse.tsx**

```typescript
// src/pages/products/ISIGreenhouse.tsx
import ProductDetailPage from "../../components/products/ProductDetailPage";
import { getProductById } from "../../data/products";

const ISIGreenhouse = () => {
  const product = getProductById("isi-greenhouse");
  if (!product) return <div>Product not found</div>;
  return <ProductDetailPage product={product} />;
};

export default ISIGreenhouse;
```

**Step 4: Update ISIRoofingSolutions.tsx**

```typescript
// src/pages/products/ISIRoofingSolutions.tsx
import ProductDetailPage from "../../components/products/ProductDetailPage";
import { getProductById } from "../../data/products";

const ISIRoofingSolutions = () => {
  const product = getProductById("isi-roofing-solutions");
  if (!product) return <div>Product not found</div>;
  return <ProductDetailPage product={product} />;
};

export default ISIRoofingSolutions;
```

**Step 5: Update ISIHome.tsx**

```typescript
// src/pages/products/ISIHome.tsx
import ProductDetailPage from "../../components/products/ProductDetailPage";
import { getProductById } from "../../data/products";

const ISIHome = () => {
  const product = getProductById("isi-home");
  if (!product) return <div>Product not found</div>;
  return <ProductDetailPage product={product} />;
};

export default ISIHome;
```

**Step 6: Commit**

```bash
git add src/pages/products/
git commit -m "feat: implement all 5 product detail pages"
```

---

## Phase 3: Flowchart Diagram Components

### Task 3.1: Create ProductTooltip Component

**Files:**
- Create: `src/components/products/ProductTooltip.tsx`

**Step 1: Create tooltip component**

```typescript
// src/components/products/ProductTooltip.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductTooltipProps {
  product: {
    id: string;
    title: string;
    shortDescription: string;
  };
  position: { x: number; y: number };
  onClose: () => void;
}

const ProductTooltip = ({ product, position, onClose }: ProductTooltipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="fixed z-50 bg-white border-2 border-accent/20 shadow-xl p-6 max-w-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -100%) translateY(-20px)"
      }}
      onMouseLeave={onClose}
    >
      <h3 className="text-xl font-bold text-primary mb-3">{product.title}</h3>
      <p className="text-steel text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
      <Link
        to={`/services/building-systems/${product.id}`}
        className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
        onClick={onClose}
      >
        View Details
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ProductTooltip;
```

**Step 2: Commit**

```bash
git add src/components/products/ProductTooltip.tsx
git commit -m "feat: add product tooltip preview component"
```

---

### Task 3.2: Create ProductNode Component

**Files:**
- Create: `src/components/products/ProductNode.tsx`

**Step 1: Create product node component**

```typescript
// src/components/products/ProductNode.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProductTooltip from "./ProductTooltip";
import { Product } from "../../data/products";

interface ProductNodeProps {
  product: Product;
  index: number;
}

const ProductNode = ({ product, index }: ProductNodeProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top
      });
    }
    setShowTooltip(true);
  };

  return (
    <>
      <motion.div
        ref={nodeRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Connecting Line */}
        <div className="absolute -top-8 left-1/2 w-px h-8 bg-accent/30"></div>
        <div className="absolute -top-8 left-1/2 w-3 h-3 border-2 border-accent bg-white -translate-x-1/2"></div>

        {/* Main Node Card */}
        <div className="bg-white border-2 border-accent/20 p-6 hover:border-accent transition-all cursor-pointer group min-w-[200px]">
          <h3 className="text-primary font-bold text-lg mb-4 group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          {/* Branch Nodes */}
          <div className="flex gap-3">
            <div className="flex-1 bg-surface-light p-3 border-t-2 border-accent/10">
              <span className="text-accent text-[10px] font-bold tracking-widest uppercase block">
                About
              </span>
            </div>
            <div className="flex-1 bg-surface-light p-3 border-t-2 border-accent/10">
              <span className="text-accent text-[10px] font-bold tracking-widest uppercase block">
                Key Features
              </span>
            </div>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-accent/30 w-5 h-5" />
        </div>
      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <ProductTooltip
          product={product}
          position={tooltipPosition}
          onClose={() => setShowTooltip(false)}
        />
      )}
    </>
  );
};

export default ProductNode;
```

**Step 2: Commit**

```bash
git add src/components/products/ProductNode.tsx
git commit -m "feat: add product node component with hover tooltip"
```

---

### Task 3.3: Create ProductTreeDiagram Component

**Files:**
- Create: `src/components/products/ProductTreeDiagram.tsx`

**Step 1: Create tree diagram component**

```typescript
// src/components/products/ProductTreeDiagram.tsx
import { motion } from "framer-motion";
import ProductNode from "./ProductNode";
import { products } from "../../data/products";

const ProductTreeDiagram = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
              Products & Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
            Explore Our Products
          </h2>
          <p className="text-steel text-base mt-4 max-w-2xl">
            Click on any product below to view detailed information, features, and galleries.
          </p>
        </motion.div>

        {/* Tree Structure */}
        <div className="max-w-6xl mx-auto">
          {/* Root Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-primary text-white px-12 py-6 border-2 border-accent">
              <h3 className="text-2xl font-bold tracking-tight">Products & Solutions</h3>
            </div>
          </motion.div>

          {/* Main Vertical Line */}
          <div className="flex justify-center mb-12">
            <div className="w-px h-16 bg-gradient-to-b from-accent to-accent/30"></div>
          </div>

          {/* Horizontal Connector */}
          <div className="relative mb-12">
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-accent/30"></div>
            <div className="flex justify-between gap-4 lg:gap-8">
              {products.map((product, index) => (
                <div key={product.id} className="flex-1 flex justify-center">
                  <ProductNode product={product} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTreeDiagram;
```

**Step 2: Commit**

```bash
git add src/components/products/ProductTreeDiagram.tsx
git commit -m "feat: add product tree diagram component"
```

---

### Task 3.4: Add Mobile Responsiveness to Tree Diagram

**Files:**
- Modify: `src/components/products/ProductTreeDiagram.tsx:45-70`

**Step 1: Update tree diagram for mobile responsiveness**

Replace the tree structure section with:

```typescript
{/* Tree Structure */}
<div className="max-w-4xl mx-auto">
  {/* Root Node */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex justify-center mb-8 md:mb-12"
  >
    <div className="bg-primary text-white px-8 md:px-12 py-4 md:py-6 border-2 border-accent">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-center">
        Products & Solutions
      </h3>
    </div>
  </motion.div>

  {/* Product Nodes - Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative"
      >
        {/* Mobile Arrow Connector */}
        <div className="hidden md:block absolute -top-4 left-1/2 w-px h-4 bg-accent/30 -translate-x-1/2"></div>

        <div className="bg-white border-2 border-accent/20 p-6 hover:border-accent transition-all cursor-pointer group h-full">
          <h3 className="text-primary font-bold text-base md:text-lg mb-4 group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          {/* Branch Nodes */}
          <div className="flex gap-2 md:gap-3">
            <div className="flex-1 bg-surface-light p-2 md:p-3 border-t-2 border-accent/10">
              <span className="text-accent text-[9px] md:text-[10px] font-bold tracking-widest uppercase block">
                About
              </span>
            </div>
            <div className="flex-1 bg-surface-light p-2 md:p-3 border-t-2 border-accent/10">
              <span className="text-accent text-[9px] md:text-[10px] font-bold tracking-widest uppercase block">
                Key Features
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Arrow */}
        <div className="md:hidden flex justify-center mt-4">
          <div className="w-px h-8 bg-accent/30"></div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
```

**Step 2: Commit**

```bash
git add src/components/products/ProductTreeDiagram.tsx
git commit -m "feat: add mobile responsive layout to tree diagram"
```

---

## Phase 4: Integration & Testing

### Task 4.1: Modify BuildingSystems Page

**Files:**
- Modify: `src/pages/BuildingSystems.tsx:172-251`

**Step 1: Remove detailed product sections**

Delete lines 253-381 (the entire building systems sections with detailed content).

**Step 2: Add tree diagram import**

Add at top after line 5:
```typescript
import ProductTreeDiagram from "../components/products/ProductTreeDiagram";
```

**Step 3: Replace detailed sections with tree diagram**

Replace deleted section with:
```typescript
{/* Product Tree Diagram */}
<ProductTreeDiagram />
```

Place it after the Industry Vertical Solutions section (after line 251).

**Step 4: Commit**

```bash
git add src/pages/BuildingSystems.tsx
git commit -m "feat: replace detailed sections with product tree diagram"
```

---

### Task 4.2: Update Page Metadata

**Files:**
- Modify: `src/pages/BuildingSystems.tsx:148-171`

**Step 1: Update meta description**

Update the meta description on line 152:
```typescript
<meta
  name="description"
  content="Explore ISI's complete range of products and solutions including pre-engineered buildings, steel structures, greenhouses, roofing systems, and residential homes."
/>
```

**Step 2: Commit**

```bash
git add src/pages/BuildingSystems.tsx
git commit -m "feat: update building systems page metadata"
```

---

### Task 4.3: Type Check and Build

**Step 1: Run type check**

```bash
npm run build
```

Expected: No TypeScript errors, successful build

**Step 2: Fix any type errors if present**

If there are type errors, fix them and re-run build.

**Step 3: Commit**

```bash
git commit --allow-empty -m "test: verify build passes"
```

---

### Task 4.4: Manual Testing Checklist

**Step 1: Start dev server**

```bash
npm run dev
```

**Step 2: Test main page**

Navigate to `http://localhost:5173/services/building-systems`

Verify:
- ✅ Hero section displays
- ✅ Industry Vertical Solutions section displays
- ✅ Product tree diagram displays with 5 products
- ✅ Hovering over products shows tooltip
- ✅ Clicking products navigates to correct page
- ✅ CTA section displays

**Step 3: Test product pages**

Navigate to each product page:
- `/services/building-systems/isi-peb`
- `/services/building-systems/heavy-steel-structures`
- `/services/building-systems/isi-greenhouse`
- `/services/building-systems/isi-roofing-solutions`
- `/services/building-systems/isi-home`

Verify for each:
- ✅ Breadcrumb navigation works
- ✅ Product title displays
- ✅ Full description displays
- ✅ Key features list displays
- ✅ Image slider works (prev/next buttons, counter)
- ✅ Related products section displays
- ✅ CTA section displays
- ✅ Meta tags present (check browser dev tools)

**Step 4: Test mobile responsiveness**

Resize browser to mobile width (< 768px)

Verify:
- ✅ Tree diagram stacks vertically
- ✅ Product cards are full width
- ✅ Tooltips still work (tap instead of hover)
- ✅ All content is readable
- ✅ Navigation is touch-friendly

**Step 5: Test navigation**

Verify:
- ✅ Breadcrumb "Products & Solutions" link returns to main page
- ✅ Related products links navigate correctly
- ✅ CTA buttons work (Contact Us, View Projects)
- ✅ Browser back/forward buttons work
- ✅ Direct URL navigation works

**Step 6: Test images**

Verify:
- ✅ All product images load without errors
- ✅ Image slider animations work smoothly
- ✅ No broken image links

---

### Task 4.5: Final Commit and Tag

**Step 1: Review all changes**

```bash
git diff
git log --oneline
```

**Step 2: Create final commit**

```bash
git commit --allow-empty -m "feat: complete products & solutions page redesign

- Implemented product tree diagram navigation
- Created 5 separate product detail pages
- Added breadcrumb navigation
- Extracted reusable image slider component
- Added mobile responsive layout
- Implemented SEO metadata for all pages

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

**Step 3: Create git tag**

```bash
git tag -a v1.0.0-products-redesign -m "Products & Solutions Page Redesign"
```

---

## Success Criteria

✅ All 5 product pages accessible via routes
✅ Product tree diagram displays on main page
✅ Hover tooltips show preview content
✅ Navigation works between all pages
✅ Image sliders function correctly
✅ Mobile layout is responsive
✅ All images load without errors
✅ SEO metadata present on all pages
✅ No TypeScript errors
✅ No console errors in browser
✅ Build completes successfully

---

## Notes

- **Product Data:** Sourced from PDF document provided by user
- **Images:** Using existing URLs from current website
- **ISI Truss:** Removed (not in scope per user feedback)
- **ISI Roofing Solutions:** Included (confirmed by user)
- **Animations:** Framer Motion for smooth transitions
- **Responsive:** Mobile-first approach with Tailwind breakpoints
