import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
};

export const DexarmSections = () => {
  return (
    <div className="bg-white text-black">
      {/* ─── Section 2: Precision in Motion ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>02</span>
            <span>Precision in Motion</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Fluid
                <br />
                Natural
                <br />
                Control
              </h2>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex flex-col justify-end"
            >
              <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed mb-8">
                The Dexarm V3 is engineered to bridge the gap between biological
                intent and mechanical execution.
              </p>
              <p className="text-lg text-black/40 font-light leading-relaxed">
                By utilizing advanced sensor feedback and lightweight carbon
                composites, the Dexarm provides a responsive experience that
                feels like a natural extension of the body.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: The Blueprint ─── */}
      <section className="py-32 md:py-48 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-white/40">
            <span>03</span>
            <span>Engineering</span>
            <span className="hidden md:block">The Blueprint</span>
          </div>

          <motion.h2
            {...fadeIn}
            className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-24 md:mb-32"
          >
            The
            <br />
            Blueprint.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                step: "01",
                title: "Sense",
                desc: "Bio-feedback sensors capture muscle signals with millisecond latency.",
              },
              {
                step: "02",
                title: "Interpret",
                desc: "Onboard algorithms translate signals into complex hand gestures.",
              },
              {
                step: "03",
                title: "Actuate",
                desc: "Precision servos deliver high-torque movement with silent operation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-white/10 pt-8"
              >
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6 block">
                  Phase {item.step}
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-white/40 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Specifications ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>04</span>
            <span>Technology</span>
            <span className="hidden md:block">Technical Specs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Built for
                <br />
                Everyday
                <br />
                Impact
              </h2>
              <p className="text-xl text-black/50 font-light leading-relaxed max-w-lg">
                The simplicity of the design ensures maintaining and upgrading
                the Dexarm is as simple as it is affordable.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex flex-col justify-end"
            >
              <div className="space-y-6">
                {[
                  "Carbon-fiber fiberglass frame",
                  "Long-life battery",
                  "Myoelectric sensor",
                  "Radically affordable",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-4 py-4 border-b border-black/10"
                  >
                    <ArrowRight className="w-4 h-4 text-black/20 shrink-0" />
                    <span className="text-lg font-light text-black/60">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
