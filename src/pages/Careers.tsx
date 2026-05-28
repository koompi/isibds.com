import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  Briefcase,
  GraduationCap,
  Cog,
  TrendingUp,
  Sprout,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation();

  const openings = [
    {
      title: "Project Manager",
      positions: "3 positions",
      location: "Site",
      type: "Full Time",
      deadline: "30/09/2025",
    },
    {
      title: "MEP Manager",
      positions: "1 position",
      location: "Phnom Penh",
      type: "Full Time",
      deadline: "31/07/2025",
    },
    {
      title: "Senior MEP Engineer",
      positions: "1 position",
      location: "Phnom Penh",
      type: "Full Time",
      deadline: "31/08/2025",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: t("careers.ben_young_title"),
      description: t("careers.ben_young_desc"),
    },
    {
      icon: GraduationCap,
      title: t("careers.ben_dev_title"),
      description: t("careers.ben_dev_desc"),
    },
    {
      icon: Briefcase,
      title: t("careers.ben_projects_title"),
      description: t("careers.ben_projects_desc"),
    },
  ];

  const disciplines = [
    t("careers.disc_engineering"),
    t("careers.disc_manufacturing"),
    t("careers.disc_fabrication"),
    t("careers.disc_construction"),
    t("careers.disc_projectMgmt"),
    t("careers.disc_architecture"),
    t("careers.disc_masterPlanning"),
    t("careers.disc_salesMarketing"),
    t("careers.disc_finance"),
    t("careers.disc_businessAdmin"),
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("careers.metaTitle")}</title>
        <meta name="description" content={t("careers.metaDesc")} />
        <meta property="og:title" content={t("careers.metaTitle")} />
        <meta property="og:description" content={t("careers.metaDesc")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isibds.com/careers" />
        <link rel="canonical" href="https://isibds.com/careers" />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-engineering.jpg')] bg-cover bg-center"></div>
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
                    {t("careers.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                  {t("careers.hero_title")}
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("careers.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 mb-10 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("careers.why_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-5">
                {t("careers.why_titleLine1")}
                <br />
                {t("careers.why_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-4">
                {t("careers.why_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("careers.why_p2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Cog,
                    title: t("careers.card_engineering_title"),
                    desc: t("careers.card_engineering_desc"),
                  },
                  {
                    icon: Users,
                    title: t("careers.card_professionals_title"),
                    desc: t("careers.card_professionals_desc"),
                  },
                  {
                    icon: Sprout,
                    title: t("careers.card_homegrown_title"),
                    desc: t("careers.card_homegrown_desc"),
                  },
                  {
                    icon: TrendingUp,
                    title: t("careers.card_growth_title"),
                    desc: t("careers.card_growth_desc"),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-surface-light p-5 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-3">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-steel text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 bg-surface-light py-5 px-6 border-l-4 border-accent">
            <p className="text-primary text-base font-semibold">
              {t("careers.quote")}
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                {t("careers.disciplines_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("careers.disciplines_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 border border-slate-200 text-center"
              >
                <span className="text-sm font-semibold text-primary">
                  {discipline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
                {t("careers.benefits_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("careers.benefits_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white border border-slate-200 p-8 lg:p-10"
              >
                <div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-6">
                  <benefit.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary tracking-tight mb-3">
                  {benefit.title}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings — hidden */}
      <section className="hidden py-28 bg-primary-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -bottom-8 right-0 text-[13vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
          POSITIONS
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
                Open Positions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              Current Job Openings
            </h2>
          </motion.div>

          <div className="space-y-px">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-primary-dark border border-white/10 p-8 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                  <div className="lg:col-span-6 mb-6 lg:mb-0">
                    <div className="text-[10px] text-white/25 tracking-[0.25em] uppercase font-mono mb-3">
                      {String(index + 1).padStart(2, "0")} — Position
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {job.title}
                    </h3>
                    <span className="text-sm text-accent font-semibold">
                      {job.positions}
                    </span>
                  </div>

                  <div className="lg:col-span-6 flex flex-wrap items-center gap-3">
                    <span className="border border-white/15 px-3 py-1.5 text-[11px] font-mono tracking-[0.1em] text-white/40 uppercase flex items-center gap-2">
                      <MapPin size={11} className="text-accent flex-shrink-0" />
                      {job.location}
                    </span>
                    <span className="border border-white/15 px-3 py-1.5 text-[11px] font-mono tracking-[0.1em] text-white/40 uppercase flex items-center gap-2">
                      <Clock size={11} className="text-accent flex-shrink-0" />
                      {job.type}
                    </span>
                    <span className="border border-white/15 px-3 py-1.5 text-[11px] font-mono tracking-[0.1em] text-white/40 uppercase flex items-center gap-2">
                      <Calendar size={11} className="text-accent flex-shrink-0" />
                      By {job.deadline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
