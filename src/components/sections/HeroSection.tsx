import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-operacao-3em10.webp";
import igorPhoto from "@/assets/igor-correa.webp";
import FloatingOrbs from "@/components/FloatingOrbs";
import LiveViewerCounter from "@/components/LiveViewerCounter";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-end px-5 pb-10 md:pb-16 overflow-hidden bg-background grain-overlay">
    {/* Igor full-bleed photo with gradient fade */}
    <div className="absolute inset-0 z-0">
      <img
        src={igorPhoto}
        alt=""
        className="w-full h-[70vh] md:h-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />
      {/* Bottom fade to black */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, #000000 100%)" }} />
      {/* Left edge fade */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, transparent 20%)" }} />
      {/* Right edge fade */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #000 0%, transparent 20%)" }} />
    </div>

    {/* Corner glow effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.15),transparent_70%)] z-[1]" />
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,hsl(30_100%_50%/0.12),transparent_70%)] z-[1]" />

    {/* Floating orbs */}
    <FloatingOrbs />

    {/* Content pinned to bottom */}
    <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
      >
        <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
        <span className="font-display font-black text-lg md:text-2xl tracking-tight">
          <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
          <span className="text-gradient-primary">em 10</span>
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-display font-black text-xl sm:text-2xl md:text-4xl lg:text-[3.2rem] leading-[1.15] tracking-tight text-foreground">
          Elimine no mínimo 3kg de inchaço, destrave seu metabolismo e seque em{" "}
          <span className="text-gradient-primary text-glow-primary">10 dias</span> com a{" "}
          <span className="text-gradient-accent text-glow-accent">Operação -3kg em 10</span>.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6 text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          O protocolo que já transformou mais de 5.000 pessoas vai te mostrar como desinchar rápido, perder peso de verdade e recuperar sua disposição. Mesmo que você já tenha tentado de tudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-3 md:mt-4 font-display font-bold italic text-base md:text-xl text-accent text-glow-accent"
        >
          Aceita o desafio?
        </motion.p>

        {/* Live viewers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 md:mt-6"
        >
          <LiveViewerCounter />
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-3 md:bottom-6 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
