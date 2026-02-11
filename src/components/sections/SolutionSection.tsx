import { FileText, ShoppingCart, Coffee, Gift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: FileText,
    title: "Guia de Execução 10D",
    desc: "O roteiro dia a dia do que comer, quando comer e como preparar. Sem receitas complicadas. Sem ingredientes caros. Tudo direto ao ponto.",
  },
  {
    icon: ShoppingCart,
    title: "Lista de Compras Anti-Inflamatória",
    desc: "Exatamente o que comprar no supermercado comum — nada de loja de produtos naturais ou importados — para os 10 dias.",
  },
  {
    icon: Coffee,
    title: "Shot Matinal de Destrave",
    desc: "Uma receita simples de 3 ingredientes que você toma em jejum para acelerar a desinflamação. Leva 2 minutos.",
  },
];

const bonuses = [
  {
    title: "Guia de Manutenção Pós-10 Dias",
    value: "R$ 47",
    desc: "Mostra exatamente como MANTER o peso perdido sem precisar seguir o protocolo pra sempre.",
  },
  {
    title: "Protocolo SOS Viagem/Evento",
    value: "R$ 37",
    desc: "Tem um evento daqui 3-5 dias e precisa desinchar urgente? Este protocolo acelerado mostra como fazer isso de forma segura.",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-background" id="solucao">
      <div ref={ref} className={`container max-w-4xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          Apresentando: <span className="text-primary">O Protocolo Reset 10D</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
          Este não é apenas "mais um PDF de dieta". É um sistema completo de eliminação de inflamação e reset metabólico.
        </p>
        <p className="text-center font-display font-bold text-xl md:text-2xl mb-10">
          Aqui Está TUDO o Que Você Recebe:
        </p>

        {/* Products grid */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {products.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-secondary rounded-xl p-6 hover:shadow-md transition-shadow">
              <Icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-display font-bold text-base mb-2 flex items-start gap-1">
                <span className="text-primary">✅</span> {title}
              </h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-20 h-0.5 bg-accent mx-auto mb-10" />

        <h3 className="font-display font-bold text-xl md:text-2xl text-center mb-8">
          E Como Bônus Exclusivo:
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          {bonuses.map(({ title, value, desc }, i) => (
            <div key={i} className="border-2 border-accent bg-[hsl(30_100%_96%)] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-6 h-6 text-accent" />
                <span className="text-xs font-bold text-accent uppercase">Bônus #{i + 1}</span>
              </div>
              <h4 className="font-display font-bold text-base mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground mb-2">(Valor: {value})</p>
              <p className="text-sm text-foreground/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
