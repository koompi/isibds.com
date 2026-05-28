import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Factory, Utensils, Truck, Sprout, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IndustrySpecific = () => {
  const { t } = useTranslation();

  const industries = [
    {
      title: t("industry.manufacturing_title"),
      icon: Factory,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        t("industry.manufacturing_app1"),
        t("industry.manufacturing_app2"),
        t("industry.manufacturing_app3"),
        t("industry.manufacturing_app4"),
        t("industry.manufacturing_app5"),
        t("industry.manufacturing_app6"),
      ],
      brochure: t("industrySpecific.mfg_brochure"),
    },
    {
      title: t("industry.foodBeverage_title"),
      icon: Utensils,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        t("industry.foodBeverage_app1"),
        t("industry.foodBeverage_app2"),
        t("industry.foodBeverage_app3"),
      ],
      brochure: t("industrySpecific.fb_brochure"),
    },
    {
      title: t("industry.logistics_title"),
      icon: Truck,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        t("industry.logistics_app1"),
        t("industry.logistics_app2"),
        t("industry.logistics_app3"),
        t("industry.logistics_app4"),
      ],
      brochure: t("industrySpecific.logistics_brochure"),
    },
    {
      title: t("industry.agriculture_title"),
      icon: Sprout,
      link: "/products-solutions#isi-greenhouse",
      applications: [
        t("industry.agriculture_app1"),
        t("industry.agriculture_app2"),
        t("industry.agriculture_app3"),
        t("industry.agriculture_app4"),
        t("industry.agriculture_app5"),
      ],
      brochure: t("industrySpecific.agri_brochure"),
    },
    {
      title: t("industry.residential_title"),
      icon: Home,
      link: "/products-solutions#isi-home",
      applications: [
        t("industry.residential_app1"),
        t("industry.residential_app2"),
      ],
      brochure: t("industrySpecific.residential_brochure"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("industrySpecific.metaTitle")}</title>
        <meta name="description" content={t("industrySpecific.metaDesc")} />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/building-system-main.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-primary-dark/85"></div>
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
                    {t("industrySpecific.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl uppercase">
                  {t("industrySpecific.hero_title")}
                </h1>
                <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("industrySpecific.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 border-t-4 border-accent shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="mb-8 flex items-center justify-between">
                  <industry.icon size={40} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-100 text-6xl font-black group-hover:text-accent/5 transition-colors">0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-tight">
                  {industry.title}
                </h3>

                <ul className="space-y-4 mb-10 flex-grow">
                  {industry.applications.map((app, i) => (
                    <li key={i} className="text-steel flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent/30 rounded-full mt-2 flex-shrink-0 group-hover:bg-accent transition-colors"></div>
                      <span className="text-[15px] font-medium leading-snug">{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-slate-100 mt-auto flex flex-col gap-4">
                  <Link
                    to={industry.link}
                    className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    {t("industrySpecific.viewProducts")} <ArrowRight size={14} />
                  </Link>

                  <div className="pt-4 border-t border-slate-50">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">{t("industrySpecific.downloads")}</span>
                    <span className="text-sm font-bold text-primary">{industry.brochure}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
            {t("industrySpecific.cta_title")}
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl mx-auto">
            {t("industrySpecific.cta_desc")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-white font-bold text-sm py-4 px-10 hover:bg-accent-dark transition-all"
          >
            {t("industrySpecific.cta_button")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustrySpecific;
