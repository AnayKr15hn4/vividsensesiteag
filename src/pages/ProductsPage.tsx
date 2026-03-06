import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Surrounding Scanner",
    subtitle: "Wearable Vision System",
    description:
      "Our flagship wearable that detects obstacles and provides real-time earpiece alerts for the visually impaired.",
    image: "/products/the_ss.png",
    link: "/product/surrounding-scanner",
    specs: ["Solid-State LiDAR", "100m Range", "12hr Battery"],
  },
  {
    id: "02",
    title: "Dexarm V3",
    subtitle: "Affordable Prosthetics",
    description:
      "An innovative, affordable prosthetic arm designed to restore essential hand functionality for everyday tasks.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop", // high-quality wrench tech
    link: "#",
    specs: ["Modular Build", "Enhanced Grip", "Bio-feedback"],
  },
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-black/10 mb-8" />
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
          <span>01</span>
          <span>VividSense Labs</span>
          <span className="hidden md:block">Current Product Range</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-7xl md:text-[160px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-black mb-12 uppercase">
            Our <br />
            Products.
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light max-w-2xl leading-relaxed">
            High-fidelity assistive technology designed for impact,
            affordability, and human empowerment.
          </p>
        </motion.div>

        <div className="space-y-32">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* Product Image */}
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-black/5 ${i % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
                    Product {product.id}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-6">
                    {product.title}
                  </h2>
                  <p className="text-xl text-black/60 font-light leading-relaxed mb-10">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 py-8 border-t border-black/10">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-black/20" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {product.link !== "#" ? (
                  <Link
                    to={product.link}
                    className="group/btn relative inline-flex items-center gap-4 bg-black text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm border border-black overflow-hidden transition-colors duration-300 hover:text-black"
                  >
                    {/* Background Slide Effect */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-4">
                      Explore Product
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : (
                  <button className="inline-flex items-center gap-4 bg-black/10 text-black/40 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
