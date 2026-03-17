import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById("solucao");
      const footer = document.querySelector("footer");

      if (!trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const footerRect = footer ? footer.getBoundingClientRect() : null;

      const triggerPassed = triggerRect.top < window.innerHeight;
      const footerVisible = footerRect ? footerRect.top < window.innerHeight : false;

      setVisible(triggerPassed && !footerVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const el = document.getElementById("oferta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(0_0%_4%)] border-t border-[hsl(0_0%_15%)] px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col">
            <span className="text-foreground font-black text-base">Aceita o desafio?</span>
          </div>
          <button
            onClick={handleClick}
            className="flex-1 max-w-xs bg-gradient-to-r from-[hsl(22_100%_50%)] to-[hsl(30_100%_55%)] text-white font-black text-sm rounded-lg py-3 px-5 flex items-center justify-center gap-2 shadow-[0_0_20px_hsl(24_100%_50%/0.5)] cursor-pointer border-0"
          >
            COMEÇAR
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
