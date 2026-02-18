import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <footer id="footer" ref={footerRef} className="bg-black pb-12 pt-16 min-h-[110vh] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-white/10 mb-24 md:mb-32" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Giant Logo */}
          <div className="flex justify-center">
            <motion.span 
              style={{ y }}
              className="text-[12vw] font-display font-black leading-none tracking-tighter text-white/5 block"
            >
              VIVIDSENSE
            </motion.span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-light text-white/60 leading-tight">
                Empowering independence through next-generation assistive technology.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
              <div className="flex flex-col gap-4">
                <span className="text-white/20">Company</span>
                <a href="https://www.linkedin.com/company/vividsense/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-widest whitespace-nowrap">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white/20">Founders</span>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <a href="https://www.linkedin.com/in/anay-krishna-b39183359/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-widest whitespace-nowrap">Anay Krishna</a>
                  <a href="https://www.linkedin.com/in/eshaan-revankar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-widest whitespace-nowrap">Eshaan Revankar</a>
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
                    <span className="text-xs text-white/40 group-hover:text-white/60">*message key word "VividSense"</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-base">info@vividsense.com</span>
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
    </footer>
  );
};
