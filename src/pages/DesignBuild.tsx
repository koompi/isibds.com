import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  DollarSign,
  Zap,
  HardHat,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DesignBuild = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Leaf,
      title: t("designBuild.ben_eco_title"),
      description: t("designBuild.ben_eco_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("designBuild.ben_quality_title"),
      description: t("designBuild.ben_quality_desc"),
    },
    {
      icon: DollarSign,
      title: t("designBuild.ben_financial_title"),
      description: t("designBuild.ben_financial_desc"),
    },
    {
      icon: Zap,
      title: t("designBuild.ben_fast_title"),
      description: t("designBuild.ben_fast_desc"),
    },
    {
      icon: HardHat,
      title: t("designBuild.ben_safety_title"),
      description: t("designBuild.ben_safety_desc"),
    },
  ];

  const process = [
    {
      step: "01",
      title: t("designBuild.step1_title"),
      description: t("designBuild.step1_desc"),
    },
    {
      step: "02",
      title: t("designBuild.step2_title"),
      description: t("designBuild.step2_desc"),
    },
    {
      step: "03",
      title: t("designBuild.step3_title"),
      description: t("designBuild.step3_desc"),
    },
    {
      step: "04",
      title: t("designBuild.step4_title"),
      description: t("designBuild.step4_desc"),
    },
    {
      step: "05",
      title: t("designBuild.step5_title"),
      description: t("designBuild.step5_desc"),
    },
    {
      step: "06",
      title: t("designBuild.step6_title"),
      description: t("designBuild.step6_desc"),
    },
  ];

  const collaborators = [
    t("designBuild.collab_architects"),
    t("designBuild.collab_designers"),
    t("designBuild.collab_consultants"),
    t("designBuild.collab_contractors"),
    t("designBuild.collab_engineers"),
    t("designBuild.collab_trades"),
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("designBuild.metaTitle")}</title>
        <meta name="description" content={t("designBuild.metaDesc")} />
        <meta property="og:title" content={t("designBuild.metaTitle")} />
        <meta property="og:description" content={t("designBuild.metaDesc")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isibds.com/services/design-build" />
        <link rel="canonical" href="https://isibds.com/services/design-build" />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/design-build.jpg')] bg-cover bg-center"></div>
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
                    {t("designBuild.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                  {t("designBuild.hero_title")}
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("designBuild.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Design & Build */}
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
                  {t("designBuild.why_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("designBuild.why_title")}
              </h2>
              <p className="text-steel text-lg leading-relaxed mb-6">
                {t("designBuild.why_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed mb-8">
                {t("designBuild.why_p2")}
              </p>

              <div className="flex items-start gap-4 bg-surface-light p-6 border-l-4 border-accent">
                <Users size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {t("designBuild.collab_title")}
                  </h3>
                  <p className="text-steel text-[15px] leading-relaxed">
                    {t("designBuild.collab_desc")}
                  </p>
                </div>
              </div>
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
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-techo-airport-2.jpg"
                    alt="Design & Build Process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Prefab - Benefits */}
      <section className="py-28 bg-primary-dark relative overflow-hidden">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -bottom-8 right-0 text-[16vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
          PREFAB
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
        <div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                {t("designBuild.prefab_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              {t("designBuild.prefab_title")}
            </h2>
          </motion.div>

          {/* Asymmetric grid: first row has 2 larger items, second row has 3 standard items */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-white/[0.06]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`group bg-primary-dark border border-white/10 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300 ${index < 2 ? "md:col-span-3 p-10 lg:p-12" : "md:col-span-2 p-8 lg:p-10"}`}
              >
                <div className="text-[10px] text-white/25 tracking-[0.25em] uppercase font-mono mb-5">
                  {String(index + 1).padStart(2, "0")} —
                </div>
                <div className={`border border-white/15 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 ${index < 2 ? "w-12 h-12" : "w-10 h-10"}`}>
                  <benefit.icon size={index < 2 ? 24 : 20} className="text-accent" />
                </div>
                <h3 className={`font-bold text-white tracking-tight mb-3 ${index < 2 ? "text-2xl" : "text-xl"}`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed text-white/45 ${index < 2 ? "text-base" : "text-[15px]"}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
                {t("designBuild.process_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("designBuild.process_titleLine1")}
              <br />
              {t("designBuild.process_titleLine2")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 md:gap-y-16">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                {/* Step Header: Number and Line */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black text-accent/20 group-hover:text-accent transition-all duration-500 font-mono">
                    {item.step}
                  </span>
                  <div className="flex-grow h-[1px] bg-slate-200 group-hover:bg-accent/40 transition-all duration-500"></div>
                </div>

                <h3 className="text-xl font-bold text-primary tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-steel-dark text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Collaborators */}
      <section className="py-28 bg-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 mb-12 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("designBuild.approach_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6">
                {t("designBuild.approach_titleLine1")}
                <br />
                {t("designBuild.approach_titleLine2")}
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                {t("designBuild.approach_desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                {t("designBuild.collab_with")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {collaborators.map((role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-4 border-b border-white/10"
                  >
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0"></div>
                    <span className="text-sm font-medium text-white/90">
                      {role}
                    </span>
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
                {t("designBuild.cta_titleLine1")}
                <br />
                {t("designBuild.cta_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mt-4 max-w-lg">
                {t("designBuild.cta_subtitle")}
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
                {t("designBuild.cta_contact")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/portfolios"
                className="inline-flex items-center justify-center gap-3 border border-slate-300 text-primary font-semibold text-sm py-4 px-8 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
              >
                {t("designBuild.cta_viewProjects")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignBuild;
