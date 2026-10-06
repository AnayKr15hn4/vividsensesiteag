import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center relative overflow-hidden font-sans">

      {/* Centered copy stack */}
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-2xl mb-32 mt-10">
        <h1 className="text-[#F2EFEA] text-xl md:text-2xl font-medium tracking-wide mb-6">
          Yeah, this page is gone. Totally our fault, not yours.
        </h1>

        <div className="text-[#F2EFEA]/50 text-sm md:text-base leading-relaxed">
          <p>We'd blame the intern, but we don't have one.</p>
          <p>
            The <Link to="/" className="underline hover:text-[#F2EFEA] transition-colors">homepage</Link> still works though. We checked twice.
          </p>
        </div>
      </div>

      {/* Colossal '404' bleeding off the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none -translate-y-[-15%] overflow-hidden">
        <h2
          className="font-sans font-black text-[#F2EFEA] leading-none select-none tracking-tighter"
          style={{
            fontSize: 'min(35vw, 400px)',
            transform: 'scaleX(2.5)',
            transformOrigin: 'center bottom'
          }}
        >
          404
        </h2>
      </div>
    </div>
  );
};
