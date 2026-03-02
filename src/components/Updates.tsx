import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Shield } from 'lucide-react';

const updates = [
  {
    id: "001",
    date: "February 2026",
    label: "Dexarm V2",
    description: "The Dexarm version 2 is in progress. Featuring improved grip strength, lighter materials, and enhanced sensor feedback for more natural movement.",
    stat: "V2"
  },
  {
    id: "002",
    date: "March 2026",
    label: "Hiring New Positions",
    description: "Vividsense is now hiring two new positions. We are hiring a Media Manager and a Outreach Manager",
    stat: "2"
  },
  {
    id: "003",
    date: "April 2025",
    label: "Community Milestone",
    description: "Placed 2nd out of 42 teams in our schools SB Launch (still chasing the top spot). A huge step forward for VividSense's mission and visibility.",
    stat: "2nd"
  }
];

const comingSoonItems = [
  { text: "The search for sponsors has started", icon: Target },
  { text: "Advanced weather protection", icon: Shield }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  })
};

const revealVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export const Updates: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-30%" });

  return (
    <section id="stories" className="bg-white py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Top Border & Labels */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="overflow-hidden">
            <motion.div variants={revealVariants} className="w-full h-px bg-black/10 mb-8" />
          </div>
          <div className="overflow-hidden">
            <motion.div variants={revealVariants} className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black">
              <span>03</span>
              <span>Updates</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="overflow-hidden mb-4" style={{ paddingBottom: '0.1em' }}>
            <motion.h2
              initial={{ y: "120%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight leading-[0.95] text-black"
            >
              Latest Updates
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-black/50 font-light leading-relaxed max-w-2xl mt-6"
          >
            Stay informed about our latest developments, feature releases, and community milestones.
          </motion.p>
        </div>

        {/* 3 Refire-style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5">
          {updates.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group bg-[#0c0c0c] rounded-sm flex flex-col justify-between min-h-[420px] md:min-h-[480px] overflow-hidden"
            >
              {/* Top — context area */}
              <div className="p-6 md:p-8 flex-1">
                {/* Index */}
                <div className="flex justify-end mb-8">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/20">{item.id}</span>
                </div>

                {/* Date */}
                <div className="mb-6">
                  <span className="text-white/60 text-sm font-mono">↓ {item.date}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/35 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom — label and large stat */}
              <div className="p-6 md:p-8 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-white/50 font-light">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <span className="text-7xl md:text-8xl lg:text-9xl font-display font-medium text-white leading-none tracking-tighter">
                  {item.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon — full width card */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#0c0c0c] rounded-sm p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-sm text-white/35 font-light">
              Exciting features in development
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-16">
            {comingSoonItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-sm text-white/50 font-light">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
