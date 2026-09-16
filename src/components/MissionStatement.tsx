import React, { useRef } from "react";
import { ScrollFillText } from "./ui/scroll-fill-text";

export const MissionStatement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const textString = "As a student-led organization, we are dedicated to empowering independence by creating affordable accessibility technology and running hands-on engineering workshops. Our mission is to foster future engineers while building smart, accessible designs that help people move confidently and stay independent.";

  return (
    <section
      id="vision"
      className="bg-white text-black py-24 md:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      <style>
        {`
          .mission-text > span:nth-child(5),
          .mission-text > span:nth-child(21),
          .mission-text > span:nth-child(35) {
            font-family: serif;
            font-style: italic;
            font-weight: 300;
          }
        `}
      </style>
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Border & Labels */}
        <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-16 md:mb-24">
          <span>01</span>
          <span>Mission Statement</span>
          <span className="hidden md:block">Our Vision</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          {/* Left Column - Statement */}
          <div className="lg:w-3/4">
            <ScrollFillText
              as="h2"
              className="mission-text text-4xl md:text-5xl lg:text-[60px] font-display leading-[1.1] tracking-tight text-black"
            >
              {textString}
            </ScrollFillText>
          </div>

          {/* Right Column - Empty/Decor */}
          <div className="hidden lg:block lg:w-1/4 flex justify-end">
            <div className="w-2 h-2 rounded-full bg-black/10 ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
