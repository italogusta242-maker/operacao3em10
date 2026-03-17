import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "Vou passar fome?",
    a: "Não. O protocolo inclui um plano alimentar completo com refeições satisfatórias. Você vai comer, só que de forma estratégica para desinchar e acelerar o metabolismo.",
  },
  {
    q: "Preciso ir pra academia?",
    a: "Os treinos do protocolo são curtos e intensos. Podem ser feitos em casa ou na academia — você escolhe. O importante é seguir o método.",
  },
  {
    q: "Quanto tempo por dia preciso dedicar?",
    a: "Os treinos duram entre 30-45 minutos. A preparação das refeições é simples e prática. No total, você vai investir cerca de 1 hora por dia na sua transformação.",
  },
  {
    q: "Funciona pra quem tem mais de 40 anos?",
    a: "Sim! O protocolo é baseado em princípios fisiológicos que funcionam em qualquer idade. O metabolismo pode ser mais lento, mas o método compensa isso.",
  },
  {
    q: "E se eu tiver restrição alimentar?",
    a: "O plano alimentar inclui substituições para as principais restrições — lactose, glúten, etc. Se você tiver uma condição específica, sempre consulte seu médico.",
  },
  {
    q: "Vou ter efeito sanfona?",
    a: "O Bônus 1 — Guia de Manutenção Pós-10 Dias — existe exatamente para evitar isso. Ele ensina como manter os resultados sem precisar seguir o protocolo pra sempre.",
  },
  {
    q: "É diferente de outras dietas que já tentei?",
    a: "Sim. O foco aqui não é fazer dieta — é desinflamar seu corpo de forma estratégica. Por isso funciona tão rápido e sem sofrimento.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, você recebe o acesso completo no seu email. Pode começar hoje mesmo.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden" id="faq">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-background">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[radial-gradient(circle,hsl(24_100%_50%/0.04),transparent_70%)]" />

        <div className="container max-w-3xl px-5 relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-8 md:mb-10">
              <span className="text-accent text-glow-accent">Perguntas</span> que você pode estar se fazendo agora:
            </h2>
          </ScrollReveal>

          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map(({ q, a }, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <AccordionItem value={`faq-${i}`} className="card-glow rounded-xl px-4 md:px-5 hover:!border-accent/40 hover:!bg-[hsl(0_0%_7%)] transition-all duration-300">
                  <AccordionTrigger className="font-display font-bold text-sm md:text-lg text-left hover:no-underline py-4 md:py-5 [&[data-state=open]>span>span.faq-icon]:rotate-45">
                    <span className="flex items-center gap-2">
                      <span className="text-accent text-lg faq-icon transition-transform duration-300">❓</span> {q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-foreground/70 leading-relaxed pb-4 md:pb-5">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-background to-secondary" />
    </section>
  );
};

export default FAQSection;
