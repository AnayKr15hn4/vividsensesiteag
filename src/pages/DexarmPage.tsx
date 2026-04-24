import { useEffect } from "react";
import { DexarmScrollSequence } from "../components/DexarmScrollSequence";
import { DexarmSections } from "../components/DexarmSections";

export const DexarmPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-[#ff4500]/30">
      <DexarmScrollSequence frameCount={210} />
      <DexarmSections />
    </div>
  );
};
