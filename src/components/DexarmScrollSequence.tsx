import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { usePreloadImages } from "../hooks/usePreloadImages";

interface DexarmScrollSequenceProps {
  frameCount: number;
}

export const DexarmScrollSequence: React.FC<DexarmScrollSequenceProps> = ({
  frameCount,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  // Load images (PNG format for Dexarm frames)
  const { images, isComplete, loadedCount } = usePreloadImages(
    "/frames/dexarm",
    frameCount,
    "png",
  );

  // Track scroll within this 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0-1 scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (!isComplete || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fixed internal resolution for high-fidelity rendering
    canvas.width = 1920;
    canvas.height = 1080;

    const renderFrame = (index: number) => {
      const img = images[Math.round(index)];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio,
        );
      }
    };

    renderFrame(0);

    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    return () => unsubscribe();
  }, [isComplete, images, frameIndex]);

  // Handle Scroll Indicator visibility (Frame-based: 0-10)
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (latest > 10 && showIndicator) {
      setShowIndicator(false);
    } else if (latest <= 10 && !showIndicator) {
      setShowIndicator(true);
    }
  });

  // 1. Intro text animation (frames 0-20)
  const introOpacity = useTransform(frameIndex, [0, 15, 20], [1, 1, 0]);
  const introY = 0; // Permanently fixed in center
  const introLetterSpacing = useTransform(
    frameIndex,
    [0, 20],
    ["0.2em", "2em"],
  );

  // 2. Main Hero text animation (frames 120-end)
  const heroOpacity = useTransform(frameIndex, [110, 130], [0, 1]);
  const heroY = useTransform(frameIndex, [110, 130], [20, 0]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-white w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!isComplete && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <p className="text-[#ff4500] font-display text-xl tracking-widest uppercase mb-4">
              Calibrating Dexarm...
            </p>
            <div className="w-64 h-1 bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#ff4500] transition-all duration-300 ease-out"
                style={{ width: `${(loadedCount / frameCount) * 100}%` }}
              />
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* --- SCROLLYTELLING OVERLAYS --- */}

        {/* 1. Scroll Indicator (Frames 0-10) */}
        <AnimatePresence>
          {showIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-12 inset-x-0 flex flex-col items-center justify-center pointer-events-none z-20"
            >
              <div className="flex flex-col items-center gap-3 drop-shadow-md">
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/80">
                  Scroll to explore
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Intro Text Label (Frames 0-20) - BOLDER + FIXED CENTER (Centered Expansion) */}
        <motion.div
          style={{
            opacity: introOpacity,
            y: introY,
            letterSpacing: introLetterSpacing,
            paddingLeft: introLetterSpacing,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <span className="text-3xl md:text-6xl font-display font-bold uppercase text-white/60 drop-shadow-lg text-center">
            Dexarm
          </span>
        </motion.div>

        {/* 3. Main Hero Text (Frames 120-End) - ALIGNED ON ONE HORIZONTAL CENTER LINE + BLACK */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-x-8 md:inset-x-24 bottom-[35%] flex flex-row justify-between items-center pointer-events-none z-10 text-white mix-blend-difference uppercase"
        >
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-[110px] font-display font-bold leading-none tracking-[-0.04em]">
              Dexarm
            </h1>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-xl md:text-3xl font-display font-bold tracking-[0.2em] opacity-40 leading-none">
              Precision Accessible
            </p>
          </div>
        </motion.div>

        {/* Watermark Cover */}
        <div className="absolute bottom-0 right-0 w-32 h-10 bg-black z-20 flex items-center justify-center">
          <span className="text-[8px] text-white/40 tracking-[0.4em] uppercase font-bold">
            Dexarm
          </span>
        </div>
      </div>
    </section>
  );
};
