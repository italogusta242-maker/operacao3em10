import { ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-pixel";

const CTA_URL = "https://payment.ticto.app/O0656C50E";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  className?: string;
}

const CTAButton = ({ text, subtext, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
    window.open(CTA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex flex-col items-center justify-center gap-1 rounded-xl w-full px-8 py-5 font-display font-bold text-base md:text-lg tracking-tight cursor-pointer border-0 bg-accent text-accent-foreground shadow-[0_4px_24px_hsl(24_100%_50%/0.4)] hover:shadow-[0_4px_32px_hsl(24_100%_50%/0.6)] hover:brightness-110 transition-all duration-300 cta-sonar ${className}`}
    >
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      {subtext && <span className="text-xs font-body font-medium opacity-80">{subtext}</span>}
    </button>
  );
};

export default CTAButton;
