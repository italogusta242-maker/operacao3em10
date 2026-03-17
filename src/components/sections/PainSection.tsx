import { Droplets, Flame, Zap, HeartPulse } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const elements = [
  { icon: Droplets, label: "Retenção de líquido" },
  { icon: Flame, label: "Inchaço crônico" },
  { icon: Zap, label: "Glicogênio acumulado" },
  { icon: HeartPulse, label: "Intestino sobrecarregado" },
];

const PainSection = () => {
  return (
    <section className="relative overflow-hidden" id="dor">
      <div className="section-divider" />
      <div className="py-8 md:py-12 bg-secondary">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,hsl(0_80%_50%/0.06),transparent_70%)]" />

        <div className="container max-w-3xl px-5 relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground mb-6 md:mb-8">
              <span className="text-accent text-glow-accent">Você sabia</span> que boa parte do peso que te incomoda não é gordura?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
              Parece loucura, mas é verdade. Aquele número na balança que te frustra, aquela barriga que não abaixa, aquela sensação de estar estufado o tempo todo... Na maioria dos casos, o problema é: <strong className="text-accent text-glow-accent">seu corpo está inflamado</strong>.
            </p>
          </ScrollReveal>

          {/* Element cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {elements.map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={i} delay={i * 0.1 + 0.2}>
                <div className="card-glow rounded-xl p-3 md:p-4 text-center h-full hover:!border-accent/40 transition-all">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-destructive to-accent flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_hsl(24_100%_50%/0.3)]">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <p className="text-xs md:text-sm font-bold text-accent">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-sm md:text-lg text-foreground/80 leading-relaxed">
              E a boa notícia? Isso pode ser revertido em poucos dias, se você souber exatamente o que fazer.
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-secondary to-[hsl(0_0%_2%)]" />
    </section>
  );
};

export default PainSection;
