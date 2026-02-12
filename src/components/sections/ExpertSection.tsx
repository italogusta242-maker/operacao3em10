import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import igorPhoto from "@/assets/igor-correa.jpg";

const ExpertSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[hsl(0_0%_8%)] to-[hsl(0_0%_12%)]">
      <div ref={ref} className={`container max-w-4xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Photo */}
          <div className="shrink-0">
            <img
              src={igorPhoto}
              alt="Igor Corrêa - Atleta de fisiculturismo natural"
              className="w-64 h-80 md:w-72 md:h-96 object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Quem criou esse método</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">
              Igor Corrêa
            </h2>

            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                Igor Corrêa é <strong className="text-white">atleta de fisiculturismo natural</strong>.
              </p>
              <p>
                Em 2021, iniciou sua jornada com um físico magrelo desnutrido e conquistou um <strong className="text-white">Shape Insano</strong>. Sem uso de atalhos hormonais.
              </p>
              <p>
                Com mais de <strong className="text-primary">500 mil pessoas impactadas</strong> todos os meses nas redes sociais, a <strong className="text-white">Operação -3kg em 10 dias</strong> te espera.
              </p>
              <p>
                Ambiente certo, com a metodologia correta irão <strong className="text-white">transformar sua vida pra sempre</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
