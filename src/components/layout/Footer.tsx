import { Facebook, Linkedin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-primary-dark text-white">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Main footer — 4-column grid */}
				<div className="py-20 lg:grid lg:grid-cols-4 lg:gap-12">
					{/* Company Info */}
					<div className="mb-10 lg:mb-0">
						<img
							src="/white.png"
							alt="ISI Building Solutions"
							className="h-16 mb-6"
						/>
						<p className="text-white text-sm leading-relaxed mb-8 max-w-xs">
							A Leader in Pre-engineered Building,
							Specialist in Steel Structure, and Pioneer in
							Prefabrication.
						</p>
						<div className="flex gap-3">
							<a
								href="#"
								className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
								aria-label="Facebook"
							>
								<Facebook size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
								aria-label="LinkedIn"
							>
								<Linkedin size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
								aria-label="Telegram"
							>
								<Send size={18} />
							</a>
						</div>
					</div>

					{/* Contact Info */}
					<div className="mb-10 lg:mb-0">
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-6">
							Contact Info
						</h4>
						<div className="space-y-4 text-sm text-white">
							<p className="leading-relaxed">
								ISI Park National Road 2, Phum Kraing
								Sbov, Preah Puth Commune, Kandal Steung
								District, Kandal Province, Cambodia
							</p>
							<a
								href="tel:+85511919202"
								className="flex items-center gap-2 hover:text-accent transition-colors"
							>
								<Phone size={14} className="flex-shrink-0 text-accent" />
								+855 11 919 202
							</a>
							<a
								href="mailto:sales@isibds.com"
								className="text-accent hover:text-accent/80 transition-colors"
							>
								sales@isibds.com
							</a>
							<div className="pt-2 space-y-3">
								<a
									href="#"
									className="flex items-center gap-3 border border-white/20 px-4 py-2.5 hover:border-accent/50 transition-colors cursor-pointer"
								>
									<Send size={16} className="text-white/70" />
									<span className="text-xs font-bold tracking-[0.1em] uppercase">
										Telegram
									</span>
								</a>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className="mb-10 lg:mb-0">
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-6">
							Navigation
						</h4>
						<ul className="space-y-3 text-sm">
							{[
								{ name: "About", path: "/about" },
								{ name: "Products & Solutions", path: "/products-solutions" },
								{ name: "Portfolios", path: "/portfolios" },
								{ name: "Technology", path: "/technology" },
								{ name: "Careers", path: "/careers" },
								{ name: "Contact Us", path: "/contact" },
							].map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-white font-bold text-xs tracking-[0.1em] uppercase hover:text-accent transition-colors cursor-pointer"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Inquiry */}
					<div>
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-6">
							Inquiry
						</h4>
						<p className="text-sm text-white leading-relaxed mb-6">
							Ready to start your next industrial project?
						</p>
						<a
							href="mailto:sales@isibds.com"
							className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-accent/90 transition-colors cursor-pointer"
						>
							Get Expert Advice
							<ArrowRight size={16} />
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-white">
						&copy; {new Date().getFullYear()} ISI Building Solutions.
						All Rights Reserved.
					</p>
					<p className="text-xs text-white tracking-wider uppercase hover:text-accent transition-colors cursor-pointer">
						Privacy Policy
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
