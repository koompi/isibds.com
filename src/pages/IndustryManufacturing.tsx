import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IndustryManufacturing = () => {
  const { t } = useTranslation();

  const applications = [
    t("industry.manufacturing_app1"),
    t("industry.manufacturing_app2"),
    t("industry.manufacturing_app3"),
    t("industry.manufacturing_app4"),
    t("industry.manufacturing_app5"),
    t("industry.manufacturing_app6"),
  ];

  const projects = [
    {
      name: "Marvel Garment Factory",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg",
    },
    {
      name: "TH Automotive Manufacturing",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-th-automotive.jpg",
    },
    {
      name: "Zinus Factory",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/zf-01.jpg",
    },
    {
      name: "Taral Factory",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-taral.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("industry.manufacturing_metaTitle")}</title>
        <meta name="description" content={t("industry.manufacturing_metaDesc")} />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg')] bg-cover bg-center"></div>
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
                    {t("industry.manufacturing_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl uppercase">
                  {t("industry.manufacturing_title")}
                </h1>
                <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("industry.manufacturing_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Two Column */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left — Applications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 mb-12 lg:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  {t("industry.applications")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight tracking-tight mb-10 uppercase">
                {t("industry.manufacturing_title")}
              </h2>

              <ul className="space-y-5">
                {applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-lg font-semibold text-primary">
                      {app}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Link
                  to="/products-solutions"
                  className="inline-flex items-center gap-3 bg-accent text-white font-bold text-sm py-4 px-8 hover:bg-accent-dark transition-all"
                >
                  {t("industry.viewProducts")} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Right — 2x2 Photo Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <div key={i} className="group relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-bold">
                        {project.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryManufacturing;
