import { Check, Flame, Droplets, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const painPoints = [
  "Sua roupa favorita não fechou (ou fechou, mas você se sentiu desconfortável o dia inteiro)",
  "Olhou no espelho e viu um rosto inchado, uma barriga estufada que NÃO estava ali 10 dias atrás",
  "Sentiu aquela sensação de 'peso', 'inchaço' e culpa por estar insatisfeito(a) com seu corpo",
  "E pensou: 'Pronto, agora vou ter que passar 3 meses na academia e comendo só salada pra voltar ao normal'",
];

const cards = [
  { icon: Flame, title: ["Inflamação", "Celular"], desc: "Suas células retêm líquido e toxinas metabólicas", gradient: "from-red-500 to-orange-500" },
  { icon: Droplets, title: ["Retenção", "Líquida"], desc: "Excesso de sódio e carboidratos seguram água no seu corpo", gradient: "from-orange-500 to-amber-500" },
  { icon: Zap, title: ["Glicogênio", "Estocado"], desc: "Reservas de glicose lotadas travando seu metabolismo", gradient: "from-amber-500 to-yellow-500" },
];

const PainSection = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary" id="dor">
      <ScrollReveal className="container max-w-3xl px-5">
        <h3 className="font-display font-bold text-lg md:text-2xl text-foreground mb-6 md:mb-8">Se você acordou hoje e:</h3>

        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
          {painPoints.map((p, i) => (
            <li key={i} className="flex gap-3 items-start">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-1" />
              <span className="text-sm md:text-lg text-foreground/90">{p}</span>
            </li>
          ))}
        </ul>

        <p className="text-base md:text-xl font-semibold text-foreground mb-2">
          Então preciso que você pare tudo e leia isso com <strong>MUITA atenção</strong>.
        </p>
        <p className="text-base md:text-xl text-foreground mb-4">
          Porque o que você está sentindo agora <strong className="text-destructive">NÃO é gordura acumulada</strong>.
        </p>
        <p className="text-base md:text-xl font-semibold text-foreground mb-8 md:mb-10">
          É o conjunto de <strong className="text-destructive">3 elementos</strong>:
        </p>

        <div className="grid sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
          {cards.map(({ icon: Icon, title, desc, gradient }, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-2xl p-4 md:p-6 text-center h-full shadow-lg shadow-destructive/5 transition-transform hover:scale-[1.02]">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md`}>
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <h4 className="font-display font-bold text-sm md:text-base text-destructive">{title[0]}<br />{title[1]}</h4>
                </div>
                <p className="text-xs md:text-sm text-foreground/70">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-base md:text-xl text-center font-semibold text-foreground">
          E tudo isso pode ser eliminado em <strong className="text-primary">10 dias</strong> com o protocolo certo.
        </p>
      </ScrollReveal>

      {/* Visual divider - pattern break */}
      <div className="mt-12 md:mt-16 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <div className="w-2 h-2 rounded-full bg-primary/50" />
        <div className="w-3 h-3 rounded-full bg-primary" />
        <div className="w-2 h-2 rounded-full bg-primary/50" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
    </section>
  );
};

export default PainSection;
