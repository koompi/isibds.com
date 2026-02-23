import { motion } from "framer-motion";
import {
	MapPin,
	Clock,
	Calendar,
	Users,
	Briefcase,
	GraduationCap,
} from "lucide-react";

const Careers = () => {
	const openings = [
		{
			title: "Project Manager",
			positions: "3 positions",
			location: "Site",
			type: "Full Time",
			deadline: "30/09/2025",
		},
		{
			title: "MEP Manager",
			positions: "1 position",
			location: "Phnom Penh",
			type: "Full Time",
			deadline: "31/07/2025",
		},
		{
			title: "Senior MEP Engineer",
			positions: "1 position",
			location: "Phnom Penh",
			type: "Full Time",
			deadline: "31/08/2025",
		},
	];

	const benefits = [
		{
			icon: Users,
			title: "Young & Dynamic Team",
			description:
				"Work alongside over 300 professionals in a collaborative, innovative environment.",
		},
		{
			icon: GraduationCap,
			title: "Professional Development",
			description:
				"Continuous learning opportunities and career advancement through training and mentorship.",
		},
		{
			icon: Briefcase,
			title: "Challenging Projects",
			description:
				"Work on landmark projects that shape Cambodia's construction landscape.",
		},
	];

	const disciplines = [
		"Engineering",
		"Manufacturing",
		"Fabrication",
		"Construction",
		"Project Management",
		"Architecture",
		"Master Planning",
		"Sales & Marketing",
		"Finance",
		"Business Administration",
	];

	return (
		<div className="min-h-screen">
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/team-engineering.jpg')] bg-cover bg-center"></div>
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
										Join Our Team
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
									Careers
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									If you are a committed individual who wants to
									be part of building this GOOD company to a
									GREAT one, ISI Building Solutions surely has a
									spot for you.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Culture & Philosophy */}
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
									Why Join Us
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Realize Your
								<br />
								Potential With Us
							</h2>
							<p className="text-steel text-base leading-relaxed mb-6">
								We are committed to engineering and innovation,
								employing over 300 engineers and skilled
								technicians across multiple disciplines including
								engineering, manufacturing, fabrication,
								construction, project management, architecture, and
								business administration.
							</p>
							<p className="text-steel text-base leading-relaxed mb-8">
								We are the breeding ground for young professionals
								— more than half our workforce is homegrown
								talent. We position ourselves as "The Employer of
								Choice" in our industries, actively recruiting
								"The Right People" and investing heavily in
								employee development.
							</p>

							<div className="bg-surface-light p-6 border-l-4 border-accent">
								<p className="text-primary text-lg font-semibold">
									Over the next 2-3 years, we will actively look
									for 'The Right People' to join our team while
									investing in professional development to
									support exponential growth.
								</p>
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
										src="/images/team-project-management.jpg"
										alt="Our Team"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Disciplines */}
			<section className="py-20 bg-surface-light">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Opportunities Across
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Multiple Disciplines
						</h2>
					</motion.div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
						{disciplines.map((discipline, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: index * 0.05,
								}}
								className="bg-white p-6 border border-slate-200 text-center"
							>
								<span className="text-sm font-semibold text-primary">
									{discipline}
								</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
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
								Why Work Here
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							What We Offer
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.12,
								}}
								className="bg-white border border-slate-200 p-8 lg:p-10"
							>
								<div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-6">
									<benefit.icon
										size={22}
										className="text-accent"
									/>
								</div>
								<h3 className="text-xl font-bold text-primary tracking-tight mb-3">
									{benefit.title}
								</h3>
								<p className="text-steel text-[15px] leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Current Openings */}
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
								Open Positions
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Current Job Openings
						</h2>
					</motion.div>

					<div className="space-y-4">
						{openings.map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="bg-white border border-slate-200 p-6 lg:p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
							>
								<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
									<div className="lg:col-span-7 mb-4 lg:mb-0">
										<h3 className="text-xl font-bold text-primary tracking-tight mb-2">
											{job.title}
										</h3>
										<span className="text-sm text-steel">
											{job.positions}
										</span>
									</div>

									<div className="lg:col-span-5 flex flex-wrap items-center gap-4">
										<div className="flex items-center gap-2 text-steel text-sm">
											<MapPin
												size={14}
												className="text-accent"
											/>
											<span>{job.location}</span>
										</div>
										<div className="flex items-center gap-2 text-steel text-sm">
											<Clock
												size={14}
												className="text-accent"
											/>
											<span>{job.type}</span>
										</div>
										<div className="flex items-center gap-2 text-steel text-sm">
											<Calendar
												size={14}
												className="text-accent"
											/>
											<span>By {job.deadline}</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		</div>
	);
};

export default Careers;
