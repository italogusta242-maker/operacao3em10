import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { decorateURL } from "@/lib/utm";
import logo from "@/assets/logo-operacao-3em10.webp";
import igorPhoto from "@/assets/igor-correa.webp";
import FloatingOrbs from "@/components/FloatingOrbs";
import LiveViewerCounter from "@/components/LiveViewerCounter";
const CTA_URL = "https://payment.ticto.app/O0656C50E";

const HeroSection = () => {
  const handleCTA = () => {
    trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
    const decoratedUrl = decorateURL(CTA_URL);
    window.open(decoratedUrl, "_blank", "noopener,noreferrer");
  };

  return (
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
    <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_left,hsl(24_100%_50%/0.15),transparent_70%)] z-[1]" />
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,hsl(30_100%_50%/0.12),transparent_70%)] z-[1]" />

    <FloatingOrbs />

    {/* DESKTOP: Two-column layout */}
    <div className="relative z-10 w-full max-w-6xl mx-auto hidden md:flex items-center min-h-screen py-8">
      {/* Left column: text ~55% */}
      <div className="w-[55%] pr-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <img src={logo} alt="Operação -3kg em 10" className="w-12 h-12" width={48} height={48} fetchPriority="high" />
          <span className="font-display font-black text-2xl tracking-tight">
            <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
            <span className="text-gradient-primary">em 10</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="font-display font-black text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight text-white">
            Elimine no mínimo 3kg de barriga e desinche o corpo em 10 dias com a Operação -3kg em 10.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg text-white/80 font-medium leading-relaxed"
          >
            Em 10 dias você vai estar irreconhecível. O protocolo que já mudou o corpo de mais de 5.000 pessoas vai te ensinar como diminuir seu peso, recuperar sua autoestima, disposição e perder gordura rápido. Mesmo que você já tenha tentado de tudo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4"
          >
            <button
              onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-display font-black text-lg text-white bg-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.5)] hover:shadow-[0_0_30px_rgba(255,107,0,0.7)] transition-all duration-300 cursor-pointer border-0 animate-pulse-cta"
            >
              Claro! Quero mudar meu corpo rápido!
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6"
          >
            <LiveViewerCounter />
          </motion.div>
        </motion.div>
      </div>

      {/* Right column: Igor photo ~45% */}
      <div className="w-[45%] relative h-screen">
        <img
          src={igorPhoto}
          alt="Igor Corrêa"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        {/* Left fade to blend with text area */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, transparent 40%)" }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000 0%, transparent 30%)" }} />
      </div>
    </div>

    {/* MOBILE: Content pinned to bottom */}
    <div className="relative z-10 flex flex-col items-start w-full max-w-3xl md:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 mb-4"
      >
        <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8" width={48} height={48} fetchPriority="high" />
        <span className="font-display font-black text-lg tracking-tight">
          <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
          <span className="text-gradient-primary">em 10</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className="font-display font-black text-2xl leading-tight tracking-tight text-white">
          Elimine no mínimo 3kg de barriga e desinche o corpo em 10 dias com a Operação -3kg em 10.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-sm text-white/80 font-medium leading-relaxed max-w-2xl"
        >
          Em 10 dias você vai estar irreconhecível. O protocolo que já mudou o corpo de mais de 5.000 pessoas vai te ensinar como diminuir seu peso, recuperar sua autoestima, disposição e perder gordura rápido. Mesmo que você já tenha tentado de tudo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-3"
        >
          <button
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-display font-black text-sm text-white bg-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.5)] hover:shadow-[0_0_30px_rgba(255,107,0,0.7)] transition-all duration-300 cursor-pointer border-0 animate-pulse-cta"
          >
            Claro! Quero mudar meu corpo rápido!
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4"
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
};

export default HeroSection;
