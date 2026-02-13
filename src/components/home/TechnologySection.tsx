import { motion } from "framer-motion";
import { ChevronRight, Monitor, Cog, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const TechnologySection = () => {
	const techFeatures = [
		{
			icon: Monitor,
			title: "BIM & 3D Modeling",
			description:
				"Full building information modeling for precision engineering and clash detection.",
		},
		{
			icon: Cog,
			title: "Automated Manufacturing",
			description:
				"CNC-driven fabrication lines ensuring consistent quality at scale.",
		},
		{
			icon: BarChart3,
			title: "Project Analytics",
			description:
				"Real-time data dashboards for project tracking and resource optimization.",
		},
	];

	return (
		<section className="py-28 bg-surface-light relative overflow-hidden">
			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
					{/* Image — left */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-6 mb-12 lg:mb-0"
					>
						<div className="relative">
							<img
								src="/images/Homes-7-1.jpg"
								alt="Advanced Technology"
								className="w-full"
							/>
							{/* Accent offset frame */}
							<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
						</div>
					</motion.div>

					{/* Content — right */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="lg:col-span-5 lg:col-start-8"
					>
						<div className="flex items-center gap-3 mb-8">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Innovation Engine
							</span>
						</div>

						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary mb-6 leading-tight tracking-tight">
							Software &<br />
							Technology
						</h2>
						<p className="text-steel text-base leading-relaxed mb-10">
							Utilizing practical technologies to improve productivity
							and accelerate toward a sustainable future. We integrate
							advanced software solutions in design and manufacturing
							to ensure precision and efficiency.
						</p>

						{/* Vertical feature list with borders */}
						<div className="space-y-0 divide-y divide-slate-200 border-y border-slate-200 mb-10">
							{techFeatures.map((feat, i) => (
								<div
									key={i}
									className="flex items-start gap-4 py-5"
								>
									<div className="w-10 h-10 border border-slate-200 flex items-center justify-center flex-shrink-0">
										<feat.icon
											size={18}
											className="text-accent"
										/>
									</div>
									<div>
										<h4 className="font-bold text-primary text-sm tracking-tight mb-1">
											{feat.title}
										</h4>
										<p className="text-steel text-[13px] leading-relaxed">
											{feat.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<Link
							to="/technology"
							className="group inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 px-7 hover:bg-primary-light transition-colors cursor-pointer"
						>
							Discover Our Tech
							<ChevronRight
								size={16}
								className="group-hover:translate-x-0.5 transition-transform"
							/>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TechnologySection;
