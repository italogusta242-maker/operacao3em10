import { ShieldCheck, Flame, RotateCcw, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(210_79%_95%)] to-[hsl(122_39%_94%)]" id="como-funciona">
      <div ref={ref} className={`container max-w-3xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          O Protocolo de Esvaziamento de Glicogênio e Desinflamação Celular
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-6">Aqui está a verdade que ninguém te contou:</p>

        <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
          Quando você exagera no álcool, açúcar e carboidratos refinados, seu corpo entra em um estado de <strong>inflamação aguda</strong>. Suas células ficam 'inchadas' de líquido, glicose e toxinas metabólicas.
        </p>
        <p className="text-base md:text-lg text-foreground mb-10 leading-relaxed">
          Você <strong className="text-destructive">NÃO</strong> acumulou 3kg de gordura pura em 4 dias. Você acumulou <strong>lixo metabólico</strong> que está travando seu metabolismo.
        </p>

        <h3 className="font-display font-bold text-xl md:text-2xl text-center mb-10">
          E é Exatamente Por Isso Que o Reset Funciona:
        </h3>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 space-y-8 mb-10">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-primary/30" />

          {steps.map(({ icon: Icon, days, title, desc }, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-5 md:-left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="bg-card rounded-xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{days}</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-1">{title}</h4>
                <p className="text-muted-foreground text-sm md:text-base">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Result box */}
        <div className="bg-[hsl(122_39%_94%)] border-2 border-primary/30 rounded-xl p-6 flex gap-3 items-start">
          <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <p className="text-base md:text-lg font-semibold text-foreground">
            <strong>RESULTADO:</strong> Você não precisa de 3 meses de dieta. Você precisa de <strong className="text-primary">10 dias de estratégia bioquímica inteligente</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
