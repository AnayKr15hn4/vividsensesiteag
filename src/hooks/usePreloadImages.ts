import { useState, useEffect } from "react";

export const usePreloadImages = (
  basePath: string,
  frameCount: number,
  extension: string = "webp",
) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

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
        setLoadedCount(loaded);
      };

      img.onerror = () => {
        console.warn(`Failed to load ${img.src}`);
        loaded++; // Increment anyway so it doesn't freeze the loading bar
        setLoadedCount(loaded);
      };

      imgArray.push(img);
    }

    setImages(imgArray);
  }, [basePath, frameCount, extension]);

  return { images, loadedCount, isComplete: loadedCount === frameCount };
};
