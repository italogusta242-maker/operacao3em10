import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UrgencySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-[hsl(0_100%_97%)]" id="urgencia">
      <div ref={ref} className={`container max-w-3xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="border-2 border-destructive/30 bg-card rounded-2xl p-8 md:p-10 text-center">
          <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />

          <h2 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-foreground mb-6">
            ⚠️ Esta Oferta Pode Sair do Ar a Qualquer Momento
          </h2>

          <p className="text-base md:text-lg text-foreground mb-4">
            Estou testando este preço promocional de <strong className="text-primary">R$ 47,00</strong> porque quero colocar o máximo de pessoas possível pra testar o protocolo.
          </p>

          <p className="text-base md:text-lg text-foreground mb-8">
            Mas assim que atingir a meta de <strong>500 novos membros</strong>, o preço volta para{" "}
            <strong className="text-destructive">R$ 147,00</strong>.
          </p>

          <div className="mb-3">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Vagas preenchidas</span>
              <span className="font-bold text-destructive">412/500</span>
            </div>
            <Progress value={82} className="h-3 bg-secondary [&>div]:bg-destructive" />
          </div>

          <p className="text-sm text-muted-foreground">
            Se você está lendo isso agora, a oferta ainda está ativa. Mas não sei por quanto tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
