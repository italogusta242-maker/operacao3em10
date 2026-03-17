import { ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-pixel";

const CTA_URL = "https://payment.ticto.app/O0656C50E";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  variant?: "primary" | "accent" | "white";
  className?: string;
  pulse?: boolean;
  scrollToOffer?: boolean;
}

const CTAButton = ({ text, subtext, variant = "primary", className = "", pulse = false, scrollToOffer = false }: CTAButtonProps) => {
  const base =
    "inline-flex flex-col items-center justify-center gap-1 rounded-lg px-6 md:px-10 py-5 md:py-5 font-display font-black text-base md:text-lg tracking-tight cursor-pointer border-0 w-full";

  const variants = {
    primary:
      "bg-gradient-to-r from-[hsl(122_60%_45%)] to-[hsl(140_55%_50%)] text-white shadow-[0_0_20px_hsl(122_60%_45%/0.4)] hover:shadow-[0_0_30px_hsl(122_60%_45%/0.6)] transition-all duration-300",
    accent:
      "bg-gradient-to-r from-[hsl(22_100%_50%)] via-[hsl(26_100%_52%)] to-[hsl(30_100%_55%)] text-white shadow-[0_0_20px_hsl(24_100%_50%/0.5)] hover:shadow-[0_0_40px_hsl(24_100%_50%/0.8)] transition-all duration-300",
    white:
      "bg-white text-[hsl(0_0%_5%)] shadow-[0_0_20px_hsl(0_0%_100%/0.1)] hover:shadow-[0_0_30px_hsl(0_0%_100%/0.2)] transition-all duration-300",
  };

  const handleClick = () => {
    if (scrollToOffer) {
      const el = document.getElementById("oferta");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
    window.open(CTA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${pulse ? "animate-pulse-cta" : ""} ${className}`}
    >
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-5 h-5" />
      </span>
      {subtext && <span className="text-xs font-body font-medium opacity-80">{subtext}</span>}
    </button>
  );
};

export default CTAButton;
