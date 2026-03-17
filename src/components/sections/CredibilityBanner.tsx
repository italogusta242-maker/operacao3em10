import { Star, Trophy, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  { icon: Star, text: "+5.000 alunos" },
  { icon: Trophy, text: "Atleta Natural" },
  { icon: Smartphone, text: "+500K seguidores" },
];

const CredibilityBanner = () => (
  <div className="relative bg-[hsl(0_0%_3%)] border-y border-accent/15">
    <div className="container max-w-4xl px-5 py-4 md:py-5">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-semibold text-foreground/80">{text}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export default CredibilityBanner;
