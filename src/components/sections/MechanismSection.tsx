import { ShieldCheck, Flame, RotateCcw, Lightbulb, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const solutionBullets = [
  "Eliminar o líquido retido que está te deixando inchado",
  "Esvaziar os estoques de glicogênio que pesam na balança",
  "Acelerar seu metabolismo para queimar mais o dia todo",
  "Desinchar a barriga visivelmente em poucos dias",
  "Te dar mais energia e disposição — não menos!",
];

const steps = [
  {
    icon: ShieldCheck,
    days: "DIAS 1-3",
    title: "Liberação de líquido retido",
    desc: "Seu corpo começa a liberar líquido retido. Você acorda menos inchado e a balança já mostra diferença.",
  },
  {
    icon: Flame,
    days: "DIAS 4-7",
    title: "Barriga murchando",
    desc: "A barriga começa a murchar visivelmente. Suas roupas já ficam mais confortáveis.",
  },
  {
    icon: RotateCcw,
    days: "DIAS 8-10",
    title: "Resultado visível",
    desc: "Você olha no espelho e vê a diferença. A balança confirma -3kg ou mais. Você está no caminho certo.",
  },
];

const MechanismSection = () => {
  return (
    <section className="relative overflow-hidden" id="como-funciona">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-secondary">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(122_60%_50%/0.06),transparent_70%)]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[radial-gradient(circle,hsl(24_100%_50%/0.04),transparent_70%)]" />

        <ScrollReveal className="container max-w-3xl px-5 relative z-10">
          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-2 md:mb-3">
            <span className="text-accent text-glow-accent">Existe um caminho</span> mais inteligente
          </h2>
          <p className="text-center text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">O Protocolo de Desinflamação Rápida</p>

          <p className="text-sm md:text-lg text-foreground leading-relaxed mb-6 md:mb-8">
            Em vez de lutar contra o seu corpo, você vai trabalhar <strong>COM</strong> ele. O protocolo Operação -3kg em 10 usa uma combinação estratégica de <strong className="text-accent">alimentação anti-inflamatória + treinos curtos e intensos</strong> para:
          </p>

          {/* Solution bullets */}
          <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
            {solutionBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-12 space-y-6 md:space-y-8 mb-8 md:mb-10">
            <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 via-accent/30 to-accent/10" />

            {steps.map(({ icon: Icon, days, title, desc }, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative">
                  <div className="absolute -left-5 md:-left-7 top-1 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-[0_0_12px_hsl(24_100%_50%/0.5)]" />
                  <div className="card-glow rounded-xl p-4 md:p-6 hover:border-accent/40 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      <span className="text-xs font-black uppercase tracking-wider text-accent text-glow-accent">{days}</span>
                    </div>
                    <h4 className="font-display font-bold text-base md:text-lg mb-1">{title}</h4>
                    <p className="text-muted-foreground text-xs md:text-base">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Result box */}
          <div className="card-glow border-2 !border-accent/30 rounded-xl p-4 md:p-6 flex gap-3 items-start shadow-[0_0_25px_hsl(24_100%_50%/0.1)]">
            <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-0.5" />
            <p className="text-sm md:text-lg font-semibold text-foreground">
              <strong className="text-accent text-glow-accent">RESULTADO:</strong> Você não precisa de 3 meses de dieta. Você precisa de <strong className="text-primary text-glow-primary">10 dias de estratégia bioquímica inteligente</strong>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MechanismSection;
