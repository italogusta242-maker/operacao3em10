import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-operacao-3em10.webp";
import igorPhoto from "@/assets/igor-hero.jpg";
import FloatingOrbs from "@/components/FloatingOrbs";
import LiveViewerCounter from "@/components/LiveViewerCounter";

const PaymentIcons = () => (
  <div className="flex items-center justify-center gap-4 text-muted-foreground">
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
      <span>Boleto</span>
    </div>
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M7 15h2M13 15h4"/></svg>
      <span>Visa</span>
    </div>
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/></svg>
      <span>Mastercard</span>
    </div>
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l6 8-6 8M18 4l-6 8 6 8"/></svg>
      <span>Pix</span>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden bg-background grain-overlay">
    {/* Background photo — full hero, centered bottom */}
    <div className="absolute inset-0 z-0">
      <img
        src={igorPhoto}
        alt=""
        className="w-full h-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />
      {/* Heavy top gradient for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.7) 80%, #000000 100%)" }} />
      {/* Side fades */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 30%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 30%)" }} />
    </div>

    {/* Corner glow effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.15),transparent_70%)] z-[1]" />
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,hsl(30_100%_50%/0.12),transparent_70%)] z-[1]" />

    <FloatingOrbs />

    {/* Content — single centered column */}
    <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto py-20 md:py-24">
      {/* 1. Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 md:gap-3 mb-6"
      >
        <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8 md:w-12 md:h-12" width={48} height={48} fetchPriority="high" />
        <span className="font-display font-black text-lg md:text-2xl tracking-tight">
          <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
          <span className="text-gradient-primary">em 10</span>
        </span>
      </motion.div>

      {/* 2. Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-foreground uppercase">
          Elimine no mínimo 3kg de inchaço, destrave seu metabolismo e seque em{" "}
          <span className="text-gradient-primary text-glow-primary">10 dias</span> com a{" "}
          <span className="text-gradient-accent text-glow-accent">Operação -3kg em 10</span>
        </h1>
      </motion.div>

      {/* 3. Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl"
      >
        O protocolo que já transformou mais de 5.000 pessoas vai te mostrar como desinchar rápido, perder peso de verdade e recuperar sua disposição. Mesmo que você já tenha tentado de tudo.
      </motion.p>

      {/* 4. "Aceita o desafio?" glow button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6"
      >
        <button
          onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-transparent border-2 border-accent text-accent font-display font-black text-base md:text-xl py-3 px-8 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6),0_0_40px_rgba(249,115,22,0.3)] animate-pulse-cta cursor-pointer transition-all duration-300 hover:bg-accent/10"
        >
          Aceita o desafio?
        </button>
      </motion.div>

      {/* 5. Main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-5 w-full sm:w-auto"
      >
        <button
          onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-display font-black text-base md:text-lg py-4 px-8 rounded-lg shadow-[0_0_20px_hsl(24_100%_50%/0.5)] hover:shadow-[0_0_40px_hsl(24_100%_50%/0.8)] transition-all duration-300 cursor-pointer"
        >
          QUERO COMEÇAR MINHA TRANSFORMAÇÃO →
        </button>
      </motion.div>

      {/* 6. Payment icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-4"
      >
        <PaymentIcons />
      </motion.div>

      {/* 7. Live viewer counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-4"
      >
        <LiveViewerCounter />
      </motion.div>
    </div>

    {/* Scroll arrow */}
    <div className="absolute bottom-3 md:bottom-6 animate-bounce-arrow z-10">
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
