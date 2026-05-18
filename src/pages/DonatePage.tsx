import React from "react";

export const DonatePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-brand-dark flex flex-col items-center overflow-hidden">
      {/* Noise Texture Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'url("/noise.svg")',
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Background Texture & Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: `
              radial-gradient(circle at 60% 40%, #00ced1 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, #0055ff 0%, transparent 60%)
            `,
            filter: "blur(80px)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="mesh">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
          <rect width="100%" height="100%" filter="url(#mesh)" fill="#00ced1" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col bg-white">
        <iframe
          src="https://hcb.hackclub.com/donations/start/vividsense"
          style={{ border: "none", backgroundColor: "transparent" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full h-full flex-1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
