import { ChevronDown } from "lucide-react";
import CTAButton from "../CTAButton";
import logo from "@/assets/logo-operacao-3em10.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-b from-[hsl(122_39%_94%)] to-background">
    {/* Logo */}
    <div className="flex items-center gap-3 mb-10 animate-fade-in">
      <img src={logo} alt="Operação 3 em 10" className="w-10 h-10 md:w-12 md:h-12" />
      <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
        <span className="text-[hsl(20_100%_60%)]">Operação 3</span> <span className="text-[hsl(122_39%_49%)]">em 10</span>
      </span>
    </div>

    {/* Headline */}
    <div className="max-w-3xl text-center animate-fade-up">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-tight tracking-tight text-foreground">
        Você não engordou 3kg de gordura em 4 dias de carnaval...{" "}
        <span className="text-accent">Você acumulou INFLAMAÇÃO.</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        E pode eliminar isso em apenas <strong className="text-foreground">10 dias</strong>, sem passar fome, sem academia matadora, sem receitas complicadas.
      </p>
    </div>

    {/* CTA */}
    <div className="mt-10 animate-fade-up animation-delay-400">
      <CTAButton text="QUERO ELIMINAR O INCHAÇO AGORA" pulse />
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-8 animate-bounce-arrow">
      <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
    </div>
  </section>
);

export default HeroSection;
