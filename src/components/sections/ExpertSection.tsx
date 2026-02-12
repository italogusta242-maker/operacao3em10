import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import igorPhoto from "@/assets/igor-correa.jpg";
import logo from "@/assets/logo-operacao-3em10.png";

const ExpertSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[hsl(0_0%_7%)] overflow-hidden">
      <div ref={ref} className={`max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        {/* Large photo */}
        <div className="relative w-full aspect-[3/4] max-h-[520px] overflow-hidden">
          <img
            src={igorPhoto}
            alt="Igor Corrêa - Atleta de fisiculturismo natural"
            className="w-full h-full object-cover object-top"
          />
          {/* Logo badge */}
          <div className="absolute bottom-6 right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
            <img src={logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        </div>

        {/* Text content */}
        <div className="px-6 md:px-8 py-10 md:py-14">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-6">
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
              Com mais de <strong className="text-primary">500 mil pessoas impactadas</strong> todos os meses nas redes sociais, a{" "}
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
