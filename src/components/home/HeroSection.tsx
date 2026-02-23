import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-end overflow-hidden pb-0">
			{/* Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/images/building-system-main.jpg')] bg-cover bg-center"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary-dark/40"></div>
			</div>

			{/* Vertical accent line */}
			<div className="absolute top-0 left-8 lg:left-16 w-px h-full bg-white/[0.07]"></div>
			<div className="absolute top-0 left-8 lg:left-16 w-px h-40 bg-accent"></div>

			<div className="relative z-10 container mx-auto px-4 lg:px-8">
				{/* Main content */}
				<div className="pt-40 pb-24 lg:pb-0">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
						{/* Left column — main content */}
						<div className="lg:col-span-7 xl:col-span-6 pb-16 lg:pb-24">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="flex items-center gap-3 mb-10"
							>
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									ISI Building Solutions
								</span>
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.9, delay: 0.15 }}
								className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8"
							>
								Leader in
								<br />
								<span className="text-accent">Pre-Engineered</span>
								<br />
								Building &
								<br className="hidden xl:block" />
								Steel Structures
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.35 }}
								className="text-base md:text-lg text-white/50 mb-12 max-w-lg leading-relaxed"
							>
								Pioneering prefabrication to transform the construction
								industry for safer working conditions and environmental
								sustainability.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="flex flex-col sm:flex-row gap-4"
							>
								<Link
									to="/portfolios"
									className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
								>
									Explore Projects
									<ArrowRight
										size={16}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</Link>
								<Link
									to="/contact"
									className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-8 hover:bg-white/5 transition-all duration-200 cursor-pointer"
								>
									Contact Us
								</Link>
							</motion.div>
						</div>

						{/* Right column — stats strip */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.7 }}
							className="lg:col-span-5 xl:col-span-6"
						>
							<div className="grid grid-cols-2 lg:grid-cols-2 border-t lg:border-t-0 lg:border-l border-white/10 py-8 lg:py-0 lg:pl-12">
								{[
									{ value: "450+", label: "Projects Completed" },
									{ value: "12+", label: "Years of Innovation" },
									{ value: "300+", label: "Team Members" },
									{ value: "ISO", label: "9001:2015 Certified" },
								].map((stat, i) => (
									<div key={i} className="py-5 lg:py-8 pr-8">
										<div className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
											{stat.value}
										</div>
										<div className="text-xs text-white/35 tracking-wide uppercase">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				</div>
		</section>
	);
};

export default HeroSection;
