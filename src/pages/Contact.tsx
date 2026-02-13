import { motion } from "framer-motion";
import { useState } from "react";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Building2,
	Globe,
	Clock,
} from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		tel: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const contactInfo = [
		{
			icon: MapPin,
			title: "Office & Factory",
			content:
				"F14 KMH Industrial Park, Phum Tropian Thloeng, Sangkat Choam Choa, Khan Posenchey, Phnom Penh, Cambodia",
		},
		{
			icon: Phone,
			title: "Phone Numbers",
			content: [
				"KH, ENG: +855 (0) 11 919 202",
				"CH: +855 (0) 11 919 212",
			],
		},
		{
			icon: Mail,
			title: "Email",
			content: "info@isibuildingsolutions.com",
		},
		{
			icon: Globe,
			title: "Website",
			content: "www.isibuildingsolutions.com",
		},
	];

	const businessHours = [
		{ day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
		{ day: "Saturday", hours: "8:00 AM - 12:00 PM" },
		{ day: "Sunday", hours: "Closed" },
	];

	return (
		<div className="min-h-screen">
			{/* Hero Banner */}
			<section className="relative pt-[72px]">
				<div className="relative h-[40vh] min-h-[350px] overflow-hidden">
					<div className="absolute inset-0 bg-[url('/images/industrial-park.jpg')] bg-cover bg-center"></div>
					<div className="absolute inset-0 bg-primary-dark/80"></div>
					<div className="relative z-10 h-full flex items-center">
						<div className="container mx-auto px-4 lg:px-8">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7 }}
							>
								<div className="flex items-center gap-3 mb-6">
									<div className="w-8 h-px bg-accent"></div>
									<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
										Get In Touch
									</span>
								</div>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
									Contact Us
								</h1>
								<p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
									We're here to answer your questions and
									discuss how we can help with your next
									construction project.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-28 bg-white">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-7 mb-12 lg:mb-0"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-8 h-px bg-accent"></div>
								<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
									Send a Message
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight mb-6">
								Tell Us About
								<br />
								Your Project
							</h2>
							<p className="text-steel text-base leading-relaxed mb-10">
								Fill out the form below and our team will get
								back to you within 24 hours.
							</p>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-semibold text-primary mb-2"
										>
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-slate-300 bg-white text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-semibold text-primary mb-2"
										>
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-slate-300 bg-white text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="tel"
											className="block text-sm font-semibold text-primary mb-2"
										>
											Phone *
										</label>
										<input
											type="tel"
											id="tel"
											name="tel"
											required
											value={formData.tel}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-slate-300 bg-white text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
											placeholder="+855 (0) XX XXX XXX"
										/>
									</div>
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-semibold text-primary mb-2"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-slate-300 bg-white text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
											placeholder="Project inquiry"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-semibold text-primary mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										value={formData.message}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-slate-300 bg-white text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
										placeholder="Tell us about your project requirements..."
									></textarea>
								</div>

								<button
									type="submit"
									className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-semibold text-sm py-4 px-8 hover:bg-accent-dark transition-all duration-200 cursor-pointer"
								>
									Send Message
									<Send
										size={16}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</button>
							</form>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.15 }}
							className="lg:col-span-5"
						>
							<div className="bg-surface-light p-8 lg:p-10">
								<div className="flex items-center gap-3 mb-8">
									<div className="w-8 h-px bg-accent"></div>
									<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
										Contact Information
									</span>
								</div>

								<div className="space-y-8">
									{contactInfo.map((info, index) => (
										<div key={index} className="flex items-start gap-4">
											<div className="w-10 h-10 border border-slate-200 flex items-center justify-center flex-shrink-0">
												<info.icon
													size={18}
													className="text-accent"
												/>
											</div>
											<div>
												<h3 className="text-sm font-bold text-primary mb-2 tracking-tight">
													{info.title}
												</h3>
												{Array.isArray(info.content) ? (
													<div className="space-y-1">
														{info.content.map(
															(item, i) => (
																<p
																	key={i}
																	className="text-steel text-[15px] leading-relaxed"
																>
																	{item}
																</p>
															)
														)}
													</div>
												) : (
													<p className="text-steel text-[15px] leading-relaxed">
														{info.content}
													</p>
												)}
											</div>
										</div>
									))}
								</div>

								{/* Business Hours */}
								<div className="mt-10 pt-8 border-t border-slate-200">
									<div className="flex items-center gap-3 mb-6">
										<Clock size={18} className="text-accent" />
										<h3 className="text-sm font-bold text-primary tracking-tight">
											Business Hours
										</h3>
									</div>
									<div className="space-y-3">
										{businessHours.map((schedule, index) => (
											<div
												key={index}
												className="flex justify-between items-center py-2"
											>
												<span className="text-primary text-[15px] font-medium">
													{schedule.day}
												</span>
												<span className="text-steel text-[15px]">
													{schedule.hours}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Location Map */}
			<section className="py-20 bg-surface-light">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="w-8 h-px bg-accent"></div>
							<span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
								Find Us
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight tracking-tight">
							Our Location
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="bg-white p-2 border border-slate-200"
					>
						<div className="aspect-[16/9] lg:aspect-[21/9] w-full">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9823537!2d104.8247!3d11.5564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzIzLjAiTiAxMDTCsDQ5JzI5LjAiRQ!5e0!3m2!1sen!2skh!4v1234567890"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="ISI Building Solutions Location"
							></iframe>
						</div>
					</motion.div>

					{/* Quick Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
					>
						{[
							{
								icon: Building2,
								label: "Office & Factory",
								value: "KMH Industrial Park",
							},
							{
								icon: MapPin,
								label: "Location",
								value: "Phnom Penh, Cambodia",
							},
							{
								icon: Phone,
								label: "Quick Contact",
								value: "+855 (0) 11 919 202",
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-white p-6 border border-slate-200 flex items-center gap-4"
							>
								<div className="w-12 h-12 border border-slate-200 flex items-center justify-center flex-shrink-0">
									<item.icon size={20} className="text-accent" />
								</div>
								<div>
									<p className="text-xs text-steel uppercase tracking-wider mb-1">
										{item.label}
									</p>
									<p className="text-sm font-bold text-primary tracking-tight">
										{item.value}
									</p>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
