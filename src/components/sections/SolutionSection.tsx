import { FileText, ShoppingCart, Coffee, MonitorPlay, Gift, Smartphone, Monitor } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import mockupPlataforma from "@/assets/mockup-plataforma.png";

const products = [
  {
    icon: FileText,
    title: "Guia de Execução 10D",
    desc: "O roteiro dia a dia do que comer, quando comer e como preparar. Sem receitas complicadas. Sem ingredientes caros. Tudo direto ao ponto.",
  },
  {
    icon: ShoppingCart,
    title: "Lista de Compras Anti-Inflamatória",
    desc: "Exatamente o que comprar no supermercado comum, nada de loja de produtos naturais ou importados, para os 10 dias.",
  },
  {
    icon: Coffee,
    title: "Shot Matinal de Destrave",
    desc: "Uma receita simples de 3 ingredientes que você toma em jejum para acelerar a desinflamação. Leva 2 minutos.",
  },
  {
    icon: MonitorPlay,
    title: "Plataforma de aulas estilo Netflix",
    desc: "Aulas curtas e diretas ao ponto para te ensinar tudo que você precisa saber para nunca mais ficar refém de reações metabólicas.",
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
  return (
    <section className="py-16 md:py-24 bg-background" id="solucao">
      <ScrollReveal className="container max-w-4xl px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          Apresentando: <span className="text-primary">Operação -3kg em 10</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
          Este não é apenas "mais um PDF de dieta". É um sistema completo de eliminação de inflamação e reset metabólico.
        </p>
        <p className="text-center font-display font-bold text-xl md:text-2xl mb-10">
          Aqui está TUDO o que você recebe:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {products.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-secondary rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-display font-bold text-base mb-2 flex items-start gap-1">
                  <span className="text-primary">✅</span> {title}
                </h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mockup da plataforma */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden mb-14 py-8 md:py-10 px-5">
            {/* Blur laranja de fundo */}
            <div className="absolute inset-0 bg-[hsl(30_100%_96%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[100px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase">+</span>
                <Monitor className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                Acesse de qualquer lugar, a qualquer hora
              </h3>
              <p className="text-sm md:text-base text-foreground/80 max-w-xl mb-6 leading-relaxed">
                A plataforma funciona no celular e no computador. Assista às aulas e acompanhe seu progresso de onde estiver.
              </p>
              <img 
                src={mockupPlataforma} 
                alt="Plataforma Operação -3kg em 10 disponível no celular e computador" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="w-20 h-0.5 bg-accent mx-auto mb-10" />

        <h3 className="font-display font-bold text-xl md:text-2xl text-center mb-8">
          E como bônus exclusivo:
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          {bonuses.map(({ title, value, desc }, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="border-2 border-accent bg-[hsl(30_100%_96%)] rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-accent" />
                  <span className="text-xs font-bold text-accent uppercase">Bônus #{i + 1}</span>
                </div>
                <h4 className="font-display font-bold text-base mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground mb-2">(Valor: {value})</p>
                <p className="text-sm text-foreground/80">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;
