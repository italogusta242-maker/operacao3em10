import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProgressiveImage from "@/components/ProgressiveImage";
import igorPhoto from "@/assets/igor-correa.webp";
import { Users, Trophy, Leaf } from "lucide-react";

const stats = [
  { icon: Users, value: "500K+", label: "seguidores nas redes" },
  { icon: Trophy, value: "5.000+", label: "alunos transformados" },
  { icon: Leaf, value: "100%", label: "natural, sem hormônios" },
];

const ExpertSection = () => {
  return (
    <section className="bg-[hsl(0_0%_5%)] overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-3xl mx-auto">
        {/* Photo with gradient fade */}
        <ScrollReveal>
          <div className="relative w-full max-h-[60vh] md:max-h-none overflow-hidden">
            <ProgressiveImage
              src={igorPhoto}
              alt="Igor Corrêa - Atleta de fisiculturismo natural"
              className="w-full h-auto object-cover object-top"
              width={768}
              height={1024}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/60%)] to-transparent to-50%" />
          </div>
        </ScrollReveal>

        {/* Text content */}
        <div className="px-5 md:px-10 -mt-6 relative z-10 pb-14">
          <ScrollReveal>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mb-2 md:mb-3">Conheça o criador do protocolo</p>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-2 md:mb-3 bg-gradient-to-r from-[hsl(24_100%_55%)] to-[hsl(15_100%_45%)] bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 30px hsl(24 100% 50% / 0.5))" }}
            >
              Igor Corrêa
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-lg text-accent font-semibold mb-6 md:mb-8">
              O atleta que já transformou +5.000 corpos sem hormônios artificiais.
            </p>
          </ScrollReveal>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <ScrollReveal key={i} delay={i * 0.1 + 0.15}>
                <div className="card-glow rounded-xl p-3 md:p-4 text-center hover:!border-accent/40 transition-all">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
                  <p className="font-display font-black text-xl md:text-2xl text-accent text-glow-accent">{value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-4 md:space-y-5 text-sm md:text-lg text-foreground/70 leading-relaxed">
            <ScrollReveal delay={0.2}>
              <p>
                Em 2021, Igor começou do zero. Um físico magrelo, sem academia de luxo, sem atalhos hormonais. Hoje, com mais de <strong className="text-accent text-glow-accent">500 mil pessoas</strong> acompanhando sua transformação nas redes sociais, Igor prova todo mês que resultados reais existem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                E o protocolo <strong className="text-white">Operação -3kg em 10</strong> é o caminho mais curto que ele encontrou para te entregar a mesma transformação. Sem enrolação. Sem milagres falsos. <strong className="text-white">Com ciência e método.</strong>
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-6 md:mt-8 border-l-4 border-accent card-glow rounded-r-lg p-4 md:p-6">
              <p className="text-sm md:text-lg text-foreground italic leading-relaxed">
                "Se eu consigo, você também consegue. Só precisa do protocolo certo."
              </p>
              <p className="text-sm md:text-base text-accent font-bold mt-2">— Igor Corrêa</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-[hsl(0_0%_5%)] to-secondary" />
    </section>
  );
};

export default ExpertSection;
