import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "@/components/ScrollReveal";

import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import depoimento4 from "@/assets/depoimento-4.png";
import depoimento5 from "@/assets/depoimento-5.png";
import depoimento6 from "@/assets/depoimento-6.png";

const testimonials = [
  { src: depoimento1, alt: "Resultado antes e depois - aluno 1" },
  { src: depoimento2, alt: "Resultado antes e depois - aluno 2" },
  { src: depoimento3, alt: "Resultado antes e depois - aluno 3" },
  { src: depoimento4, alt: "Resultado antes e depois - aluna 4" },
  { src: depoimento5, alt: "Resultado antes e depois - aluno 5" },
  { src: depoimento6, alt: "Resultado antes e depois - aluno 6" },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-secondary" id="depoimentos">
      <ScrollReveal className="container max-w-5xl px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          Resultados reais de quem seguiu o protocolo
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Transformações de alunos da Operação 3 em 10
        </p>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map(({ src, alt }, i) => (
                <div
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] min-w-0 px-2"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full rounded-xl shadow-lg object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-primary" : "bg-foreground/20"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TestimonialsSection;
