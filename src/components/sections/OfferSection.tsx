import { X, ShieldCheck, Clock, Zap } from "lucide-react";
import CTAButton from "../CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const costs = [
  { label: "Uma consulta com nutricionista", price: "R$ 200-400" },
  { label: "Um mês de academia", price: "R$ 150-300" },
  { label: "Suplementos 'detox' milagrosos", price: "R$ 100-250" },
  { label: "TOTAL", price: "R$ 450-950", bold: true },
];

const comparisons = [
  "Um combo no McDonald's",
  "2 cafés no Starbucks",
];

const badges = [
  { icon: ShieldCheck, label: "Compra 100% segura" },
  { icon: Clock, label: "Acesso imediato" },
  { icon: Zap, label: "100% digital" },
];

const OfferSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-[hsl(48_100%_96%)] to-[hsl(48_100%_90%)] relative overflow-hidden" id="oferta">
      {/* Subtle warm radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(25_100%_50%/0.04)]" />

      <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
        <h2 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-6 md:mb-8">
          Quanto custa recuperar seu corpo em 10 dias?
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 text-left">Vamos fazer uma conta rápida:</p>

        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
          {costs.map(({ label, price, bold }, i) => (
            <li key={i} className={`flex items-center justify-between gap-2 ${bold ? "font-bold text-foreground" : ""}`}>
              <div className="flex items-center gap-2 min-w-0">
                <X className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-xs md:text-base">{label}?</span>
              </div>
              <span className="text-xs md:text-base line-through text-muted-foreground whitespace-nowrap">{price}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm md:text-lg font-semibold text-foreground mb-4 md:mb-6">Mas você NÃO vai pagar isso hoje.</p>

        <p className="text-base md:text-xl line-through text-muted-foreground mb-2">R$ 497,00</p>

        <p className="font-display font-bold text-base md:text-xl text-foreground mb-6 md:mb-8 uppercase tracking-wide">
          Hoje, você garante tudo por apenas:
        </p>

        {/* Premium price card */}
        <div className="relative inline-block mb-8 md:mb-10 w-full max-w-sm mx-auto">
          {/* Layered glows */}
          <div className="absolute -inset-6 bg-[hsl(122_39%_49%/0.08)] rounded-[2rem] blur-2xl" />
          <div className="absolute -inset-3 bg-[hsl(122_39%_49%/0.06)] rounded-3xl blur-xl" />
          
          {/* Gradient border */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-b from-primary via-[hsl(122_39%_65%)] to-primary opacity-60" />
          
          <div className="relative bg-gradient-to-br from-white via-[hsl(122_39%_98%)] to-[hsl(122_39%_95%)] rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_hsl(122_39%_49%/0.25)]">
            {/* Inner subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-[hsl(122_39%_49%/0.08)] blur-2xl rounded-full" />
            
            <div className="relative z-10">
              <p className="text-muted-foreground text-sm md:text-base mb-1">12x de</p>
              <p className="font-display font-extrabold text-5xl md:text-7xl text-primary drop-shadow-[0_2px_8px_hsl(122_39%_49%/0.3)] leading-none">
                R$ 3,92
              </p>
              <div className="w-16 h-0.5 bg-primary/30 mx-auto my-3" />
              <p className="text-muted-foreground text-sm md:text-base">
                ou <strong className="text-foreground text-lg md:text-2xl">R$ 47,00</strong> à vista
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-4">Isso é menos que:</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {comparisons.map((c, i) => (
            <li key={i} className="bg-card rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-foreground shadow-sm border border-border">
              • {c}
            </li>
          ))}
        </ul>

        <CTAButton
          text="QUERO ELIMINAR O INCHAÇO AGORA"
          subtext="ACESSO IMEDIATO • 100% DIGITAL • SEM MENSALIDADES"
          variant="accent"
          pulse
        />

        {/* Trust badges */}
        <div className="flex justify-center gap-6 md:gap-10 mt-8">
          {badges.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default OfferSection;
