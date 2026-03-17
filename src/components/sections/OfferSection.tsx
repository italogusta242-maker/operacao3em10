import { X, ShieldCheck, Clock, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CTAButton from "../CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";

const costs = [
  { label: "Uma consulta com nutricionista", price: "R$ 200-400" },
  { label: "Personal trainer por mês", price: "R$ 300-800" },
  { label: "Suplementos milagrosos", price: "R$ 150-300" },
  { label: "Semanas de frustração tentando sozinho", price: "Incalculável" },
];

const badges = [
  { icon: ShieldCheck, label: "Garantia\nincondicional" },
  { icon: Clock, label: "Acesso\nimediato" },
  { icon: Zap, label: "100%\ndigital" },
];

const OfferSection = () => {
  const [strikeVisible, setStrikeVisible] = useState(false);
  const strikeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = strikeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStrikeVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" id="oferta">
      <div className="section-divider" />
      <div className="py-8 md:py-12 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,hsl(24_100%_50%/0.06),transparent_70%)]" />

        <div className="container max-w-3xl text-center px-5 relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">
              <span className="text-accent text-glow-accent">Quanto vale</span> recuperar sua forma em <span className="text-primary text-glow-primary">10 dias</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 text-left">Pensa comigo:</p>
          </ScrollReveal>

          <div className="space-y-2 md:space-y-3 mb-2 md:mb-3 text-left">
            {costs.map(({ label, price }, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center justify-between gap-2 card-glow rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-xs md:text-base text-foreground/70">{label}</span>
                  </div>
                  <span className="text-xs md:text-base line-through text-muted-foreground whitespace-nowrap">{price}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-sm md:text-lg text-foreground/80 mt-6 md:mt-8 mb-2 leading-relaxed">
              Por menos de <strong className="text-accent text-glow-accent">R$ 5 por dia</strong>, o preço de um café, você tem acesso a um protocolo completo, testado por mais de 5.000 pessoas, que funciona.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10">
              Isso dá apenas <strong className="text-accent">R$ 4,70 por dia</strong> para transformar seu corpo.
            </p>
          </ScrollReveal>

          {/* Price card with rotating border */}
          <ScrollReveal>
            <div ref={strikeRef} className="relative inline-block mb-4 md:mb-6 w-full max-w-sm mx-auto rotating-border rounded-2xl">
              <div className="relative bg-gradient-to-b from-[hsl(0_0%_6%)] to-[hsl(0_0%_3%)] rounded-2xl p-8 md:p-12">
                <p className={`text-muted-foreground text-sm md:text-base mb-3 strike-animate ${strikeVisible ? "is-visible" : ""}`}>
                  R$ 147,00
                </p>
                <div className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-4 py-1.5 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs md:text-sm font-black uppercase">Oferta especial</span>
                </div>
                <p className="font-display font-black text-5xl md:text-7xl text-accent drop-shadow-[0_0_30px_hsl(24_100%_50%/0.5)]">
                  R$ 47<span className="text-2xl md:text-3xl">,00</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <CountdownTimer />

          <div className="mt-6 md:mt-8">
            <CTAButton
              text="QUERO COMEÇAR MINHA TRANSFORMAÇÃO"
              subtext="ACESSO IMEDIATO • GARANTIA DE 7 DIAS • PAGAMENTO 100% SEGURO"
              variant="accent"
              pulse
            />
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-6 md:gap-10 mt-8">
            {badges.map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-medium whitespace-pre-line text-center">{label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-background to-[hsl(0_0%_5%)]" />
    </section>
  );
};

export default OfferSection;
