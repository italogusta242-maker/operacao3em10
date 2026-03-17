import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTASection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-[hsl(122_50%_12%)] to-[hsl(122_60%_18%)] text-foreground relative overflow-hidden" id="cta-final">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[hsl(122_60%_50%/0.06)] rounded-full blur-[150px]" />
      
      <ScrollReveal className="container max-w-4xl text-center px-5 relative z-10">
        <h2 className="font-display font-extrabold text-xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-white">
          Você tem duas opções agora:
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <ScrollReveal delay={0.1}>
            <div className="bg-[hsl(0_0%_100%/0.05)] backdrop-blur-sm rounded-xl p-5 md:p-8 border border-[hsl(0_0%_100%/0.1)] text-left h-full transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.08)]">
              <X className="w-6 h-6 md:w-8 md:h-8 text-destructive mb-3 md:mb-4" />
              <h3 className="font-display font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Opção 1:</h3>
              <p className="text-[hsl(0_0%_100%/0.7)] text-xs md:text-base leading-relaxed">
                Fechar esta página e continuar lutando sozinho(a) contra o inchaço, a roupa apertada e a culpa. Tentar mais uma "dieta milagrosa" que vai te fazer passar fome e desistir em 3 dias.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="bg-[hsl(0_0%_100%/0.1)] backdrop-blur-sm rounded-xl p-5 md:p-8 border-2 border-primary/40 text-left h-full transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.13)] shadow-[0_0_30px_hsl(122_60%_50%/0.1)]">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
              <h3 className="font-display font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Opção 2:</h3>
              <p className="text-[hsl(0_0%_100%/0.8)] text-xs md:text-base leading-relaxed">
                Investir menos que um jantar fora e ter acesso IMEDIATO a um protocolo que já ajudou centenas de pessoas a eliminarem até 3kg de inchaço em 10 dias.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <p className="font-display font-bold text-lg md:text-2xl mb-8 md:mb-10 text-white">
          Qual opção faz mais sentido pra você?
        </p>

      </ScrollReveal>
    </section>
  );
};

export default FinalCTASection;
