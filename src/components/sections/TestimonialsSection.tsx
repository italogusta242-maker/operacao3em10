import { MessageSquareQuote } from "lucide-react";
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
  { src: depoimento1, alt: "Resultado - Igor", name: "Igor" },
  { src: depoimento2, alt: "Resultado - Jhon", name: "Jhon" },
  { src: depoimento3, alt: "Resultado - Italo", name: "Italo" },
  { src: depoimento4, alt: "Resultado - Lara", name: "Lara" },
  { src: depoimento5, alt: "Resultado - Guilherme", name: "Guilherme" },
  { src: depoimento6, alt: "Resultado - Thiago", name: "Thiago" },
];

const textTestimonials = [
  {
    name: "Samuel Tavares",
    time: "14:32",
    text: "O método foi muito eficaz pra mim, perdi 3kg nesses 10 dias. Nem todos os dias consegui bater a meta certinho, mas mesmo assim fui até o fim. Já deu pra sentir uma diferença no corpo e na disposição no dia a dia.",
  },
  {
    name: "David Pimentel",
    time: "09:17",
    text: "O resultado foi INSANO. Infelizmente não segui à risca, foi o máximo que pude. Mas funciona! Nos 10 dias acabei perdendo os 3kg!!! Comecei com 86.6, pesei antes de ontem novamente 83.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden" id="depoimentos">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-background">
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
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
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

          {/* WhatsApp-style text testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10 max-w-3xl mx-auto">
            {textTestimonials.map(({ name, time, text }, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden bg-[#111B21] border border-[hsl(0_0%_100%/0.06)]">
                  {/* WhatsApp header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1F2C34] border-b border-[hsl(0_0%_100%/0.06)]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366] fill-current shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-xs font-semibold text-[#E9EDEF]">{name}</span>
                    <span className="text-[10px] text-[#8696A0] ml-auto">{time}</span>
                  </div>
                  {/* Message bubble */}
                  <div className="p-3 md:p-4">
                    <div className="relative bg-[#005C4B] rounded-lg rounded-bl-none p-3 md:p-4">
                      <p className="text-xs md:text-sm text-white leading-relaxed">
                        {text}
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1.5">
                        <span className="text-[10px] text-[#ffffff80]">{time}</span>
                        <span className="text-[10px] text-[#53BDEB]">✓✓</span>
                      </div>
                      {/* Bubble tail */}
                      <div className="absolute -bottom-0 -left-2 w-0 h-0 border-t-[8px] border-t-[#005C4B] border-l-[8px] border-l-transparent" />
                    </div>
                  </div>
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
