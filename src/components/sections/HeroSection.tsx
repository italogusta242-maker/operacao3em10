import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-operacao-3em10.webp";
import igorPhoto from "@/assets/igor-hero.jpg";
import FloatingOrbs from "@/components/FloatingOrbs";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-end md:justify-center px-5 pb-10 md:pb-0 overflow-hidden bg-background grain-overlay">
    {/* MOBILE: Full-bleed background photo */}
    <div className="absolute inset-0 z-0 md:hidden">
      <img
        src={igorPhoto}
        alt=""
        className="w-full h-[70vh] object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, #000000 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, transparent 20%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #000 0%, transparent 20%)" }} />
    </div>

    {/* Corner glow effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.12),transparent_70%)] z-[1]" />

    <FloatingOrbs />

    {/* DESKTOP: Two-column layout */}
    <div className="relative z-10 w-full max-w-6xl mx-auto hidden md:flex items-center min-h-screen py-8">
      {/* Left column: text */}
      <div className="w-[55%] pr-8 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <img src={logo} alt="Operação -3kg em 10" className="w-11 h-11" width={44} height={44} fetchPriority="high" />
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            Operação <span className="text-accent">-3kg</span> em 10
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl lg:text-[3.2rem] leading-[1.12] tracking-tight text-foreground text-left"
        >
          Elimine no mínimo 3kg de inchaço, destrave seu metabolismo e seque em{" "}
          <span className="text-accent">10 dias</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 text-lg text-muted-foreground leading-relaxed text-left max-w-xl"
        >
          O protocolo que já transformou mais de 5.000 pessoas vai te mostrar como desinchar rápido, perder peso de verdade e recuperar sua disposição.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 w-full max-w-md"
        >
          <CTAButton text="QUERO COMEÇAR AGORA" subtext="Garantia incondicional de 7 dias" />
        </motion.div>
      </div>

      {/* Right column: Igor photo */}
      <div className="w-[45%] relative h-screen">
        <img
          src={igorPhoto}
          alt="Igor Corrêa"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, transparent 40%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, transparent 30%)" }} />
      </div>
    </div>

    {/* MOBILE: Content pinned to bottom */}
    <div className="relative z-10 flex flex-col items-center w-full max-w-lg md:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8" width={32} height={32} fetchPriority="high" />
        <span className="font-display font-bold text-base tracking-tight text-foreground">
          Operação <span className="text-accent">-3kg</span> em 10
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="font-display font-extrabold text-xl sm:text-2xl leading-[1.15] tracking-tight text-foreground text-center"
      >
        Elimine no mínimo 3kg de inchaço, destrave seu metabolismo e seque em{" "}
        <span className="text-accent">10 dias</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 text-sm text-muted-foreground leading-relaxed text-center"
      >
        O protocolo que já transformou mais de 5.000 pessoas vai te mostrar como desinchar rápido, perder peso de verdade e recuperar sua disposição.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-5 w-full"
      >
        <CTAButton text="QUERO COMEÇAR AGORA" subtext="Garantia incondicional de 7 dias" />
      </motion.div>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-3 md:bottom-6 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
