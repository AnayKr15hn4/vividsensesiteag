import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "001",
    title: "The Surrounding Scanner",
    subtitle: "Wearable Vision System",
    description: "A wearable system with a forward-facing sensor that detects obstacles and provides real-time alerts.",
    price: "Starting at $79",
    features: [
      "Front-facing sensor for obstacle detection and object recognition",
      "Real-time alerts delivered to a discreet earpiece",
      "Customizable lens options",
      "Optional vibration feedback & Bluetooth connectivity"
    ]
  },
  {
    id: "002",
    title: "Dexarm",
    subtitle: "Affordable Prosthetic Arm",
    description: "An affordable prosthetic arm designed to restore essential arm and hand functionality for everyday tasks.",
    price: "Starting at $1000",
    features: [
      "Modular prosthetic arm build with accessible parts",
      "Lightweight, durable frame for daily use",
      "Intuitive control system optimized for reliability",
      "Designed for accessibility and long-term affordability"
    ]
  }
];

const revealVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } 
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  })
};

export const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-30%" });

  const product = products[currentIndex];

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section id="technology" className="bg-white py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Border & Labels — floor reveal */}
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
              <span>02</span>
              <span>Products</span>
              <span className="hidden md:block">{String(currentIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 60 : -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Left Column - Product Info (staggered fade-up) */}
              <div className="flex flex-col justify-between">
                <div>
                  <motion.div 
                    custom={0} variants={fadeUpVariants} 
                    initial="hidden" animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-4 mb-8"
                  >
                    <span className="w-2 h-2 bg-black rounded-sm" />
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black/40">[{product.id}]</span>
                  </motion.div>
                  
                  {/* Title — floor reveal */}
                  <div className="overflow-hidden mb-6" style={{ paddingBottom: '0.1em' }}>
                    <motion.h2 
                      custom={1} variants={fadeUpVariants}
                      initial="hidden" animate={isInView ? "visible" : "hidden"}
                      className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight leading-[0.95] text-black"
                    >
                      {product.title}
                    </motion.h2>
                  </div>
                  
                  <motion.p 
                    custom={2} variants={fadeUpVariants}
                    initial="hidden" animate={isInView ? "visible" : "hidden"}
                    className="text-lg md:text-xl text-black/50 font-light leading-relaxed max-w-lg mb-8"
                  >
                    {product.description}
                  </motion.p>

                  <motion.div 
                    custom={3} variants={fadeUpVariants}
                    initial="hidden" animate={isInView ? "visible" : "hidden"}
                    className="mb-12"
                  >
                    <span className="text-3xl md:text-4xl font-display font-medium tracking-tight text-black">
                      {product.price}
                    </span>
                  </motion.div>
                </div>

                {/* Navigation */}
                <motion.div 
                  custom={4} variants={fadeUpVariants}
                  initial="hidden" animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-6"
                >
                  <button 
                    onClick={goPrev}
                    className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white text-black transition-all duration-300"
                    aria-label="Previous product"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={goNext}
                    className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white text-black transition-all duration-300"
                    aria-label="Next product"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Progress Dots */}
                  <div className="flex items-center gap-2 ml-4">
                    {products.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === currentIndex 
                            ? 'w-8 bg-black' 
                            : 'w-4 bg-black/15 hover:bg-black/30'
                        }`}
                        aria-label={`Go to product ${i + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Features (staggered) */}
              <div className="flex flex-col justify-center">
                <div className="border-l border-black/10 pl-8 md:pl-12">
                  <motion.span 
                    custom={1} variants={fadeUpVariants}
                    initial="hidden" animate={isInView ? "visible" : "hidden"}
                    className="text-[11px] uppercase tracking-[0.3em] font-bold text-black/40 mb-10 block"
                  >
                    {product.subtitle}
                  </motion.span>

                  <div className="space-y-0">
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        custom={i + 2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="group border-b border-black/10 py-6 first:border-t"
                      >
                        <div className="flex items-start gap-6">
                          <span className="text-xs font-bold text-black/20 mt-1 shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="text-base md:text-lg text-black/70 font-light leading-relaxed group-hover:text-black transition-colors duration-300">
                            {feature}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
