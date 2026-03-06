export const ScannerFooter = () => {
  return (
    <footer className="footer bg-white text-black py-12 border-t border-[#00ced1]/50 relative overflow-hidden">
      {/* Subtle top glow from the border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00ced1]/50 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#00ced1]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="mb-6 md:mb-0">
          <span className="text-2xl font-display font-black tracking-tighter uppercase">
            VividSense
          </span>
        </div>

        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};
