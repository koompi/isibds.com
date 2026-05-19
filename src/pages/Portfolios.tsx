import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";

const Portfolios = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filters = [
    "All",
    "Pre-Engineered Buildings",
    "Heavy Steel Structures",
    "Architectural Steel Structures and Roofing Solutions",
  ];

  const projects = [
    {
      id: 28,
      title: "OCIC Leasing Factories",
      location: "Phnom Penh",
      year: "2026",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-ocic-leasing.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolios/OCIC Leasing Factories-8.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolios/OCIC Leasing Factories-10.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolios/OCIC Leasing Factories-2.jpg",
      ],
    },
    {
      id: 29,
      title: "TH Automotive Manufacturing",
      location: "Kampong Chhnang Province",
      year: "2026",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-th-automotive.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/7aedf086-3720-4697-8113-ca32ba1919ea.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/e542952d-72b0-44eb-b116-16fa0fa3815a.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/2321feee-0760-48f9-bc9a-c7a2e7f17794.jpg",
      ],
    },
    {
      id: 19,
      title: "Techo International Airport",
      location: "Kandal Province",
      year: "2025",
      category: "Architectural Steel Structures and Roofing Solutions",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-techo-airport.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/ad36e4f7-2a0e-4377-9872-10752a916ec8.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/faea9b5e-d3c8-4365-8dfe-c7b4880fdc00.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/af8a41b7-628c-4d2d-9a90-45d3f951b66d.jpg",
      ],
    },
    {
      id: 20,
      title: "Hanuman Brewery Factory",
      location: "Phnom Penh",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-hanuman.jpg",
      ],
    },
    {
      id: 23,
      title: "Taral Factory",
      location: "Kampong Speu Province",
      year: "2024",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-taral.jpg",
      ],
    },
    {
      id: 25,
      title: "New Wide Factory",
      location: "ISI Park 2",
      year: "2022",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-new-wide.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/c41963d4-ef96-4264-aa90-f7f95f74b153.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/9c05cb3a-5b1d-49a7-9b7b-edd8ee0247fd.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/3513356b-4854-48e4-938e-dddfbd9d2865.jpg",
      ],
    },
    {
      id: 27,
      title: "Heng Pao He Factory",
      location: "ISI Park 2",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-heng-pao-he.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Heng Pao He Factory-1.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Heng Pao He Factory-4.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Heng Pao He Factory-6.jpg",
      ],
    },
    {
      id: 30,
      title: "Carina Factory",
      location: "Kandal Province",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-carina-factory.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Carina Factory-3.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Carina Factory-8.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Carina Factory-12.jpg",
      ],
    },
    {
      id: 31,
      title: "Orlon Zinc Factory",
      location: "Sihanoukville",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-orlon-zinc.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/c5cca335-8f64-4290-8c97-7f58dfc978a8.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/d96f93bd-693c-4dd6-b89c-dd6410250181.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/d7b67030-6c0f-457a-ba02-e898e3cba6d3.jpg",
      ],
    },
    {
      id: 14,
      title: "Aeon Mall Mean Chey",
      location: "Phnom Penh",
      year: "2023",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
      ],
    },
    {
      id: 16,
      title: "ISI Park Stadium",
      location: "Phnom Penh",
      year: "2022",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/2d6784a1-7043-45df-b9ac-ddbf5fb29d2b.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/isi-park-stadiumx.jpg",

        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/8ff71863-dcd8-478f-91a9-6fbffb90c7fe.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/ae1b1e85-8bc9-44ec-926e-3054c61fdbab.jpg",
      ],
    },
    {
      id: 21,
      title: "Khmer Beverages Factory",
      location: "Phnom Penh",
      year: "2024",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-khb.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/0f992ed3-ec93-4da6-8e45-695ddd020bf0.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/0086c6a4-dec3-4097-ad09-bcb0f25fed3e.jpg",
      ],
    },
    {
      id: 22,
      title: "Sunfair Factory",
      location: "Phnom Penh",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-sunfair.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/1a761cf1-04be-499d-b301-30cbc7898122.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/ec1ba59c-0715-49e6-be20-0734a962d46d.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/4182581b-4802-42c6-9a15-b587d1f2ec91.jpg",
      ],
    },
    {
      id: 24,
      title: "Marvel Factory",
      location: "Phnom Penh",
      year: "2022",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-marvel.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/e15d5351-d0f6-4702-a645-1a4141dc6b10.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/203b9208-1797-42a2-a923-bd1069ddb6c1.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/bc437614-6ffc-4a64-984a-6f25ee37c9a5.jpg",
      ],
    },
    {
      id: 26,
      title: "Bonny Factory",
      location: "ISI Park 2",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-bonny.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/a6222e15-0651-4916-b701-11cc9234519c.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/ea263f5a-2b16-4712-ada1-d4bda6272640.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/15ee8ac1-911a-4377-bd53-5688685d04d5.jpg",
      ],
    },
    {
      id: 15,
      title: "ISI Training Ground",
      location: "ISI Park",
      year: "2026",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/isi-tranning-ground.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/70a56bb8-68f1-4029-9a37-768f785fc940.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/1701b69a-0381-4d2e-81b0-f76d7d7d520c.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/39c62a62-1cb5-444a-8033-b0d885ad30d8.jpg",
      ],
    },
    {
      id: 17,
      title: "Maha Panha Vihara",
      location: "Phnom Penh",
      year: "2021",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-maha-vihara.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/2329a55b-e022-46ec-85c0-9481099dbc48.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/29f82cea-1158-408f-9de3-ba4322e965b1.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/be19d65f-25f2-4f76-8b8a-cef30b72e0fe.jpg",
      ],
    },
    {
      id: 18,
      title: "Chip Mong Mega Mall",
      location: "Phnom Penh",
      year: "2023",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/ChipMongMegaMall.webp",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/dc7e7358-9e49-4b43-903a-4d50d1e8440c.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/3f8c40a0-621c-4347-90f6-d5aee9742250.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/3bb5f2ef-5ab8-430a-800a-5df7a6f9be7f.jpg",
      ],
    },
    {
      id: 10,
      title: "Chip Mong Baktouk Commercial Center",
      location: "Phnom Penh",
      year: "2019",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-chipmong.jpg",
      ],
    },
    {
      id: 11,
      title: "The Point Community Mall",
      location: "Phnom Penh",
      year: "2019",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-point.jpg",
      ],
    },
    {
      id: 7,
      title: "Vital Premium Water Factory",
      location: "Phnom Penh",
      year: "2025",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-steel/3D-assets/images/Vital.JPG",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Vital Premium Water Factory-3.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Vital Premium Water Factory-6.jpg",
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/portfolios/Vital Premium Water Factory-9.jpg",
      ],
    },
    {
      id: 8,
      title: "The Premier Centre Sen Sok",
      location: "Phnom Penh",
      year: "2018",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-premier.jpg",
      ],
    },
    {
      id: 9,
      title: "Raintree",
      location: "Phnom Penh",
      year: "2015",
      category: "Heavy Steel Structures",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/portfolio-raintree.jpg",
      ],
    },
    {
      id: 32,
      title: "Elysian Dreams International Factory",
      location: "Phnom Penh",
      year: "2026",
      category: "Pre-Engineered Buildings",
      images: [
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/project-elysian-dreams.jpg",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(
        (selectedProjectIndex + 1) % filteredProjects.length,
      );
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(
        (selectedProjectIndex - 1 + filteredProjects.length) %
          filteredProjects.length,
      );
    }
  };

  // Reset gallery to first image when project changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedProjectIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex]);

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
                className={`px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProjectIndex(index)}
                className="group bg-white border border-slate-200 overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>

                  {/* <div className="absolute top-4 right-4 w-10 h-10 border border-white/20 group-hover:border-accent group-hover:bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </div> */}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-base font-semibold tracking-wider uppercase text-steel/30 whitespace-nowrap pt-1">
                      {project.category
                        .replace("Pre-Engineered Buildings", "PEB")
                        .replace("Heavy Steel Structures", "Heavy Steel")
                        .replace(
                          "Architectural Steel Structures and Roofing Solutions",
                          "Arch Steel",
                        )}
                    </span>
                  </div>
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProjectIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectIndex(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors p-2 z-10"
            >
              <X size={28} />
            </button>

            {/* Modal Content — split layout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-[95vw] xl:max-w-[1400px] w-full bg-white shadow-2xl flex flex-col md:flex-row md:h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left — Image Gallery Column */}
              <div className="md:flex-1 flex flex-col md:min-h-0">
                {/* Main Image */}
                <div className="relative overflow-hidden min-h-0 h-[28vh] md:h-auto md:flex-1 bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImageIndex}
                      src={
                        filteredProjects[selectedProjectIndex].images[
                          selectedImageIndex
                        ]
                      }
                      alt={filteredProjects[selectedProjectIndex].title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-1 p-1 bg-white shrink-0">
                  {filteredProjects[selectedProjectIndex].images.map(
                    (img, i) => {
                      const isSingle =
                        filteredProjects[selectedProjectIndex].images.length ===
                        1;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedImageIndex(i)}
                          className={`h-16 md:h-24 lg:h-32 overflow-hidden border-2 transition-all duration-200 ${
                            isSingle ? "w-auto" : "flex-1"
                          } ${
                            selectedImageIndex === i
                              ? "border-accent"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className={`h-full ${isSingle ? "w-auto" : "w-full object-cover"}`}
                          />
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Right — Sidebar */}
              <div className="w-full md:w-[260px] lg:w-[300px] flex flex-col bg-white p-6 lg:p-8 shrink-0">
                <div>
                  <div className="w-10 h-1 bg-accent mb-5"></div>
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">
                    {filteredProjects[selectedProjectIndex].category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight mt-2 mb-8 leading-tight">
                    {filteredProjects[selectedProjectIndex].title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-steel">
                      <MapPin size={16} className="text-accent shrink-0" />
                      <span>
                        {filteredProjects[selectedProjectIndex].location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-steel">
                      <Calendar size={16} className="text-accent shrink-0" />
                      <span>{filteredProjects[selectedProjectIndex].year}</span>
                    </div>
                  </div>
                </div>

                {/* Footer — counter + nav */}
                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[13px] text-steel/50">
                    {selectedProjectIndex + 1} / {filteredProjects.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-accent hover:bg-accent hover:text-white text-steel transition-all duration-200"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-accent hover:bg-accent hover:text-white text-steel transition-all duration-200"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
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
