import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Factory, Utensils, Truck, Sprout, Home } from "lucide-react";
import { Link } from "react-router-dom";

const IndustrySpecific = () => {
  const industries = [
    {
      title: "Manufacturing",
      icon: Factory,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        "Garment and Textile Factory",
        "Fabric Processing Factory",
        "Footwear Factory",
        "Automotive Assembly Plant",
        "Electronic Factory",
        "Steel Furniture Factory",
      ],
      brochure: "Manufacturing Solutions Brochure",
    },
    {
      title: "Foods & Beverages",
      icon: Utensils,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        "Brewery Factory",
        "Beverage Production Factory",
        "Food Processing Factory",
      ],
      brochure: "F&B Solutions Brochure",
    },
    {
      title: "Logistics",
      icon: Truck,
      link: "/products-solutions#isi-peb-pre-engineered-buildings",
      applications: [
        "Distribution Center",
        "Warehouse",
        "Logistics Center",
        "Cold Storage",
      ],
      brochure: "Logistics Solutions Brochure",
    },
    {
      title: "Agriculture",
      icon: Sprout,
      link: "/products-solutions#isi-greenhouse",
      applications: [
        "Greenhouse",
        "Rice Mill Factory",
        "Animal Food Factory",
        "Animal Shed Farm",
        "Feed Mill Factory",
      ],
      brochure: "Agri-industry Solutions Brochure",
    },
    {
      title: "Residential",
      icon: Home,
      link: "/products-solutions#isi-home",
      applications: ["Steel Roofing", "Steel Cladding"],
      brochure: "Roofing Systems & Solutions Manual",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Industry Specific Solutions | ISI Building Solutions</title>
        <meta
          name="description"
          content="Specialized steel building solutions tailored for Manufacturing, F&B, Logistics, Agriculture, and Residential sectors."
        />
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
                    Our Expertise
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl uppercase">
                  Industry Specific Solutions
                </h1>
                <p className="text-white/60 text-lg mt-6 max-w-2xl leading-relaxed">
                  Tailored structural engineering and building systems designed to meet the unique operational requirements of diverse industries.
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
                    View Products <ArrowRight size={14} />
                  </Link>

                  <div className="pt-4 border-t border-slate-50">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">Downloads</span>
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
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Need a specialized solution?</h2>
          <p className="text-white/50 mb-10 max-w-2xl mx-auto">
            Our engineering team can customize any of our products to fit your specific industry needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-white font-bold text-sm py-4 px-10 hover:bg-accent-dark transition-all"
          >
            LET'S DISCUSS YOUR PROJECT <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustrySpecific;
