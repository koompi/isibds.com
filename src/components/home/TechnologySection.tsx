import { motion } from "framer-motion";
import { ChevronRight, Monitor, Cog, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const TechnologySection = () => {
	const techFeatures = [
		{
			icon: Monitor,
			num: "01",
			title: "BIM & 3D Modeling",
			description:
				"Full building information modeling for precision engineering and clash detection.",
		},
		{
			icon: Cog,
			num: "02",
			title: "Automated Manufacturing",
			description:
				"CNC-driven fabrication lines ensuring consistent quality at scale.",
		},
		{
			icon: BarChart3,
			num: "03",
			title: "Project Analytics",
			description:
				"Real-time data dashboards for project tracking and resource optimization.",
		},
	];

	return (
		<section className="py-28 bg-primary-dark relative overflow-hidden">
			{/* Blueprint grid */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
					backgroundSize: "64px 64px",
				}}
			/>

			{/* Ghost watermark */}
			<div className="absolute -bottom-8 right-0 text-[14vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
				TECHNOLOGY
			</div>

			{/* Accent spine */}
			<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
			<div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

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
							<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
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
							<div className="w-8 h-px bg-accent" />
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Innovation Engine
							</span>
						</div>

						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
							Software &amp;<br />
							Technology
						</h2>
						<p className="text-white/45 text-base leading-relaxed mb-10">
							Utilizing practical technologies to improve productivity
							and accelerate toward a sustainable future. We integrate
							advanced software solutions in design and manufacturing
							to ensure precision and efficiency.
						</p>

						{/* Numbered spec feature list */}
						<div className="space-y-px mb-10">
							{techFeatures.map((feat, i) => (
								<div
									key={i}
									className="group flex items-start gap-5 p-5 border border-white/10 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300"
								>
									<div className="w-10 h-10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
										<feat.icon size={16} className="text-accent" />
									</div>
									<div>
										<div className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-mono mb-1">
											{feat.num} —
										</div>
										<h4 className="font-bold text-white text-sm tracking-tight mb-1">
											{feat.title}
										</h4>
										<p className="text-white/40 text-[13px] leading-relaxed">
											{feat.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<Link
							to="/technology"
							className="group inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm py-3.5 px-7 hover:bg-accent-dark transition-colors cursor-pointer"
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
