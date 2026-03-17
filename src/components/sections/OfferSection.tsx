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
    <section className="relative overflow-hidden" id="oferta">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,hsl(24_100%_50%/0.06),transparent_70%)]" />
        
        <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">
            <span className="text-accent text-glow-accent">Quanto custa</span> recuperar seu corpo em <span className="text-primary text-glow-primary">10 dias</span>?
          </h2>

          <p className="text-sm md:text-lg text-gray-400 mb-4 md:mb-6 text-left">Vamos fazer uma conta rápida:</p>

          <div className="space-y-2 md:space-y-3 mb-2 md:mb-3 text-left">
            {costs.map(({ label, price }, i) => (
              <div key={i} className="flex items-center justify-between gap-2 card-glow rounded-lg px-4 py-3">
                <div className="flex items-center gap-2 min-w-0">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-xs md:text-base text-gray-300">{label}</span>
                </div>
                <span className="text-xs md:text-base line-through text-gray-500 whitespace-nowrap">{price}</span>
              </div>
            ))}
          </div>

          {/* Total row */}
          <div className="flex items-center justify-between gap-2 border border-accent/30 bg-[hsl(24_100%_50%/0.08)] rounded-lg px-4 py-3 mb-8 md:mb-10">
            <span className="text-sm md:text-base font-black text-white">TOTAL</span>
            <span className="text-sm md:text-base line-through text-accent font-bold">R$ 450-950</span>
          </div>

          <p className="text-base md:text-xl font-black text-white mb-6 md:mb-8 text-glow-accent">
            Mas você <span className="underline">NÃO</span> vai pagar isso hoje.
          </p>

          {/* Price card */}
          <div className="relative inline-block mb-8 md:mb-10 w-full max-w-sm mx-auto">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent via-[hsl(24_100%_50%/0.3)] to-accent" />
            <div className="relative bg-gradient-to-b from-[hsl(0_0%_6%)] to-[hsl(0_0%_3%)] rounded-2xl p-8 md:p-12">
              <p className="text-gray-500 text-sm md:text-base line-through mb-3">R$ 147,00</p>
              <div className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs md:text-sm font-black uppercase">Oferta especial</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base mb-1">12x de</p>
              <p className="font-display font-black text-5xl md:text-7xl text-accent drop-shadow-[0_0_30px_hsl(24_100%_50%/0.5)]">
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
              <li key={i} className="card-glow rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-300">
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
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[hsl(24_100%_50%/0.15)] border border-accent/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <span className="text-[10px] md:text-xs text-gray-400 font-medium whitespace-pre-line text-center">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OfferSection;
