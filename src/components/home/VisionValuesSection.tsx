import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const VisionValuesSection = () => {
	const items = [
		{
			num: "01",
			title: "Vision",
			description:
				"To be the Leader in Pre-engineered Building, Specialist in Steel Structure, and Pioneer in Prefabrication.",
		},
		{
			num: "02",
			title: "Aspiration",
			description:
				"Transforming Construction Industry Through Prefabrication For Safer Working Condition and Environmental Sustainability.",
		},
		{
			num: "03",
			title: "Values",
			description:
				"Integrity, Innovation, Excellence, and Customer-Centricity in everything we do.",
		},
	];

	return (
		<section className="py-28 bg-primary-dark relative overflow-hidden">
			{/* Blueprint grid */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
					backgroundSize: "64px 64px",
				}}
			/>

			{/* Ghost watermark */}
			<div className="absolute -bottom-8 right-0 text-[22vw] font-bold text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
				VISION
			</div>

			{/* Accent spine */}
			<div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20" />
			<div className="absolute left-0 top-0 h-40 w-1 bg-accent" />

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				{/* Section header */}
				<div className="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-5"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent" />
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Our Foundation
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
							Vision, Aspiration
							<br />
							&amp; Values
						</h2>
					</motion.div>
				</div>

				{/* Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{items.map((item, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className="group bg-primary-dark p-8 lg:p-12 border border-white/10 hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer relative overflow-hidden"
						>
							{/* Ghost number */}
							<span className="text-[7rem] lg:text-[9rem] font-bold text-white/[0.04] group-hover:text-accent/[0.07] transition-colors leading-none absolute -top-4 right-4 select-none pointer-events-none">
								{item.num}
							</span>
							<div className="relative">
								<div className="text-[10px] text-white/25 tracking-[0.25em] uppercase font-mono mb-5">
									{item.num} —
								</div>
								<div className="w-8 h-1 bg-accent mb-6 group-hover:w-12 transition-all duration-300" />
								<h3 className="text-xl font-bold text-white mb-4 tracking-tight">
									{item.title}
								</h3>
								<p className="text-white/45 leading-relaxed text-[15px]">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default VisionValuesSection;
