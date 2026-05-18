import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isWhitePage =
    location.pathname === "/products" ||
    location.pathname === "/partner" ||
    location.pathname === "/apply" ||
    location.pathname.includes("/product/surrounding-scanner");
  const isDarkBgPage = location.pathname === "/team"; // Pages with fully dark background (excluding home hero)
  const isHomePage = location.pathname === "/";
  const isScannerPage = location.pathname.includes(
    "/product/surrounding-scanner",
  );

  const [isMixBlend, setIsMixBlend] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let useDifference = true;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (isHomePage && latest < windowHeight - 80) {
      useDifference = false;
    }

    if (latest + windowHeight >= documentHeight - 100) {
      useDifference = false;
    }

    setIsMixBlend(useDifference);
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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6 xl:px-12 xl:py-8 pointer-events-none",
          isMixBlend ? "mix-blend-difference" : "",
          scrollY.get() > 50 ? "py-4 xl:py-6" : "",
        )}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e: React.MouseEvent) => {
            if (location.pathname === "/") {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-1 text-white"
        >
          <span className="text-2xl font-display font-black tracking-tighter">
            VIVIDSENSE
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Time */}
          <span className="hidden sm:block text-[11px] font-medium tracking-widest text-white">
            {formatGMT(time)}
          </span>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full border hover:bg-white/10 border-white text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile/Full Menu Overlay */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-0 bg-brand-dark z-[110] overflow-y-auto",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        data-lenis-prevent="true"
      >
        <div className="min-h-[100dvh] flex flex-col w-full">
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

          <div className="p-6 xl:p-12 pb-0">
            <div className="flex justify-between items-center mb-12 xl:mb-24 relative z-10">
              <a
                href="/"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
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

            <div className="flex flex-col gap-4 md:gap-6 relative z-10">
              {[
                { label: "Home", href: "/" },
                { label: "Donate", href: "/donate" },
                { label: "Products", href: "/products" },
                { label: "The Team", href: "/team" },
                { label: "Partner", href: "/partner" },
                { label: "Apply", href: "/apply" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-display font-medium text-white transition-all duration-700 tracking-tight hover:bg-gradient-to-r hover:from-[#00ced1] hover:to-[#0055ff] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 pt-8 xl:p-12 xl:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8 text-white/30 font-medium text-[10px] tracking-[0.2em] uppercase relative z-10">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
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
        </div>
      </motion.div>
    </>
  );
};
