import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const mistakes = [
  "Começa uma dieta super restritiva que não aguenta por 3 dias",
  "Passa horas na esteira achando que vai queimar tudo",
  "Fica se culpando e acaba desistindo de tudo",
  "Tenta um detox milagroso que só causa mais frustração",
];

const ErrorSection = () => {
  return (
    <section className="relative overflow-hidden" id="erro">
      <div className="section-divider" />
      <div className="py-12 md:py-16 bg-[hsl(0_0%_2%)]">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,hsl(24_100%_50%/0.05),transparent_70%)]" />

        <ScrollReveal className="container max-w-3xl px-5 relative z-10">
          <h3 className="font-display font-bold text-base md:text-xl mb-4 md:mb-6 text-foreground">
            O problema é que a maioria das pessoas, quando quer emagrecer, entra em desespero e faz exatamente o que <span className="text-accent text-glow-accent">NÃO</span> deveria fazer:
          </h3>

          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {mistakes.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-destructive shrink-0 mt-1" />
                  <span className="text-sm md:text-lg text-foreground/80">{m}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <div className="border-l-4 border-accent card-glow rounded-r-lg p-4 md:p-8">
            <p className="text-sm md:text-lg text-foreground leading-relaxed">
              <strong className="text-accent text-glow-accent">Resultado?</strong> Semanas se passam, o peso não sai, a motivação acaba, e você continua se sentindo inchado e travado.
            </p>
          </div>
        </ScrollReveal>
      </div>
      {/* Section transition gradient */}
      <div className="h-16 bg-gradient-to-b from-[hsl(0_0%_2%)] to-secondary" />
    </section>
  );
};

export default ErrorSection;
