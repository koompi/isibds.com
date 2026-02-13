import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfoliosHighlightSection = () => {
	const portfolios = [
		{
			title: "Aeon Mall 2 Parking Structure",
			category: "Commercial",
			image: "/images/Homes-2.jpg",
		},
		{
			title: "International Exhibition Hall",
			category: "Public Infrastructure",
			image: "/images/Homes-6.jpg",
		},
		{
			title: "KMH Industrial Park",
			category: "Industrial",
			image: "/images/Homes-10.jpg",
		},
	];

	return (
		<section className="py-28 bg-primary-dark text-white overflow-hidden">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Selected Work
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
							Featured
							<br />
							Projects
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Link
							to="/portfolios"
							className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-accent hover:text-white transition-colors cursor-pointer"
						>
							<span>View All Projects</span>
							<ArrowRight size={16} />
						</Link>
					</motion.div>
				</div>

				{/* Asymmetric grid — 1 large + 2 stacked */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Large featured */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="group relative overflow-hidden cursor-pointer lg:row-span-2"
					>
						<div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
							<img
								src={portfolios[0].image}
								alt={portfolios[0].title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent"></div>

						{/* Hover arrow */}
						<div className="absolute top-6 right-6 w-12 h-12 border border-white/20 group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300">
							<ArrowUpRight
								size={20}
								className="text-white/50 group-hover:text-white transition-colors"
							/>
						</div>

						{/* Content */}
						<div className="absolute bottom-0 left-0 w-full p-8">
							<span className="text-accent text-xs font-bold tracking-[0.15em] uppercase block mb-2">
								{portfolios[0].category}
							</span>
							<h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug tracking-tight">
								{portfolios[0].title}
							</h3>
						</div>
					</motion.div>

					{/* Two stacked */}
					{portfolios.slice(1).map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.15 + index * 0.1,
							}}
							className="group relative overflow-hidden aspect-[16/9] cursor-pointer"
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent"></div>

							{/* Hover arrow */}
							<div className="absolute top-5 right-5 w-10 h-10 border border-white/20 group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300">
								<ArrowUpRight
									size={16}
									className="text-white/50 group-hover:text-white transition-colors"
								/>
							</div>

							{/* Content */}
							<div className="absolute bottom-0 left-0 w-full p-6">
								<span className="text-accent text-xs font-bold tracking-[0.15em] uppercase block mb-1.5">
									{item.category}
								</span>
								<h3 className="text-xl font-bold text-white leading-snug tracking-tight">
									{item.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>

				{/* Mobile link */}
				<div className="mt-10 text-center md:hidden">
					<Link
						to="/portfolios"
						className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors cursor-pointer"
					>
						View All Projects
						<ArrowRight size={16} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PortfoliosHighlightSection;
