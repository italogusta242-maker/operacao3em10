import CTAButton from "../CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import LiveViewerCounter from "@/components/LiveViewerCounter";

const avatars = [
  { initials: "ST", color: "from-accent to-[hsl(30_100%_55%)]" },
  { initials: "AA", color: "from-primary to-[hsl(140_55%_50%)]" },
  { initials: "JC", color: "from-[hsl(30_100%_55%)] to-accent" },
];

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden" id="cta-final">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-background">
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
            className="text-xl py-6"
          />

          <LiveViewerCounter />

          {/* Social proof avatars */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex -space-x-2">
              {avatars.map(({ initials, color }, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center border-2 border-background text-[10px] md:text-xs font-bold text-white`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-xs md:text-sm text-muted-foreground ml-2">
              <strong className="text-accent">+5.000</strong> já transformaram
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
