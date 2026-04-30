import { useState, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Warehouse, Truck, Sprout, Utensils, Home, Building2, Triangle, TentTree, HousePlus, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import PDFModal from "./PDFModal";

type SubItem = {
	name: string;
	path: string;
	icon?: LucideIcon;
	description?: string;
};

type NavItem = {
	name: string;
	path?: string;
	hasDropdown: boolean;
	isMega?: boolean;
	items?: SubItem[];
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [pdfOpen, setPdfOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const location = useLocation();

	const navItems: NavItem[] = [
		{
			name: "About",
			path: "/about",
			hasDropdown: false,
		},
		{
			name: "Products & Solutions",
			path: "/products-solutions",
			hasDropdown: true,
			isMega: true,
			items: [
				{
					name: "ISI PEB",
					path: "/products-solutions#isi-peb-pre-engineered-buildings",
					icon: Warehouse,
					description: "Complete pre-engineered building systems for industrial and commercial applications.",
				},
				{
					name: "Heavy Steel Structures",
					path: "/products-solutions#heavy-steel-structures",
					icon: Building2,
					description: "Specialized steel structural systems for office buildings, malls, and mixed-use developments.",
				},
				{
					name: "ISI TRUSS",
					path: "/products-solutions#isi-truss",
					icon: Triangle,
					description: "Comprehensive roofing systems for durability and high performance in tropical climates.",
				},
				{
					name: "ISI Greenhouse",
					path: "/products-solutions#isi-greenhouse",
					icon: TentTree,
					description: "Pre-engineered structural solutions for modern agriculture and sustainable farming.",
				},
				{
					name: "ISI Home",
					path: "/products-solutions#isi-home",
					icon: HousePlus,
					description: "Innovative housing blending Khmer aesthetics with modern steel engineering.",
				},
			],
		},
		{
			name: "Industry Specific",
			hasDropdown: true,
			isMega: true,
			items: [
				{
					name: "Manufacturing",
					path: "/services/industry-specific/manufacturing",
					icon: Factory,
					description:
						"Garment, Textile, Automotive, and Electronic factory solutions.",
				},
				{
					name: "Foods & Beverages",
					path: "/services/industry-specific/food-beverage",
					icon: Utensils,
					description:
						"Brewery, Beverage, and Food processing facility systems.",
				},
				{
					name: "Logistics",
					path: "/services/industry-specific/logistics",
					icon: Truck,
					description:
						"Distribution centers, Warehouses, and Cold storage solutions.",
				},
				{
					name: "Agriculture",
					path: "/services/industry-specific/agriculture",
					icon: Sprout,
					description:
						"Greenhouse, Rice mills, and Agri-industry building systems.",
				},
				{
					name: "Residential",
					path: "/services/industry-specific/residential",
					icon: Home,
					description:
						"Steel roofing, cladding, and modern housing solutions.",
				},
			],
		},
		{ name: "Portfolios", path: "/portfolios", hasDropdown: false },
		{ name: "Technology", path: "/technology", hasDropdown: false },
		{ name: "Careers", path: "/careers", hasDropdown: false },
		{ name: "Contact Us", path: "/contact", hasDropdown: false },
	];

	const isPathActive = (path: string) =>
		location.pathname === path || location.pathname.startsWith(path + "/");

	const isDropdownActive = (items: SubItem[]) =>
		items.some((item) => isPathActive(item.path));

	const openDropdown = (name: string) => {
		if (closeTimeout.current) clearTimeout(closeTimeout.current);
		setActiveDropdown(name);
	};

	const scheduleClose = () => {
		closeTimeout.current = setTimeout(() => setActiveDropdown(null), 80);
	};

	const activeMegaItem = navItems.find(
		(i) => i.isMega && i.name === activeDropdown
	);

	// Using the primary logo
	const logoSrc = "https://storage.koompi.cloud/org_6969b022790a1dffd30229c1/isi-bds/images/isibds-logo.png";

	const navBg = "bg-white shadow-md";

	return (
		<>
		<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex justify-between items-center h-16 lg:h-[72px]">
					{/* Logo — theme-aware: dark-mode version on dark backgrounds */}
					<Link to="/" className="flex items-center gap-3 cursor-pointer">
						<img
							src={logoSrc}
							alt="ISI Building Solutions"
							className="h-12 lg:h-14 transition-all duration-300"
						/>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center gap-0.5">
						{navItems.map((item, index) => {
							if (item.hasDropdown && item.items) {
								const isActive = isDropdownActive(item.items);
								return (
									<div
										key={index}
										className="relative"
										onMouseEnter={() => openDropdown(item.name)}
										onMouseLeave={scheduleClose}
									>
										<button
											className={`relative px-2.5 xl:px-3 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
												isActive
													? "text-accent"
													: "text-primary hover:text-primary-dark"
											}`}
										>
											{item.name}
											<ChevronDown
												size={13}
												className={`transition-transform duration-200 ${
													activeDropdown === item.name ? "rotate-180" : ""
												}`}
											/>
											{isActive && (
												<motion.div
													layoutId="nav-indicator"
													className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
												/>
											)}
										</button>
									</div>
								);
							} else {
								const isActive = item.path ? isPathActive(item.path) : false;
								return (
									<Link
										key={index}
										to={item.path || "#"}
										className={`relative px-2.5 xl:px-3 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer ${
											isActive
												? "text-accent"
												: "text-primary hover:text-primary-dark"
										}`}
									>
										{item.name}
										{isActive && (
											<motion.div
												layoutId="nav-indicator"
												className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
											/>
										)}
									</Link>
								);
							}
						})}
					</div>

					{/* CTA + Mobile Button */}
					<div className="flex items-center gap-3">
						<button
							onClick={() => setPdfOpen(true)}
							className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-semibold px-4 py-2 bg-accent text-white hover:bg-accent-dark transition-all duration-200 cursor-pointer"
						>
							Download
							<ArrowRight size={14} />
						</button>

						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 cursor-pointer transition-colors text-primary hover:bg-primary/5"
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mega Menu — dynamic for any isMega item */}
			<AnimatePresence>
				{activeMegaItem && activeMegaItem.items && (
					<motion.div
						key="mega-panel"
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 8 }}
						transition={{ duration: 0.18 }}
						className="hidden lg:block w-full bg-white/50 backdrop-blur-xl border-t border-white/30 shadow-xl"
						onMouseEnter={() => openDropdown(activeMegaItem.name)}
						onMouseLeave={scheduleClose}
					>
						<div className="container mx-auto px-4 lg:px-8 py-8">
							<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
								{activeMegaItem.items.map((subItem, subIndex) => {
									const subActive = isPathActive(subItem.path);
									const Icon = subItem.icon;
									return (
										<Link
											key={subIndex}
											to={subItem.path}
											onClick={() => setActiveDropdown(null)}
											className={`group/card p-4 border transition-all duration-200 flex flex-col ${
												subActive
													? "border-accent/40 bg-accent/5 backdrop-blur-sm"
													: "border-slate-200 bg-white/30 backdrop-blur-sm hover:border-accent/30 hover:bg-white/50"
											}`}
										>
											<div className="flex items-center gap-3 mb-2">
												{Icon && (
													<div className="w-9 h-9 flex items-center justify-center bg-accent/5 text-accent group-hover/card:bg-accent group-hover/card:text-white transition-all duration-200 flex-shrink-0">
														<Icon size={16} />
													</div>
												)}
												<h4
													className={`font-bold text-sm tracking-tight ${
														subActive ? "text-accent" : "text-primary group-hover/card:text-accent"
													}`}
												>
													{subItem.name}
												</h4>
											</div>
											{subItem.description && (
												<p className="text-steel text-xs leading-relaxed mb-3 flex-grow">
													{subItem.description}
												</p>
											)}
											<span
												className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase transition-colors mt-auto ${
													subActive
														? "text-accent"
														: "text-accent/60 group-hover/card:text-accent"
												}`}
											>
												Learn more
												<ArrowRight size={11} className="group-hover/card:translate-x-0.5 transition-transform" />
											</span>
										</Link>
									);
								})}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25 }}
						className="lg:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden"
					>
						<div className="flex flex-col px-6 py-4 gap-1">
							{navItems.map((item, index) => {
								if (item.hasDropdown && item.items) {
									const isActive = isDropdownActive(item.items);
									return (
										<div key={index}>
											<div
												className={`py-3 px-4 text-[11px] font-bold tracking-[0.15em] uppercase ${
													isActive ? "text-accent" : "text-slate-400"
												}`}
											>
												{item.name}
											</div>
											{item.items.map((subItem, subIndex) => {
												const subActive = isPathActive(subItem.path);
												return (
													<Link
														key={subIndex}
														to={subItem.path}
														onClick={() => setIsOpen(false)}
														className={`py-3 px-4 pl-6 text-[14px] font-medium transition-colors cursor-pointer block border-l-2 ${
															subActive
																? "text-accent bg-accent/10 border-accent"
																: "text-slate-600 hover:text-primary hover:bg-slate-50 border-transparent"
														}`}
													>
														{subItem.name}
													</Link>
												);
											})}
										</div>
									);
								} else {
									const isActive = item.path ? isPathActive(item.path) : false;
									return (
										<Link
											key={index}
											to={item.path || "#"}
											onClick={() => setIsOpen(false)}
											className={`py-3 px-4 text-[15px] font-medium transition-colors cursor-pointer border-l-2 ${
												isActive
													? "text-accent bg-accent/10 border-accent"
													: "text-slate-600 hover:text-primary hover:bg-slate-50 border-transparent"
											}`}
										>
											{item.name}
										</Link>
									);
								}
							})}
							<button
								onClick={() => { setIsOpen(false); setPdfOpen(true); }}
								className="mt-4 text-center bg-accent text-white font-semibold py-3 px-6 text-sm cursor-pointer hover:bg-accent-dark transition-colors"
							>
								Download
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
		<PDFModal isOpen={pdfOpen} onClose={() => setPdfOpen(false)} />
		</>
	);
};

export default Navbar;
