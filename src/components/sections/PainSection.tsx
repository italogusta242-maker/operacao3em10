import { Check, Flame, Droplets, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
"Sua roupa favorita não fechou (ou fechou, mas você se sentiu desconfortável o dia inteiro)",
"Olhou no espelho e viu um rosto inchado, uma barriga estufada que NÃO estava ali 10 dias atrás",
"Sentiu aquela sensação de 'peso', 'inchaço' e culpa que parece não sair de jeito nenhum",
"E pensou: 'Pronto, agora vou ter que passar 3 meses na academia e comendo alface pra voltar ao normal'"];


const cards = [
{ icon: Flame, title: ["Inflamação", "Celular"], desc: "Suas células retêm líquido e toxinas metabólicas" },
{ icon: Droplets, title: ["Retenção", "Líquida"], desc: "Excesso de sódio e carboidratos seguram água no seu corpo" },
{ icon: Zap, title: ["Glicogênio", "Estocado"], desc: "Reservas de glicose lotadas travando seu metabolismo" }];


const PainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-secondary" id="dor">
      <div ref={ref} className={`container max-w-3xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-8">Se você acordou hoje e:</h3>

        <ul className="space-y-4 mb-10">
          {painPoints.map((p, i) =>
          <li key={i} className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-base md:text-lg text-foreground/90">{p}</span>
            </li>
          )}
        </ul>

        <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
          Então preciso que você pare tudo e leia isso com <strong>MUITA atenção</strong>.
        </p>
        <p className="text-lg md:text-xl text-foreground mb-10">
          Porque o que você está sentindo agora <strong className="text-destructive">NÃO é gordura acumulada</strong>.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {cards.map(({ icon: Icon, title, desc }, i) =>
          <div key={i} className={`bg-destructive/10 border-2 border-destructive/30 rounded-xl p-6 text-center ${isVisible ? `animate-fade-up animation-delay-${(i + 1) * 200}` : "opacity-0"}`}>
              <div className="w-14 h-14 rounded-full bg-destructive/15 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-7 h-7 text-destructive" />
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                
                <h4 className="font-display font-bold text-base text-destructive">{title[0]}<br />{title[1]}</h4>
              </div>
              <p className="text-sm text-foreground/70">{desc}</p>
            </div>
          )}
        </div>

        <p className="text-lg md:text-xl text-center font-semibold text-foreground">
          E tudo isso pode ser eliminado em <strong className="text-primary">10 dias</strong> com o protocolo certo.
        </p>
      </div>
    </section>);

};

export default PainSection;