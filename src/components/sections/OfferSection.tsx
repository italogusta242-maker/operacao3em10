import { X } from "lucide-react";
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

const OfferSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-[hsl(48_100%_96%)] to-[hsl(48_100%_90%)]" id="oferta">
      <ScrollReveal className="container max-w-3xl text-center px-5">
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

        <p className="font-display font-bold text-base md:text-xl text-foreground mb-4 md:mb-6 uppercase tracking-wide">
          Hoje, você garante tudo por apenas:
        </p>

        <div className="relative inline-block mb-6 md:mb-8">
          {/* Glow effect */}
          <div className="absolute -inset-3 bg-primary/20 rounded-3xl blur-xl animate-pulse" />
          <div className="relative bg-gradient-to-br from-white to-[hsl(122_39%_97%)] border-4 border-primary rounded-2xl p-6 md:p-10 shadow-[0_8px_40px_-8px_hsl(122_39%_49%/0.4)]">
            <p className="text-muted-foreground text-sm md:text-base mb-1">12x de</p>
            <p className="font-display font-extrabold text-4xl md:text-6xl text-primary drop-shadow-[0_2px_4px_hsl(122_39%_49%/0.3)]">R$ 3,92</p>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              ou <strong className="text-foreground text-lg md:text-xl">R$ 47,00</strong> à vista
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-4">Isso é menos que:</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {comparisons.map((c, i) => (
            <li key={i} className="bg-card rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-foreground shadow-sm">• {c}</li>
          ))}
        </ul>

        <CTAButton
          text="QUERO ELIMINAR O INCHAÇO AGORA"
          subtext="ACESSO IMEDIATO • 100% DIGITAL • SEM MENSALIDADES"
          variant="accent"
          pulse
        />
      </ScrollReveal>
    </section>
  );
};

export default OfferSection;
