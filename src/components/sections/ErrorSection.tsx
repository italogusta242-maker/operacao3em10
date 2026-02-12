import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const mistakes = [
  "Cortar carboidratos radicalmente",
  "Fazer jejum intermitente sem orientação",
  "Voltar pra academia todo dia às 5h da manhã",
  "Tomar sucos 'detox' milagrosos que não funcionam",
];

const ErrorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="erro">
      <ScrollReveal className="container max-w-3xl px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-8">
          Por que dietas tradicionais falham nos primeiros 10 dias?
        </h2>

        <h3 className="font-display font-bold text-lg md:text-xl mb-6 text-foreground">Você já deve ter tentado:</h3>

        <ul className="space-y-3 mb-8">
          {mistakes.map((m, i) => (
            <li key={i} className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
              <span className="text-base md:text-lg text-foreground/90">{m}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-foreground mb-2">E sabe o que aconteceu?</p>
        <p className="text-lg text-foreground mb-8">
          Você ficou com fome. Perdeu energia. Ficou irritado(a). E no terceiro dia... <strong>desistiu</strong>.
        </p>

        <div className="border-l-4 border-accent bg-[hsl(30_100%_96%)] rounded-r-lg p-6 md:p-8">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            O problema <strong>não foi falta de força de vontade</strong>. O problema é que seu corpo estava lutando contra a{" "}
            <strong className="text-accent">INFLAMAÇÃO</strong>, não contra a gordura.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ErrorSection;
