import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const GuaranteeSection = () => {
  return (
    <section className="relative overflow-hidden" id="garantia">
      <div className="section-divider" />
      <div className="py-12 md:py-24 bg-secondary">
        <div className="absolute top-10 right-10 w-60 h-60 bg-[radial-gradient(circle,hsl(210_80%_50%/0.05),transparent_70%)]" />
        
        <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
          <Shield className="w-12 h-12 md:w-16 md:h-16 text-trust mx-auto mb-4 md:mb-6" />

          <h2 className="font-display font-black text-xl md:text-3xl lg:text-4xl text-foreground mb-4 md:mb-6">
            🛡️ <span className="text-accent text-glow-accent">Garantia blindada</span> de 7 dias
          </h2>

          <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4">
            Eu sei que você já foi enganado(a) antes. Já comprou promessas que não funcionaram.
          </p>

          <p className="text-xs md:text-base text-muted-foreground mb-6 md:mb-8">
            Por isso, estou colocando TODO o risco nas minhas costas:
          </p>

          <div className="border-l-4 border-trust card-glow rounded-r-xl p-4 md:p-8 text-left mb-6 md:mb-8">
            <p className="text-sm md:text-lg text-foreground leading-relaxed">
              Se nos próximos <strong>7 dias</strong> você seguir o protocolo e, por <strong>QUALQUER motivo</strong>, não ficar satisfeito(a) com o resultado, você pede reembolso e recebe de volta <strong>cada centavo investido</strong>. Sem perguntas. Sem burocracia. Sem enrolação.
            </p>
          </div>

          <p className="text-sm md:text-lg font-semibold text-foreground">
            Ou seja: você só mantém o investimento se <strong className="text-primary text-glow-primary">REALMENTE funcionar</strong> pra você.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GuaranteeSection;
