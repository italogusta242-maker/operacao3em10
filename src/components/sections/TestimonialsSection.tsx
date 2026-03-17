import ScrollReveal from "@/components/ScrollReveal";
import ProgressiveImage from "@/components/ProgressiveImage";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import depoimento1 from "@/assets/depoimento-1.webp";
import depoimento2 from "@/assets/depoimento-2.webp";
import depoimento3 from "@/assets/depoimento-3.webp";
import depoimento4 from "@/assets/depoimento-4.webp";
import depoimento5 from "@/assets/depoimento-5.webp";
import depoimento6 from "@/assets/depoimento-6.webp";

const testimonials = [
  { src: depoimento1, alt: "Resultado - Igor", name: "Igor", duration: "Desenvolveu o método da operação" },
  { src: depoimento2, alt: "Resultado - Jhon", name: "Jhon", duration: "Fez a operação durante 30 dias" },
  { src: depoimento3, alt: "Resultado - Italo", name: "Italo", duration: "Fez a operação durante 30 dias" },
  { src: depoimento4, alt: "Resultado - Lara", name: "Lara", duration: "Fez a operação durante 25 dias" },
  { src: depoimento5, alt: "Resultado - Thiago", name: "Thiago", duration: "Fez a operação durante 10 dias" },
  { src: depoimento6, alt: "Resultado - Guilherme", name: "Guilherme", duration: "Fez a operação durante 10 dias" },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden" id="depoimentos">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,hsl(24_100%_50%/0.04),transparent_70%)]" />
        
        <ScrollReveal className="container max-w-5xl px-5 relative z-10">
          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-3 md:mb-4">
            <span className="text-accent text-glow-accent">Resultados reais</span> de quem seguiu o protocolo
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
            Transformações de alunos da Operação -3kg em 10
          </p>

          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map(({ src, alt, name, duration }, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%]">
                  <div className="flex flex-col items-center">
                    <ProgressiveImage
                      src={src}
                      alt={alt}
                      className="w-full rounded-xl shadow-lg object-cover aspect-square border border-[hsl(24_100%_50%/0.2)]"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={400}
                    />
                    <p className="mt-3 text-center text-sm md:text-base font-semibold text-foreground">{name}</p>
                    <p className="text-center text-xs md:text-sm text-muted-foreground">{duration}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-2 md:-translate-x-4" />
            <CarouselNext className="right-0 translate-x-2 md:translate-x-4" />
          </Carousel>

          <p className="text-center text-muted-foreground text-sm md:text-lg mt-8 md:mt-10 max-w-2xl mx-auto italic">
            Você não vai querer parar, e consequentemente, terá bem mais resultado do que só -3kg.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
