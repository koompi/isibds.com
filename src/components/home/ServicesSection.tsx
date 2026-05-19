import { motion } from "framer-motion";
import { ArrowRight, Factory, Building2, Sprout, Layers, House } from "lucide-react";
import { Link } from "react-router-dom";
const ServicesSection = () => {
  const services = [
    {
      num: "01",
      icon: Factory,
      title: "ISI PEB",
      description:
        "Complete pre-engineered building systems with standing seam roofing, wall cladding, and accessories for industrial and commercial applications.",
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-sunfair.jpg",
    },
    {
      num: "02",
      icon: Building2,
      title: "Heavy Steel Structures",
      description:
        "Specialized steel structural systems for office buildings, shopping malls, showrooms, parking structures, and mixed-use developments.",
      link: "/products-solutions#heavy-steel-structures",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-e-c/images/project-aeon-mall.jpg",
    },
    {
      num: "03",
      icon: Layers,
      title: "ISI TRUSS",
      description:
        "Comprehensive roofing systems designed for durability, aesthetic appeal, and high performance in tropical climates.",
      link: "/products-solutions#isi-truss",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/roof-solution-1.jpg",
    },
    {
      num: "04",
      icon: Sprout,
      title: "ISI Greenhouse",
      description:
        "High-quality pre-engineered structural solutions tailored for modern agriculture, focusing on durability, climate control, and rapid assembly.",
      link: "/products-solutions#isi-greenhouse",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/b606730b-936b-421f-8047-dacdc4e39861.jpg",
    },
    {
      num: "05",
      icon: House,
      title: "ISI Home",
      description:
        "Innovative housing solutions blending traditional Khmer aesthetics with modern steel engineering for safe, affordable living.",
      link: "/products-solutions#isi-home",
      image:
        "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/home-2.jpg",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Editorial header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
              Products &<br />
              Solutions
            </h2>
            <p className="text-steel text-base leading-relaxed mt-6 max-w-2xl">
              Offering practical solutions that streamline steel structure design
              and build process, improving manufacturing productivity, and
              providing superior quality buildings.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group h-full border border-slate-200 hover:border-accent/40 bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Image with number overlay */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-5 text-5xl font-bold text-white/15 select-none">
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                      <service.icon size={15} className="text-accent" />
                    </div>
                    <h3 className="text-base font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-steel text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-primary group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
