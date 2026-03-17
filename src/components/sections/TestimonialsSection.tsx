import { useEffect, useRef, useCallback } from "react";
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

import depoimentoDavid from "@/assets/depoimento-david.png";
import depoimentoSamuel from "@/assets/depoimento-samuel.png";

const testimonials = [
  { src: new URL("@/assets/depoimento-1.webp", import.meta.url).href, alt: "Resultado - Igor", name: "Igor" },
  { src: new URL("@/assets/depoimento-2.webp", import.meta.url).href, alt: "Resultado - Jhon", name: "Jhon" },
  { src: new URL("@/assets/depoimento-3.webp", import.meta.url).href, alt: "Resultado - Italo", name: "Italo" },
  { src: new URL("@/assets/depoimento-4.webp", import.meta.url).href, alt: "Resultado - Lara", name: "Lara" },
  { src: new URL("@/assets/depoimento-5.webp", import.meta.url).href, alt: "Resultado - Guilherme", name: "Guilherme" },
  { src: new URL("@/assets/depoimento-6.webp", import.meta.url).href, alt: "Resultado - Thiago", name: "Thiago" },
];

const screenshotTestimonials = [
  { src: depoimentoDavid, alt: "Depoimento David Pimentel" },
  { src: depoimentoSamuel, alt: "Depoimento Samuel Tavares" },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const handleVisibility = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        autoplayRef.current.play();
      } else {
        autoplayRef.current.stop();
      }
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleVisibility, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleVisibility]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="depoimentos">
      <div className="section-divider" />
      <div className="py-12 md:py-16 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,hsl(24_100%_50%/0.04),transparent_70%)]" />

        <div className="container max-w-5xl px-5 relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground text-center mb-3 md:mb-4">
              <span className="text-accent text-glow-accent">Resultados reais</span> de quem seguiu o protocolo...
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              Mais de 5.000 pessoas já transformaram seus corpos com a metodologia do Igor Corrêa
            </p>
          </ScrollReveal>

          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map(({ src, alt, name }, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%]">
                  <div className="flex flex-col items-center">
                    <ProgressiveImage
                      src={src}
                      alt={alt}
                      className="w-full rounded-xl shadow-lg object-cover aspect-square border border-accent/20"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={400}
                    />
                    <p className="mt-3 text-center text-sm md:text-base font-semibold text-foreground">{name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-2 md:-translate-x-4" />
            <CarouselNext className="right-0 translate-x-2 md:translate-x-4" />
          </Carousel>

          {/* Screenshot testimonials */}
          <div className="grid grid-cols-2 gap-3 md:gap-5 mt-8 md:mt-10 max-w-2xl mx-auto">
            {screenshotTestimonials.map(({ src, alt }, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-[hsl(0_0%_100%/0.06)]">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={480}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm md:text-lg mt-8 md:mt-10 max-w-2xl mx-auto italic">
              Você não vai querer parar, e consequentemente, terá bem mais resultado do que só -3kg.
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-b from-background to-secondary" />
    </section>
  );
};

export default TestimonialsSection;
