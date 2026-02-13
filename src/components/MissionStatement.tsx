import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const MissionStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const words: (string | { text: string; italic: boolean })[] = [
    "We", "are", "dedicated", "to", "empowering", "independence", { text: "through", italic: true }, "innovative,", 
    "affordable", "assistive", "technology.", "Our", "mission", "is", "to", "enhance", 
    "mobility", "and", "confidence", "for", "the", { text: "physically", italic: true }, "impaired", 
    "community", { text: "by", italic: true }, "creating", "smart,", "accessible", "designs", "that", "help", 
    "people", "move", "confidently,", "stay", "independent,", "and", "handle", 
    "everyday", "tasks—without", "requiring", "expensive", "or", "complex", "equipment."
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: "120%", 
      transition: { duration: 0.4 } 
    },
    visible: { 
      y: "0%", 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as any
      } 
    }
  };

  return (
    <section id="vision" className="bg-white text-black py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Border & Labels */}
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24">
            <span>01</span>
            <span>Mission Statement</span>
            <span className="hidden md:block">Our Vision</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            
            {/* Left Column - Statement */}
            <div className="lg:w-3/4">
                <motion.h2 
                  ref={containerRef}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl md:text-5xl lg:text-[60px] font-display leading-[1.1] tracking-tight text-black flex flex-wrap gap-x-3 gap-y-1"
                >
                    {words.map((word, i) => {
                        const isObject = typeof word === 'object';
                        const text = isObject ? word.text : word;
                        const isItalic = isObject ? word.italic : false;

                        return (
                          <div key={i} className="overflow-hidden inline-block" style={{ paddingBottom: '0.1em' }}>
                            <motion.span 
                                variants={wordVariants}
                                className={`inline-block ${isItalic ? "font-serif italic font-light" : ""}`}
                            >
                                {text}
                            </motion.span>
                          </div>
                        );
                    })}
                </motion.h2>
            </div>

            {/* Right Column - Empty/Decor */}
            <div className="hidden lg:block lg:w-1/4 flex justify-end">
                <div className="w-2 h-2 rounded-full bg-black/10 ml-auto" />
            </div>
        </div>

      </div>
    </section>
  );
};
