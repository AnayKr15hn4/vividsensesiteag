import React, { useEffect } from "react";

export const DonatePage: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Also disable Lenis if it exists on the window object
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }
    
    return () => {
      document.body.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 w-full h-[100dvh] bg-black flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full flex-1 overflow-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
        <iframe
          src="https://hcb.hackclub.com/donations/start/vividsense"
          style={{ border: "none", backgroundColor: "transparent" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="absolute top-[88px] bottom-0 left-0 right-0 w-full h-[calc(100%-88px)]"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

