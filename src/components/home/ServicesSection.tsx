import { motion } from "framer-motion";
import { ArrowRight, Box, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
	const services = [
		{
			num: "01",
			icon: Box,
			title: "Building Systems",
			description:
				"Advanced pre-engineered building systems designed for speed, durability, and cost-efficiency across industrial and commercial applications.",
			link: "/services/building-systems",
			image: "/images/building-systems.jpg",
		},
		{
			num: "02",
			icon: PenTool,
			title: "Architectural Steel Structures",
			description:
				"Comprehensive architectural steel and roofing solutions leveraging prefabrication for seamless project execution from concept to completion.",
			link: "/services/design-build",
			image: "/images/design-build.jpg",
		},
	];

	return (
		<section className="py-28 bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Editorial header */}
				<div className="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-5"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								What We Do
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Products &<br />
							Services
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="lg:col-span-5 lg:col-start-8 flex items-end"
					>
						<p className="text-steel text-base leading-relaxed mt-6 lg:mt-0">
							Focusing on Developing Building Systems; Offering
							Design-Build Services Based on Prefabrication for safer
							and more sustainable construction.
						</p>
					</motion.div>
				</div>

				{/* Service cards — editorial numbered */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200 lg:border-x lg:border-slate-200">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.12 }}
							className="group cursor-pointer"
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
								{/* Number overlay */}
								<span className="absolute bottom-4 left-6 text-5xl font-bold text-white/20">
									{service.num}
								</span>
							</div>

							{/* Content */}
							<div className="p-6 lg:p-8">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-9 h-9 border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
										<service.icon
											size={16}
											className="text-accent"
										/>
									</div>
									<h3 className="text-lg font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
										{service.title}
									</h3>
								</div>
								<p className="text-steel text-[15px] leading-relaxed mb-6">
									{service.description}
								</p>
								<Link
									to={service.link}
									className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors cursor-pointer"
								>
									Learn More
									<ArrowRight
										size={14}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
