import { Facebook, Linkedin, Phone, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    label: "Contact Line 1",
    sublabel: "KH / ENG",
    phone: "+855 (0) 11 919 202",
    qr: "/images/kh-en-qr.png",
  },
  {
    label: "Contact Line 2",
    sublabel: "CH",
    phone: "+855 (0) 11 919 212",
    qr: "/images/ch-qr.png",
  },
];

const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.601-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.158 1.69-1.413 1.177-2.144 2.933-1.875 4.832.304 2.149 1.9 3.908 3.986 4.652a8.508 8.508 0 0 0 2.657.402c.668 0 1.297-.094 1.912-.25a.723.723 0 0 1 .604.083l1.58.926a.272.272 0 0 0 .14.046.245.245 0 0 0 .246-.246.24.24 0 0 0-.04-.177l-.324-1.233a.492.492 0 0 1 .177-.554C21.978 17.625 23 16.058 23 14.275c0-3.208-2.979-5.399-6.062-5.417zm-3.24 2.522c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.86 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
);

const Footer = () => {
  const [activePopup, setActivePopup] = useState<"telegram" | "wechat" | null>(
    null,
  );

  return (
    <>
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
                A Leader in Pre-engineered Building, Specialist in Steel
                Structure, and Pioneer in Prefabrication.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/isibds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/67989697/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <button
                  onClick={() => setActivePopup("telegram")}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </button>
                <button
                  onClick={() => setActivePopup("wechat")}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:text-accent hover:bg-white/20 transition-colors cursor-pointer rounded-full"
                  aria-label="WeChat"
                >
                  <WeChatIcon />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-10 lg:mb-0">
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-6">
                Contact Info
              </h4>
              <div className="space-y-4 text-sm text-white">
                <p className="leading-relaxed">
                  ISI Park National Road 2, Phum Kraing Sbov, Preah Puth
                  Commune, Kandal Steung District, Kandal Province, Cambodia
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
                {/* <div className="pt-2 space-y-3">
								<button
									onClick={() => setActivePopup("telegram")}
									className="flex items-center gap-3 border border-white/20 px-4 py-2.5 hover:border-accent/50 transition-colors cursor-pointer w-full text-left"
								>
									<Send size={16} className="text-white/70" />
									<span className="text-xs font-bold tracking-[0.1em] uppercase">
										Telegram
									</span>
								</button>
							</div> */}
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
              &copy; {new Date().getFullYear()} ISI Building Solutions. All
              Rights Reserved.
            </p>
            <p className="text-xs text-white tracking-wider uppercase hover:text-accent transition-colors cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </footer>

      {/* Social Popups */}
      {activePopup && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-primary-dark/60 backdrop-blur-sm"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="bg-white w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
              <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-primary">
                Contact Our Sales Team
              </h3>
              <button
                onClick={() => setActivePopup(null)}
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contact rows */}
            <div className="divide-y divide-slate-100">
              {activePopup === "wechat" ? (
                <div className="flex items-center justify-center px-8 py-8 bg-slate-50">
                  <img
                    src="/wechat-contact-bds.png"
                    alt="WeChat QR"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              ) : (
                contacts.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 px-8 py-5 bg-slate-50"
                  >
                    <img
                      src={c.qr}
                      alt={c.label}
                      className="w-16 h-16 object-contain flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-bold text-primary tracking-wide">
                        {c.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {c.sublabel}
                      </p>
                      <a
                        href={`tel:${c.phone.replace(/\s|\(0\)/g, "")}`}
                        className="text-sm text-slate-600 mt-1 block hover:text-accent transition-colors"
                      >
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
