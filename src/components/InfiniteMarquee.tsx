import React, { useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const words = ["AFFORDABLE", "ACCESSIBLE", "INDEPENDENT"];

interface ParqueeProps {
  baseVelocity: number;
}

const ParqueeItem: React.FC<
  ParqueeProps & { items: string[]; direction?: number }
> = ({ baseVelocity = 100, items, direction = 1 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is what makes it move faster on scroll.
   * v is the velocity factor (0-5+)
   */
  useAnimationFrame((_, delta) => {
    let moveBy = direction * baseVelocity * (delta / 1000);

    // Scaling the velocity effect down for better control
    const v = velocityFactor.get();
    if (v !== 0) {
      // Add a controlled boost based on velocity
      moveBy += moveBy * Math.abs(v) * 0.5;
    }

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div className="relative flex whitespace-nowrap overflow-hidden">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <div className="flex items-center gap-12 md:gap-32 pr-12 md:pr-32">
          {items.map((word, i) => (
            <span
              key={i}
              className={`text-6xl md:text-[250px] font-display font-medium leading-none tracking-[-0.04em] uppercase ${
                word === "VIVIDSENSE"
                  ? "bg-gradient-to-r from-[#00ced1] to-[#0155ff] bg-clip-text text-transparent"
                  : "text-[#0c0c0c]"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-12 md:gap-32 pr-12 md:pr-32">
          {items.map((word, i) => (
            <span
              key={`repeat-${i}`}
              className={`text-6xl md:text-[250px] font-display font-medium leading-none tracking-[-0.04em] uppercase ${
                word === "VIVIDSENSE"
                  ? "bg-gradient-to-r from-[#00ced1] to-[#0155ff] bg-clip-text text-transparent"
                  : "text-[#0c0c0c]"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const InfiniteMarquee: React.FC = () => {
  const items = useMemo(() => [...words, "VIVIDSENSE"], []);

  return (
    <section className="bg-[#ffffff] overflow-hidden py-4 md:py-8">
      <div className="flex flex-col gap-0">
        {/* Top: Moving Right (negative velocity results in right movement if we wrap correctly, wait) */}
        {/* Actually, if baseX decreases, wrap(-50, 0, v) goes 0 -> -1 -> -49 -> 0. This is LEFT movement. */}
        {/* So Positive baseVelocity = LEFT movement. Negative baseVelocity = RIGHT movement. */}
        <ParqueeItem items={items} baseVelocity={-2} direction={1} />
        <ParqueeItem items={items} baseVelocity={2} direction={1} />
      </div>
    </section>
  );
};
