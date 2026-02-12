import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Mariana S.",
    result: "-3,2kg em 10 dias",
    text: "Eu não acreditava que era possível desinchar tão rápido sem passar fome. Seguindo o protocolo direitinho, vi resultado já no terceiro dia.",
  },
  {
    name: "Carlos R.",
    result: "-2,8kg em 10 dias",
    text: "Minha barriga estava estufada há meses. Em 10 dias, voltei a caber nas minhas calças sem sofrimento nenhum.",
  },
  {
    name: "Fernanda L.",
    result: "-3,5kg em 10 dias",
    text: "O shot matinal é incrível. Senti diferença na disposição logo na primeira semana. Recomendo demais.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary" id="depoimentos">
      <ScrollReveal className="container max-w-4xl px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          Quem já seguiu o protocolo fala por si
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Resultados reais de pessoas que seguiram a Operação 3 em 10
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map(({ name, result, text }, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-card border rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1">"{text}"</p>
                <div className="border-t pt-3">
                  <p className="font-display font-bold text-sm text-foreground">{name}</p>
                  <p className="text-xs font-bold text-primary">{result}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TestimonialsSection;
