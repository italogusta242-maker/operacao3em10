import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-operacao-3em10-small.webp";

const HeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center px-5 py-12 md:py-20 overflow-hidden bg-gradient-to-b from-[hsl(122_39%_94%)] to-background">
    {/* Logo */}
    <div className="flex items-center gap-2 md:gap-3 mb-10 md:mb-20 animate-fade-in">
      <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
      <span className="font-display font-bold text-lg md:text-2xl tracking-tight">
        <span className="text-[hsl(20_100%_60%)]">Operação -3kg</span> <span className="text-[hsl(122_39%_49%)]">em 10</span>
      </span>
    </div>

    {/* Headline */}
    <div className="max-w-3xl text-center animate-fade-up">
      <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-[3.4rem] leading-tight tracking-tight text-foreground">
        Você não engordou 3kg de gordura no feriado de carnaval...{" "}
        <span className="text-accent">Você acumulou INFLAMAÇÃO.</span>
      </h1>

      <p className="mt-4 md:mt-6 text-sm md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        E pode eliminar isso em apenas <strong className="text-foreground">10 dias</strong>, sem passar fome, sem se matar na academia e sem receitas complicadas.
      </p>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-6 md:bottom-8 animate-bounce-arrow">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/50" />
    </div>
  </section>
);

export default HeroSection;
