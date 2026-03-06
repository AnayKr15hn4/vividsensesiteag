import { useEffect } from "react";
import { ScannerScrollSequence } from "../components/ScannerScrollSequence";
import { ScannerSections } from "../components/ScannerSections";

export const SurroundingScannerPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-[#00ced1]/30">
      <ScannerScrollSequence frameCount={114} />
      <ScannerSections />
    </div>
  );
};
