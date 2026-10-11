"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const allImages = [
  "/images/dex/Black_prosthetic_hand_on_surface_2K_20261009092343.jpg",
  "/images/dex/Prosthetic_hand_mechanical_joints_2K_20261009092407.jpg",
  "/images/dex/Prosthetic_hand_reaching_upward_2K_20261009092359.jpg",
  "/images/dex/Black_prosthetic_hand_displayed_._2K_20260918120706.jpeg",
  "/images/dex/Prostatic_hand_in_black_void_2K_20261009092629.jpg",
  "/images/dex/Prostatic_hand_side_profile_view_2K_20260918120701.jpeg",
  "/images/dex/Prosthetic_hand_close-up_20261010132559.jpg",
  "/images/dex/Prostatic_hand_mechanical_joints_20261010132919.jpg",
  "/images/dex/Prostatic_hand_mechanical_joints_20261010132921.jpg",
  "/images/dex/Protesthetic_hand_pointing_forward_2K_20260918120654.jpeg",
  "/images/dex/Prothetic_hand_mechanical_joints_20261010132924.jpg",
  "/images/dex/Protesthetic_hand_mechanical_joints_20261010132916.jpg",
];

const col1 = [allImages[0], allImages[1], allImages[2], allImages[3], allImages[4]];
const col2 = [allImages[5], allImages[6], allImages[7], allImages[8], allImages[9]];
const col3 = [allImages[10], allImages[11], allImages[0], allImages[2], allImages[4]];
const col4 = [allImages[1], allImages[3], allImages[5], allImages[7], allImages[9]];


const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#eee] text-black">
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        <Column images={col1} y={y} />
        <Column images={col2} y={y2} />
        <Column images={col3} y={y3} />
        <Column images={col4} y={y4} />
      </div>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };
