import { motion } from "framer-motion";

const cases = [
  {
    id: "01",
    title: "Architecture & Engineering",
    desc: "Scan as-built environments with sub-millimeter precision for BIM modeling.",
  },
  {
    id: "02",
    title: "VR Game Design",
    desc: "Instantly capture real-world locations and convert them into playable level geometry.",
  },
  {
    id: "03",
    title: "Industrial Inspection",
    desc: "Analyze structural integrity of pipelines, bridges, and manufacturing floors safely from the ground.",
  },
  {
    id: "04",
    title: "Interior Design",
    desc: "Generate 1:1 scale blank canvas models to overlay furniture and lighting accurately.",
  },
];

export const ScannerUseCases = () => {
  return (
    <section
      id="use-cases"
      className="bg-white py-24 md:py-32 relative text-black"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Border & Labels */}
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24">
          <span>03</span>
          <span>Applications</span>
          <span className="hidden md:block">Beyond Normal Vision</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-[60px] font-display leading-[1.1] tracking-tight text-black max-w-xl">
              BEYOND NORMAL VISION.
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-black/5 border border-black/10 p-8 hover:bg-black/[0.08] transition-colors duration-500 group flex flex-col h-full"
            >
              <span className="text-[#00ced1] text-[11px] font-bold tracking-[0.2em] mb-12 block">
                {item.id}
              </span>
              <h4 className="text-xl md:text-2xl font-display font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h4>
              <p className="text-black/50 text-sm leading-relaxed mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
