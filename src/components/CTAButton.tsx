import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  variant?: "primary" | "accent" | "white";
  className?: string;
  pulse?: boolean;
}

const CTAButton = ({ text, subtext, variant = "primary", className = "", pulse = false }: CTAButtonProps) => {
  const base = "inline-flex flex-col items-center justify-center gap-1 rounded-xl px-8 py-5 font-display font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 cursor-pointer w-full md:w-auto";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.5)]",
    accent: "bg-accent text-accent-foreground hover:shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)]",
    white: "bg-white text-primary hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.3)]",
  };

  return (
    <a
      href="#checkout"
      target="_blank"
      rel="noopener noreferrer"
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
