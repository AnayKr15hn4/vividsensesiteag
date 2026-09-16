import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { DarkGradientBg } from "./ui/elegant-dark-pattern";

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const scrollProgress = useMotionValue(0);

  // Manual scroll tracking to work with Lenis
  useEffect(() => {
    let rafId: number;
    const update = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerHeight = rect.height;
        // 0 when footer top is at bottom of viewport, 1 when footer bottom is at bottom of viewport
        const raw = (windowHeight - rect.top) / (windowHeight + footerHeight);
        scrollProgress.set(Math.min(Math.max(raw, 0), 1));
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [scrollProgress]);

  const y = useTransform(scrollProgress, [0, 1], [100, -100]);
  const lineY = useTransform(scrollProgress, [0, 1], [200, 0]);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative min-h-[110vh] overflow-hidden z-0"
    >
      <DarkGradientBg className="min-h-[110vh] pb-12 pt-[250px]">

      <motion.div
        className="container relative z-10 mx-auto px-6 md:px-12"
        style={{ y: lineY }}
      >
        <div className="w-full h-px bg-white/10 mb-24 md:mb-32" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Giant Logo */}
          <div className="flex justify-center">
            <motion.span
              className="text-[12vw] font-display font-black leading-none tracking-tighter text-transparent block"
              style={{ y, WebkitTextStroke: "2px rgba(255,255,255,0.7)" }}
            >
              VIVIDSENSE
            </motion.span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-light text-white/60 leading-tight">
                Empowering independence through next-generation assistive
                technology.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
              <div className="flex flex-col gap-4">
                <span className="text-white/20">Company</span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.youtube.com/@VividsenseLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vividsense/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/vividsenselabs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@vividsenselabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61589893214538"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://x.com/VividsenseLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    X
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white/20">Founders</span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/anay-krishna-b39183359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    Anay Krishna
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eshaan-revankar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    Eshaan Revankar
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white/20">Associates</span>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/advay-pingle-0561833a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors tracking-widest whitespace-nowrap"
                  >
                    Advay Pingle
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* New Contact Section */}
          {/* New Contact Section */}
          <div className="pt-24 mt-12 flex justify-center">
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-8">
              <h4 className="text-lg font-medium text-white">Contact</h4>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex items-start gap-4 text-white/60 group hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-base">(732)-783-8350</span>
                    <span className="text-xs text-white/40 group-hover:text-white/60">
                      *message key word "VividSense"
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-base">vividsenselabs@gmail.com</span>
                </div>

                <div className="flex items-start gap-4 text-white/60 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-base">East Meadow Estates</span>
                    <span className="text-base">Kendall Park, NJ 08824</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 pt-24 pb-8">
          <span>© 2026 VividSense Lab.</span>
        </div>
      </div>
      </DarkGradientBg>
    </footer>
  );
};
