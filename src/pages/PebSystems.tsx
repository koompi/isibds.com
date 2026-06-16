import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const BASE =
  "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/PEB/pre-engineered-building";
const PORT =
  "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/PEB/pre-engineered-building";

const NAV_IDS = [
  { id: "frame", key: "nav_frame" },
  { id: "secondary-framing", key: "nav_secondary" },
  { id: "bracing", key: "nav_bracing" },
  { id: "roof-wall-cladding", key: "nav_cladding" },
  { id: "sub-structural", key: "nav_substructural" },
  { id: "mezzanine", key: "nav_mezzanine" },
  { id: "crane", key: "nav_crane" },
  { id: "stair-handrail", key: "nav_stair" },
  { id: "accessories", key: "nav_accessories" },
  { id: "portfolio", key: "nav_portfolio" },
];

const portfolio = [
  {
    name: "OCIC",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-8.jpg`,
  },
  {
    name: "STORAGE WAREHOUSE",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-1.jpg`,
  },
  {
    name: "MTPC FACTORY",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-2.jpg`,
  },
  {
    name: "GARMENT FACTORY – PPSEZ",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-3.jpg`,
  },
  {
    name: "PHNOM PENH INTERNATIONAL AIRCRAFT SHED",
    location: "Phnom Penh",
    year: "2019",
    image: `${PORT}/Port-6.jpg`,
  },
  {
    name: "RICE MILL – KAMPONG THOM",
    location: "Kampong Thom",
    year: "2019",
    image: `${PORT}/Port-7.jpg`,
  },
  {
    name: "VITAL PREMIUM WATER FACTORY",
    location: "Phnom Penh",
    year: "2018",
    image: `${PORT}/Port-4.jpg`,
  },
  {
    name: "THE PREMIER CENTRE SEN SOK",
    location: "Phnom Penh",
    year: "2018",
    image: `${PORT}/Port-5.jpg`,
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

const PebSystems = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("frame");

  const navSections = NAV_IDS.map(({ id, key }) => ({
    id,
    label: t(`peb.${key}`),
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

  const whyReasons = [
    t("peb.why_r1"),
    t("peb.why_r2"),
    t("peb.why_r3"),
    t("peb.why_r4"),
    t("peb.why_r5"),
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      <Helmet>
        <title>{t("peb.metaTitle")}</title>
        <meta name="description" content={t("peb.metaDesc")} />
        <link
          rel="canonical"
          href="https://isibds.com/products-solutions/isi-peb/pre-engineered-buildings"
        />
      </Helmet>

      <div className="pt-[60px] md:pt-[72px] flex min-h-[calc(100vh-72px)]">
        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:block w-[280px] flex-shrink-0 sticky top-[72px] h-[calc(100vh-72px)] bg-slate-100 overflow-y-auto z-10">
          <div className="px-6 pt-10 pb-8 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-accent font-bold text-xl uppercase leading-snug tracking-tight hover:opacity-80 transition-opacity duration-200 whitespace-pre-line"
            >
              {t("peb.sidebar_title")}
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
        <main className="flex-1 min-w-0">
          {/* ── Intro Hero ── */}
          <section className="relative">
            <img
              src={`${BASE}/Pre-Engineered-1.jpg`}
              alt="ISI Pre-Engineered Building System Overview"
              className="w-full object-cover"
            />
            {/* Desktop overlay — hidden on mobile */}
            <div className="hidden lg:block absolute top-0 left-0 bg-accent/90 text-white p-8 max-w-[300px]">
              <h2 className="text-sm font-bold uppercase leading-snug tracking-wide mb-4">
                {t("peb.why_title")}
              </h2>
              <p className="text-xs leading-[1.8] mb-5">{t("peb.why_body")}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-80">
                {t("peb.why_reasons")}
              </p>
              <ul className="space-y-2">
                {whyReasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[10px] font-bold mt-0.5">
                      {i + 1}.
                    </span>
                    <span className="text-xs leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Mobile-only: WHY content below hero image */}
          <div className="lg:hidden bg-accent text-white px-6 py-8">
            <h2 className="text-base font-bold uppercase leading-snug tracking-wide mb-4">
              {t("peb.why_title")}
            </h2>
            <p className="text-sm leading-relaxed mb-6">{t("peb.why_body")}</p>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">
              {t("peb.why_reasons")}
            </p>
            <ol className="space-y-3">
              {whyReasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm font-bold flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-sm leading-relaxed">{r}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Sections ── */}
          <div className="bg-white">
            {/* INTRO TEXT + IMAGE */}
            <section className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100">
              <Fade>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.intro_body")}
                </p>
                <Img
                  src={`${BASE}/6cf7a062-59cf-412b-8584-28f01bf7163a.png`}
                  alt="ISI Pre-Engineered Building"
                />
              </Fade>
            </section>

            {/* MAIN FRAME TYPES */}
            <section
              id="frame"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.frame_title")}</SectionHeading>
                <Bullets
                  items={[t("peb.frame_b1"), t("peb.frame_b2")]}
                />
                <Img
                  src={`${BASE}/Pre-Engineered-2.png`}
                  alt="ISI Frame Features"
                />
              </Fade>
            </section>

            {/* SECONDARY FRAMING SYSTEMS */}
            <section
              id="secondary-framing"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.secondary_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.secondary_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-3.jpg`}
                  alt="Secondary Framing Systems"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-4.png`}
                  alt="Secondary Framing Dimensions"
                />
              </Fade>
            </section>

            {/* BRACING SYSTEMS */}
            <section
              id="bracing"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.bracing_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.bracing_body")}
                </p>
                <SubHeading>{t("peb.bracing_x_title")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.bracing_x_body")}
                </p>
                <SubHeading>{t("peb.bracing_portal_title")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.bracing_portal_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-6.jpg`}
                  alt="Portal Bracing System"
                />
              </Fade>
            </section>

            {/* ROOF & WALL CLADDING */}
            <section
              id="roof-wall-cladding"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.cladding_title")}</SectionHeading>

                <SubHeading>{t("peb.cladding_material_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.cladding_material_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-8.png`}
                  alt="Roof and Wall Cladding Material"
                />

                <SubHeading>{t("peb.cladding_roof_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed font-semibold mb-2">
                  {t("peb.cladding_roof_features")}
                </p>
                <Bullets
                  items={[
                    t("peb.cladding_roof_b1"),
                    t("peb.cladding_roof_b2"),
                    t("peb.cladding_roof_b3"),
                    t("peb.cladding_roof_b4"),
                    t("peb.cladding_roof_b5"),
                    t("peb.cladding_roof_b6"),
                    t("peb.cladding_roof_b7"),
                    t("peb.cladding_roof_b8"),
                    t("peb.cladding_roof_b9"),
                    t("peb.cladding_roof_b10"),
                  ]}
                />
                <p className="text-steel text-[15px] leading-relaxed mt-6">
                  {t("peb.cladding_roof_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-9.png`}
                  alt="ISI Roof System"
                />
                <SubHeading>{t("peb.cladding_rollformer_sub")}</SubHeading>
                <Img
                  src={`${BASE}/Pre-Engineered-10.jpg`}
                  alt="On-Site Roll-Former"
                />

                <SubHeading>{t("peb.cladding_wall_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed font-semibold mb-2">
                  {t("peb.cladding_wall_features")}
                </p>
                <Bullets
                  items={[
                    t("peb.cladding_wall_b1"),
                    t("peb.cladding_wall_b2"),
                    t("peb.cladding_wall_b3"),
                    t("peb.cladding_wall_b4"),
                    t("peb.cladding_wall_b5"),
                    t("peb.cladding_wall_b6"),
                    t("peb.cladding_wall_b7"),
                    t("peb.cladding_wall_b8"),
                    t("peb.cladding_wall_b9"),
                  ]}
                />
                <p className="text-steel text-[15px] leading-relaxed mt-6">
                  {t("peb.cladding_wall_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-11.png`}
                  alt="ISI Wall Profile"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-12.jpg`}
                  alt="ISI Wall Profile Detail"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-12.png`}
                  alt="ISI Wall Profile Diagram"
                />
              </Fade>
            </section>

            {/* SUB-STRUCTURAL SYSTEMS */}
            <section
              id="sub-structural"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.substructural_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.substructural_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-18.png`}
                  alt="Sub-Structural Systems"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-19.png`}
                  alt="Sub-Structural Detail"
                />
              </Fade>
            </section>

            {/* MEZZANINE SYSTEMS */}
            <section
              id="mezzanine"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.mezzanine_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.mezzanine_body1")}
                </p>
                <p className="text-steel text-[15px] leading-relaxed mt-4">
                  {t("peb.mezzanine_body2")}
                </p>
                <Bullets
                  items={[
                    t("peb.mezzanine_b1"),
                    t("peb.mezzanine_b2"),
                    t("peb.mezzanine_b3"),
                  ]}
                />
                <Img
                  src={`${BASE}/Pre-Engineered-13-1.jpg`}
                  alt="Mezzanine Systems"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-14.png`}
                  alt="Mezzanine Detail"
                />
              </Fade>
            </section>

            {/* CRANE SYSTEMS */}
            <section
              id="crane"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.crane_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.crane_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-15.png`}
                  alt="Crane Systems"
                />
              </Fade>
            </section>

            {/* STAIR & HANDRAIL SYSTEMS */}
            <section
              id="stair-handrail"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.stair_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.stair_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-24.jpg`}
                  alt="Stair and Handrail Systems"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-25.png`}
                  alt="Stair and Handrail Detail"
                />
              </Fade>
            </section>

            {/* ACCESSORIES */}
            <section
              id="accessories"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 border-b border-slate-100 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.accessories_title")}</SectionHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.accessories_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-16.jpg`}
                  alt="Doors, Windows and Louvers"
                />
                <Img
                  src={`${BASE}/Pre-Engineered-17.png`}
                  alt="Accessories Detail"
                />

                <SubHeading>{t("peb.connection_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.connection_body1")}
                </p>
                <p className="text-steel text-[15px] leading-relaxed mt-3">
                  {t("peb.connection_body2")}
                </p>
                <SubHeading>{t("peb.bolt_sub")}</SubHeading>
                <Img src={`${BASE}/Pre-Engineered-20.jpg`} alt="Bolt" />
                <Img src={`${BASE}/Pre-Engineered-21.png`} alt="Bolt Detail" />

                <SubHeading>{t("peb.fastener_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.fastener_body")}
                </p>
                <Img src={`${BASE}/Pre-Engineered-22.png`} alt="Fastener" />
                <Img
                  src={`${BASE}/Pre-Engineered-23.png`}
                  alt="Fastener Detail"
                />

                <SubHeading>{t("peb.trim_sub")}</SubHeading>
                <Img src={`${BASE}/Pre-Engineered-26.jpg`} alt="Trim" />
                <Img src={`${BASE}/Pre-Engineered-27.png`} alt="Trim Detail" />

                <SubHeading>{t("peb.insulation_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.insulation_body")}
                </p>
                <SubHeading>{t("peb.airbubble_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.airbubble_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-28.png`}
                  alt="Air Bubble Insulation"
                />
                <SubHeading>{t("peb.polyurethanes_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.polyurethanes_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-29.png`}
                  alt="Polyurethane Insulation"
                />
                <SubHeading>{t("peb.glasswool_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.glasswool_body")}
                </p>
                <Img
                  src={`${BASE}/Pre-Engineered-30.png`}
                  alt="Glass Wool Insulation"
                />

                <SubHeading>{t("peb.ventilator_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.ventilator_body")}
                </p>

                <SubHeading>{t("peb.skylight_sub")}</SubHeading>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("peb.skylight_body")}
                </p>
              </Fade>
            </section>

            {/* PORTFOLIO */}
            <section
              id="portfolio"
              className="px-6 py-10 md:px-10 md:py-14 lg:pl-12 lg:pr-[280px] lg:py-16 scroll-mt-[72px]"
            >
              <Fade>
                <SectionHeading>{t("peb.portfolio_title")}</SectionHeading>
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

export default PebSystems;
