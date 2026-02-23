import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    // Check if near bottom
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    setIsAtBottom(latest + windowHeight >= documentHeight - 100);
  });

  const formatGMT = (date: Date) => {
    return (
      date.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "GMT",
        hour12: false,
      }) + " GMT"
    );
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-8 md:px-12",
        isScrolled ? "py-4 md:py-6" : "",
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-1"
        >
          <span
            className={cn(
              "text-2xl font-display font-black tracking-tighter transition-colors duration-500",
              isScrolled && !isAtBottom ? "text-black" : "text-white",
            )}
          >
            VIVIDSENSE
          </span>
        </a>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Time */}
          <span
            className={cn(
              "hidden sm:block text-[11px] font-medium tracking-widest transition-colors duration-500",
              isScrolled && !isAtBottom ? "text-black" : "text-white",
            )}
          >
            {formatGMT(time)}
          </span>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-full border transition-all duration-500",
                isScrolled && !isAtBottom
                  ? "border-black/10 text-black hover:bg-black/5"
                  : "border-white/20 text-white hover:bg-white/10",
              )}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Full Menu Overlay */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-brand-dark z-[110] flex flex-col overflow-hidden pointer-events-none data-[open=true]:pointer-events-auto"
        data-open={isMobileMenuOpen}
      >
        <div className="flex-1 flex flex-col relative">
          {/* Decorative Gradient Background (Responsive: Soft glow on mobile, Sharp image on desktop) */}
          <div
            className="absolute z-0 pointer-events-none opacity-40 mix-blend-screen transition-all duration-700
                       inset-0 blur-[100px] md:blur-none 
                       md:left-1/2 md:right-0 md:top-0 md:bottom-0"
            style={{
              background: `
                radial-gradient(circle at 70% 40%, #00ced1 0%, transparent 70%),
                radial-gradient(circle at 30% 60%, #0055ff 0%, transparent 70%),
                linear-gradient(135deg, #00ced1 0%, #0055ff 100%)
              `,
            }}
          />

          <div className="p-12 pb-0">
            <div className="flex justify-between items-center mb-24 relative z-10">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-2xl font-display font-black tracking-tighter text-white hover:text-white/80 transition-colors"
              >
                VIVIDSENSE
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {[
                { label: "Mission", href: "#vision" },
                { label: "Products", href: "#technology" },
                { label: "Updates", href: "#stories" },
                { label: "Careers", href: "#join" },
                { label: "Contact", href: "#footer" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-6xl md:text-8xl font-display font-bold text-white transition-all duration-700 tracking-tighter hover:bg-gradient-to-r hover:from-[#00ced1] hover:to-[#0055ff] hover:bg-clip-text hover:text-transparent"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 text-white/40 font-medium text-sm tracking-widest uppercase relative z-10">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <a
              href="https://www.youtube.com/@Vividsense-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/company/vividsense/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/anay-krishna-b39183359/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Anay Krishna
            </a>
            <a
              href="https://www.linkedin.com/in/eshaan-revankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Eshaan Revankar
            </a>
          </div>
          <span className="shrink-0">© 2026 VividSense Lab.</span>
        </div>
      </motion.div>
    </nav>
  );
};
