import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield, Lightbulb, Target, Users } from "lucide-react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t("visionValues.01_title"),
      description: t("visionValues.01_desc"),
    },
    {
      icon: Target,
      title: t("visionValues.02_title"),
      description: t("visionValues.02_desc"),
    },
    {
      icon: Shield,
      title: t("visionValues.03_title"),
      description: t("visionValues.03_desc"),
    },
    {
      icon: Users,
      title: t("visionValues.04_title"),
      description: t("visionValues.04_desc"),
    },
  ];

  const milestones = [
    {
      year: t("about.m1_year"),
      title: t("about.m1_title"),
      description: t("about.m1_desc"),
    },
    {
      year: t("about.m2_year"),
      title: t("about.m2_title"),
      description: t("about.m2_desc"),
    },
    {
      year: t("about.m3_year"),
      title: t("about.m3_title"),
      description: t("about.m3_desc"),
    },
    {
      year: t("about.m4_year"),
      title: t("about.m4_title"),
      description: t("about.m4_desc"),
    },
    {
      year: t("about.m5_year"),
      title: t("about.m5_title"),
      description: t("about.m5_desc"),
    },
  ];

  const stats = [
    {
      value: 300,
      suffix: "+",
      label: t("about.stat_skilledProfessionals"),
      icon: "/icons/skills-professionals.svg",
    },
    {
      value: 0,
      suffix: "",
      label: t("about.stat_manufacturer"),
      icon: "/icons/1st-peb.svg",
      text: "1st PEB",
    },
    {
      value: 1000,
      suffix: "+",
      label: t("about.stat_landmarkProjects"),
      icon: "/icons/landmark-projects.svg",
    },
    {
      value: 0,
      suffix: "",
      label: t("about.stat_bestAward"),
      icon: "/icons/best-award.svg",
      text: "Best Award",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("about.metaTitle")}</title>
        <meta name="description" content={t("about.metaDesc")} />
        <meta property="og:title" content={t("about.metaTitle")} />
        <meta property="og:description" content={t("about.metaDesc")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isibds.com/about" />
        <link rel="canonical" href="https://isibds.com/about" />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/Homes-9-1.jpg')] bg-cover bg-center"></div>
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
                    {t("about.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                  {t("about.hero_titleLine1")}
                  <br />
                  {t("about.hero_titleLine2")}
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-xl leading-relaxed">
                  {t("about.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 mb-12 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("about.story_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("about.story_titleLine1")}
                <br />
                {t("about.story_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("about.story_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("about.story_p2")}
              </p>
              <p className="text-steel text-base leading-relaxed mb-8">
                {t("about.story_p3")}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_696e0a5fc000d653d67ae4b9/isi-bds/8ce10993-da3a-4461-892a-c29315c97142.png"
                    alt="ISI Building Solutions construction site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-10 px-6 lg:px-8 text-center"
              >
                <div className="w-14 h-14 rounded-full border-[3px] border-accent/50 flex items-center justify-center mx-auto mb-4">
                  <img src={stat.icon} alt={stat.label} className="w-7 h-7" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
                  {stat.text || (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xs text-white/40 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Aspiration */}
      <section className="py-28 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 mb-16 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("about.vision_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("about.vision_titleLine1")}
                <br />
                {t("about.vision_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed">
                {t("about.vision_desc")}
              </p>
            </motion.div>

            {/* Cards */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 lg:p-10 border border-slate-200"
              >
                <span className="text-5xl font-bold text-accent/10 leading-none select-none">
                  01
                </span>
                <h3 className="text-xl font-bold text-primary tracking-tight mt-4 mb-3">
                  {t("about.vision_01_title")}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("about.vision_01_text")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 lg:p-10 border border-slate-200"
              >
                <span className="text-5xl font-bold text-accent/10 leading-none select-none">
                  02
                </span>
                <h3 className="text-xl font-bold text-primary tracking-tight mt-4 mb-3">
                  {t("about.vision_02_title")}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {t("about.vision_02_text")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-primary-dark relative overflow-hidden">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -bottom-8 right-0 text-[18vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
          VALUES
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
                {t("about.values_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              {t("about.values_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/[0.06]">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-primary-dark p-8 lg:p-10 border border-white/10 hover:border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-[10px] text-white/25 group-hover:text-primary/20 tracking-[0.25em] uppercase font-mono mb-5 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")} —
                </div>
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary tracking-tight mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-white/45 group-hover:text-steel text-[15px] leading-relaxed transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-28 bg-primary-dark text-white overflow-hidden">
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
                {t("about.milestones_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
              {t("about.milestones_title")}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10 relative ${
                    index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-16"
                        : "lg:col-start-2 lg:pl-16"
                    }`}
                  >
                    <span className="text-accent text-sm font-bold tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/45 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden lg:block absolute left-1/2 top-10 w-3 h-3 bg-accent -translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISI Group */}
      <section className="py-28 bg-surface-light">
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
                  {t("about.isiGroup_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("about.isiGroup_titleLine1")}
                <br />
                {t("about.isiGroup_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("about.isiGroup_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed mb-8">
                {t("about.isiGroup_p2")}
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
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/Homes-10.jpg"
                    alt="ISI Group corporate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
