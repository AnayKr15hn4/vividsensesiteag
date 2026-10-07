import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScannerVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map the scroll progress from 0 to 1 during the middle portion of the scroll
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      {/* Sticky wrapper to keep it in frame while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-12 overflow-hidden">
        
        {/* Outer Beige Box */}
        <div className="relative w-full h-full bg-[#EFECE5] rounded-[40px] flex items-center justify-center overflow-hidden">
          
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
            `}
          </style>

          {/* Expanding Video Card */}
          <motion.div 
            className="relative overflow-hidden shadow-2xl bg-[#111] flex-shrink-0"
            style={{
              // @ts-ignore - framer motion supports passing MotionValues to CSS variables
              "--progress": progress,
              width: "calc( min(100%, 500px) + (100% - min(100%, 500px)) * var(--progress) )",
              height: "calc( min(100%, 625px) + (100% - min(100%, 625px)) * var(--progress) )",
              borderRadius: "calc( 1.5rem + (40px - 1.5rem) * var(--progress) )",
            }}
          >
            {/* Video Background */}
            <div className="absolute inset-0">
              <video 
                src="/videos/theSS.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
              {/* A soft dark gradient overlay on the left to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-10 pointer-events-none">
              {/* Vertical Title Lockup */}
              <div 
                className="absolute left-8 bottom-8 md:left-10 md:bottom-10"
                style={{ 
                  writingMode: 'vertical-rl', 
                  transform: 'rotate(180deg)' 
                }}
              >
                <div className="text-[#FDFBF7] text-[10px] md:text-xs tracking-[0.2em] font-sans font-light lowercase whitespace-nowrap opacity-80 mb-2">
                  a little closer to
                </div>
                <h2 
                  className="text-[#FDFBF7] text-5xl md:text-[4.5rem] tracking-tight leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  infinity
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
