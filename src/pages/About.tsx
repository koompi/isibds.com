import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
			title: "1000+ Projects",
			description:
				"Continuing to lead the pre-engineered building industry in Cambodia with over 1000 completed projects.",
		},
	];

	const stats = [
		{ value: "300+", label: "Skilled Professionals", icon: "/icons/skills-professionals.svg" },
		{ value: "1st PEB", label: "Manufacturing in Cambodia", icon: "/icons/1st-peb.svg" },
		{ value: "1000+", label: "Landmark Projects", icon: "/icons/landmark-projects.svg" },
		{ value: "Best Award", label: "for Steel Contractor", icon: "/icons/best-award.svg" },
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>About Us | ISI Building Solutions Cambodia</title>
				<meta name="description" content="Discover ISI Building Solutions — Cambodia&apos;s pioneer in pre-engineered steel buildings with 300+ professionals, 1000+ landmark projects, and ISO 9001:2015 certification." />
				<meta property="og:title" content="About Us | ISI Building Solutions Cambodia" />
				<meta property="og:description" content="Discover ISI Building Solutions — Cambodia&apos;s pioneer in pre-engineered steel buildings with 300+ professionals, 1000+ landmark projects, and ISO 9001:2015 certification." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/about" />
				<link rel="canonical" href="https://isibds.com/about" />
			</Helmet>
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
								members. We have successfully completed over 1000
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
										src="https://storage.koompi.cloud/org_696e0a5fc000d653d67ae4b9/isi-bds/8ce10993-da3a-4461-892a-c29315c97142.png"
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
								className="py-10 px-6 lg:px-8 text-center"
							>
								<div className="w-14 h-14 rounded-full border-[3px] border-accent/50 flex items-center justify-center mx-auto mb-4">
								<img src={stat.icon} alt={stat.label} className="w-7 h-7" />
							</div>
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
			<section className="py-28 bg-primary-dark relative overflow-hidden">
				{/* Blueprint grid */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
						backgroundSize: "64px 64px",
					}}
				/>
				<div className="absolute -bottom-8 right-0 text-[18vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
					VALUES
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
								What We Stand For
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
							Our Values &amp; Beliefs
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
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
								className="group bg-primary-dark p-8 lg:p-10 border border-white/10 hover:border-accent/20 hover:bg-white/[0.05] transition-all duration-300"
							>
								<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase font-mono mb-5">
									{String(index + 1).padStart(2, "0")} —
								</div>
								<div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
									<item.icon size={20} className="text-accent" />
								</div>
								<h3 className="text-lg font-bold text-white tracking-tight mb-3">
									{item.title}
								</h3>
								<p className="text-white/45 text-[15px] leading-relaxed">
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
									className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10 relative ${index % 2 === 0 ? "" : "lg:direction-rtl"
										}`}
								>
									{/* Content */}
									<div
										className={`${index % 2 === 0
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

		</div>
	);
};

export default About;
