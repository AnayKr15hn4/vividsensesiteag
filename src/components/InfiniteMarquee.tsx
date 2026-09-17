import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "INNOVATIVE", gradient: "from-orange-400 to-rose-400" },
  { text: "INDEPENDENT", gradient: "from-emerald-700 to-lime-400" },
  { text: "AFFORDABLE", gradient: "from-red-900 to-red-500" },
  { text: "AWESOME", gradient: "from-[#00ced1] to-[#0155ff]" }, // Signature Vividsense blue
  { text: "ACCESSIBLE", gradient: "from-violet-400 to-fuchsia-400" },

];

const MaskedMarquee: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index % words.length];

  return (
    <div
      className="relative overflow-visible h-[1.2em] flex-shrink-0 w-[180px] sm:w-[260px] md:w-[420px] lg:w-[580px] flex items-center justify-center"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-center"
        >
          <span className={`bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent font-black`}>
            {currentWord.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const InfiniteMarquee: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center w-full px-4 md:px-6 max-w-7xl mx-auto text-xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-medium leading-none tracking-[-0.04em]">

        <span
          className="font-black text-transparent uppercase shrink-0"
          style={{ WebkitTextStroke: "2px #0c0c0c" }}
        >
          VIVIDSENSE
        </span>

        <span
          className="font-serif italic lowercase text-[#0c0c0c] mx-2 md:mx-4 shrink-0 font-medium tracking-normal"
          style={{ fontFamily: "'Garamond', 'EB Garamond', serif" }}
        >
          is:
        </span>

        <MaskedMarquee />
      </div>
    </section>
  );
};
