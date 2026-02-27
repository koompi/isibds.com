import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyProfileSection = () => {
	return (
		<section className="py-28 bg-primary text-white overflow-hidden relative">
			{/* Subtle diagonal pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(45deg, transparent, transparent 30px, #fff 30px, #fff 31px)",
				}}
			></div>

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-5 mb-12 lg:mb-0"
					>
						<div className="flex items-center gap-3 mb-8">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Company Profile
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6">
							Building Excellence
							<br />
							Since Inception
						</h2>
						<p className="text-white/50 mb-10 text-base leading-relaxed max-w-md">
							We have successfully completed over 450 projects, ranging from
							industrial complexes like the KMH Industrial Park to iconic
							structures such as the Aeon Mall Parking Structure.
						</p>

						{/* Certifications */}
						<div className="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
							{["ISO 9001:2015", "Expert Engineers", "Sustainable"].map(
								(cert, i) => (
									<div
										key={i}
										className="text-center"
									>
										<div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-2 mx-auto">
											<span className="text-accent text-lg font-bold">
												{cert.charAt(0)}
											</span>
										</div>
										<span className="text-[10px] text-white/40 tracking-wider uppercase">
											{cert}
										</span>
									</div>
								)
							)}
						</div>

						<Link
							to="/about"
							className="group inline-flex items-center gap-3 text-sm text-accent font-semibold hover:text-white transition-colors cursor-pointer"
						>
							<span>Learn More About Us</span>
							<ArrowRight
								size={16}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</Link>
					</motion.div>

					{/* Image + Stats */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="lg:col-span-7"
					>
						{/* Main Image */}
						<div className="relative mb-6">
							<div className="aspect-[16/10] overflow-hidden">
								<div className="w-full h-full bg-[url('/images/Homes-5.jpg')] bg-cover bg-center"></div>
							</div>
							{/* Accent corner */}
							<div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-accent"></div>
						</div>

						{/* Stats strip */}
						<div className="grid grid-cols-3 divide-x divide-white/10">
							{[
								{ value: "1,000+", label: "Projects" },
								{ value: "12+", label: "Years" },
								{ value: "300+", label: "Team" },
							].map((stat, i) => (
								<div key={i} className="py-6 px-6 first:pl-0">
									<div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
										{stat.value}
									</div>
									<div className="text-xs text-white/30 tracking-wider uppercase mt-1">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CompanyProfileSection;
