import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackMetaEvent } from "@/lib/meta-pixel";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const triggerEl = document.getElementById("como-funciona");
    const footerEl = document.querySelector("footer");

    if (!triggerEl) return;

    let triggerReached = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === triggerEl) {
            if (entry.isIntersecting) {
              triggerReached = true;
              setVisible(true);
            }
          }
          if (entry.target === footerEl) {
            if (entry.isIntersecting) {
              setVisible(false);
            } else if (triggerReached) {
              setVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(triggerEl);

    const timer = setTimeout(() => {
      const footer = document.querySelector("footer");
      if (footer) observer.observe(footer);
    }, 2000);

    const handleScroll = () => {
      if (!triggerReached) return;
      const footerRect = document.querySelector("footer")?.getBoundingClientRect();
      if (footerRect && footerRect.top < window.innerHeight) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-accent/30 px-4 py-3 flex items-center justify-between gap-3"
        >
          <div className="flex flex-col">
            <span className="text-xs font-bold text-foreground">R$ 47</span>
            <span className="text-[10px] text-muted-foreground">Garantia 7 dias</span>
          </div>
          <a
            href="https://pay.kiwify.com.br/Uloo88h"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(22_100%_50%)] to-[hsl(30_100%_55%)] text-white font-display font-black text-sm py-3 rounded-lg cta-shimmer cta-sonar"
          >
            COMEÇAR <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
