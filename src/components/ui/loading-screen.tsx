import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingLogo } from "./loading-logo";

interface LoadingScreenProps {
  isComplete: boolean;
  progress: number;
  color: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isComplete,
  progress,
  color,
}) => {
  const numBars = 10;
  
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loading-screen"
          className="absolute inset-0 z-50 overflow-hidden pointer-events-none"
          // We don't animate the container out, we animate its children
          exit={{ opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }}
        >
          {/* The 10 vertical bars that make up the white background */}
          <div className="absolute inset-0 flex w-full h-full">
            {Array.from({ length: numBars }).map((_, i) => (
              <motion.div
                key={i}
                className="h-full bg-white flex-1 origin-bottom"
                initial={{ y: "0%" }}
                exit={{ 
                  y: "-100%", 
                  transition: { 
                    duration: 0.8, 
                    ease: [0.65, 0, 0.35, 1], // cinematic cubic-bezier
                    delay: i * 0.05
                  } 
                }}
              />
            ))}
          </div>

          {/* The Logo and Text Layer */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: -50, 
              transition: { duration: 0.5, ease: "easeIn" } 
            }}
          >
            <LoadingLogo progress={progress} color={color} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
