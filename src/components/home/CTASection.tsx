import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
	return (
		<section className="relative py-28 overflow-hidden">
			{/* Background image */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
				<div className="absolute inset-0 bg-primary-dark/90"></div>
			</div>

			{/* Subtle grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			></div>

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
					{/* Heading — left */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-7 mb-10 lg:mb-0"
					>
						<div className="flex items-center gap-3 mb-8">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Let's Build Together
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold text-white leading-tight tracking-tight">
							Create and Build
							<br />
							Better With Us
						</h2>
						<p className="text-white/45 text-base leading-relaxed mt-6 max-w-lg">
							Whether you are a client, partner, or future team member
							— join us in our mission to revolutionize the
							construction industry.
						</p>
					</motion.div>

					{/* CTA buttons — right */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="lg:col-span-4 lg:col-start-9"
					>
						<div className="flex flex-col gap-4">
							<Link
								to="/contact"
								className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-10 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
							>
								Partner With Us
								<ArrowRight
									size={16}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>
							<Link
								to="/careers"
								className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-sm py-4 px-10 hover:bg-white/5 transition-all duration-200 cursor-pointer"
							>
								Start Your Career
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
