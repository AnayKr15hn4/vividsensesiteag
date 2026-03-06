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

  const [shouldBeBlack, setShouldBeBlack] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Determine theme based on page and scroll position
    let black = false;

    if (isWhitePage) {
      if (isScannerPage) {
        // Scanner page has a dark sequence for the first 500vh (approx)
        // We switch to black only after the sequence ends
        black = latest > window.innerHeight * 4.5;
      } else {
        // Other white pages (Products, Partner, Apply) are always black
        black = true;
      }
    } else if (isHomePage) {
      // Home page hero is 100vh
      black = latest > window.innerHeight - 80;
    } else if (isDarkBgPage) {
      black = false;
    }

    // Always white if mobile menu is open (dark overlay)
    if (isMobileMenuOpen) black = false;

    // Near bottom (footer is usually dark)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (latest + windowHeight >= documentHeight - 100) {
      black = false;
    }

    setShouldBeBlack(black);
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
        scrollY.get() > 50 ? "py-4 md:py-6" : "",
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
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
          className="group flex items-center gap-1"
        >
          <span
            className={cn(
              "text-2xl font-display font-black tracking-tighter transition-colors duration-500",
              shouldBeBlack ? "text-black" : "text-white",
            )}
          >
            VIVIDSENSE
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Time */}
          <span
            className={cn(
              "hidden sm:block text-[11px] font-medium tracking-widest transition-colors duration-500",
              shouldBeBlack ? "text-black" : "text-white",
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
                shouldBeBlack
                  ? "border-black text-black hover:bg-black/5"
                  : "border-white text-white hover:bg-white/10",
              )}
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

      {/* Mobile/Full Menu Overlay */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-brand-dark z-[110] flex flex-col overflow-y-auto pointer-events-none data-[open=true]:pointer-events-auto"
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
                    className="text-5xl md:text-[80px] font-display font-medium text-white transition-all duration-700 tracking-tight hover:bg-gradient-to-r hover:from-[#00ced1] hover:to-[#0055ff] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8 text-white/30 font-medium text-[10px] tracking-[0.2em] uppercase relative z-10">
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
      </motion.div>
    </nav>
  );
};
