"use client";

import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("svg raster failed"));
    img.src = url;
  });
}

function countOpaque(ctx: CanvasRenderingContext2D, w: number, h: number): number {
  const data = ctx.getImageData(0, 0, w, h).data;
  let n = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 12) n += 1;
  }
  return n;
}

async function rasterInk(
  source: SVGSVGElement,
  apply: (text: SVGTextElement) => void,
): Promise<number> {
  const clone = source.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const text = clone.querySelector("text");
  if (!text) return 0;
  apply(text as SVGTextElement);
  text.setAttribute("stroke", "#ffffff");
  (text as SVGTextElement).style.stroke = "#ffffff";

  const vb = source.viewBox.baseVal;
  const w = Math.max(1, Math.round(vb.width || 800));
  const h = Math.max(1, Math.round(vb.height || 160));
  clone.setAttribute("width", String(w));
  clone.setAttribute("height", String(h));
  clone.style.visibility = "visible";

  const xml = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImage(url);
    const cw = Math.max(1, Math.round(w * 0.45));
    const ch = Math.max(1, Math.round(h * 0.45));
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return 0;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, cw, ch);
    return countOpaque(ctx, cw, ch);
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function measureExactDashLength(svg: SVGSVGElement): Promise<number> {
  const full = await rasterInk(svg, (text) => {
    text.style.strokeDasharray = "none";
    text.style.strokeDashoffset = "0";
  });
  if (full <= 0) {
    throw new Error("empty ink");
  }

  const covered = async (dash: number) => {
    const ink = await rasterInk(svg, (text) => {
      text.style.strokeDasharray = `${dash} 100000`;
      text.style.strokeDashoffset = "0";
    });
    return ink >= full * 0.994;
  };

  let hi = 64;
  while (hi < 24000 && !(await covered(hi))) {
    hi *= 2;
  }

  let lo = 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (await covered(mid)) hi = mid;
    else lo = mid + 1;
  }

  return Math.max(1, lo);
}

interface LoadingLogoProps {
  progress: number; // 0 to 100
  color?: string; // Hex color for the stroke
}

export const LoadingLogo: React.FC<LoadingLogoProps> = ({ 
  progress, 
  color = "#00ced1" 
}) => {
  const reactId = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [dashLength, setDashLength] = useState(0);
  const reduceMotion = useReducedMotion();
  
  const display = "VIVIDSENSE";
  const fontSize = 148;
  const viewBoxWidth = 1100;
  const viewBoxHeight = 200;
  const strokeWidth = 2.4;

  useEffect(() => {
    if (!display || reduceMotion) return;
    const svg = svgRef.current;
    if (!svg) return;

    let cancelled = false;
    const run = async () => {
      try {
        await document.fonts.ready;
        if (cancelled || !svgRef.current) return;
        const dash = await measureExactDashLength(svgRef.current);
        if (!cancelled) setDashLength(Math.ceil(dash * 1.1));
      } catch {
        const el = textRef.current;
        if (!el || cancelled) return;
        const width = el.getComputedTextLength() || display.length * fontSize * 0.62;
        setDashLength(Math.max(1, Math.ceil(width * 1.3)));
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [display, fontSize, viewBoxWidth, strokeWidth, reduceMotion]);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (reduceMotion || dashLength <= 0) {
      el.style.strokeDashoffset = "0";
      el.style.strokeDasharray = "none";
      return;
    }

    el.style.strokeDasharray = `${dashLength} ${dashLength}`;
    
    // Instead of looping via time, set the offset based directly on progress
    const offset = dashLength - (progress / 100) * dashLength;
    el.style.strokeDashoffset = String(offset);

  }, [dashLength, progress, reduceMotion]);

  const ready = dashLength > 0 || Boolean(reduceMotion);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={cn("flex w-full max-w-4xl items-center justify-center")}>
        <svg
          ref={svgRef}
          width="1000"
          height="300"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          className="h-auto w-full max-w-full overflow-visible"
          role="img"
          aria-label={display}
          style={{ visibility: ready ? "visible" : "hidden" }}
        >


          {/* Foreground drawn silhouette */}
          <text
            ref={textRef}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            fontSize={fontSize}
            className="font-display font-black tracking-tighter"
          >
            {display}
          </text>
        </svg>
      </div>
      
      <div 
        className="font-mono text-sm tracking-widest uppercase font-medium"
        style={{ color, visibility: ready ? "visible" : "hidden" }}
      >
        Loading / {Math.round(progress)}%
      </div>
    </div>
  );
};
