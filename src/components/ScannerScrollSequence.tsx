import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { usePreloadImages } from "../hooks/usePreloadImages";

interface ScannerScrollSequenceProps {
  frameCount: number;
}

export const ScannerScrollSequence: React.FC<ScannerScrollSequenceProps> = ({
  frameCount,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  // Load images (assuming frames like 0001.webp in the public folder)
  const { images, isComplete, loadedCount } = usePreloadImages(
    "/frames/surrounding-scanner",
    frameCount,
    "jpg",
  );

  // Track scroll within this 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0-1 scroll progress to 0-120 frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (!isComplete || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fixed internal resolution for high-fidelity rendering
    canvas.width = 1920;
    canvas.height = 1080;

    // Draw frame function
    const renderFrame = (index: number) => {
      const img = images[Math.round(index)];
      if (img && img.complete) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image covering the canvas (similar to object-fit: cover)
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

    // Initial render
    renderFrame(0);

    // Subscribe to framer-motion fast update loop
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    return () => unsubscribe();
  }, [isComplete, images, frameIndex]);

  // Framer Motion overlay blocks based on the Scrollytelling Beats

  // Permanently hide scroll indicator once user begins scrolling (0.5% depth)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.005 && showIndicator) {
      setShowIndicator(false);
    }
  });

  // Hero text fade-in animation (~frame 28 to ~frame 36)
  const beatBOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.32, 1, 1],
    [0, 1, 1, 1],
  );
  const beatBY = useTransform(scrollYProgress, [0.25, 0.32, 1], [40, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-white w-full">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!isComplete && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <p className="text-[#00ced1] font-display text-xl tracking-widest uppercase mb-4">
              Initializing Optics...
            </p>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#00ced1] transition-all duration-300 ease-out"
                style={{ width: `${(loadedCount / frameCount) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* The Image Sequence Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* --- SCROLLYTELLING OVERLAYS --- */}

        {/* Scroll Indicator (Initial State) */}
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
              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/60">
                  Scroll to explore
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Text Overlay */}
        <motion.div
          style={{ opacity: beatBOpacity, y: beatBY }}
          className="absolute inset-x-8 md:inset-x-24 bottom-24 flex flex-col items-end text-right pointer-events-none z-10"
        >
          <h1 className="text-7xl md:text-[160px] font-display font-medium leading-[0.85] tracking-[-0.04em] text-white">
            → The<span className="inline-block translate-x-4"></span>
            <br />
            Surrounding
            <br /> Scanner
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/60">
            Awareness, Accessible
          </p>
        </motion.div>
      </div>
    </section>
  );
};
