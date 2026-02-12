import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import igorPhoto from "@/assets/igor-correa.jpg";
import logo from "@/assets/logo-operacao-3em10.png";

// Static concentric rings + subtle pulse glow
const rings = [
  { size: "w-28 h-28 md:w-36 md:h-36", bg: "bg-[hsl(20_100%_50%/0.25)]" },
  { size: "w-22 h-22 md:w-28 md:h-28", bg: "bg-[hsl(20_100%_50%/0.45)]" },
  { size: "w-16 h-16 md:w-20 md:h-20", bg: "bg-accent" },
];

const ExpertSection = () => {
  return (
    <section className="bg-[hsl(0_0%_7%)] overflow-hidden">
      <ScrollReveal className="max-w-3xl mx-auto">
        {/* Photo with gradient fade */}
        <div className="relative w-full">
          <img
            src={igorPhoto}
            alt="Igor Corrêa - Atleta de fisiculturismo natural"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-[hsl(0_0%_7%/60%)] to-transparent to-50%" />

          {/* Badge with concentric rings */}
          <div className="absolute bottom-16 right-6 md:right-10 flex items-center justify-center">
            {/* Outer glow pulse */}
            <motion.div
              className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-[hsl(20_100%_50%/0.15)]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Static concentric rings */}
            {rings.map((ring, i) => (
              <div
                key={i}
                className={`absolute ${ring.size} rounded-full ${ring.bg}`}
              />
            ))}
            {/* Logo center */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-xl z-10">
              <img src={logo} alt="" className="w-7 h-7 md:w-9 md:h-9" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="px-5 md:px-10 -mt-6 relative z-10 pb-14">
          <h2
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-6 bg-gradient-to-r from-[hsl(30_100%_60%)] to-[hsl(15_100%_45%)] bg-clip-text text-transparent"
            style={{ filter: "drop-shadow(0 0 24px hsl(20 100% 55% / 0.35))" }}
          >
            Igor Corrêa
          </h2>

          <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed">
            <p>
              Igor Corrêa é <strong className="text-white">atleta de fisiculturismo natural</strong>.
            </p>
            <p>
              Em 2021, iniciou sua jornada com um físico magrelo desnutrido e conquistou um{" "}
              <strong className="text-white">Shape Insano</strong>. Sem uso de atalhos hormonais.
            </p>
            <p>
              Com mais de <strong className="text-accent">500 mil pessoas impactadas</strong> todos os meses nas redes sociais, a{" "}
              <strong className="text-white">Operação -3kg em 10 dias</strong> te espera.
            </p>
            <p>
              Ambiente certo, com a metodologia correta irão{" "}
              <strong className="text-white">transformar sua vida pra sempre</strong>.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ExpertSection;
