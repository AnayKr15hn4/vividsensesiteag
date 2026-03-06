import { motion } from "framer-motion";

const specs = [
  { label: "Sensor", value: "Solid-State LiDAR" },
  { label: "Range", value: "100m" },
  { label: "Battery", value: "12 Hours" },
  { label: "Weight", value: "450g" },
];

export const ScannerTechSpecs = () => {
  return (
    <section
      id="specs"
      className="bg-white py-24 md:py-32 relative overflow-hidden text-black"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Border & Labels */}
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24">
          <span>02</span>
          <span>Specifications</span>
          <span className="hidden md:block">Engineered for Pros</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-4xl md:text-5xl lg:text-[60px] font-display leading-[1.1] tracking-tight text-black">
            ENGINEERED FOR PROS.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 flex flex-col justify-center"
            >
              <span className="text-black/40 text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                {spec.label}
              </span>
              <span className="text-3xl md:text-4xl font-display font-medium text-black">
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
