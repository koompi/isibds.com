import { useEffect } from "react";
import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PDF_URL = "/resources/ISI-building-solution-digital.pdf";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const PDFModal = ({ isOpen, onClose }: Props) => {
	// Lock body scroll while open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	// Close on Escape
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-[200] flex flex-col bg-primary-dark"
				>
					{/* Top bar */}
					<div className="flex items-center justify-between px-5 py-3 border-b border-white/10 flex-shrink-0">
						<div className="flex items-center gap-3">
							<div className="w-1 h-6 bg-accent" />
							<span className="text-white text-sm font-semibold tracking-wide">
								ISI Building Solutions — Company Profile
							</span>
						</div>
						<div className="flex items-center gap-2">
							<a
								href={PDF_URL}
								download="ISI-building-solution-digital.pdf"
								className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-semibold px-4 py-2 hover:bg-accent-dark transition-colors"
							>
								<Download size={14} />
								Download
							</a>
							<button
								onClick={onClose}
								className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
								aria-label="Close"
							>
								<X size={20} />
							</button>
						</div>
					</div>

					{/* PDF iframe */}
					<div className="flex-1 min-h-0">
						<iframe
							src={`${PDF_URL}#toolbar=1&view=FitH`}
							className="w-full h-full border-0"
							title="ISI Building Solutions Company Profile"
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PDFModal;
