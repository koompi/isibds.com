import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
	ArrowRight,
	Leaf,
	ShieldCheck,
	DollarSign,
	Zap,
	HardHat,
	Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const DesignBuild = () => {
	const benefits = [
		{
			icon: Leaf,
			title: "Eco-Friendly",
			description:
				"Manufacturing in controlled environments enables enhanced planning, waste reduction, and productivity improvements for sustainable building practices.",
		},
		{
			icon: ShieldCheck,
			title: "Consistent Quality",
			description:
				"Factory-based assembly by experienced crews with multiple quality checkpoints produces superior results compared to site-built alternatives.",
		},
		{
			icon: DollarSign,
			title: "Financial Saving",
			description:
				"Modular, repetitive components enable mass production, making projects cost-competitive, particularly for large-scale developments.",
		},
		{
			icon: Zap,
			title: "Fast Tracking",
			description:
				"Construction timelines can be reduced by over 50% through improved planning and elimination of weather-related delays.",
		},
		{
			icon: HardHat,
			title: "Safety",
			description:
				"Factory-controlled environments minimize moisture, environmental hazards, and dirt exposure during assembly processes.",
		},
	];

	const process = [
		{
			step: "01",
			title: "Project Identification",
			description:
				"We identify projects with opportunities for implementing prefabricated construction methods that align with owner goals.",
		},
		{
			step: "02",
			title: "Integrated Team Assembly",
			description:
				"Architects, contractors, designers, engineers, and specialty trade contractors collaborate early in development.",
		},
		{
			step: "03",
			title: "Value Engineering",
			description:
				"Our integrated approach enables innovation and cost-effective, constructable solutions from the start.",
		},
		{
			step: "04",
			title: "Prefabricated Manufacturing",
			description:
				"Components are manufactured in controlled factory environments with rigorous quality control processes.",
		},
		{
			step: "05",
			title: "On-Site Assembly",
			description:
				"Pre-manufactured components are delivered and assembled on-site with precision and efficiency.",
		},
		{
			step: "06",
			title: "Project Completion",
			description:
				"Final quality checks, handover, and ongoing support ensure client satisfaction and project success.",
		},
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Architectural Steel Structures &amp; Roofing Solutions | ISI Building Solutions</title>
				<meta name="description" content="ISI delivers architectural steel structures and roofing solutions through an integrated design-build approach that saves time, reduces costs, and ensures superior quality." />
				<meta property="og:title" content="Architectural Steel Structures &amp; Roofing Solutions | ISI Building Solutions" />
				<meta property="og:description" content="ISI delivers architectural steel structures and roofing solutions through an integrated design-build approach that saves time, reduces costs, and ensures superior quality." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/services/design-build" />
				<link rel="canonical" href="https://isibds.com/services/design-build" />
			</Helmet>
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/design-build.jpg')] bg-cover bg-center"></div>
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
									Architectural Steel Structures
									<br />
									and Roofing Solutions
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									Identifying projects with opportunities for
									implementing prefabricated construction methods
									that deliver innovation, efficiency, and value.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Design & Build */}
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
									Our Methodology
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Why Architectural Steel Structures?
							</h2>
							<p className="text-steel text-lg leading-relaxed mb-6">
								Design-Build saves time and money for the owner
								while providing the opportunity to achieve
								innovation because Design-build brings value
								engineering into the process.
							</p>
							<p className="text-steel text-base leading-relaxed mb-8">
								Our methodology integrates architects, contractors,
								designers, engineers, and specialty trade
								contractors early in project development to propose
								cost-effective and constructable solutions.
							</p>

							<div className="flex items-start gap-4 bg-surface-light p-6 border-l-4 border-accent">
								<Users size={24} className="text-accent flex-shrink-0 mt-1" />
								<div>
									<h3 className="text-lg font-bold text-primary mb-2">
										Collaborative Approach
									</h3>
									<p className="text-steel text-[15px] leading-relaxed">
										We partner with owners seeking integrated
										design-construction solutions that
										prioritize sustainable building methods and
										value engineering.
									</p>
								</div>
							</div>
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
										src="/images/design-build-project.jpg"
										alt="Design & Build Process"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Prefab - Benefits */}
			<section className="py-28 bg-primary-dark relative overflow-hidden">
				{/* Blueprint grid */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
						backgroundSize: "64px 64px",
					}}
				/>
				<div className="absolute -bottom-8 right-0 text-[16vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
					PREFAB
				</div>
				<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
				<div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

				<div className="container mx-auto px-4 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent" />
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Prefabrication Benefits
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
							Why Prefab?
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="group bg-primary-dark p-8 lg:p-10 border border-white/10 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300"
							>
								<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase font-mono mb-5">
									{String(index + 1).padStart(2, "0")} —
								</div>
								<div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
									<benefit.icon size={20} className="text-accent" />
								</div>
								<h3 className="text-xl font-bold text-white tracking-tight mb-3">
									{benefit.title}
								</h3>
								<p className="text-white/45 text-[15px] leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Timeline */}
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
								Our Process
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							From Concept
							<br />
							to Completion
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{process.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								className="relative"
							>
								<div className="absolute -top-3 -left-3 text-7xl font-bold text-accent/5 leading-none select-none">
									{item.step}
								</div>
								<div className="relative pt-8 pl-8">
									<div className="w-10 h-1 bg-accent mb-5"></div>
									<h3 className="text-lg font-bold text-primary tracking-tight mb-3">
										{item.title}
									</h3>
									<p className="text-steel text-[15px] leading-relaxed">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Approach & Collaborators */}
			<section className="py-28 bg-primary-dark text-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:col-span-5 mb-12 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									Our Approach
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-6">
								Partnership &<br />
								Collaboration
							</h2>
							<p className="text-white/50 text-base leading-relaxed">
								We target projects leveraging prefabrication,
								partnering with owners seeking integrated
								design-construction solutions that prioritize
								sustainable building methods.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.15 }}
							className="lg:col-span-6 lg:col-start-7"
						>
							<h3 className="text-xl font-bold mb-6 tracking-tight">
								We Collaborate With
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{[
									"Architects",
									"Designers",
									"Consultants",
									"Contractors",
									"Engineers",
									"Specialty Trades",
								].map((role, i) => (
									<div
										key={i}
										className="flex items-center gap-3 py-4 border-b border-white/10"
									>
										<div className="w-1.5 h-1.5 bg-accent flex-shrink-0"></div>
										<span className="text-sm font-medium text-white/90">
											{role}
										</span>
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
								Ready to Discuss
								<br />
								Your Project?
							</h2>
							<p className="text-steel text-base leading-relaxed mt-4 max-w-lg">
								Let's explore how our integrated approach can
								bring value to your next steel structure project.
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
								className="inline-flex items-center justify-center gap-3 border border-slate-300 text-primary font-semibold text-sm py-4 px-8 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
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

export default DesignBuild;
