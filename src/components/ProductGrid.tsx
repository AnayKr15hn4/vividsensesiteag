import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: "001",
    title: "Spatial Audio",
    desc: "Experience the world through sound. Our bone-conduction technology provides crystal clear environmental awareness without blocking your natural hearing.",
  },
  {
    id: "002",
    title: "Object Pulse",
    desc: "Real-time recognition that pulses information directly to your senses, identifying people, obstacles, and navigation markers instantly.",
  },
  {
    id: "003",
    title: "Guided Light",
    desc: "Adaptive navigation that maps your surroundings in real-time, creating a safe, predictable path through any urban environment.",
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <section id="technology" className="bg-white py-16 md:py-32 relative overflow-hidden">
      {/* Top Divider */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-black/10 mb-24 md:mb-32" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24 relative">
          {/* Large Index */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="select-none"
          >
            <span className="text-[140px] md:text-[320px] font-display font-medium leading-none text-black/5 tracking-tighter">
              02
            </span>
          </motion.div>

          {/* Product List */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="w-2 h-2 bg-black rounded-sm" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold">002</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-24 leading-[0.95]">
                Core <br />
                Technology
              </h2>

              <div className="space-y-0 text-black">
                {products.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group border-t border-black/10 pt-12 pb-16"
                  >
                    <div className="grid md:grid-cols-[100px_1fr] gap-8">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 pt-1">
                        [{product.id}]
                      </span>
                      <div className="max-w-xl">
                        <h3 className="text-3xl md:text-4xl font-display font-medium mb-6 group-hover:translate-x-2 transition-transform duration-500">
                          {product.title}
                        </h3>
                        <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
