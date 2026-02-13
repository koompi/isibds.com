import { motion } from "framer-motion";

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
		<section className="py-28 bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Section header — left aligned, editorial */}
				<div className="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-5"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Our Foundation
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Vision, Aspiration
							<br />
							& Values
						</h2>
					</motion.div>
				</div>

				{/* Cards — numbered editorial */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
					{items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.12 }}
							className="group bg-white p-8 lg:p-12 cursor-pointer hover:bg-surface-light transition-colors duration-300 relative"
						>
							{/* Number */}
							<span className="text-[5rem] lg:text-[6rem] font-bold text-slate-100 group-hover:text-accent/10 transition-colors leading-none absolute top-4 right-6 select-none">
								{item.num}
							</span>

							<div className="relative">
								<div className="w-8 h-1 bg-accent mb-8 group-hover:w-12 transition-all duration-300"></div>
								<h3 className="text-xl font-bold text-primary mb-4 tracking-tight">
									{item.title}
								</h3>
								<p className="text-steel leading-relaxed text-[15px]">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VisionValuesSection;
