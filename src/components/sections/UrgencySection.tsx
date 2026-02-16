import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState, useRef } from "react";

const TARGET_VALUE = 1783;
const MAX_VALUE = 2000;
const PERCENTAGE = Math.round((TARGET_VALUE / MAX_VALUE) * 100);

const UrgencySection = () => {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * PERCENTAGE));
      setCount(Math.round(eased * TARGET_VALUE));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[hsl(0_100%_98%)] to-[hsl(0_80%_96%)] relative overflow-hidden" id="urgencia">
      <div className="absolute top-0 right-0 w-60 h-60 bg-[hsl(0_80%_50%/0.04)] rounded-full blur-[100px]" />
      
      <ScrollReveal className="container max-w-3xl px-5 relative z-10">
        <div className="border-2 border-destructive/20 bg-card rounded-2xl p-5 md:p-10 text-left shadow-lg shadow-destructive/5">
          <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-destructive mb-3 md:mb-4" />

          <h2 className="font-display font-extrabold text-lg md:text-2xl lg:text-3xl text-foreground mb-4 md:mb-6">
            ⚠️ Atenção: vagas limitadas
          </h2>

          <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4">
            Essa operação tem como objetivo desinchar o corpo do maior número de pessoas. Porém, o valor promocional de <strong className="text-primary">R$ 47,00</strong> ficará disponível apenas para os primeiros <strong>2.000 membros</strong>.
          </p>

          <p className="text-sm md:text-lg text-foreground mb-6 md:mb-8">
            Assim que essa meta for alcançada, o valor subirá automaticamente para{" "}
            <strong className="text-destructive">R$ 147,00</strong>.
          </p>

          <div className="mb-3" ref={ref}>
            <div className="flex justify-between text-xs md:text-sm text-muted-foreground mb-2">
              <span>Vagas preenchidas</span>
              <span className="font-bold text-destructive tabular-nums">
                {count.toLocaleString("pt-BR")}/2.000
              </span>
            </div>
            <Progress value={progress} className="h-2.5 md:h-3 bg-secondary [&>div]:bg-destructive [&>div]:transition-all [&>div]:duration-100" />
          </div>

          <p className="text-xs md:text-sm text-muted-foreground">
            Se você está lendo isso agora, a oferta ainda está ativa no valor promocional. Que poderá ser alterado a qualquer momento.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default UrgencySection;
