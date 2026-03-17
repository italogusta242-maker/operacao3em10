import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-operacao-3em10.webp";

const HeroSection = () => (
  <section className="relative min-h-[45vh] md:min-h-[75vh] flex flex-col items-center justify-center px-5 py-6 pb-16 md:py-10 md:pb-20 overflow-hidden bg-black grain-overlay">
    {/* Corner glow effects - orange/golden radiant light */}
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.15),transparent_70%)]" />
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,hsl(30_100%_50%/0.12),transparent_70%)]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,hsl(24_100%_50%/0.08),transparent_70%)]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,hsl(30_100%_50%/0.08),transparent_70%)]" />
    {/* Center subtle green glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(122_50%_40%/0.04),transparent_60%)]" />

    {/* Logo */}
    <div className="relative z-10 flex items-center gap-2 md:gap-3 mb-6 md:mb-12 animate-fade-in">
      <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
      <span className="font-display font-black text-lg md:text-2xl tracking-tight">
        <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
        <span className="text-gradient-primary">em 10</span>
      </span>
    </div>

    {/* Headline */}
    <div className="relative z-10 max-w-3xl text-center animate-fade-up">
      <h1 className="font-display font-black text-xl sm:text-2xl md:text-4xl lg:text-[3.4rem] leading-[1.15] tracking-tight text-foreground">
        Você não engordou 3kg de gordura no feriado de carnaval...{" "}
        <span className="text-gradient-accent text-glow-accent">Você acumulou INFLAMAÇÃO.</span>
      </h1>

      <p className="mt-4 md:mt-6 text-sm md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        E pode eliminar isso em apenas <strong className="text-primary text-glow-primary">10 dias</strong>, sem passar fome, sem se matar na academia e sem receitas complicadas.
      </p>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-6 md:bottom-8 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
