import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const BASE =
  "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/PEB/multi-story-building-systems";
const PORT =
  "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/PEB/multi-story-building-systems";

const NAV_IDS = [
  { id: "structural-frame", key: "nav_structural" },
  { id: "composite-slab", key: "nav_composite" },
  { id: "applications", key: "nav_applications" },
  { id: "portfolio", key: "nav_portfolio" },
];

const portfolio = [
  {
    name: "RAINTREE",
    location: "Phnom Penh",
    year: "2015",
    image: `${PORT}/Port-MTD-1-400x284.jpg`,
  },
  {
    name: "CHIP MONG BAKTOUK COMMERCIAL CENTER",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-MTD-2-400x284.jpg`,
  },
  {
    name: "THE POINT COMMUNITY MALL",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-MTD-3-400x284.jpg`,
  },
  {
    name: "AEON MALL SEN SOK CITY",
    location: "Phnom Penh",
    year: "2018",
    image: `${PORT}/Port-MTD-4-400x284.jpg`,
  },
];

const Fade = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">
      {children}
    </h2>
    <div className="w-12 h-[3px] bg-accent mt-3" />
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-primary font-bold uppercase tracking-tight text-sm mb-3 mt-8">
    {children}
  </h3>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-[7px]" />
        <span className="text-steel text-[15px] leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full mt-8 object-cover" />
);

const SECTION_CLS =
  "px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]";

const MultiStorySystems = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("structural-frame");

  const navSections = NAV_IDS.map(({ id, key }) => ({
    id,
    label: t(`multiStory.${key}`),
  }));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 },
    );
    NAV_IDS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-primary-dark">
      <Helmet>
        <title>{t("multiStory.metaTitle")}</title>
        <meta name="description" content={t("multiStory.metaDesc")} />
        <link
          rel="canonical"
          href="https://isibds.com/products-solutions/isi-peb/multi-story-building-systems"
        />
      </Helmet>

      <div className="pt-[60px] md:pt-[72px] flex min-h-[calc(100vh-72px)]">
        {/* ── Left Sidebar — hidden on mobile, sticky on lg ── */}
        <aside className="hidden lg:block w-[280px] flex-shrink-0 sticky top-[72px] h-[calc(100vh-72px)] bg-slate-100 overflow-y-auto z-10">
          <div className="px-6 pt-10 pb-8 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-accent font-bold text-xl uppercase leading-snug tracking-tight hover:opacity-80 transition-opacity duration-200 whitespace-pre-line"
            >
              {t("multiStory.sidebar_title")}
            </button>
            <div className="w-10 h-px bg-steel/30 mx-auto my-5" />
            <nav className="w-full">
              {navSections.map((section, i) => (
                <div key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`w-full py-[14px] text-center text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-200 ${
                      active === section.id
                        ? "text-accent"
                        : "text-steel hover:text-primary"
                    }`}
                  >
                    {section.label}
                  </button>
                  {i < navSections.length - 1 && (
                    <div className="w-8 h-px bg-steel/20 mx-auto" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Right Content ── */}
        <main className="flex-1 min-w-0 w-full">
          {/* ── Intro Hero ── */}
          <section className="relative">
            <img
              src={`${BASE}/Multi-Story-6-1.jpg`}
              alt="ISI Multi-Story Building Systems Overview"
              className="w-full object-cover"
            />
          </section>

          {/* ── Sections ── */}
          <div className="bg-white">
            {/* STRUCTURAL FRAME AND CONNECTION */}
            <section id="structural-frame" className={SECTION_CLS}>
              <Fade>
                <SectionHeading>{t("multiStory.structural_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("multiStory.structural_body1")}
                </p>
                <p className="text-steel text-[15px] leading-relaxed mt-4">
                  {t("multiStory.structural_body2")}
                </p>
                <Img
                  src={`${BASE}/Multi-Story-1.jpg`}
                  alt="Structural Frame and Connection"
                />
                <Img
                  src={`${BASE}/Multi-Story-2.jpg`}
                  alt="Structural Frame Detail"
                />
              </Fade>
            </section>

            {/* COMPOSITE SLAB AND BEAM SYSTEMS */}
            <section id="composite-slab" className={SECTION_CLS}>
              <Fade>
                <SectionHeading>{t("multiStory.composite_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("multiStory.composite_body1")}
                </p>
                <p className="text-steel text-[15px] leading-relaxed mt-4">
                  {t("multiStory.composite_body2")}
                </p>
                <Img
                  src={`${BASE}/Multi-Story-3.jpg`}
                  alt="Composite Slab and Beam Systems"
                />
              </Fade>
            </section>

            {/* APPLICATIONS */}
            <section id="applications" className={SECTION_CLS}>
              <Fade>
                <SectionHeading>{t("multiStory.applications_title")}</SectionHeading>

                <SubHeading>{t("multiStory.carpark_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("multiStory.carpark_body")}
                </p>
                <Bullets
                  items={[
                    t("multiStory.carpark_b1"),
                    t("multiStory.carpark_b2"),
                    t("multiStory.carpark_b3"),
                    t("multiStory.carpark_b4"),
                    t("multiStory.carpark_b5"),
                  ]}
                />
                <Img
                  src={`${BASE}/Multi-Story-4.jpg`}
                  alt="Car Park Application"
                />

                <SubHeading>{t("multiStory.commercial_sub")}</SubHeading>
                <Bullets
                  items={[
                    t("multiStory.commercial_b1"),
                    t("multiStory.commercial_b2"),
                    t("multiStory.commercial_b3"),
                  ]}
                />
                <Img
                  src={`${BASE}/Multi-Story-5.jpg`}
                  alt="Commercial Building Application"
                />

                <SubHeading>{t("multiStory.office_sub")}</SubHeading>
                <Bullets
                  items={[
                    t("multiStory.office_b1"),
                    t("multiStory.office_b2"),
                    t("multiStory.office_b3"),
                  ]}
                />
              </Fade>
            </section>

            {/* PORTFOLIO */}
            <section
              id="portfolio"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("multiStory.portfolio_title")}</SectionHeading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolio.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-44 object-cover"
                      />
                      <div className="mt-3">
                        <p className="text-primary font-bold text-[11px] uppercase tracking-tight leading-snug">
                          {project.name}
                        </p>
                        <p className="text-steel text-[11px] mt-0.5">
                          {project.location} — {project.year}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Fade>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MultiStorySystems;
