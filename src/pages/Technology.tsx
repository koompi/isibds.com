import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Technology = () => {
  const { t } = useTranslation();

  const software = [
    {
      name: "Microsoft Dynamics AX",
      category: t("technology.tool_microsoftDynamics_cat"),
      description: t("technology.tool_microsoftDynamics_desc"),
      logo: "/images/micro.png",
    },
    {
      name: "Tekla BIM",
      category: t("technology.tool_teklaBim_cat"),
      description: t("technology.tool_teklaBim_desc"),
      logo: "/images/tekla.png",
    },
    {
      name: "Metal Building Software (MBS)",
      category: t("technology.tool_mbs_cat"),
      description: t("technology.tool_mbs_desc"),
      logo: "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/logo-mbs.png",
    },
    {
      name: "SCIA Engineer",
      category: t("technology.tool_scia_cat"),
      description: t("technology.tool_scia_desc"),
      logo: "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/logo-scia.png",
    },
    {
      name: "ETABS",
      category: t("technology.tool_etabs_cat"),
      description: t("technology.tool_etabs_desc"),
      logo: "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/logo-etabs.png",
    },
    {
      name: "CFS",
      category: t("technology.tool_cfs_cat"),
      description: t("technology.tool_cfs_desc"),
      logo: "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/logo-cfs.png",
    },
    {
      name: "Framecad",
      category: t("technology.tool_framecad_cat"),
      description: t("technology.tool_framecad_desc"),
      logo: "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/logo-framecad.png",
    },
  ];

  const systems = [
    {
      title: t("technology.bim_title"),
      description: t("technology.bim_desc"),
      benefits: [
        t("technology.bim_b1"),
        t("technology.bim_b2"),
        t("technology.bim_b3"),
        t("technology.bim_b4"),
      ],
    },
    {
      title: t("technology.mfgSystems_title"),
      description: t("technology.mfgSystems_desc"),
      benefits: [
        t("technology.mfgSystems_b1"),
        t("technology.mfgSystems_b2"),
        t("technology.mfgSystems_b3"),
        t("technology.mfgSystems_b4"),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("technology.metaTitle")}</title>
        <meta name="description" content={t("technology.metaDesc")} />
        <meta property="og:title" content={t("technology.metaTitle")} />
        <meta property="og:description" content={t("technology.metaDesc")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isibds.com/technology" />
        <link rel="canonical" href="https://isibds.com/technology" />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/Homes-7-1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-primary-dark/80"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-accent"></div>
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                    {t("technology.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                  {t("technology.hero_titleLine1")}
                  <br />
                  {t("technology.hero_titleLine2")}
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("technology.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 mb-12 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("technology.approach_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("technology.approach_titleLine1")}
                <br />
                {t("technology.approach_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("technology.approach_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed">
                {t("technology.approach_p2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/technology-bds.png"
                    alt="Technology in Action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="py-28 bg-surface-light">
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
                {t("technology.coreSystems_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight leading-tight">
              <span className="block mb-2 lg:mb-3">{t("technology.coreSystems_titleLine1")}</span>
              <span className="block">{t("technology.coreSystems_titleLine2")}</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-white p-8 lg:p-12 border-l-4 border-accent"
              >
                <h3 className="text-2xl font-bold text-primary tracking-tight mb-4">
                  {system.title}
                </h3>
                <p className="text-steel text-base leading-relaxed mb-8 max-w-3xl">
                  {system.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {system.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2"></div>
                      <span className="text-steel text-[15px]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-28 bg-white">
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
                {t("technology.toolkit_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("technology.toolkit_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {software.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="bg-white border border-slate-200 p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="h-10 flex items-center justify-start mb-8">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="max-h-full w-auto object-contain opacity-70  group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <span className="text-xs text-accent font-bold tracking-wider uppercase block mb-2">
                  {tool.category}
                </span>
                <h3 className="text-lg font-bold text-primary tracking-tight mb-3">
                  {tool.name}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-28 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 mb-12 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("technology.impact_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6">
                {t("technology.impact_titleLine1")}
                <br />
                {t("technology.impact_titleLine2")}
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                {t("technology.impact_desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50%+", label: t("technology.impact_timeReduction") },
                  { value: "99.9%", label: t("technology.impact_designAccuracy") },
                  { value: "100%", label: t("technology.impact_digitalIntegration") },
                  { value: "30%+", label: t("technology.impact_costEfficiency") },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center py-8 border border-white/10"
                  >
                    <div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 mb-8 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
                {t("technology.cta_titleLine1")}
                <br />
                {t("technology.cta_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mt-4 max-w-lg">
                {t("technology.cta_subtitle")}
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
                to="/portfolios"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
              >
                {t("technology.cta_button")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
