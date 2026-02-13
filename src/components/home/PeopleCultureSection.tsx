import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PeopleCultureSection = () => {
	const highlights = [
		{
			num: "01",
			title: "Career Development",
			description:
				"Continuous training programs and mentorship from senior engineers.",
		},
		{
			num: "02",
			title: "Inclusive Environment",
			description:
				"A workplace where every voice plays a part in our success.",
		},
		{
			num: "03",
			title: "Growth Opportunities",
			description:
				"Clear pathways for professional advancement and leadership.",
		},
	];

	return (
		<section className="py-28 bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
					{/* Content — left */}
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
								People & Culture
							</span>
						</div>

						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary mb-6 leading-tight tracking-tight">
							Fostering Harmony,
							<br />
							Promoting Growth
						</h2>
						<p className="text-steel text-base leading-relaxed mb-10">
							At ISI Building Solutions, we believe our people are our
							greatest asset. We cultivate a culture of harmony,
							respect, and continuous learning while driving
							professional excellence.
						</p>

						{/* Numbered highlights */}
						<div className="space-y-0 divide-y divide-slate-200 border-y border-slate-200 mb-10">
							{highlights.map((item) => (
								<div
									key={item.num}
									className="flex items-start gap-5 py-5"
								>
									<span className="text-2xl font-bold text-accent/20 leading-none pt-0.5 select-none">
										{item.num}
									</span>
									<div>
										<h4 className="font-bold text-primary text-sm tracking-tight mb-1">
											{item.title}
										</h4>
										<p className="text-steel text-[13px] leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<Link
							to="/careers"
							className="group inline-flex items-center gap-3 text-sm text-accent font-semibold hover:text-primary transition-colors cursor-pointer"
						>
							<span>Join Our Team</span>
							<ArrowRight
								size={14}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</Link>
					</motion.div>

					{/* Images — right, masonry style */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="lg:col-span-7"
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className="aspect-[3/4] overflow-hidden">
									<img
										src="/images/team-engineering.jpg"
										alt="Engineering Team"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src="/images/team-finance.jpg"
										alt="Finance & Accounting Team"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="space-y-4 pt-8">
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src="/images/team-project-management.jpg"
										alt="Project Management Team"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="aspect-[3/4] overflow-hidden">
									<img
										src="/images/team-sales.jpg"
										alt="Project Sales Team"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default PeopleCultureSection;
