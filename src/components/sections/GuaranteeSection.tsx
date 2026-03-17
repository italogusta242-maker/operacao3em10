import { Shield, ShieldCheck, RotateCcw, HelpCircle, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const badges = [
  { icon: ShieldCheck, label: "Garantia\nincondicional" },
  { icon: RotateCcw, label: "Reembolso\nem até 7 dias" },
  { icon: HelpCircle, label: "Sem\nperguntas" },
];

const GuaranteeSection = () => {
  return (
    <section className="relative overflow-hidden" id="garantia">
      <div className="section-divider" />
      <div className="py-12 md:py-16 bg-secondary relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(122_50%_40%/0.03),transparent_70%)]" />

        <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
          <Shield className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-4 md:mb-6 drop-shadow-[0_0_20px_hsl(24_100%_50%/0.4)]" />

          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground mb-4 md:mb-6">
            🛡️ <span className="text-accent text-glow-accent">Garantia blindada</span> de 7 dias
          </h2>

          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4">
              Eu sei que você já foi enganado(a) antes. Já comprou promessas que não funcionaram.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs md:text-base text-muted-foreground mb-6 md:mb-8">
              Por isso, estou colocando TODO o risco nas minhas costas:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="border-l-4 border-primary card-glow rounded-r-xl p-4 md:p-8 text-left mb-6 md:mb-8 flex gap-3">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0 mt-1" />
              <p className="text-sm md:text-lg text-foreground leading-relaxed">
                Se nos próximos <strong>7 dias</strong> você seguir o protocolo e, por <strong>QUALQUER motivo</strong>, não ficar satisfeito(a) com o resultado, você pede reembolso e recebe de volta <strong>cada centavo investido</strong>. Sem perguntas. Sem burocracia. Sem enrolação.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-sm md:text-lg font-semibold text-foreground mb-8 md:mb-10">
              Ou seja: você só mantém o investimento se <strong className="text-primary text-glow-primary">REALMENTE funcionar</strong> pra você.
            </p>
          </ScrollReveal>

          <div className="flex justify-center gap-6 md:gap-10">
            {badges.map(({ icon: Icon, label }, i) => (
              <ScrollReveal key={i} delay={i * 0.1 + 0.4}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-medium whitespace-pre-line text-center">{label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <div className="h-16 bg-gradient-to-b from-secondary to-background" />
    </section>
  );
};

export default GuaranteeSection;
