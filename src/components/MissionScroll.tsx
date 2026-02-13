import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const sections = [
  {
    id: 'mission',
    number: '01',
    title: 'Our Mission',
    text: 'To empower individuals through innovative AI-driven assistive technologies, fostering a world where everyone has the tools to achieve their full potential independently.',
    highlight: 'empower',
  },
  {
    id: 'vision',
    number: '02',
    title: 'Our Vision',
    text: 'A future where technology seamlessly integrates with human capability, breaking down barriers and redefining the boundaries of what is possible for people with disabilities.',
    highlight: 'future',
  },
  {
    id: 'values',
    number: '03',
    title: 'Our Values',
    text: 'Innovation, Empathy, and Integrity. We prioritize meaningful impact, user-centric design, and the ethical development of technology to serve humanity.',
    highlight: 'Innovation',
  },
];

export const MissionScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to number position
  // 0 -> 0% (01)
  // 0.5 -> -100% (02)
  // 1 -> -200% (03)
  const numberY = useTransform(smoothProgress, [0, 0.5, 1], ['0%', '-33.33%', '-66.66%']);

  return (
    <section ref={containerRef} className="relative bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row">
          
          {/* Sticky Left Column (Number) */}
          <div className="lg:w-1/2 hidden lg:flex h-screen sticky top-0 items-center justify-start overflow-hidden">
            <div className="relative h-[200px] md:h-[400px] w-full flex items-center">
              {/* Static '0' */}
              <span className="text-[200px] md:text-[400px] font-display font-medium leading-none tracking-tighter text-black/10 select-none">
                0
              </span>
              
              {/* Scrolling '1', '2', '3' */}
              <div className="h-[200px] md:h-[400px] overflow-hidden relative">
                <motion.div 
                  style={{ y: numberY }}
                  className="flex flex-col"
                >
                  {['1', '2', '3'].map((num) => (
                    <span 
                      key={num}
                      className="text-[200px] md:text-[400px] font-display font-medium leading-none tracking-tighter text-black/10 select-none h-[200px] md:h-[400px] flex items-center"
                    >
                      {num}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (Text Sections) */}
          <div className="lg:w-1/2">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-screen flex flex-col justify-center py-24"
              >
                {/* Mobile Number (only visible on small screens) */}
                <div className="lg:hidden mb-8">
                  <span className="text-8xl font-display font-medium text-black/10">
                    {section.number}
                  </span>
                </div>

                <div className="w-full h-px bg-black mb-12 relative flex items-start justify-end overflow-visible">
                  <div className="absolute top-4 right-0 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black" />
                      <motion.span 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm font-mono font-medium tracking-tight block"
                      >
                        {section.number.padStart(3, '0')}
                      </motion.span>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden mb-8">
                  <motion.h2 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[0.95]"
                  >
                    {section.title}
                  </motion.h2>
                </div>

                <p className="text-xl md:text-2xl text-black/70 font-normal leading-relaxed mb-12 max-w-xl">
                  {section.text.split(section.highlight).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-black font-medium border-b border-black/20 pb-0.5">
                          {section.highlight}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
