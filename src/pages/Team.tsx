import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  const leadership = [
    {
      name: "Sen KANG",
      role: "CEO & Co-Founder",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/kang-sen.jpg",
      education: t("team.kang_edu"),
      bio: t("team.kang_bio"),
    },
    {
      name: "Pav Ing CHAO",
      role: "Finance Director",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/pav-ing.jpg",
      education: t("team.pav_edu"),
      bio: t("team.pav_bio"),
    },
    {
      name: "Sovanara IM",
      role: "Supply Chain Director",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/im-sovanara-2.png",
      education: t("team.sovanara_edu"),
      bio: t("team.sovanara_bio"),
    },
  ];

  const departments = [
    {
      name: t("team.dept_engineering"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-1.jpg",
      description: t("team.dept_engineering_desc"),
    },
    {
      name: t("team.dept_finance"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-2.jpg",
      description: t("team.dept_finance_desc"),
    },
    {
      name: t("team.dept_operations"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-3.jpg",
      description: t("team.dept_operations_desc"),
    },
    {
      name: t("team.dept_projectMgmt"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-4.jpg",
      description: t("team.dept_projectMgmt_desc"),
    },
    {
      name: t("team.dept_sales"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-5.jpg",
      description: t("team.dept_sales_desc"),
    },
    {
      name: t("team.dept_production"),
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/team-6.jpg",
      description: t("team.dept_production_desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
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
                    {t("team.hero_eyebrow")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                  {t("team.hero_title")}
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  {t("team.hero_subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Intro */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
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
                  {t("team.culture_eyebrow")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
                {t("team.culture_titleLine1")}
                <br />
                {t("team.culture_titleLine2")}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                {t("team.culture_p1")}
              </p>
              <p className="text-steel text-base leading-relaxed">
                {t("team.culture_p2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    value: 300,
                    suffix: "+",
                    label: t("team.stat_teamMembers"),
                  },
                  {
                    value: 6,
                    suffix: "",
                    label: t("team.stat_departments"),
                  },
                  {
                    value: 15,
                    suffix: "+",
                    label: t("team.stat_yearsTogether"),
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface-light p-6 lg:p-8 text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-steel tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
                {t("team.leadership_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("team.leadership_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group bg-white border border-slate-200 overflow-hidden"
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {person.name}
                    </h3>
                    <span className="text-accent text-sm font-semibold">
                      {person.role}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 lg:p-8">
                  <p className="text-steel text-[15px] leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs text-steel-light tracking-wider uppercase">
                      {t("team.edu_label")}
                    </span>
                    <p className="text-sm text-primary font-medium mt-1">
                      {person.education}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
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
                {t("team.departments_eyebrow")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              {t("team.departments_title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[16/10] mb-5">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-lg font-bold text-white tracking-tight">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-steel text-[15px] leading-relaxed">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 mb-8 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {t("team.cta_titleLine1")}
                <br />
                {t("team.cta_titleLine2")}
              </h2>
              <p className="text-white/45 text-base leading-relaxed mt-4 max-w-lg">
                {t("team.cta_subtitle")}
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
                to="/careers"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
              >
                {t("team.cta_viewPositions")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-8 hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {t("team.cta_contactUs")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
