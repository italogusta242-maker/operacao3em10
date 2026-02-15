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
    <section className="py-12 md:py-24 bg-background" id="oferta">
      <ScrollReveal className="container max-w-3xl text-center px-5">
        <h2 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-6 md:mb-8">
          Quanto custa recuperar seu corpo em 10 dias?
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 text-left">Vamos fazer uma conta rápida:</p>

        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
          {costs.map(({ label, price, bold }, i) => (
            <li key={i} className={`flex items-center justify-between gap-2 ${bold ? "font-bold text-foreground" : "text-foreground/80"}`}>
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

        {/* Price card */}
        <div className="relative inline-block mb-8 md:mb-10 w-full max-w-sm mx-auto">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent via-accent/30 to-accent" />
          <div className="relative bg-gradient-to-b from-[hsl(25_10%_12%)] to-[hsl(25_10%_8%)] rounded-2xl p-8 md:p-12">
            <div className="relative z-10">
              <p className="text-gray-400 text-sm md:text-base mb-2">12x de</p>
              <p className="font-display font-extrabold text-5xl md:text-7xl text-accent drop-shadow-[0_0_30px_hsl(25_100%_50%/0.5)]">
                R$ 3,92
              </p>
              <p className="text-gray-400 text-sm md:text-base mt-3">
                ou <strong className="text-white text-lg md:text-2xl">R$ 47,00</strong> à vista
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-4">Isso é menos que:</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {comparisons.map((c, i) => (
            <li key={i} className="bg-secondary rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-foreground/80 border border-border">
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
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/15 flex items-center justify-center">
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
