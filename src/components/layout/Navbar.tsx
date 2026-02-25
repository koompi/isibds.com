import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Box, PenTool, Landmark, Users } from "lucide-react";
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
	const [scrolled, setScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems: NavItem[] = [
		{
			name: "About",
			hasDropdown: true,
			isMega: true,
			items: [
				{
					name: "ISI Building Solutions",
					path: "/about",
					icon: Landmark,
					description:
						"Cambodia's leader in pre-engineered buildings and steel structures since our founding.",
				},
				{
					name: "Our Team",
					path: "/about/team",
					icon: Users,
					description:
						"Meet the engineers, managers, and professionals driving every project forward.",
				},
			],
		},
		{
			name: "Products & Services",
			hasDropdown: true,
			isMega: true,
			items: [
				{
					name: "Building Systems",
					path: "/services/building-systems",
					icon: Box,
					description:
						"Pre-engineered building systems for industrial and commercial applications.",
				},
				{
					name: "Architectural Steel Structures",
					path: "/services/design-build",
					icon: PenTool,
					description:
						"Comprehensive steel and roofing solutions through integrated design-build.",
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

	// Both transparent (over dark hero) and solid navy are dark — always use the dark logo
	// logo-dark.png: white circle + navy ISI + orange text (visible on dark backgrounds)
	// logo.png: navy circle + light ISI + orange text (for light backgrounds)
	const logoSrc = scrolled ? "/logo-dark.png" : "/logo-dark.png";

	const isHome = location.pathname === "/";
	const navBg = scrolled || activeDropdown || !isHome
		? "bg-primary-dark shadow-lg shadow-black/20"
		: "bg-transparent";

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
							className="h-9 transition-all duration-300"
						/>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center gap-1">
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
											className={`relative px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
												isActive
													? "text-accent"
													: "text-white/80 hover:text-white"
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
										className={`relative px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer ${
											isActive
												? "text-accent"
												: "text-white/80 hover:text-white"
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
							className="hidden lg:inline-flex items-center gap-1.5 text-[13px] font-semibold px-5 py-2.5 bg-accent text-white hover:bg-accent-dark transition-all duration-200 cursor-pointer"
						>
							Download
							<ArrowRight size={14} />
						</button>

						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 cursor-pointer transition-colors text-white hover:bg-white/10"
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
						className="hidden lg:block w-full bg-[#111e35] border-t border-white/10 shadow-2xl"
						onMouseEnter={() => openDropdown(activeMegaItem.name)}
						onMouseLeave={scheduleClose}
					>
						<div className="container mx-auto px-4 lg:px-8 py-8">
							<div className="grid grid-cols-2 gap-4 max-w-3xl">
								{activeMegaItem.items.map((subItem, subIndex) => {
									const subActive = isPathActive(subItem.path);
									const Icon = subItem.icon;
									return (
										<Link
											key={subIndex}
											to={subItem.path}
											onClick={() => setActiveDropdown(null)}
											className={`group/card p-6 border transition-all duration-200 ${
												subActive
													? "border-accent/40 bg-accent/5"
													: "border-white/10 hover:border-accent/40 hover:bg-white/5"
											}`}
										>
											{Icon && (
												<div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-4">
													<Icon size={18} className="text-accent" />
												</div>
											)}
											<h4
												className={`font-bold text-base mb-2 tracking-tight ${
													subActive ? "text-accent" : "text-white"
												}`}
											>
												{subItem.name}
											</h4>
											{subItem.description && (
												<p className="text-white/50 text-[13px] leading-relaxed mb-4">
													{subItem.description}
												</p>
											)}
											<span
												className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide uppercase transition-colors ${
													subActive
														? "text-accent"
														: "text-white/40 group-hover/card:text-accent"
												}`}
											>
												Learn more
												<ArrowRight size={12} />
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
						className="lg:hidden bg-primary-dark border-t border-white/10 shadow-2xl overflow-hidden"
					>
						<div className="flex flex-col px-6 py-4 gap-1">
							{navItems.map((item, index) => {
								if (item.hasDropdown && item.items) {
									const isActive = isDropdownActive(item.items);
									return (
										<div key={index}>
											<div
												className={`py-3 px-4 text-[11px] font-bold tracking-[0.15em] uppercase ${
													isActive ? "text-accent" : "text-white/40"
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
																: "text-white/70 hover:text-white hover:bg-white/5 border-transparent"
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
													: "text-white/70 hover:text-white hover:bg-white/5 border-transparent"
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
