import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className="py-16 md:py-24 bg-secondary" id="depoimentos">
      <ScrollReveal className="container max-w-5xl px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          Resultados reais de quem seguiu o protocolo
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Transformações de alunos da Operação 3 em 10
        </p>

        <Carousel
          opts={{ loop: true, align: "center" }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map(({ src, alt }, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%]">
                <img
                  src={src}
                  alt={alt}
                  className="w-full rounded-xl shadow-lg object-cover aspect-square"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-2 md:-translate-x-4" />
          <CarouselNext className="right-0 translate-x-2 md:translate-x-4" />
        </Carousel>
      </ScrollReveal>
    </section>
  );
};

export default TestimonialsSection;
