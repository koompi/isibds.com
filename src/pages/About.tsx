import { motion } from "framer-motion";
import { ArrowRight, Shield, Lightbulb, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
	const values = [
		{
			icon: Lightbulb,
			title: "Engineering & Innovation",
			description:
				"Our DNA is rooted in engineering excellence and continuous innovation across design, fabrication, and construction.",
		},
		{
			icon: Shield,
			title: "Integrity & Dedication",
			description:
				"Integrity is the foundation where we stand for centuries. We believe in dedication and hard work.",
		},
		{
			icon: Heart,
			title: "Harmony & Wellbeing",
			description:
				"We foster harmony, work-life balance, and wellbeing as the most fundamental source of act of kindness.",
		},
		{
			icon: Leaf,
			title: "Environmental Sustainability",
			description:
				"Blending with nature is the most efficient way in maintaining environmental sustainability.",
		},
	];

	const milestones = [
		{
			year: "2012",
			title: "Founded",
			description:
				"Established with 4 fresh graduate engineers and a mission to transform conventional truss design to pre-engineered building.",
		},
		{
			year: "2015",
			title: "First Major Projects",
			description:
				"Completed early industrial and commercial projects, establishing a reputation for quality and efficiency.",
		},
		{
			year: "2019",
			title: "ISO 9001:2015",
			description:
				"Achieved ISO 9001:2015 accreditation, reinforcing our commitment to quality management systems.",
		},
		{
			year: "2022",
			title: "300+ Team Members",
			description:
				"Grew from 4 engineers to over 300 dedicated staff, completing landmark projects like Aeon Mall Parking Structure.",
		},
		{
			year: "Today",
			title: "450+ Projects",
			description:
				"Continuing to lead the pre-engineered building industry in Cambodia with over 450 completed projects.",
		},
	];

	const stats = [
		{ value: "450+", label: "Projects Completed" },
		{ value: "300+", label: "Team Members" },
		{ value: "12+", label: "Years of Experience" },
		{ value: "ISO", label: "9001:2015 Certified" },
	];

	return (
		<div className="min-h-screen">
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/Homes-9-1.jpg')] bg-cover bg-center"></div>
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
										About ISI Building Solutions
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
									Transforming Construction
									<br />
									Through Prefabrication
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-xl leading-relaxed">
									A member of ISI Group — one of Cambodia's most
									respected and diversified corporations with 25+
									years of experience.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Company Story */}
			<section className="py-28 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
						{/* Text */}
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
									Our Story
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								From 4 Engineers
								<br />
								to 300+ Strong
							</h2>
							<p className="text-steel text-base leading-relaxed mb-6">
								ISI Building Solutions was established in 2012 with
								the mission to transform the construction of
								warehouse and factory from using conventional truss
								design to pre-engineered building.
							</p>
							<p className="text-steel text-base leading-relaxed mb-6">
								Starting with just four fresh graduate engineers, we
								have grown to over three hundred dedicated staff
								members. We have successfully completed over 450
								projects, including iconic structures such as the
								Aeon Mall Sen Sok Parking Structure and the
								International Exhibition Hall.
							</p>
							<p className="text-steel text-base leading-relaxed mb-8">
								In 2019, we obtained our ISO 9001:2015
								accreditation, reinforcing our unwavering commitment
								to quality in every project we undertake.
							</p>

							<Link
								to="/about/team"
								className="group inline-flex items-center gap-3 text-sm text-accent font-semibold hover:text-primary transition-colors cursor-pointer"
							>
								<span>Meet Our Team</span>
								<ArrowRight
									size={14}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>
						</motion.div>

						{/* Image */}
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
										src="/images/about-company.jpg"
										alt="ISI Building Solutions construction site"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Strip */}
			<section className="bg-primary text-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
						{stats.map((stat, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: i * 0.1,
								}}
								className="py-10 px-6 lg:px-8"
							>
								<div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
									{stat.value}
								</div>
								<div className="text-xs text-white/40 tracking-wider uppercase">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Vision & Aspiration */}
			<section className="py-28 bg-surface-light">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:col-span-5 mb-16 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									Our Direction
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Vision &<br />
								Aspiration
							</h2>
							<p className="text-steel text-base leading-relaxed">
								Within 10-20 years, we envision leading the
								pre-engineered building industry, specializing in
								steel structures, and pioneering prefabrication that
								transforms regional construction.
							</p>
						</motion.div>

						{/* Cards */}
						<div className="lg:col-span-7 space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="bg-white p-8 lg:p-10 border border-slate-200"
							>
								<span className="text-5xl font-bold text-accent/10 leading-none select-none">
									01
								</span>
								<h3 className="text-xl font-bold text-primary tracking-tight mt-4 mb-3">
									Vision
								</h3>
								<p className="text-steel text-[15px] leading-relaxed">
									To transform the construction industry through
									prefabrication for safer working conditions and
									environmental sustainability. To be the Leader
									in Pre-engineered Building, Specialist in Steel
									Structure, and Pioneer in Prefabrication.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="bg-white p-8 lg:p-10 border border-slate-200"
							>
								<span className="text-5xl font-bold text-accent/10 leading-none select-none">
									02
								</span>
								<h3 className="text-xl font-bold text-primary tracking-tight mt-4 mb-3">
									Aspiration
								</h3>
								<p className="text-steel text-[15px] leading-relaxed">
									We focus on designing and building faster,
									better, beautiful, and efficient structures. By
									applying Building Information Modeling (BIM), we
									streamline design, fabrication, and construction
									processes — our strategic intersection is
									"Prefab Design-Build."
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
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
								What We Stand For
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Our Values & Beliefs
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
						{values.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="bg-white p-8 lg:p-10"
							>
								<div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-6">
									<item.icon
										size={22}
										className="text-accent"
									/>
								</div>
								<h3 className="text-lg font-bold text-primary tracking-tight mb-3">
									{item.title}
								</h3>
								<p className="text-steel text-[15px] leading-relaxed">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline / Milestones */}
			<section className="py-28 bg-primary-dark text-white overflow-hidden">
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
								Our Journey
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
							Key Milestones
						</h2>
					</motion.div>

					<div className="relative">
						{/* Timeline line */}
						<div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2"></div>

						<div className="space-y-12 lg:space-y-0">
							{milestones.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10 relative ${
										index % 2 === 0 ? "" : "lg:direction-rtl"
									}`}
								>
									{/* Content */}
									<div
										className={`${
											index % 2 === 0
												? "lg:text-right lg:pr-16"
												: "lg:col-start-2 lg:pl-16"
										}`}
									>
										<span className="text-accent text-sm font-bold tracking-wider">
											{item.year}
										</span>
										<h3 className="text-xl font-bold tracking-tight mt-2 mb-3">
											{item.title}
										</h3>
										<p className="text-white/45 text-[15px] leading-relaxed">
											{item.description}
										</p>
									</div>

									{/* Dot on timeline */}
									<div className="hidden lg:block absolute left-1/2 top-10 w-3 h-3 bg-accent -translate-x-1/2"></div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ISI Group */}
			<section className="py-28 bg-surface-light">
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
									Part of Something Bigger
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								A Member of
								<br />
								ISI Group
							</h2>
							<p className="text-steel text-base leading-relaxed mb-6">
								ISI Group is one of Cambodia's most respected,
								successful, and diversified corporations with over
								25 years of experience. The group operates across
								building materials, building solutions, property
								development, education, and food & beverage sectors.
							</p>
							<p className="text-steel text-base leading-relaxed mb-8">
								Our core values — Innovation, Striving, Integrity,
								Growing Together — guide everything we do as a
								group, with active CSR initiatives in education,
								environment, sports, and healthcare.
							</p>

							{/* ISI Group sectors */}
							<div className="grid grid-cols-2 gap-4">
								{[
									"Building Materials",
									"Building Solutions",
									"Property Development",
									"Education",
								].map((sector, i) => (
									<div
										key={i}
										className="flex items-center gap-3 py-3 border-b border-slate-200"
									>
										<div className="w-1.5 h-1.5 bg-accent flex-shrink-0"></div>
										<span className="text-sm font-medium text-primary">
											{sector}
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
							className="lg:col-span-6"
						>
							<div className="relative">
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src="/images/Homes-10.jpg"
										alt="ISI Group corporate"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-primary text-white">
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
								Ready to Build
								<br />
								With Us?
							</h2>
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

export default About;
