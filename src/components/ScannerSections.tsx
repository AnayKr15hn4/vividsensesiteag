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

export const ScannerSections = () => {
  return (
    <div className="bg-white text-black">
      {/* ─── Section 2: Awareness in Real Time ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>02</span>
            <span>Real-Time Awareness</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Awareness
                <br />
                in Real Time
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
                The Surrounding Scanner continuously scans the environment ahead
                of the user.
              </p>
              <p className="text-lg text-black/40 font-light leading-relaxed">
                When obstacles appear within range, the system instantly alerts
                the wearer through an audio signal, allowing them to react and
                move safely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: How It Works ─── */}
      <section className="py-32 md:py-48 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-white/40">
            <span>03</span>
            <span>Process</span>
            <span className="hidden md:block">How It Works</span>
          </div>

          <motion.h2
            {...fadeIn}
            className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-24 md:mb-32"
          >
            How It
            <br />
            Works.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                step: "01",
                title: "Scan",
                desc: "An ultrasonic sensor detects objects and measures their distance.",
              },
              {
                step: "02",
                title: "Process",
                desc: "The onboard microcontroller analyzes the data in real time.",
              },
              {
                step: "03",
                title: "Alert",
                desc: "A speaker or buzzer notifies the user when a nearby hazard is detected.",
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
                  Step {item.step}
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

      {/* ─── Section 4: Built Into Everyday Eyewear ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>04</span>
            <span>Design</span>
            <span className="hidden md:block">Everyday Eyewear</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Built Into
                <br />
                Everyday
                <br />
                Eyewear
              </h2>
              <p className="text-xl text-black/50 font-light leading-relaxed max-w-lg">
                The system is built directly into a wearable glasses frame,
                making it easy to use in everyday situations.
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
                  "Eyewear-based frame",
                  "Protective sensor guards",
                  "Reinforced electronics housing",
                  "Lightweight structure for comfortable use",
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

      {/* ─── Section 5: Intelligent Hazard Detection ─── */}
      <section className="py-32 md:py-48 bg-black/[0.03]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>05</span>
            <span>Detection</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <motion.h2
                {...fadeIn}
                className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12"
              >
                Intelligent
                <br />
                Hazard
                <br />
                Detection
              </motion.h2>

              <motion.div
                {...fadeIn}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="space-y-6 max-w-2xl"
              >
                <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed">
                  The ultrasonic sensor scans the area in front of the user,
                  detecting obstacles before physical contact occurs.
                </p>
                <p className="text-lg text-black/40 font-light leading-relaxed">
                  This allows the wearer to respond earlier than traditional
                  tools that rely on touch.
                </p>
              </motion.div>
            </div>

            <motion.div
              {...fadeIn}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[4/5] bg-black rounded-sm overflow-hidden group shadow-2xl"
            >
              <img
                src="/images/thess/tssing6.png"
                alt="Hazard Detection in Action"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Simple and Reliable Hardware ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>06</span>
            <span>Hardware</span>
            <span className="hidden md:block">Components</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Simple &
                <br />
                Reliable
                <br />
                Hardware
              </h2>
              <p className="text-xl text-black/50 font-light leading-relaxed max-w-lg">
                The system uses durable and proven components.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Ultrasonic distance sensor",
                  "Microcontroller processing unit",
                  "Audio alert system",
                  "Internal wiring & circuit board",
                  "Portable battery power source",
                ].map((component, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-black/[0.03] border border-black/5 p-6 rounded-sm"
                  >
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20 block mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-light text-black/60">
                      {component}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-black/30 font-light mt-8 leading-relaxed">
                These components work together to provide consistent real-time
                awareness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Designed for Accessibility ─── */}
      <section className="py-32 md:py-48 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-white/40">
            <span>07</span>
            <span>Accessibility</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12">
                Designed
                <br />
                for
                <br />
                Accessibility
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed max-w-lg">
                The Surrounding Scanner was designed to make assistive
                navigation technology more widely accessible.
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
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "Simplicity", desc: "Intuitive by design" },
                  { title: "Reliability", desc: "Built to last" },
                  { title: "Affordability", desc: "Accessible pricing" },
                  { title: "Ease of Use", desc: "No learning curve" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center py-10 border border-white/10 rounded-sm"
                  >
                    <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/30 font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 8: A Smarter Way to Navigate ─── */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-black/10 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24 text-black/40">
            <span>08</span>
            <span>Summary</span>
          </div>

          <div className="max-w-5xl">
            <motion.h2
              {...fadeIn}
              className="text-5xl md:text-7xl lg:text-[120px] font-display font-medium leading-[0.85] tracking-[-0.04em] uppercase mb-12"
            >
              A Smarter
              <br />
              Way to
              <br />
              Navigate.
            </motion.h2>

            <motion.p
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl"
            >
              By combining wearable design with real-time sensing technology,
              the Surrounding Scanner helps users detect hazards earlier and
              move through environments more safely.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
