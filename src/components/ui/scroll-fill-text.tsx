"use client";

import React, { useRef, useState, useEffect, useCallback, ElementType } from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollFillTextProps = {
  children: string;
  className?: string;
  as?: ElementType;
};

const Word = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  return (
    <span className="relative inline-block whitespace-pre">
      <span
        className="absolute left-0 top-0 text-transparent"
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.25)" }}
      >
        {word}
      </span>
      <motion.span style={{ opacity }} className="relative z-10 text-black">
        {word}
      </motion.span>
    </span>
  );
};

export const ScrollFillText: React.FC<ScrollFillTextProps> = ({
  children,
  className,
  as: Component = "div",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const progress = useMotionValue(0);

  // Manually track scroll progress using rAF + getBoundingClientRect
  // This bypasses Framer Motion's useScroll which conflicts with Lenis
  useEffect(() => {
    let rafId: number;

    const updateProgress = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Fill starts when element center is 30% below viewport center
        // Fill ends when element center is 30% above viewport center
        const range = windowHeight * 0.3;
        const rawProgress = (viewportCenter + range - elementCenter) / (range * 2);
        const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

        progress.set(clampedProgress);
      }

      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(rafId);
  }, [progress]);

  const words = children.split(/\s+/);

  return (
    <Component className={cn("", className)}>
      <span ref={containerRef} className="inline-block w-full">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <React.Fragment key={i}>
              <Word
                word={word}
                progress={progress}
                start={start}
                end={end}
              />
              {i < words.length - 1 && " "}
            </React.Fragment>
          );
        })}
      </span>
    </Component>
  );
};
