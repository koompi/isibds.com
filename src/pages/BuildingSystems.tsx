import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BuildingSystems = () => {
	const features = [
		"Cost-effective and time-efficient construction",
		"Superior structural integrity and durability",
		"Flexible design adaptable to various applications",
		"Reduced on-site construction time",
		"Environmentally sustainable prefabrication",
		"Quality-controlled factory manufacturing",
	];

	const applications = [
		{
			title: "Industrial Facilities",
			description:
				"Warehouses, factories, and manufacturing plants with wide-span requirements.",
			image:
				"/images/Homes-10.jpg",
		},
		{
			title: "Commercial Buildings",
			description:
				"Retail centers, showrooms, and commercial complexes built with precision.",
			image:
				"/images/Homes-2.jpg",
		},
		{
			title: "Heavy Steel Structures",
			description:
				"Office buildings, parking structures, and mixed-use developments.",
			image: "/images/multi-story-systems.jpg",
		},
	];

	const systems = [
		{
			title: "Pre-Engineered Buildings",
			description:
				"Our pre-engineered building systems offer standardized, cost-effective structural solutions for warehouses, factories, and industrial facilities. Designed with precision and manufactured in controlled factory conditions for superior quality.",
			benefits: [
				"Fast design and delivery timelines",
				"Cost savings up to 30% vs conventional",
				"Wide clear spans up to 60+ meters",
				"Easy future expansion capabilities",
			],
			image: "/images/building-systems.jpg",
		},
		{
			title: "Heavy Steel Structures",
			description:
				"Specialized steel structural systems for vertical construction projects including office buildings, parking structures, and mixed-use developments. Engineered for strength, efficiency, and architectural flexibility.",
			benefits: [
				"Accelerated construction schedules",
				"Enhanced seismic performance",
				"Flexible floor plans and layouts",
				"Sustainable construction methods",
			],
			image: "/images/multi-story-systems.jpg",
		},
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Building Systems | ISI Building Solutions</title>
				<meta name="description" content="Explore ISI&apos;s pre-engineered building systems and heavy steel structures — delivering cost-efficient, high-quality factory-manufactured buildings across Southeast Asia." />
				<meta property="og:title" content="Building Systems | ISI Building Solutions" />
				<meta property="og:description" content="Explore ISI&apos;s pre-engineered building systems and heavy steel structures — delivering cost-efficient, high-quality factory-manufactured buildings across Southeast Asia." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/services/building-systems" />
				<link rel="canonical" href="https://isibds.com/services/building-systems" />
			</Helmet>
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/building-system-main.jpg')] bg-cover bg-center"></div>
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
										Products & Services
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
									Building Systems
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									Developing practical solutions that streamline
									steel structure design and build process,
									improving manufacturing productivity, and
									providing superior quality buildings.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Features */}
			<section className="py-28 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
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
									Our Approach
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Engineered for
								<br />
								Excellence
							</h2>
							<p className="text-steel text-base leading-relaxed mb-8">
								Our building systems combine cutting-edge
								engineering with proven manufacturing processes to
								deliver structures that exceed industry standards
								in quality, efficiency, and sustainability.
							</p>

							<div className="space-y-0 divide-y divide-slate-200 border-y border-slate-200">
								{features.map((feature, i) => (
									<div
										key={i}
										className="flex items-start gap-3 py-4"
									>
										<CheckCircle2
											size={18}
											className="text-accent flex-shrink-0 mt-0.5"
										/>
										<span className="text-steel text-[15px]">
											{feature}
										</span>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.15 }}
							className="lg:col-span-7"
						>
							<div className="relative">
								<div className="aspect-[16/10] overflow-hidden">
									<img
										src="/images/building-system-main.jpg"
										alt="Building Systems"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Building System Types */}
			<section className="py-28 bg-surface-light">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Our Solutions
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Building System Types
						</h2>
					</motion.div>

					<div className="space-y-16">
						{systems.map((system, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className={`lg:grid lg:grid-cols-12 lg:gap-12 items-center ${
									index % 2 === 1 ? "lg:direction-rtl" : ""
								}`}
							>
								{/* Content */}
								<div
									className={`lg:col-span-6 mb-8 lg:mb-0 ${
										index % 2 === 1 ? "lg:col-start-7" : ""
									}`}
								>
									<h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-4">
										{system.title}
									</h3>
									<p className="text-steel text-base leading-relaxed mb-6">
										{system.description}
									</p>

									<div className="space-y-3">
										{system.benefits.map((benefit, i) => (
											<div
												key={i}
												className="flex items-start gap-3"
											>
												<div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2"></div>
												<span className="text-steel text-[15px]">
													{benefit}
												</span>
											</div>
										))}
									</div>
								</div>

								{/* Image */}
								<div
									className={`lg:col-span-6 ${
										index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
									}`}
								>
									<div className="aspect-[4/3] overflow-hidden">
										<img
											src={system.image}
											alt={system.title}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Applications */}
			<section className="py-28 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Applications
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Built for Every Need
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{applications.map((app, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.12,
								}}
								className="group"
							>
								<div className="relative overflow-hidden aspect-[4/3] mb-5">
									<img
										src={app.image}
										alt={app.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent"></div>
									<h3 className="absolute bottom-5 left-5 text-xl font-bold text-white tracking-tight">
										{app.title}
									</h3>
								</div>
								<p className="text-steel text-[15px] leading-relaxed">
									{app.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-primary-dark text-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-7 mb-8 lg:mb-0"
						>
							<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
								Ready to Start
								<br />
								Your Project?
							</h2>
							<p className="text-white/45 text-base leading-relaxed mt-4 max-w-lg">
								Let's discuss how our building systems can meet
								your specific requirements.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.1 }}
							className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end"
						>
							<Link
								to="/contact"
								className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
							>
								Get a Quote
								<ArrowRight
									size={16}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>
							<Link
								to="/portfolios"
								className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-8 hover:bg-white/5 transition-all duration-200 cursor-pointer"
							>
								View Projects
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BuildingSystems;
