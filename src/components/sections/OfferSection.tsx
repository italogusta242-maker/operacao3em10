import { X, ShieldCheck, Clock, Zap, Sparkles } from "lucide-react";
import CTAButton from "../CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const costs = [
  { label: "Uma consulta com nutricionista?", price: "R$ 200-400" },
  { label: "Um mês de academia?", price: "R$ 150-300" },
  { label: "Suplementos 'detox' milagrosos?", price: "R$ 100-250" },
];

const comparisons = [
  "Um combo no McDonald's",
  "2 cafés no Starbucks",
  "Uma pizza delivery",
];

const badges = [
  { icon: ShieldCheck, label: "Compra 100%\nsegura" },
  { icon: Clock, label: "Acesso\nimediato" },
  { icon: Zap, label: "100%\ndigital" },
];

const OfferSection = () => {
  return (
    <section className="py-12 md:py-24 bg-[hsl(160_20%_8%)]" id="oferta">
      <ScrollReveal className="container max-w-3xl text-center px-5">
        <h2 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">
          Quanto custa recuperar seu corpo em <span className="text-[hsl(160_80%_45%)]">10 dias</span>?
        </h2>

        <p className="text-sm md:text-lg text-gray-400 mb-4 md:mb-6 text-left">Vamos fazer uma conta rápida:</p>

        <div className="space-y-2 md:space-y-3 mb-2 md:mb-3 text-left">
          {costs.map(({ label, price }, i) => (
            <div key={i} className="flex items-center justify-between gap-2 bg-[hsl(160_10%_14%)] border border-[hsl(160_10%_20%)] rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-xs md:text-base text-gray-300">{label}</span>
              </div>
              <span className="text-xs md:text-base line-through text-gray-500 whitespace-nowrap">{price}</span>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div className="flex items-center justify-between gap-2 bg-[hsl(160_80%_45%/0.15)] border border-[hsl(160_80%_45%/0.3)] rounded-lg px-4 py-3 mb-8 md:mb-10">
          <span className="text-sm md:text-base font-bold text-white">TOTAL</span>
          <span className="text-sm md:text-base line-through text-[hsl(160_80%_45%)] font-bold">R$ 450-950</span>
        </div>

        <p className="text-base md:text-xl font-bold text-white mb-6 md:mb-8">
          Mas você <span className="underline">NÃO</span> vai pagar isso hoje.
        </p>

        {/* Price card */}
        <div className="relative inline-block mb-8 md:mb-10 w-full max-w-sm mx-auto">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[hsl(160_80%_45%)] via-[hsl(160_80%_45%/0.3)] to-[hsl(160_80%_45%)]" />
          <div className="relative bg-gradient-to-b from-[hsl(160_15%_14%)] to-[hsl(160_15%_10%)] rounded-2xl p-8 md:p-12">
            <p className="text-gray-500 text-sm md:text-base line-through mb-3">R$ 147,00</p>
            <div className="inline-flex items-center gap-2 bg-[hsl(160_80%_45%)] text-[hsl(160_20%_8%)] rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs md:text-sm font-bold uppercase">Oferta especial</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-1">12x de</p>
            <p className="font-display font-extrabold text-5xl md:text-7xl text-[hsl(160_80%_45%)] drop-shadow-[0_0_30px_hsl(160_80%_45%/0.4)]">
              R$ 3,92
            </p>
            <p className="text-gray-400 text-sm md:text-base mt-3">
              ou <strong className="text-white text-lg md:text-2xl">R$ 47,00</strong> à vista
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-400 mb-4">Isso é menos que:</p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {comparisons.map((c, i) => (
            <li key={i} className="bg-[hsl(160_10%_14%)] rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-300 border border-[hsl(160_10%_20%)]">
              • <strong>{c}</strong>
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
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[hsl(160_80%_45%/0.15)] flex items-center justify-center">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-[hsl(160_80%_45%)]" />
              </div>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium whitespace-pre-line text-center">{label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default OfferSection;
