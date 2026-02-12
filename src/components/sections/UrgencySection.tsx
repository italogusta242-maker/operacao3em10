import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "@/components/ScrollReveal";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-24 bg-[hsl(0_100%_97%)]" id="urgencia">
      <ScrollReveal className="container max-w-3xl px-5">
        <div className="border-2 border-destructive/30 bg-card rounded-2xl p-8 md:p-10 text-left">
          <AlertTriangle className="w-12 h-12 text-destructive mb-4" />

          <h2 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-foreground mb-6">
            ⚠️ Atenção: vagas limitadas
          </h2>

          <p className="text-base md:text-lg text-foreground mb-4">
            Essa operação tem como objetivo desinchar o corpo do maior número de pessoas. Porém, o valor promocional de <strong className="text-primary">R$ 47,00</strong> ficará disponível apenas para os primeiros <strong>2.000 membros</strong>.
          </p>

          <p className="text-base md:text-lg text-foreground mb-8">
            Assim que essa meta for alcançada, o valor subirá automaticamente para{" "}
            <strong className="text-destructive">R$ 147,00</strong>.
          </p>

          <div className="mb-3">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Vagas preenchidas</span>
              <span className="font-bold text-destructive">1.783/2.000</span>
            </div>
            <Progress value={89} className="h-3 bg-secondary [&>div]:bg-destructive" />
          </div>

          <p className="text-sm text-muted-foreground">
            Se você está lendo isso agora, a oferta ainda está ativa no valor promocional. Que poderá ser alterado a qualquer momento.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default UrgencySection;
