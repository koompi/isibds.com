import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
	const software = [
		{
			name: "Microsoft Dynamics AX",
			category: "ERP System",
			description:
				"Manages finance and operations with comprehensive functionality for managing resources and processes connected to manufacturing, planning, supply chain, sales, financials and more.",
			logo: "/images/logo-microsoft-dynamics.png",
		},
		{
			name: "Tekla BIM",
			category: "Building Information Modeling",
			description:
				"Creates structure models with accurate, reliable detailed information and generates automated shop and erection drawings for production.",
			logo: "/images/logo-tekla.png",
		},
		{
			name: "Metal Building Software (MBS)",
			category: "Design & Engineering",
			description:
				"Provides design, detailing, costing, and drafting of metal buildings compliant with US and international codes, generating bills of materials and customized erection drawings.",
			logo: "/images/logo-mbs.png",
		},
		{
			name: "SCIA Engineer",
			category: "Structural Analysis",
			description:
				"Specialized software for analyzing and designing complex structures and challenging architectural projects with precision.",
			logo: "/images/logo-scia.png",
		},
		{
			name: "ETABS",
			category: "Building Analysis",
			description:
				"Analyzes and designs buildings from low-rise to high-rise structures, including composite structures with advanced modeling capabilities.",
			logo: "/images/logo-etabs.png",
		},
		{
			name: "CFS",
			category: "Cold-Formed Steel",
			description:
				"Specializes in cold-formed steel structural member design using American Iron and Steel Institute (AISI) standards.",
			logo: "/images/logo-cfs.png",
		},
		{
			name: "Framecad",
			category: "Light-Gauge Steel",
			description:
				"Designs light-gauge steel structures with automated drawings and production files for efficient manufacturing.",
			logo: "/images/logo-framecad.png",
		},
	];

	const systems = [
		{
			title: "Building Information Modeling (BIM)",
			description:
				"We are implementing BIM technology throughout our entire business process—from project conception through design, modeling, procurement, manufacturing, quality assurance, to transportation and installation—to achieve full system integration.",
			benefits: [
				"Complete project lifecycle management",
				"Enhanced collaboration across teams",
				"Accurate clash detection and resolution",
				"Automated documentation generation",
			],
		},
		{
			title: "Manufacturing Systems",
			description:
				"Developing integrated systems including Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), and Manufacturing Execution System (MES) to optimize our production processes.",
			benefits: [
				"Real-time production monitoring",
				"Streamlined supply chain management",
				"Quality control automation",
				"Data-driven decision making",
			],
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/Homes-7-1.jpg')] bg-cover bg-center"></div>
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
										Innovation Engine
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
									Software &<br />
									Technology
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									Utilizing practical technologies to streamline
									design, fabrication, and construction processes,
									providing competitive advantage through
									innovation.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Strategy Overview */}
			<section className="py-28 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-6 mb-12 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									Our Approach
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Technology-Driven
								<br />
								Excellence
							</h2>
							<p className="text-steel text-base leading-relaxed mb-6">
								We continuously seek suitable technologies and
								develop in-house solutions when necessary to
								maintain our competitive edge and deliver superior
								results for our clients.
							</p>
							<p className="text-steel text-base leading-relaxed">
								Our technology strategy focuses on full system
								integration across all business processes, from
								initial concept through final installation,
								ensuring efficiency, accuracy, and quality at
								every step.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.15 }}
							className="lg:col-span-6"
						>
							<div className="relative">
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src="/images/industrial-park.jpg"
										alt="Technology in Action"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Core Systems */}
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
								Core Systems
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Integrated Technology
							<br />
							Platform
						</h2>
					</motion.div>

					<div className="space-y-12">
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
								className="bg-white p-8 lg:p-12 border-l-4 border-accent"
							>
								<h3 className="text-2xl font-bold text-primary tracking-tight mb-4">
									{system.title}
								</h3>
								<p className="text-steel text-base leading-relaxed mb-8 max-w-3xl">
									{system.description}
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Software & Tools */}
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
								Our Toolkit
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Software & Technologies
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{software.map((tool, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								className="bg-white border border-slate-200 p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
							>
								<div className="h-16 flex items-center justify-start mb-6">
									<img
										src={tool.logo}
										alt={tool.name}
										className="max-h-full w-auto object-contain"
									/>
								</div>
								<span className="text-xs text-accent font-bold tracking-wider uppercase block mb-2">
									{tool.category}
								</span>
								<h3 className="text-lg font-bold text-primary tracking-tight mb-3">
									{tool.name}
								</h3>
								<p className="text-steel text-[15px] leading-relaxed">
									{tool.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Impact */}
			<section className="py-28 bg-primary text-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:col-span-6 mb-12 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									The Result
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6">
								Accelerating Toward
								<br />a Sustainable Future
							</h2>
							<p className="text-white/50 text-base leading-relaxed">
								By integrating advanced software solutions in our
								design and manufacturing processes, we ensure
								precision, efficiency, and environmental
								sustainability in every project we deliver.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.15 }}
							className="lg:col-span-5 lg:col-start-8"
						>
							<div className="grid grid-cols-2 gap-6">
								{[
									{ value: "50%+", label: "Time Reduction" },
									{
										value: "99.9%",
										label: "Design Accuracy",
									},
									{
										value: "100%",
										label: "Digital Integration",
									},
									{
										value: "30%+",
										label: "Cost Efficiency",
									},
								].map((stat, i) => (
									<div
										key={i}
										className="text-center py-8 border border-white/10"
									>
										<div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
											{stat.value}
										</div>
										<div className="text-xs text-white/40 tracking-wider uppercase">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-7 mb-8 lg:mb-0"
						>
							<h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
								See Our Technology
								<br />
								in Action
							</h2>
							<p className="text-steel text-base leading-relaxed mt-4 max-w-lg">
								Discover how our technology stack delivers
								superior results across all our projects.
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
								to="/portfolios"
								className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
							>
								View Projects
								<ArrowRight
									size={16}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-3 border border-slate-300 text-primary font-semibold text-sm py-4 px-8 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
							>
								Contact Us
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Technology;
