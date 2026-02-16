import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-operacao-3em10.webp";

const HeroSection = () => (
  <section className="relative min-h-[45vh] md:min-h-[75vh] flex flex-col items-center justify-center px-5 py-6 pb-16 md:py-10 md:pb-20 overflow-hidden bg-gradient-to-b from-[hsl(122_39%_92%)] via-[hsl(122_30%_96%)] to-background">
    {/* Background blur orbs */}
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-[hsl(122_50%_70%/0.15)] rounded-full blur-[100px]" />
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[hsl(20_100%_65%/0.08)] rounded-full blur-[120px]" />

    {/* Logo */}
    <div className="relative z-10 flex items-center gap-2 md:gap-3 mb-6 md:mb-12 animate-fade-in">
      <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
      <span className="font-display font-bold text-lg md:text-2xl tracking-tight">
        <span className="text-accent">Operação -3kg</span> <span className="text-primary">em 10</span>
      </span>
    </div>

    {/* Headline */}
    <div className="relative z-10 max-w-3xl text-center animate-fade-up">
      <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-[3.4rem] leading-tight tracking-tight text-foreground">
        Você não engordou 3kg de gordura no feriado de carnaval...{" "}
        <span className="bg-gradient-to-r from-[hsl(20_100%_55%)] to-[hsl(30_100%_50%)] bg-clip-text text-transparent">Você acumulou INFLAMAÇÃO.</span>
      </h1>

      <p className="mt-4 md:mt-6 text-sm md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        E pode eliminar isso em apenas <strong className="text-primary">10 dias</strong>, sem passar fome, sem se matar na academia e sem receitas complicadas.
      </p>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-6 md:bottom-8 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/50" />
    </div>
  </section>
);

export default HeroSection;
