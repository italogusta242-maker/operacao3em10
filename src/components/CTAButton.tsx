import { ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-pixel";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  variant?: "primary" | "accent" | "white";
  className?: string;
  pulse?: boolean;
}

const CTAButton = ({ text, subtext, variant = "primary", className = "", pulse = false }: CTAButtonProps) => {
  const base = "inline-flex flex-col items-center justify-center gap-1 rounded-lg px-6 md:px-10 py-4 md:py-5 font-display font-black text-base md:text-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 cursor-pointer w-full md:w-auto";

  const variants = {
    primary: "bg-gradient-to-r from-[hsl(122_60%_45%)] to-[hsl(140_55%_50%)] text-white shadow-[0_0_20px_hsl(122_60%_50%/0.3)] hover:shadow-[0_0_30px_hsl(122_60%_50%/0.5)]",
    accent: "bg-gradient-to-r from-[hsl(22_100%_50%)] to-[hsl(30_100%_55%)] text-white shadow-[0_0_20px_hsl(24_100%_50%/0.4)] hover:shadow-[0_0_40px_hsl(24_100%_50%/0.6)]",
    white: "bg-white text-[hsl(0_0%_5%)] shadow-[0_0_20px_hsl(0_0%_100%/0.1)] hover:shadow-[0_0_30px_hsl(0_0%_100%/0.2)]",
  };

  const handleClick = () => {
    trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
  };

  return (
    <a
      href="https://pay.kiwify.com.br/Uloo88h"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${pulse ? "animate-pulse-cta" : ""} ${className}`}
    >
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-5 h-5" />
      </span>
      {subtext && <span className="text-xs font-body font-medium opacity-80">{subtext}</span>}
    </a>
  );
};

export default CTAButton;
