import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden" id="cta-final">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(24_100%_50%/0.08),transparent_70%)]" />
        
        <ScrollReveal className="container max-w-4xl text-center px-5 relative z-10">
          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-white">
            <span className="text-accent text-glow-accent">Você tem duas opções</span> agora:
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <ScrollReveal delay={0.1}>
              <div className="card-glow rounded-xl p-5 md:p-8 text-left h-full hover:!border-destructive/30">
                <X className="w-6 h-6 md:w-8 md:h-8 text-destructive mb-3 md:mb-4" />
                <h3 className="font-display font-black text-base md:text-lg mb-2 md:mb-3 text-white">Opção 1:</h3>
                <p className="text-gray-400 text-xs md:text-base leading-relaxed">
                  Fechar esta página e continuar lutando sozinho(a) contra o inchaço, a roupa apertada e a culpa. Tentar mais uma "dieta milagrosa" que vai te fazer passar fome e desistir em 3 dias.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="card-glow !border-accent/40 rounded-xl p-5 md:p-8 text-left h-full hover:!border-accent/60 shadow-[0_0_30px_hsl(24_100%_50%/0.12)]">
                <Check className="w-6 h-6 md:w-8 md:h-8 text-accent mb-3 md:mb-4" />
                <h3 className="font-display font-black text-base md:text-lg mb-2 md:mb-3 text-white">Opção 2:</h3>
                <p className="text-gray-300 text-xs md:text-base leading-relaxed">
                  Investir menos que um jantar fora e ter acesso IMEDIATO a um protocolo que já ajudou centenas de pessoas a eliminarem até 3kg de inchaço em 10 dias.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <p className="font-display font-black text-lg md:text-2xl mb-8 md:mb-10 text-white text-glow-accent">
            Qual opção faz mais sentido pra você?
          </p>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
