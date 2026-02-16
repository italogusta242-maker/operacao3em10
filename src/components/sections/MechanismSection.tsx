import { ShieldCheck, Flame, RotateCcw, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: ShieldCheck,
    days: "DIAS 1-3",
    title: "Choque Anti-Inflamatório",
    desc: "Eliminação radical de alimentos que perpetuam a inflamação. Seu corpo para de 'estocar líquido' e começa a expelir o excesso.",
  },
  {
    icon: Flame,
    days: "DIAS 4-7",
    title: "Esvaziamento de Glicogênio",
    desc: "Seu corpo queima as reservas de glicose acumuladas nos músculos e fígado. Resultado? Até 2kg a menos na balança (sem passar fome).",
  },
  {
    icon: RotateCcw,
    days: "DIAS 8-10",
    title: "Reset Metabólico",
    desc: "Você ensina seu corpo a funcionar de forma eficiente novamente, evitando o 'efeito rebote' que acontece em dietas radicais.",
  },
];

const MechanismSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-[hsl(210_60%_96%)] via-[hsl(160_30%_95%)] to-[hsl(122_35%_93%)] relative overflow-hidden" id="como-funciona">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[hsl(122_50%_50%/0.06)] rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[hsl(210_80%_50%/0.05)] rounded-full blur-[80px]" />
      
      <ScrollReveal className="container max-w-3xl px-5 relative z-10">
        <h2 className="font-display font-extrabold text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-3 md:mb-4">
          O protocolo de esvaziamento de glicogênio e <span className="text-gradient-primary">desinflamação celular</span>
        </h2>
        <p className="text-center text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">Aqui está a verdade que ninguém te contou:</p>

        <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4 leading-relaxed">
          Quando você exagera no álcool, açúcar e carboidratos refinados, seu corpo entra em um estado de <strong>inflamação aguda</strong>. Suas células ficam 'inchadas' de líquido, glicose e toxinas metabólicas.
        </p>
        <p className="text-sm md:text-lg text-foreground mb-8 md:mb-10 leading-relaxed">
          Você <strong className="text-destructive">NÃO</strong> acumulou 3kg de gordura pura em 4 dias. Você acumulou <strong>lixo metabólico</strong> que está travando seu metabolismo.
        </p>

        <h3 className="font-display font-bold text-lg md:text-2xl text-center mb-8 md:mb-10">
          E é exatamente por isso que o reset funciona:
        </h3>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 space-y-6 md:space-y-8 mb-8 md:mb-10">
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          {steps.map(({ icon: Icon, days, title, desc }, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative">
                <div className="absolute -left-5 md:-left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md shadow-primary/20" />
                <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{days}</span>
                  </div>
                  <h4 className="font-display font-bold text-base md:text-lg mb-1">{title}</h4>
                  <p className="text-muted-foreground text-xs md:text-base">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Result box */}
        <div className="bg-gradient-to-r from-[hsl(122_40%_94%)] to-[hsl(122_30%_96%)] border-2 border-primary/25 rounded-xl p-4 md:p-6 flex gap-3 items-start shadow-sm">
          <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-0.5" />
          <p className="text-sm md:text-lg font-semibold text-foreground">
            <strong>RESULTADO:</strong> Você não precisa de 3 meses de dieta. Você precisa de <strong className="text-primary">10 dias de estratégia bioquímica inteligente</strong>.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default MechanismSection;
