import { ChevronDown, Star } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-operacao-3em10.webp";
import igorPhoto from "@/assets/igor-correa.webp";
import CTAButton from "@/components/CTAButton";
import FloatingOrbs from "@/components/FloatingOrbs";
import LiveViewerCounter from "@/components/LiveViewerCounter";

const HeroSection = () => (
  <section className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center px-5 py-6 pb-16 md:py-10 md:pb-20 overflow-hidden bg-background grain-overlay">
    {/* Background image of Igor with gradient overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={igorPhoto}
        alt=""
        className="w-full h-full object-cover object-top opacity-20 md:opacity-25"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-transparent to-30%" />
    </div>

    {/* Corner glow effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.15),transparent_70%)]" />
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,hsl(30_100%_50%/0.12),transparent_70%)]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,hsl(24_100%_50%/0.08),transparent_70%)]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,hsl(30_100%_50%/0.08),transparent_70%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(122_50%_40%/0.04),transparent_60%)]" />

    {/* Floating orbs */}
    <FloatingOrbs />

    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
    >
      <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
      <span className="font-display font-black text-lg md:text-2xl tracking-tight">
        <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
        <span className="text-gradient-primary">em 10</span>
      </span>
    </motion.div>

    {/* Pill badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="relative z-10 mb-4 md:mb-6"
    >
      <div className="inline-flex items-center gap-2 border border-accent/50 rounded-full px-4 py-1.5 bg-accent/10 shadow-[0_0_20px_hsl(24_100%_50%/0.15)]">
        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
        <span className="text-xs md:text-sm text-accent font-semibold uppercase tracking-wider">
          Método validado por mais de 5.000 pessoas
        </span>
      </div>
    </motion.div>

    {/* Headline */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="relative z-10 max-w-3xl text-center"
    >
      <h1 className="font-display font-black text-xl sm:text-2xl md:text-4xl lg:text-[3.2rem] leading-[1.15] tracking-tight text-foreground">
        Elimine no mínimo 3kg de inchaço, destrave seu metabolismo e seque em{" "}
        <span className="text-gradient-primary text-glow-primary">10 dias</span> com a{" "}
        <span className="text-gradient-accent text-glow-accent">Operação -3kg em 10</span>.
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 md:mt-6 text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
      >
        O protocolo que já transformou mais de 5.000 pessoas vai te mostrar como desinchar rápido, perder peso de verdade e recuperar sua disposição — mesmo que você já tenha tentado de tudo.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-6 md:mt-10"
      >
        <CTAButton
          text="ACEITA O DESAFIO?"
          variant="accent"
          pulse
        />
        <LiveViewerCounter />
      </motion.div>
    </motion.div>

    {/* Scroll arrow */}
    <div className="absolute bottom-6 md:bottom-8 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
