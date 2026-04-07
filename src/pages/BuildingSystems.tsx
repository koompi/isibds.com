import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BuildingSystems = () => {

  const systems = [
    {
      title: "ISI PEB (Pre-Engineered Buildings)",
      description:
        "ISI Pre-Engineered Buildings (PEB) is a complete systems package that incorporates new features of standing seam roofing solution, attractive wall cladding, standardized trim, and other accessories, providing excellent performance in terms of speed, cost effectiveness, long-term durability, functionality, appearance, and especially water leakage prevention. Ideal for both industrial and commercial applications such as warehouses, logistics facilities, and complex structures.",
      benefits: [
        "Adaptable building codes",
        "Superior materials specifications",
        "Fast design and delivery timelines",
        "Cost savings up to 30% vs conventional",
        "Wide clear spans up to 60+ meters",
        "Easy future expansion capabilities",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-sunfair.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg",
      ],
    },
    {
      title: "Heavy Steel Structures",
      description:
        "Specialized steel structural systems for vertical construction projects, including office buildings, shopping malls, showrooms, parking structures, and mixed-use developments. Engineered for strength, efficiency, and architectural flexibility. Our steel structures are fabricated into precise shapes and sizes according to the technical requirements of each project.",
      benefits: [
        "Launch business sooner with 30% faster construction",
        "Maximize space with 90-meter column-free spans",
        "Reduce foundation costs with lightweight steel frames",
        "Ensure perfect assembly using precision 3D design",
        "Achieve modern looks impossible with traditional concrete",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/aeon.jpg",
      ],
    },
    {
      title: "ISI Greenhouse",
      description:
        "ISI Greenhouse is designed as a high-quality, pre-engineered structural solution tailored for the modern agricultural landscape. It focuses on durability, climate control, and rapid assembly to support sustainable farming and commercial operations.",
      benefits: [
        "Control climate for consistent, year-round farming success",
        "Maximize profits with durable and stable structures",
        "Withstand high winds using UV-protected, rust-resistant steel",
        "Expand easily with fast installation and relocation",
        "Aesthetic design, built for multi-purpose creativity",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/fdbb47e0-1a89-4d40-873f-db814d12c4fc.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/29e4080a-07b0-43e5-a85d-d6ab1b9b4bb3.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/b606730b-936b-421f-8047-dacdc4e39861.jpg",
      ],
    },
    {
      title: "ISI Roofing Solutions",
      description:
        "ISI Roofing Solutions offers a comprehensive range of roofing systems designed for durability, aesthetic appeal, and high performance in tropical climates. We cater to residential, commercial, warehouse, and heavy industrial applications, focusing on advanced coating technologies and structural integrity.",
      benefits: [
        "Water leakage prevention",
        "Lower electricity bills with heat-reflecting advanced insulation",
        "Lock out water with 360-degree seaming technology.",
        "Extend building life with climate-resistant protective coatings.",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-solution-1.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-2.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-3.jpg",
      ],
    },
    {
      title: "ISI Home",
      description:
        "ISI Homes offers innovative housing solutions that blend traditional Khmer aesthetics with modern engineering. Designed for safety, health, and affordability, we provide rural and suburban communities with high-quality homes built for lasting stability.",
      benefits: [
        "Integrated bathrooms and clean water for a healthy home.",
        "Advanced insulation to maintain a cool, energy-efficient interior.",
        "Strong steel frames built to last generations.",
        "Quick on-site assembly without cutting quality.",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-1.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-2.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-3.jpg",
      ],
    },
    {
      title: "ISI Truss",
      description:
        "High-strength, lightweight steel truss systems engineered for precision and durability. Ideal for residential and commercial roofing support, providing a cost-effective alternative to traditional timber while ensuring long-term structural integrity.",
      benefits: [
        "Precision-engineered for perfect fit and alignment",
        "High-quality galvanized steel for corrosion resistance",
        "Lightweight design reducing load on building structures",
        "Termite-proof and non-combustible material",
        "Fast installation process on-site",
      ],
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/building-systems.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/product-and-service-1.jpg",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Products & Solutions | ISI Building Solutions</title>
        <meta
          name="description"
          content="Explore ISI's pre-engineered building systems and heavy steel structures — delivering cost-efficient, high-quality factory-manufactured buildings across Southeast Asia."
        />
        <meta
          property="og:title"
          content="Products & Solutions | ISI Building Solutions"
        />
        <meta
          property="og:description"
          content="Explore ISI's pre-engineered building systems and heavy steel structures — delivering cost-efficient, high-quality factory-manufactured buildings across Southeast Asia."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://isibds.com/services/building-systems"
        />
        <link
          rel="canonical"
          href="https://isibds.com/services/building-systems"
        />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/building-system-main.jpg')] bg-cover bg-center"></div>
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
                    Products & Solutions
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-white leading-tight tracking-tight max-w-3xl uppercase">
                  Products & Solutions
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  Developing practical solutions that streamline steel structure
                  design and build process, improving manufacturing
                  productivity, and providing superior quality buildings.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Systems Sections */}
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
                Our Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              Products & Solutions
            </h2>
            <p className="text-steel text-base mt-4 max-w-2xl">
              Highlighting our core products and their key features, simplified for a superior building experience.
            </p>
          </motion.div>

          <div className="space-y-32">
            {systems.map((system, index) => {
              const [currentImg, setCurrentImg] = useState(0);
              const nextImg = () => setCurrentImg((prev) => (prev + 1) % system.images.length);
              const prevImg = () => setCurrentImg((prev) => (prev - 1 + system.images.length) % system.images.length);

              // Generate ID for industry menu links
              const sectionId = system.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

              return (
                <motion.div
                  key={index}
                  id={sectionId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className={`lg:grid lg:grid-cols-12 lg:gap-16 items-center pt-16 -mt-16 ${index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:col-span-6 mb-12 lg:mb-0 ${index % 2 === 1 ? "lg:col-start-7 text-right" : ""
                      }`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? "justify-end" : ""}`}>
                      <span className="text-accent/40 text-4xl font-black tracking-tighter">0{index + 1}</span>
                      <div className="h-px w-8 bg-accent/20"></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6 uppercase">
                      {system.title}
                    </h3>
                    <p className="text-steel text-lg leading-relaxed mb-10">
                      {system.description}
                    </p>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 ${index % 2 === 1 ? "text-right" : ""}`}>
                      <div className="col-span-full mb-2">
                        <h4 className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase">Key Features & Benefits</h4>
                      </div>
                      {system.benefits.map((benefit, i) => (
                        <div key={i} className={`flex items-start gap-3 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
                          <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2"></div>
                          <span className="text-steel text-[15px] font-medium leading-snug">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Slider Image */}
                  <div
                    className={`lg:col-span-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                  >
                    <div className="relative group">
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImg}
                            src={system.images[currentImg]}
                            alt={`${system.title} scene ${currentImg + 1}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Navigation Controls */}
                      <div className={`absolute bottom-6 ${index % 2 === 1 ? "left-6" : "right-6"} flex gap-2 z-10`}>
                        <button
                          onClick={prevImg}
                          className="w-12 h-12 bg-white/90 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImg}
                          className="w-12 h-12 bg-white/90 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      {/* Counter */}
                      <div className={`absolute top-6 ${index % 2 === 1 ? "right-6 font-bold" : "left-6 font-bold"} text-white drop-shadow-md text-xs tracking-widest`}>
                        {currentImg + 1} / {system.images.length}
                      </div>

                      <div className={`absolute -bottom-6 ${index % 2 === 1 ? "-left-6" : "-right-6"} w-full h-full border-2 border-accent/10 -z-10`}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Ready to Start
                <br />
                Your Project?
              </h2>
              <p className="text-white/45 text-base leading-relaxed mt-4 max-w-lg">
                Let's discuss how our building systems can meet your specific
                requirements.
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
                Contact Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/portfolios"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-8 hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingSystems;
