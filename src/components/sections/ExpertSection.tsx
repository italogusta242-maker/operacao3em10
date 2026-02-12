import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import igorPhoto from "@/assets/igor-correa.jpg";
import logo from "@/assets/logo-operacao-3em10.png";

const ExpertSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[hsl(0_0%_7%)] overflow-hidden">
      <div ref={ref} className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        {/* Photo with gradient fade */}
        <div className="relative w-full">
          <img
            src={igorPhoto}
            alt="Igor Corrêa - Atleta de fisiculturismo natural"
            className="w-full h-auto object-cover"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-[hsl(0_0%_7%/60%)] to-transparent to-50%" />
          {/* Logo badge - orange background like reference */}
          <div className="absolute bottom-16 right-6 md:right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[hsl(20_100%_55%)] flex items-center justify-center shadow-xl border-4 border-[hsl(20_100%_45%)]">
            <img src={logo} alt="" className="w-9 h-9 md:w-11 md:h-11" />
          </div>
        </div>

        {/* Text content */}
        <div className="px-6 md:px-10 -mt-6 relative z-10 pb-14">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-[hsl(20_100%_55%)] uppercase tracking-tight mb-6">
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
              Com mais de <strong className="text-[hsl(20_100%_55%)]">500 mil pessoas impactadas</strong> todos os meses nas redes sociais, a{" "}
              <strong className="text-white">Operação -3kg em 10 dias</strong> te espera.
            </p>
            <p>
              Ambiente certo, com a metodologia correta irão{" "}
              <strong className="text-white">transformar sua vida pra sempre</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
