import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import igorPhoto from "@/assets/igor-correa.jpg";
import logo from "@/assets/logo-operacao-3em10.png";

const pulseRings = [
  { delay: 0, duration: 2.5 },
  { delay: 0.8, duration: 2.5 },
  { delay: 1.6, duration: 2.5 },
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

          {/* Badge with pulse rings */}
          <div className="absolute bottom-16 right-6 md:right-10 flex items-center justify-center">
            {pulseRings.map((ring, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-accent"
                initial={{ scale: 1, opacity: 0.4 }}
                animate={{ scale: [1, 1.8, 2.2], opacity: [0.4, 0.15, 0] }}
                transition={{
                  duration: ring.duration,
                  delay: ring.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl z-10">
              <img src={logo} alt="" className="w-9 h-9 md:w-11 md:h-11" />
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
