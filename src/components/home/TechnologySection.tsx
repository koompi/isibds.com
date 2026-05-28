import { motion } from "framer-motion";
import { ChevronRight, Monitor, Cog, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TechnologySection = () => {
  const { t } = useTranslation();

  const techFeatures = [
    {
      icon: Monitor,
      num: "01",
      title: t("techSection.bim_title"),
      description: t("techSection.bim_desc"),
    },
    {
      icon: Cog,
      num: "02",
      title: t("techSection.mfg_title"),
      description: t("techSection.mfg_desc"),
    },
    {
      icon: BarChart3,
      num: "03",
      title: t("techSection.analytics_title"),
      description: t("techSection.analytics_desc"),
    },
  ];

  const techMetrics = [
    { label: t("techSection.metricModelCoord"), value: "99.2%" },
    { label: t("techSection.metricFabPrecision"), value: "±1.5mm" },
    { label: t("techSection.metricDelivery"), value: "24/7" },
  ];

  return (
    <section className="py-28 bg-primary-dark relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute -bottom-8 right-0 text-[14vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
        TECHNOLOGY
      </div>

      {/* Accent spine */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
      <div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 mb-10 lg:mb-0"
          >
            <div className="h-full flex flex-col">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                    {t("techSection.eyebrow")}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                  {t("techSection.titleLine1")}
                  <br />
                  {t("techSection.titleLine2")}
                </h2>
                <p className="text-white/45 text-base leading-relaxed mb-8">
                  {t("techSection.description")}
                </p>
              </div>

              <div className="mt-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-white/10 mb-8">
                  {techMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-colors duration-300"
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/35 mb-1">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-white tracking-tight">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/technology"
                  className="group inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm py-3.5 px-7 hover:bg-accent-dark transition-colors cursor-pointer"
                >
                  {t("techSection.cta")}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative h-full border border-white/10 bg-primary-dark/70 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(212,98,43,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="absolute left-8 right-8 top-1/2 h-px bg-white/10 pointer-events-none" />
              <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/10 pointer-events-none" />

              <div className="relative z-10 p-6 md:p-8 lg:p-10 h-full">
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-6">
                  {t("techSection.stackLabel")}
                </div>

                <div className="space-y-px border border-white/10">
                  {techFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 p-5 bg-primary-dark/60 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="w-10 h-10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                        <feat.icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-mono mb-1">
                          {feat.num} —
                        </div>
                        <h4 className="font-bold text-white text-sm md:text-base tracking-tight mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-white/45 text-[13px] md:text-sm leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
