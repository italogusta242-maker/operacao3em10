import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProgressiveImage from "@/components/ProgressiveImage";
import igorPhoto from "@/assets/igor-correa.webp";
import logo from "@/assets/logo-operacao-3em10.webp";

const ExpertSection = () => {
  return (
    <section className="bg-[hsl(0_0%_5%)] overflow-hidden">
      <div className="section-divider" />
      <ScrollReveal className="max-w-3xl mx-auto">
        {/* Photo with gradient fade */}
        <div className="relative w-full">
          <ProgressiveImage
            src={igorPhoto}
            alt="Igor Corrêa - Atleta de fisiculturismo natural"
            className="w-full h-auto object-cover"
            width={768}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/60%)] to-transparent to-50%" />

          {/* Badge with concentric rings */}
          <div className="absolute bottom-16 right-6 md:right-10 flex items-center justify-center">
            {/* Outer glow pulse */}
            <motion.div
              className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full"
              style={{ boxShadow: "0 0 30px 10px hsl(24 100% 50% / 0.1)" }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Ring 3 */}
            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-[hsl(24_100%_50%/0.05)]" />
            {/* Ring 2 */}
            <div className="absolute w-[5.5rem] h-[5.5rem] md:w-28 md:h-28 rounded-full bg-[hsl(24_100%_50%/0.08)]" />
            {/* Ring 1 */}
            <div className="absolute w-[4.25rem] h-[4.25rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full bg-[hsl(24_100%_50%/0.12)]" />
            {/* Logo center */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[hsl(0_0%_100%/0.85)] flex items-center justify-center shadow-xl z-10">
              <img src={logo} alt="" className="w-7 h-7 md:w-9 md:h-9" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="px-5 md:px-10 -mt-6 relative z-10 pb-14">
          <h2
            className="font-display font-black text-2xl sm:text-3xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-[hsl(24_100%_55%)] to-[hsl(15_100%_45%)] bg-clip-text text-transparent"
            style={{ filter: "drop-shadow(0 0 24px hsl(24 100% 50% / 0.35))" }}
          >
            Igor Corrêa
          </h2>

          <div className="space-y-4 md:space-y-5 text-sm md:text-lg text-gray-300 leading-relaxed">
            <p>
              Igor Corrêa é <strong className="text-white">atleta de fisiculturismo natural</strong>. Especialista em emagrecimento rápido e definição corporal.
            </p>
            <p>
              Nos últimos anos, Igor já ajudou mais de <strong className="text-accent text-glow-accent">5.000 pessoas</strong> a conquistarem o shape que sempre quiseram — mesmo aquelas que achavam que já tinham tentado de tudo.
            </p>
            <p>
              Sua metodologia é focada em <strong className="text-white">resultados rápidos e sustentáveis</strong> — sem dietas extremas que você não consegue manter, e sem treinos de 2 horas que destroem sua rotina.
            </p>
            <p>
              O protocolo <strong className="text-white">Operação -3kg em 10</strong> nasceu da necessidade real dos seus alunos: um método que funciona mesmo para quem tem pouco tempo, está travado no peso, ou quer um reset rápido no corpo.
            </p>
          </div>

          <div className="mt-6 md:mt-8 border-l-4 border-accent card-glow rounded-r-lg p-4 md:p-6">
            <p className="text-sm md:text-lg text-foreground italic leading-relaxed">
              "Meu objetivo é simples: te dar o caminho mais curto entre onde você está e onde quer chegar. Sem enrolação."
            </p>
            <p className="text-sm md:text-base text-accent font-bold mt-2">— Igor Corrêa</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ExpertSection;
