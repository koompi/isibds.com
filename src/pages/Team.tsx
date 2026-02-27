import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
	const leadership = [
		{
			name: "Sen KANG",
			role: "CEO & Co-Founder",
			image: "/images/kang-sen.jpg",
			education:
				"Bachelor's in Civil Engineering (UNSW), Master's in Construction Management (USC)",
			bio: "Returned to Cambodia in 2011 with a focus on prefabrication and safer construction. Co-founded FUXIN and Mekong Homes under ISI GROUP. Also involved in ventures including BROWN Coffee and KMH Football Tournaments.",
		},
		{
			name: "Sovanara IM",
			role: "Chief Operating Officer",
			image: "/images/im-sovanara.jpg",
			education:
				"Bachelor's in Civil Engineering (Institute of Technology Cambodia)",
			bio: "A homegrown talent who progressed internally from intern to production supervisor to plant manager over seven years. Now oversees Engineering, Production, and Project Management.",
		},
		{
			name: "Pav Ing CHAO",
			role: "Finance Director",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
			education:
				"Associate's in Art (Marymount College), Bachelor's in Business Administration (CSU Long Beach)",
			bio: "Manages Finance and Accounting functions while championing people-focused culture initiatives. Brings international experience and a passion for building strong teams.",
		},
	];

	const departments = [
		{
			name: "Engineering",
			image:
				"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
			description:
				"Our engineering team drives innovation in structural design, BIM modeling, and pre-engineered building systems.",
		},
		{
			name: "Finance & Accounting",
			image:
				"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
			description:
				"Managing financial operations with transparency and precision to support sustainable growth.",
		},
		{
			name: "Operation, HR & IT",
			image:
				"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
			description:
				"The backbone of our organization — ensuring smooth operations, talent development, and technology infrastructure.",
		},
		{
			name: "Project Management",
			image:
				"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
			description:
				"Coordinating end-to-end project delivery from planning through construction to handover.",
		},
		{
			name: "Project Sales",
			image:
				"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
			description:
				"Connecting clients with the right solutions and building lasting partnerships across industries.",
		},
		{
			name: "Production",
			image:
				"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
			description:
				"Operating our manufacturing facility with precision — from steel fabrication to quality assurance.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[50vh] min-h-[400px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
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
										People & Culture
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl">
									Our Team
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									The right people at ISI Building Solutions are
									those who have the right mindset — who are
									daring and fun, persevering and resilient in
									pursuing our passion.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Culture Intro */}
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
									Our Culture
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Young & Dynamic
								<br />
								Professionals
							</h2>
							<p className="text-steel text-base leading-relaxed mb-6">
								We are a team of young and dynamic professionals
								creating an environment where people can thrive. Our
								shared core values of Hard Work, Integrity, and
								Innovation guide every member of our team.
							</p>
							<p className="text-steel text-base leading-relaxed">
								We seek team members who are dedicated, resilient,
								and passionate about the organization's success —
								those who dare to innovate and find joy in building
								something meaningful together.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.15 }}
							className="lg:col-span-7"
						>
							<div className="grid grid-cols-3 gap-4">
								{[
									{
										value: "300+",
										label: "Team Members",
									},
									{
										value: "6",
										label: "Departments",
									},
									{
										value: "12+",
										label: "Years Together",
									},
								].map((stat, i) => (
									<div
										key={i}
										className="bg-surface-light p-6 lg:p-8 text-center"
									>
										<div className="text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-1">
											{stat.value}
										</div>
										<div className="text-xs text-steel tracking-wider uppercase">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Leadership */}
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
								Leadership
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Meet Our Leaders
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{leadership.map((person, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.12,
								}}
								className="group bg-white border border-slate-200 overflow-hidden"
							>
								{/* Photo */}
								<div className="aspect-[3/4] overflow-hidden relative">
									<img
										src={person.image}
										alt={person.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
									<div className="absolute bottom-0 left-0 w-full p-6">
										<h3 className="text-xl font-bold text-white tracking-tight">
											{person.name}
										</h3>
										<span className="text-accent text-sm font-semibold">
											{person.role}
										</span>
									</div>
								</div>

								{/* Info */}
								<div className="p-6 lg:p-8">
									<p className="text-steel text-[15px] leading-relaxed mb-4">
										{person.bio}
									</p>
									<div className="pt-4 border-t border-slate-100">
										<span className="text-xs text-steel-light tracking-wider uppercase">
											Education
										</span>
										<p className="text-sm text-primary font-medium mt-1">
											{person.education}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Departments */}
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
								Our Departments
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Teams That Build
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{departments.map((dept, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								className="group cursor-pointer"
							>
								<div className="relative overflow-hidden aspect-[16/10] mb-5">
									<img
										src={dept.image}
										alt={dept.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent"></div>
									<h3 className="absolute bottom-4 left-5 text-lg font-bold text-white tracking-tight">
										{dept.name}
									</h3>
								</div>
								<p className="text-steel text-[15px] leading-relaxed">
									{dept.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Join CTA */}
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
								Want to Join
								<br />
								Our Team?
							</h2>
							<p className="text-white/45 text-base leading-relaxed mt-4 max-w-lg">
								We're always looking for passionate, dedicated
								people who share our values of hard work, integrity,
								and innovation.
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
								to="/careers"
								className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
							>
								View Open Positions
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
				</div>
			</section>
		</div>
	);
};

export default Team;
