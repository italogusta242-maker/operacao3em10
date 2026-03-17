import { Check } from "lucide-react";
import CTAButton from "../CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden" id="cta-final">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(24_100%_50%/0.08),transparent_70%)]" />

        <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-white leading-tight">
            Daqui a 10 dias, você pode estar <span className="text-accent text-glow-accent">3kg mais leve</span>. Ou pode estar no mesmo lugar, se perguntando por que não começou.
          </h2>

          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10">
            A escolha é sua.
          </p>

          {/* Price reminder */}
          <p className="font-display font-black text-2xl md:text-4xl text-accent drop-shadow-[0_0_20px_hsl(24_100%_50%/0.4)] mb-2">
            R$ 47
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mb-8 md:mb-10">
            Acesso imediato | Garantia de 7 dias | Pagamento 100% seguro via cartão, Pix ou boleto
          </p>

          <CTAButton
            text="QUERO PERDER 3KG EM 10 DIAS"
            subtext="ACESSO IMEDIATO • GARANTIA DE 7 DIAS"
            variant="accent"
            pulse
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
