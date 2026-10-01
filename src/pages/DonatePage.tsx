import React from "react";

export const DonatePage: React.FC = () => {
  return (
    <div className="relative w-full h-[100dvh] bg-black flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full flex-1 overflow-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
        <iframe
          src="https://hcb.hackclub.com/donations/start/vividsense"
          style={{ border: "none", backgroundColor: "transparent" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

