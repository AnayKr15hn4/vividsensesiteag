import { motion } from "framer-motion";

export const ScannerHeroHandoff = () => {
  return (
    <section className="bg-white py-24 flex flex-col items-center justify-center relative z-10 border-t border-black/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-6 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-display font-medium text-black mb-10">
          THE SURROUNDING SCANNER
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="px-12 py-5 bg-[#00ced1] text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors duration-300">
            Get Started
          </button>

          <button
            onClick={() =>
              document
                .getElementById("specs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 border border-black/20 text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-black/5 transition-colors duration-300"
          >
            Technical Specs
          </button>
        </div>
      </motion.div>
    </section>
  );
};
