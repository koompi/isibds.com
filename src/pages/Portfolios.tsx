import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

const Portfolios = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filters = [
		"All",
		"Pre-Engineered Buildings",
		"Heavy Steel Structures",
		"Architectural Steel Structures and Roofing Solutions",
	];

	const projects = [
		{
			id: 1,
			title: "OCIC",
			location: "Phnom Penh",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-ocic.jpg",
		},
		{
			id: 2,
			title: "Storage Warehouse",
			location: "Phnom Penh",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-warehouse.jpg",
		},
		{
			id: 3,
			title: "MTPC Factory",
			location: "Phnom Penh",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-mtpc.jpg",
		},
		{
			id: 4,
			title: "Garment Factory",
			location: "PPSEZ",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-garment.jpg",
		},
		{
			id: 5,
			title: "Phnom Penh International Aircraft Shed",
			location: "Phnom Penh",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-aircraft.jpg",
		},
		{
			id: 6,
			title: "Rice Mill",
			location: "Kampong Thom",
			year: "2019",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-ricemill.jpg",
		},
		{
			id: 7,
			title: "Vital Premium Water Factory",
			location: "Phnom Penh",
			year: "2018",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-vital.jpg",
		},
		{
			id: 8,
			title: "The Premier Centre Sen Sok",
			location: "Phnom Penh",
			year: "2018",
			category: "Pre-Engineered Buildings",
			image: "/images/portfolio-premier.jpg",
		},
		{
			id: 9,
			title: "Raintree",
			location: "Phnom Penh",
			year: "2015",
			category: "Heavy Steel Structures",
			image: "/images/portfolio-raintree.jpg",
		},
		{
			id: 10,
			title: "Chip Mong Baktouk Commercial Center",
			location: "Phnom Penh",
			year: "2019",
			category: "Heavy Steel Structures",
			image: "/images/portfolio-chipmong.jpg",
		},
		{
			id: 11,
			title: "The Point Community Mall",
			location: "Phnom Penh",
			year: "2019",
			category: "Heavy Steel Structures",
			image: "/images/portfolio-point.jpg",
		},
		{
			id: 12,
			title: "Aeon Mall Sen Sok City",
			location: "Phnom Penh",
			year: "2018",
			category: "Heavy Steel Structures",
			image: "/images/portfolio-aeon.jpg",
		},
		{
			id: 13,
			title: "One KMH Tower",
			location: "Phnom Penh",
			year: "2020",
			category: "Architectural Steel Structures and Roofing Solutions",
			image: "/images/portfolio-kmh.jpg",
		},
	];

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Project Portfolio — 1000+ Landmark Projects | ISI Building Solutions</title>
				<meta name="description" content="Browse ISI Building Solutions&apos; portfolio of 1000+ landmark projects in Cambodia including pre-engineered buildings, heavy steel structures, and architectural steel." />
				<meta property="og:title" content="Project Portfolio — 1000+ Landmark Projects | ISI Building Solutions" />
				<meta property="og:description" content="Browse ISI Building Solutions&apos; portfolio of 1000+ landmark projects in Cambodia including pre-engineered buildings, heavy steel structures, and architectural steel." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/portfolios" />
				<link rel="canonical" href="https://isibds.com/portfolios" />
			</Helmet>
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[40vh] min-h-[350px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/portfolio-aeon.jpg')] bg-cover bg-center"></div>
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
										Our Work
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
									Portfolios
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									Over 1000 completed projects showcasing our
									expertise in pre-engineered buildings,
									heavy steel structures, and architectural
									steel solutions.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className="bg-white border-b border-slate-200 sticky top-[72px] z-40">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
						{filters.map((filter) => (
							<button
								key={filter}
								onClick={() => setActiveFilter(filter)}
								className={`px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
									activeFilter === filter
										? "bg-accent text-white"
										: "bg-slate-100 text-slate-700 hover:bg-slate-200"
								}`}
							>
								{filter}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-16 bg-surface-light">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.05,
								}}
								className="group bg-white border border-slate-200 overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
							>
								{/* Image */}
								<div className="relative aspect-[4/3] overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>

									{/* Category Badge */}
									<div className="absolute top-4 left-4 bg-accent px-3 py-1">
										<span className="text-white text-xs font-bold tracking-wider uppercase">
											{project.category
												.replace(
													"Pre-Engineered Buildings",
													"PEB"
												)
												.replace(
													"Heavy Steel Structures",
													"Heavy Steel"
												)
												.replace(
													"Architectural Steel Structures and Roofing Solutions",
													"Arch Steel"
												)}
										</span>
									</div>

									{/* Hover Icon */}
									<div className="absolute top-4 right-4 w-10 h-10 border border-white/20 group-hover:border-accent group-hover:bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
										<ArrowUpRight
											size={16}
											className="text-white"
										/>
									</div>
								</div>

								{/* Content */}
								<div className="p-6">
									<h3 className="text-xl font-bold text-primary tracking-tight mb-3 group-hover:text-accent transition-colors">
										{project.title}
									</h3>

									<div className="flex items-center gap-4 text-steel text-sm">
										<div className="flex items-center gap-2">
											<MapPin size={14} className="text-accent" />
											<span>{project.location}</span>
										</div>
										<div className="flex items-center gap-2">
											<Calendar size={14} className="text-accent" />
											<span>{project.year}</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* No Results */}
					{filteredProjects.length === 0 && (
						<div className="text-center py-20">
							<p className="text-steel text-lg">
								No projects found in this category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Stats */}
			<section className="py-20 bg-primary text-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
						{[
							{ value: "300+", label: "Skilled Professionals", icon: "/icons/skills-professionals.svg" },
							{ value: "1st PEB", label: "Manufacturing in Cambodia", icon: "/icons/1st-peb.svg" },
							{ value: "1000+", label: "Landmark Projects", icon: "/icons/landmark-projects.svg" },
							{ value: "Best Award", label: "for Steel Contractor", icon: "/icons/best-award.svg" },
						].map((stat, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: i * 0.1,
								}}
								className="py-8 px-6 text-center"
							>
								<img src={stat.icon} alt={stat.label} className="w-8 h-8 mb-3 mx-auto opacity-80" />
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
		</div>
	);
};

export default Portfolios;
