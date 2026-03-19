import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { MapPin, Calendar, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";

const Portfolios = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filters = [
    "All",
    "Pre-Engineered Buildings",
    "Heavy Steel Structures",
    "Architectural Steel Structures and Roofing Solutions",
  ];

  const projects = [
    {
      id: 1,
      title: "OCIC",
      location: "Phnom Penh",
      year: "2019",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-ocic.jpg",
    },
    {
      id: 2,
      title: "Storage Warehouse",
      location: "Phnom Penh",
      year: "2019",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-warehouse.jpg",
    },
    {
      id: 3,
      title: "MTPC Factory",
      location: "Phnom Penh",
      year: "2019",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-mtpc.jpg",
    },
    {
      id: 4,
      title: "Garment Factory",
      location: "PPSEZ",
      year: "2019",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-garment.jpg",
    },
    {
      id: 5,
      title: "Techo International Airport",
      location: "Kandal Province",
      year: "2023",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-techo-airport-2.jpg",
    },
    {
      id: 6,
      title: "Rice Mill",
      location: "Kampong Thom",
      year: "2019",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-ricemill.jpg",
    },
    {
      id: 7,
      title: "Vital Premium Water Factory",
      location: "Phnom Penh",
      year: "2018",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-vital.jpg",
    },
    {
      id: 8,
      title: "The Premier Centre Sen Sok",
      location: "Phnom Penh",
      year: "2018",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-premier.jpg",
    },
    {
      id: 9,
      title: "Raintree",
      location: "Phnom Penh",
      year: "2015",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-raintree.jpg",
    },
    {
      id: 10,
      title: "Chip Mong Baktouk Commercial Center",
      location: "Phnom Penh",
      year: "2019",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-chipmong.jpg",
    },
    {
      id: 11,
      title: "The Point Community Mall",
      location: "Phnom Penh",
      year: "2019",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-point.jpg",
    },
    {
      id: 12,
      title: "Aeon Mall Sen Sok City",
      location: "Phnom Penh",
      year: "2018",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-aeon.jpg",
    },
    {
      id: 13,
      title: "One KMH Tower",
      location: "Phnom Penh",
      year: "2020",
      category: "Architectural Steel Structures and Roofing Solutions",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-techo-airport-2.jpg",
    },
    {
      id: 14,
      title: "Aeon Mall Mean Chey",
      location: "Phnom Penh",
      year: "2022",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
    },
    {
      id: 15,
      title: "ISI Training Ground",
      location: "Phnom Penh",
      year: "2021",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/isi-tranning-ground.jpg",
    },
    {
      id: 16,
      title: "ISI Park Stadium",
      location: "Phnom Penh",
      year: "2022",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/isi-park-stadiumx.jpg",
    },
    {
      id: 17,
      title: "Maha Panha Vihara",
      location: "Phnom Penh",
      year: "2021",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-maha-vihara.jpg",
    },
    {
      id: 18,
      title: "Chip Mong Mega Mall",
      location: "Phnom Penh",
      year: "2021",
      category: "Heavy Steel Structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/ChipMongMegaMall.webp",
    },
    {
      id: 19,
      title: "Techo International Airport",
      location: "Kandal Province",
      year: "2023",
      category: "Architectural Steel Structures and Roofing Solutions",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-techo-airport.jpg",
    },
    {
      id: 20,
      title: "Hanuman Brewery Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-hanuman.jpg",
    },
    {
      id: 21,
      title: "Khmer Beverages Factory",
      location: "Phnom Penh",
      year: "2021",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-khb.jpg",
    },
    {
      id: 22,
      title: "Sunfair Factory",
      location: "Phnom Penh",
      year: "2021",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-sunfair.jpg",
    },
    {
      id: 23,
      title: "Taral Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-taral.jpg",
    },
    {
      id: 24,
      title: "Marvel Factory",
      location: "Phnom Penh",
      year: "2021",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg",
    },
    {
      id: 25,
      title: "New Wide Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-new-wide.jpg",
    },
    {
      id: 26,
      title: "Bonny Factory",
      location: "Phnom Penh",
      year: "2021",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-bonny.jpg",
    },
    {
      id: 27,
      title: "Heng Pao He Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-heng-pao-he.jpg",
    },
    {
      id: 28,
      title: "OCIC Leasing Factories",
      location: "Phnom Penh",
      year: "2023",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-ocic-leasing.jpg",
    },
    {
      id: 29,
      title: "TH Automotive Manufacturing",
      location: "Phnom Penh",
      year: "2023",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-th-automotive.jpg",
    },
    {
      id: 30,
      title: "Carina Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-carina-factory.jpg",
    },
    {
      id: 31,
      title: "Orlon Zinc Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-orlon-zinc.jpg",
    },
    {
      id: 32,
      title: "Elysian Dreams International Factory",
      location: "Phnom Penh",
      year: "2023",
      category: "Pre-Engineered Buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-elysian-dreams.jpg",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Modal navigation
  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(
        (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProjectIndex]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Project Portfolio — 1000+ Landmark Projects | ISI Building Solutions
        </title>
        <meta
          name="description"
          content="Browse ISI Building Solutions' portfolio of 1000+ landmark projects in Cambodia including pre-engineered buildings, heavy steel structures, and architectural steel."
        />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative pt-[72px]">
        <div className="relative h-[40vh] min-h-[350px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-aeon.jpg')] bg-cover bg-center"></div>
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
                    Our Work
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Portfolios
                </h1>
                <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
                  Over 1000 completed projects showcasing our expertise in
                  pre-engineered buildings, heavy steel structures, and
                  architectural steel solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${activeFilter === filter
                  ? "bg-accent text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                onClick={() => setSelectedProjectIndex(index)}
                className="group bg-white border border-slate-200 overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-accent px-3 py-1">
                    <span className="text-white text-xs font-bold tracking-wider uppercase">
                      {project.category
                        .replace("Pre-Engineered Buildings", "PEB")
                        .replace("Heavy Steel Structures", "Heavy Steel")
                        .replace(
                          "Architectural Steel Structures and Roofing Solutions",
                          "Arch Steel",
                        )}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/20 group-hover:border-accent group-hover:bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-steel text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              {
                value: 300,
                suffix: "+",
                label: "Skilled Professionals",
                icon: "/icons/skills-professionals.svg",
              },
              {
                value: 0,
                suffix: "",
                label: "Manufacturer in Cambodia",
                icon: "/icons/1st-peb.svg",
                text: "1st PEB",
              },
              {
                value: 1000,
                suffix: "+",
                label: "Landmark Projects",
                icon: "/icons/landmark-projects.svg",
              },
              {
                value: 0,
                suffix: "",
                label: "for Steel Constractor",
                icon: "/icons/best-award.svg",
                text: "Best Award",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="py-8 px-6 text-center"
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

      {/* Fullscreen Modal / Lightbox */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectIndex(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation - Next/Prev */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-accent text-white rounded-full transition-all pointer-events-auto"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-accent text-white rounded-full transition-all pointer-events-auto"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full bg-white shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area */}
              <div className="flex-grow bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={filteredProjects[selectedProjectIndex].image}
                  alt={filteredProjects[selectedProjectIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info Sidebar */}
              <div className="w-full md:w-[320px] lg:w-[400px] p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                  {filteredProjects[selectedProjectIndex].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-6">
                  {filteredProjects[selectedProjectIndex].title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-steel">
                    <MapPin size={18} className="text-accent" />
                    <span className="text-base">{filteredProjects[selectedProjectIndex].location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-steel">
                    <Calendar size={18} className="text-accent" />
                    <span className="text-base">{filteredProjects[selectedProjectIndex].year}</span>
                  </div>
                </div>

                <div className="mt-auto pt-10 text-[13px] text-steel-light">
                  Project {selectedProjectIndex + 1} of {filteredProjects.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolios;
