import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-brand-dark flex flex-col justify-end overflow-hidden">
      {/* Background Texture & Mesh */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: `
              radial-gradient(circle at 60% 40%, #00ced1 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, #0055ff 0%, transparent 60%)
            `,
            filter: 'blur(80px)',
          }}
        />
        <div className="noise-bg opacity-20" />
        
        {/* Generative-style mesh lines (simplified for CSS) */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <filter id="mesh">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
          <rect width="100%" height="100%" filter="url(#mesh)" fill="#00ced1" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 pb-24 md:pb-32 relative z-10">
        <div className="max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-teal/80 mb-6 block">
              + Introducing
            </span>
            <h1 className="text-7xl md:text-[160px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-white">
              A New <span className="inline-block translate-x-4">→</span><br />
              Generation
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 max-w-lg"
          >
            <p className="text-xl md:text-2xl font-light text-white/50 leading-tight">
              Of AI-Driven Assistive Tech <br />
              & Powering Human Independence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right CTA */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20">
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-4 py-3 px-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
        >
          Join the Team
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Scroll Indicator side-text */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-20 rotate-180">
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white [writing-mode:vertical-rl]">
          + + Scroll
        </span>
      </div>
    </section>
  );
};
