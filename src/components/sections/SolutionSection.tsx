import { Gift } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    num: "01",
    title: "Guia de Execução 10D",
    desc: "Você acorda e já sabe exatamente o que fazer. O que comer no café, no almoço, no jantar. Quando comer. O que treinar. Como fazer os exercícios. Zero adivinhação no treino e na alimentação. É só seguir o roteiro.",
  },
  {
    num: "02",
    title: "Lista de Compras Anti-Inflamatória",
    desc: "Antes de começar, você recebe a lista exata do que comprar. Tudo encontrado em supermercado comum. Nada de loja de produtos naturais, nada de importados. Você vai uma vez, compra tudo pros 10 dias, e não precisa pensar mais nisso.",
  },
  {
    num: "03",
    title: "Shot Matinal de Destrave",
    desc: "Todo dia, antes de comer qualquer coisa, você toma um shot de 3 ingredientes simples. Leva 2 minutos pra fazer. Esse shot acelera a desinflamação e faz você sentir a barriga menos inchada já nas primeiras manhãs.",
  },
  {
    num: "04",
    title: "Plataforma de Aulas Estilo Netflix",
    desc: "Aulas curtas e diretas ao ponto que te ensinam o método completo. Sem enrolação, sem teoria desnecessária. Você assiste, entende, e aplica. Acesso anual para reassistir quando quiser.",
  },
];

const bonuses = [
  {
    title: "Guia de Manutenção Pós-10 Dias",
    value: "R$ 47",
    desc: "Mostra exatamente como MANTER o peso perdido sem precisar seguir o protocolo pra sempre. Chega de efeito sanfona.",
  },
  {
    title: "Protocolo SOS Viagem/Evento",
    value: "R$ 37",
    desc: "Tem um evento daqui 3-5 dias e precisa desinchar urgente? Este protocolo acelerado mostra como fazer isso de forma segura. Perfeito para casamentos, formaturas ou aquela viagem de praia.",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden" id="solucao">
      <div className="section-divider" />
      <div className="py-12 md:py-16 bg-secondary">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,hsl(122_60%_50%/0.05),transparent_70%)]" />

        <div className="container max-w-4xl px-5 relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-2 md:mb-3">
              <span className="text-accent text-glow-accent">Como funciona</span> a Operação -3kg em 10
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-lg mb-3 md:mb-4 max-w-2xl mx-auto">
              Simples de entender. Fácil de seguir. Impossível de errar.
            </p>
            <p className="text-center text-foreground/80 text-sm md:text-base mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Você recebe um sistema completo de desinflamação e reset metabólico. Não é mais um PDF de dieta. É um método passo a passo que funciona mesmo pra quem nunca conseguiu seguir nada até o fim.
            </p>
          </ScrollReveal>

          {/* Products - single column with prominent glow numbers */}
          <div className="grid grid-cols-1 gap-4 md:gap-5 mb-8 md:mb-10">
            {products.map(({ num, title, desc }, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="card-glow rounded-xl p-5 md:p-6 hover:scale-[1.02] hover:!border-accent/40 transition-all">
                  <span
                    className="font-display font-black text-5xl md:text-6xl text-accent leading-none block mb-3"
                    style={{ textShadow: "0 0 20px rgba(255,107,0,0.8)" }}
                  >
                    {num}
                  </span>
                  <h4 className="font-display font-bold text-sm md:text-lg text-foreground mb-2">{title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing text for items */}
          <ScrollReveal>
            <p className="text-center font-display font-bold text-base md:text-xl text-foreground mb-8 md:mb-10">
              Resumindo: você recebe o mapa completo. Só precisa seguir o caminho.
            </p>
          </ScrollReveal>

          {/* Bonus header */}
          <ScrollReveal>
            <h3 className="text-center font-display font-black text-lg md:text-2xl text-foreground mb-6 md:mb-8">
              E ainda separei 2 bônus <span className="text-accent text-glow-accent">SURREAIS</span> pra você.
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto">
            {bonuses.map(({ title, value, desc }, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative card-glow !border-accent/30 rounded-xl overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[hsl(24_100%_50%/0.1)] to-transparent" />
                  <div className="relative p-5 md:p-6">
                    <div className="inline-flex items-center gap-1.5 border border-accent/40 rounded-full px-3 py-1 mb-4">
                      <Gift className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] md:text-xs font-bold text-accent uppercase">Bônus #{i + 1}</span>
                    </div>
                    <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-2">{title}</h4>
                    <p className="text-xs md:text-sm text-accent mb-3">(Valor: {value})</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-secondary to-background" />
    </section>
  );
};

export default SolutionSection;
