import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackMetaEvent } from "@/lib/meta-pixel";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const setupObserver = () => {
      const triggerEl = document.getElementById('como-funciona');
      const footerEl = document.querySelector('footer');

      if (!triggerEl) return false;

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === triggerEl && entry.isIntersecting) {
              setVisible(true);
            }
            if (entry.target === footerEl) {
              setVisible(!entry.isIntersecting);
            }
          });
        },
        { threshold: 0.1 }
      );

      intersectionObserver.observe(triggerEl);
      if (footerEl) intersectionObserver.observe(footerEl);

      return true;
    };

    if (!setupObserver()) {
      mutationObserver = new MutationObserver(() => {
        if (setupObserver()) {
          mutationObserver?.disconnect();
          mutationObserver = null;
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
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
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-accent/30 px-4 py-3 flex items-center justify-between gap-3"
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
