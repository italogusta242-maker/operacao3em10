import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const mistakes = [
  "Cortar carboidratos radicalmente",
  "Fazer jejum intermitente sem orientação",
  "Voltar pra academia todo dia de manhã",
  "Tomar sucos 'detox' milagrosos que não funcionam",
];

const ErrorSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background" id="erro">
      <ScrollReveal className="container max-w-3xl px-5">
        <h2 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-6 md:mb-8">
          Por que dietas tradicionais falham nos primeiros 10 dias?
        </h2>

        <h3 className="font-display font-bold text-base md:text-xl mb-4 md:mb-6 text-foreground">Você já deve ter tentado:</h3>

        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
          {mistakes.map((m, i) => (
            <li key={i} className="flex items-start gap-3">
              <X className="w-4 h-4 md:w-5 md:h-5 text-destructive shrink-0 mt-1" />
              <span className="text-sm md:text-lg text-foreground/90">{m}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm md:text-lg text-foreground mb-2">E sabe o que aconteceu?</p>
        <p className="text-sm md:text-lg text-foreground mb-6 md:mb-8">
          Você ficou com fome. Perdeu energia. Ficou irritado(a). E no terceiro dia... <strong>desistiu</strong>.
        </p>

        <div className="border-l-4 border-accent bg-[hsl(30_100%_96%)] rounded-r-lg p-4 md:p-8">
          <p className="text-sm md:text-lg text-foreground leading-relaxed">
            O problema <strong>não foi falta de força de vontade</strong>. O problema é que seu corpo estava lutando contra a{" "}
            <strong className="text-accent">INFLAMAÇÃO</strong>, não contra a gordura.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ErrorSection;
