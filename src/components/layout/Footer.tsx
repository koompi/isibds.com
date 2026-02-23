import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-primary-dark text-white">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Main footer — 12-column grid */}
				<div className="py-20 lg:grid lg:grid-cols-12 lg:gap-8">
					{/* Company Info */}
					<div className="lg:col-span-4 mb-10 lg:mb-0">
						<img
							src="/logo-dark.png"
							alt="ISI Building Solutions"
							className="h-16 mb-6"
						/>
						<p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
							Aspiring to be the Leader in Pre-engineered Building,
							Specialist in Steel Structure, and Pioneer in
							Prefabrication.
						</p>
						<div className="flex gap-3">
							<a
								href="#"
								className="w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
								aria-label="Facebook"
							>
								<Facebook size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
								aria-label="LinkedIn"
							>
								<Linkedin size={18} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="lg:col-span-2 mb-10 lg:mb-0">
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-6">
							Quick Links
						</h4>
						<ul className="space-y-3 text-sm">
							{[
								{ name: "About Us", path: "/about" },
								{
									name: "Products & Services",
									path: "/services",
								},
								{ name: "Portfolios", path: "/portfolios" },
								{ name: "Careers", path: "/careers" },
								{ name: "Contact Us", path: "/contact" },
							].map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-white/40 hover:text-accent transition-colors cursor-pointer"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div className="lg:col-span-2 mb-10 lg:mb-0">
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-6">
							Services
						</h4>
						<ul className="space-y-3 text-sm text-white/40">
							<li>Building Systems</li>
							<li>Architectural Steel Structures</li>
							<li>Software & Technology</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="lg:col-span-4">
						<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-6">
							Contact Us
						</h4>
						<ul className="space-y-4 text-sm text-white/40">
							<li className="flex items-start gap-3">
								<MapPin
									size={15}
									className="mt-0.5 flex-shrink-0 text-accent"
								/>
								<span>
									ISI Park National Road 2, Phum Kraing
									Sbov, Preah Puth Commune, Kandal Steung
									District, Kandal Province, Cambodia
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone
									size={15}
									className="flex-shrink-0 text-accent"
								/>
								<span>+855 11 919 202</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail
									size={15}
									className="flex-shrink-0 text-accent"
								/>
								<span>sales@isibds.com</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-white/25">
						&copy; {new Date().getFullYear()} ISI Building Solutions.
						All Rights Reserved.
					</p>
					<p className="text-xs text-white/15 tracking-wider uppercase">
						Built with Precision
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
