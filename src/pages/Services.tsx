import { motion } from "framer-motion";

const Services = () => {
	return (
		<div className="pt-24 pb-20 min-h-screen bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl font-bold text-primary mb-6">
						Products & Services
					</h1>
					<p className="text-gray-600">
						Detailed list of services and products will go here.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Services;
