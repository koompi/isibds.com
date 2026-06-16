import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const systems = [
  {
    title: "PRE-ENGINEERED\nBUILDINGS",
    image:
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/PEB/Bonny Factory-5.jpg",
    href: "/products-solutions/isi-peb/pre-engineered-buildings",
  },
  {
    title: "MULTI-STORY\nBUILDING SYSTEMS",
    image:
      "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
    href: "/products-solutions/isi-peb/multi-story-building-systems",
  },
];

const IsiPeb = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-primary-dark">
      <Helmet>
        <title>{t("isiPeb.metaTitle")}</title>
        <meta name="description" content={t("isiPeb.metaDesc")} />
        <meta property="og:title" content={t("isiPeb.metaTitle")} />
        <meta property="og:description" content={t("isiPeb.metaDesc")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://isibds.com/products-solutions/isi-peb"
        />
        <link
          rel="canonical"
          href="https://isibds.com/products-solutions/isi-peb"
        />
      </Helmet>

      <div className=" pt-[90px] md:pt-[72px] flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-white font-bold uppercase tracking-[0.2em] text-3xl md:text-4xl">
            {t("isiPeb.page_heading")}
          </h1>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-3 mb-8" />
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            {t("isiPeb.page_subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {systems.map((system, i) => {
            const card = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.title.replace("\n", " ")}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-6 pb-2 text-center">
                  <h2 className="text-white font-bold uppercase tracking-[0.15em] text-lg leading-snug whitespace-pre-line group-hover:text-accent transition-colors duration-200">
                    {system.title}
                  </h2>
                  <div className="w-10 h-[2px] bg-accent mx-auto mt-3" />
                </div>
              </motion.div>
            );

            return system.href ? (
              <Link key={i} to={system.href}>
                {card}
              </Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IsiPeb;
