import { X } from "lucide-react";
import CTAButton from "../CTAButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const costs = [
  { label: "Uma consulta com nutricionista", price: "R$ 200-400" },
  { label: "Um mês de academia", price: "R$ 150-300" },
  { label: "Suplementos 'detox' milagrosos", price: "R$ 100-250" },
  { label: "TOTAL", price: "R$ 450-950", bold: true },
];

const comparisons = [
  "Um combo no McDonald's",
  "2 cafés no Starbucks",
  "Um Uber de 15 minutos",
];

const OfferSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[hsl(48_100%_96%)] to-[hsl(48_100%_90%)]" id="oferta">
      <div ref={ref} className={`container max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-8">
          Quanto Custa Recuperar Seu Corpo em 10 Dias?
        </h2>

        <p className="text-lg text-muted-foreground mb-6 text-left">Vamos fazer uma conta rápida:</p>

        <ul className="space-y-3 mb-8 text-left">
          {costs.map(({ label, price, bold }, i) => (
            <li key={i} className={`flex items-center gap-3 ${bold ? "font-bold text-foreground" : ""}`}>
              <X className="w-4 h-4 text-destructive shrink-0" />
              <span className="text-base">{label}?</span>
              <span className="ml-auto text-base line-through text-muted-foreground">{price}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-foreground mb-6">Mas você NÃO vai pagar isso hoje.</p>

        <p className="text-xl line-through text-muted-foreground mb-2">R$ 111,00</p>

        <p className="font-display font-bold text-lg md:text-xl text-foreground mb-6 uppercase tracking-wide">
          Hoje, Você Garante Tudo Por Apenas:
        </p>

        {/* Price box */}
        <div className="bg-card border-4 border-primary rounded-2xl p-8 md:p-10 shadow-lg inline-block mb-8">
          <p className="text-muted-foreground text-base mb-1">12x de</p>
          <p className="font-display font-extrabold text-4xl md:text-5xl text-primary">R$ 2,25</p>
          <p className="text-muted-foreground text-base mt-2">
            ou <strong className="text-foreground text-xl">R$ 27,00</strong> à vista
          </p>
        </div>

        <p className="text-base text-muted-foreground mb-4">Isso é menos que:</p>
        <ul className="flex flex-wrap justify-center gap-3 mb-10">
          {comparisons.map((c, i) => (
            <li key={i} className="bg-card rounded-full px-4 py-2 text-sm text-foreground shadow-sm">• {c}</li>
          ))}
        </ul>

        <CTAButton
          text="QUERO ELIMINAR O INCHAÇO AGORA"
          subtext="ACESSO IMEDIATO • 100% DIGITAL • SEM MENSALIDADES"
          variant="accent"
          pulse
        />
      </div>
    </section>
  );
};

export default OfferSection;
