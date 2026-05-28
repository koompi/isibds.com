import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PeopleCultureSection = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      num: "01",
      title: t("peopleCulture.01_title"),
      description: t("peopleCulture.01_desc"),
    },
    {
      num: "02",
      title: t("peopleCulture.02_title"),
      description: t("peopleCulture.02_desc"),
    },
    {
      num: "03",
      title: t("peopleCulture.03_title"),
      description: t("peopleCulture.03_desc"),
    },
  ];

  return (
    <section className="hidden py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Content — left */}
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
                {t("peopleCulture.eyebrow")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary mb-6 leading-tight tracking-tight">
              {t("peopleCulture.titleLine1")}
              <br />
              {t("peopleCulture.titleLine2")}
            </h2>
            <p className="text-steel text-base leading-relaxed mb-10">
              {t("peopleCulture.description")}
            </p>

            {/* Numbered highlights */}
            <div className="space-y-0 divide-y divide-slate-200 border-y border-slate-200 mb-10">
              {highlights.map((item) => (
                <div key={item.num} className="flex items-start gap-5 py-5">
                  <span className="text-2xl font-bold text-accent/20 leading-none pt-0.5 select-none">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary text-sm tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-steel text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/careers"
              className="group inline-flex items-center gap-3 text-sm text-accent font-semibold hover:text-primary transition-colors cursor-pointer"
            >
              <span>{t("peopleCulture.cta")}</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* images — right, masonry style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-engineering.jpg"
                    alt="Engineering Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-finance.jpg"
                    alt="Finance & Accounting Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-project-management.jpg"
                    alt="Project Management Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-sales.jpg"
                    alt="Project Sales Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PeopleCultureSection;
