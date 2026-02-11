import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    a: "NÃO. O protocolo funciona SEM exercício físico. Se você QUISER adicionar atividade física, ótimo — vai acelerar. Mas não é obrigatório pra eliminar os 3kg de inchaço.",
  },
  {
    q: "Funciona pra homens E mulheres?",
    a: "SIM. A inflamação celular e o acúmulo de glicogênio funcionam da mesma forma em homens e mulheres. O protocolo é universalmente aplicável.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-background" id="faq">
      <div ref={ref} className={`container max-w-3xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-10">
          Perguntas que você pode estar se fazendo agora:
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card shadow-sm">
              <AccordionTrigger className="font-display font-bold text-base md:text-lg text-left hover:no-underline py-5">
                <span className="flex items-center gap-2">
                  <span className="text-destructive">❓</span> {q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pb-5">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
