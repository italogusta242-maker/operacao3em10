import ScrollReveal from "@/components/ScrollReveal";

const PostScriptSection = () => {
  return (
    <section className="relative overflow-hidden" id="ps">
      <div className="section-divider" />
      <div className="py-8 md:py-12 bg-secondary">
        <div className="container max-w-2xl px-5">
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-muted-foreground italic leading-relaxed">
            <ScrollReveal>
              <p>
                <strong className="text-accent not-italic text-glow-accent">P.S.</strong> Lembra que eu falei sobre a diferença entre gordura e inflamação? Aqui está a verdade dura: se você não eliminar a inflamação acumulada AGORA, ela vai continuar travando seu metabolismo. E aí, mesmo que você comece uma dieta "normal" amanhã, seu corpo vai resistir. Você vai suar na academia, cortar carboidratos, passar fome... e o resultado vai ser LENTO e frustrante.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                O programa Menos 3kg em 10 dias é como "limpar a casa" antes de começar qualquer outra coisa. É o passo que 99% das pessoas pula, e por isso falham.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Não seja essa pessoa. Faça o reset. E veja o que acontece quando seu corpo FINALMENTE coopera com você.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                <strong className="text-accent not-italic text-glow-accent">P.P.S.</strong> Ainda em dúvida? Pensa assim: Se você investir R$ 47,00 e não funcionar, você pede reembolso em 7 dias e pronto. Você não perde NADA.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                Mas se você NÃO investir e continuar do jeito que está... quanto tempo mais você vai passar se sentindo pesado(a), inchado(a) e frustrado(a) com seu corpo?
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <p className="font-semibold text-foreground">
                A escolha é sua. Mas se fosse EU, eu já teria clicado no botão.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostScriptSection;
