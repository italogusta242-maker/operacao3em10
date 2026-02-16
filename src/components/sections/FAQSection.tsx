import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "Vou passar fome?",
    a: "NÃO. Este não é um protocolo de restrição calórica radical. Você vai comer 3-4 refeições por dia com alimentos REAIS. A saciedade vem da combinação inteligente de proteínas, gorduras boas e fibras.",
  },
  {
    q: "Preciso comprar ingredientes caros ou exóticos?",
    a: "NÃO. Tudo que você precisa está no supermercado comum. Nada de açaí em pó importado, spirulina orgânica ou queijo vegano gourmet. Comida de verdade, acessível.",
  },
  {
    q: "Vou recuperar tudo em 2 dias depois?",
    a: "NÃO se você seguir o Guia de Manutenção (que está INCLUSO). O protocolo te ensina a 'resetar' o corpo E a manter o resultado sem viver em dieta eterna.",
  },
  {
    q: "Preciso treinar todo dia?",
    a: "Sim. 30 minutos por dia é o suficiente. Faz sentido investir só esse pequeno tempo do seu dia para se sentir muito mais autoconfiante e bonito ao se olhar no espelho?",
  },
  {
    q: "Funciona pra homens E mulheres?",
    a: "SIM. A inflamação celular e o acúmulo de glicogênio funcionam da mesma forma em homens e mulheres. O protocolo é universalmente aplicável.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden" id="faq">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(122_40%_50%/0.03)] rounded-full blur-[100px]" />
      
      <ScrollReveal className="container max-w-3xl px-5 relative z-10">
        <h2 className="font-display font-extrabold text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-8 md:mb-10">
          Perguntas que você pode estar se fazendo agora:
        </h2>

        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 rounded-xl px-4 md:px-5 bg-card shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="font-display font-bold text-sm md:text-lg text-left hover:no-underline py-4 md:py-5">
                <span className="flex items-center gap-2">
                  <span className="text-accent">❓</span> {q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-foreground/80 leading-relaxed pb-4 md:pb-5">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </section>
  );
};

export default FAQSection;
