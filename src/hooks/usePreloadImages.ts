import { useState, useEffect } from "react";

export const usePreloadImages = (
  basePath: string,
  frameCount: number,
  extension: string = "webp",
  minLoadTimeMs: number = 3500
) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [actualLoadedCount, setActualLoadedCount] = useState(0);
  const [simulatedLoadedCount, setSimulatedLoadedCount] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const imgArray: HTMLImageElement[] = [];

    // Preload all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format index like 001, 002, etc. (3-digit padding for ezgif format)
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `${basePath}/ezgif-frame-${paddedIndex}.${extension}`;

      img.onload = () => {
        loaded++;
        setActualLoadedCount(loaded);
      };

      img.onerror = () => {
        console.warn(`Failed to load ${img.src}`);
        loaded++; // Increment anyway so it doesn't freeze the loading bar
        setActualLoadedCount(loaded);
      };

      imgArray.push(img);
    }

    setImages(imgArray);
  }, [basePath, frameCount, extension]);

  const [isActuallyComplete, setIsActuallyComplete] = useState(false);

  // Simulate a minimum loading time (e.g. 3.5 seconds)
  useEffect(() => {
    // Wait 400ms before starting the 3.5s timer to allow SVG dash measurement to finish
    const startDelay = 400;
    const startTime = Date.now() + startDelay;
    let animationFrameId: number;

    const updateSimulatedCount = () => {
      const now = Date.now();
      if (now < startTime) {
        animationFrameId = requestAnimationFrame(updateSimulatedCount);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / minLoadTimeMs, 1);
      const simulatedCount = Math.floor(progress * frameCount);
      setSimulatedLoadedCount(simulatedCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateSimulatedCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateSimulatedCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [frameCount, minLoadTimeMs]);

  // The displayed progress is bottlenecked by both the actual load and the minimum time
  const displayedLoadedCount = Math.min(actualLoadedCount, simulatedLoadedCount);
  const readyToComplete = displayedLoadedCount === frameCount;

  // Add a 600ms delay before dismissing the loading screen so the user sees the 100% drawn logo
  useEffect(() => {
    if (readyToComplete) {
      const timer = setTimeout(() => {
        setIsActuallyComplete(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [readyToComplete]);

  return { 
    images, 
    loadedCount: displayedLoadedCount, 
    isComplete: isActuallyComplete 
  };
};
