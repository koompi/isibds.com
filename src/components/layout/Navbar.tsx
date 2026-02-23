import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{
			name: "About",
			hasDropdown: true,
			items: [
				{ name: "ISI Building Solutions", path: "/about" },
				{ name: "Our Team", path: "/about/team" },
			],
		},
		{
			name: "Products & Services",
			hasDropdown: true,
			items: [
				{ name: "Building Systems", path: "/services/building-systems" },
				{ name: "Design & Build", path: "/services/design-build" },
				{
					name: "Industrial Park Master Planning",
					path: "/services/industrial-planning",
				},
			],
		},
		{
			name: "Portfolios",
			path: "/portfolios",
			hasDropdown: false,
		},
		{
			name: "Software & Technology",
			path: "/technology",
			hasDropdown: false,
		},
		{
			name: "Careers",
			path: "/careers",
			hasDropdown: false,
		},
		{
			name: "Contact Us",
			path: "/contact",
			hasDropdown: false,
		},
	];

	const isPathActive = (path: string) => {
		return location.pathname === path || location.pathname.startsWith(path + "/");
	};

	const isDropdownActive = (items: { path: string }[]) => {
		return items.some((item) => isPathActive(item.path));
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
				scrolled ? "shadow-lg shadow-black/5" : "border-b border-slate-200"
			}`}
		>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex justify-between items-center h-16 lg:h-[72px]">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-3 cursor-pointer">
						<img
							src="/logo.png"
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
										className="relative group"
										onMouseEnter={() => setActiveDropdown(item.name)}
										onMouseLeave={() => setActiveDropdown(null)}
									>
										<button
											className={`relative px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 cursor-pointer flex items-center gap-1 ${
												isActive
													? "text-accent"
													: "text-slate-700 hover:text-accent"
											}`}
										>
											{item.name}
											<ChevronDown size={14} />
											{isActive && (
												<motion.div
													layoutId="nav-indicator"
													className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
												/>
											)}
										</button>

										{/* Dropdown */}
										<AnimatePresence>
											{activeDropdown === item.name && (
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: 10 }}
													transition={{ duration: 0.2 }}
													className="absolute top-full left-0 mt-0 bg-white border border-slate-200 shadow-xl min-w-[220px]"
												>
													{item.items.map((subItem, subIndex) => {
														const subActive = isPathActive(subItem.path);
														return (
															<Link
																key={subIndex}
																to={subItem.path}
																className={`block px-5 py-3 text-[13px] font-medium transition-colors border-l-2 ${
																	subActive
																		? "text-accent bg-accent/5 border-accent"
																		: "text-slate-700 hover:text-accent hover:bg-slate-50 border-transparent"
																}`}
															>
																{subItem.name}
															</Link>
														);
													})}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								);
							} else {
								const isActive = item.path ? isPathActive(item.path) : false;
								return (
									<Link
										key={index}
										to={item.path || "#"}
										className={`relative px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
											isActive
												? "text-accent"
												: "text-slate-700 hover:text-accent"
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
						<a
							href="https://drive.google.com/file/d/1MVUZQZyBtY8Q0CGS8Izg5tmQROgYOFIw/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden lg:inline-flex items-center gap-1.5 text-[13px] font-semibold px-5 py-2.5 bg-accent text-white hover:bg-accent-dark transition-all duration-200 cursor-pointer"
						>
							Download
							<ChevronRight size={14} />
						</a>

						<button
							onClick={() => setIsOpen(!isOpen)}
							className="lg:hidden p-2 cursor-pointer transition-colors text-slate-800 hover:bg-slate-100"
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25 }}
						className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
					>
						<div className="flex flex-col px-6 py-4 gap-1">
							{navItems.map((item, index) => {
								if (item.hasDropdown && item.items) {
									const isActive = isDropdownActive(item.items);
									return (
										<div key={index}>
											<div
												className={`py-3 px-4 text-[15px] font-semibold ${
													isActive
														? "text-accent"
														: "text-slate-700"
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
														className={`py-2 px-4 pl-8 text-[14px] font-medium transition-colors cursor-pointer block ${
															subActive
																? "text-accent bg-accent/5 border-l-2 border-accent"
																: "text-slate-600 hover:text-accent hover:bg-slate-50"
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
											className={`py-3 px-4 text-[15px] font-medium transition-colors cursor-pointer ${
												isActive
													? "text-accent bg-accent/5 border-l-2 border-accent"
													: "text-slate-700 hover:text-accent hover:bg-slate-50"
											}`}
										>
											{item.name}
										</Link>
									);
								}
							})}
							<a
								href="https://drive.google.com/file/d/1MVUZQZyBtY8Q0CGS8Izg5tmQROgYOFIw/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsOpen(false)}
								className="mt-3 text-center bg-accent text-white font-semibold py-3 px-6 text-sm cursor-pointer hover:bg-accent-dark transition-colors"
							>
								Download
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
