import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Contact = () => {
	const businessHours = [
		{ day: "Monday – Friday", hours: "8:00 AM – 5:00 PM", open: true },
		{ day: "Saturday", hours: "8:00 AM – 12:00 PM", open: true },
		{ day: "Sunday", hours: "Closed", open: false },
	];

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>Contact Us | ISI Building Solutions Cambodia</title>
				<meta name="description" content="Contact ISI Building Solutions at ISI Park, National Road 2, Kandal Province, Cambodia. Email: sales@isibds.com. Get a quote for your next steel structure project." />
				<meta property="og:title" content="Contact Us | ISI Building Solutions Cambodia" />
				<meta property="og:description" content="Contact ISI Building Solutions at ISI Park, National Road 2, Kandal Province, Cambodia. Email: sales@isibds.com. Get a quote for your next steel structure project." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/contact" />
				<link rel="canonical" href="https://isibds.com/contact" />
			</Helmet>

			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[40vh] min-h-[350px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/industrial-park.jpg')] bg-cover bg-center" />
					<div className="absolute inset-0 bg-primary-dark/80" />
					<div className="relative z-10 h-full flex items-center">
						<div className="container mx-auto px-4 lg:px-8">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7 }}
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="w-8 h-px bg-accent" />
									<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
										Get In Touch
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
									Contact Us
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									We're here to answer your questions and discuss how we can
									help with your next construction project.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Contact Section — Industrial Blueprint */}
			<section className="bg-primary-dark relative overflow-hidden py-28">
				{/* Blueprint grid */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: `
							linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
							linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
						`,
						backgroundSize: "64px 64px",
					}}
				/>

				{/* Ghost "CONTACT" watermark */}
				<div className="absolute -bottom-8 right-0 text-[22vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
					CONTACT
				</div>

				{/* Vertical accent spine */}
				<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
				<div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

				<div className="container mx-auto px-4 lg:px-8 relative z-10">
					<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

						{/* Left — Intro + Stats */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-4 mb-16 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent" />
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									Reach Us
								</span>
							</div>
							<h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8">
								Let's Start<br />
								<span className="text-accent">Your Project</span>
							</h2>
							<p className="text-white/45 text-[15px] leading-relaxed mb-12 max-w-xs">
								Ready to build something extraordinary? Our engineers and specialists are here to make your vision a reality.
							</p>

							{/* Mini stats strip */}
							<div className="grid grid-cols-3 border border-white/10">
								{[
									{ value: "300+", label: "Team" },
									{ value: "12+", label: "Years" },
									{ value: "ISO", label: "9001:2015" },
								].map((stat, i) => (
									<div
										key={i}
										className="py-5 px-4 border-r border-white/10 last:border-r-0"
									>
										<div className="text-xl font-bold text-white tracking-tight">
											{stat.value}
										</div>
										<div className="text-[10px] text-white/30 tracking-[0.15em] uppercase mt-1">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</motion.div>

						{/* Right — Specification Panels */}
						<motion.div
							className="lg:col-span-8 space-y-px"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							{/* Location */}
							<motion.div
								variants={cardVariants}
								className="group bg-white/[0.03] border border-white/10 p-8 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300"
							>
								<div className="flex items-start gap-6">
									<div className="w-12 h-12 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
										<MapPin size={20} className="text-accent" />
									</div>
									<div>
										<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase mb-2 font-mono">
											01 — Location
										</div>
										<h3 className="text-white font-bold text-lg tracking-tight mb-3">
											Office &amp; Factory
										</h3>
										<p className="text-white/50 text-[15px] leading-relaxed max-w-lg">
											ISI Park National Road 2, Phum Kraing Sbov, Preah Puth
											Commune, Kandal Steung District, Kandal Province, Cambodia
										</p>
									</div>
								</div>
							</motion.div>

							{/* Phone */}
							<motion.div
								variants={cardVariants}
								className="group bg-white/[0.03] border border-white/10 p-8 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300"
							>
								<div className="flex items-start gap-6">
									<div className="w-12 h-12 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
										<Phone size={20} className="text-accent" />
									</div>
									<div>
										<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase mb-2 font-mono">
											02 — Phone
										</div>
										<h3 className="text-white font-bold text-lg tracking-tight mb-4">
											Call Us
										</h3>
										<div className="space-y-3">
											<div className="flex items-center gap-4">
												<span className="text-[10px] border border-white/20 px-2.5 py-1 text-white/40 tracking-[0.12em] uppercase font-mono flex-shrink-0">
													KH / ENG
												</span>
												<a
													href="tel:+85511919202"
													className="text-white/70 text-[15px] hover:text-accent transition-colors"
												>
													+855 (0) 11 919 202
												</a>
											</div>
											<div className="flex items-center gap-4">
												<span className="text-[10px] border border-white/20 px-2.5 py-1 text-white/40 tracking-[0.12em] uppercase font-mono flex-shrink-0">
													CH
												</span>
												<a
													href="tel:+85511919212"
													className="text-white/70 text-[15px] hover:text-accent transition-colors"
												>
													+855 (0) 11 919 212
												</a>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Email */}
							<motion.div
								variants={cardVariants}
								className="group bg-white/[0.03] border border-white/10 p-8 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300"
							>
								<div className="flex items-start gap-6">
									<div className="w-12 h-12 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
										<Mail size={20} className="text-accent" />
									</div>
									<div>
										<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase mb-2 font-mono">
											03 — Email
										</div>
										<h3 className="text-white font-bold text-lg tracking-tight mb-3">
											Write to Us
										</h3>
										<a
											href="mailto:sales@isibds.com"
											className="text-accent text-[15px] font-semibold hover:text-white transition-colors duration-200 group-hover:underline underline-offset-4"
										>
											sales@isibds.com
										</a>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>

					{/* Business Hours — Full-width schedule strip */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mt-16 border border-white/10"
					>
						<div className="flex items-center gap-3 px-8 py-5 border-b border-white/10 bg-white/[0.02]">
							<Clock size={15} className="text-accent" />
							<span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 font-mono">
								Business Hours
							</span>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
							{businessHours.map((schedule, i) => (
								<div
									key={i}
									className="px-8 py-7 flex justify-between items-center md:flex-col md:items-start md:gap-3"
								>
									<span className="text-[11px] text-white/35 tracking-[0.18em] uppercase font-mono">
										{schedule.day}
									</span>
									<span
										className={`text-xl font-bold tracking-tight ${
											schedule.open ? "text-white" : "text-white/25"
										}`}
									>
										{schedule.hours}
									</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
