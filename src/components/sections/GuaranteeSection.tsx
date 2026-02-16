import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-[hsl(210_60%_96%)] to-[hsl(210_50%_94%)] relative overflow-hidden" id="garantia">
      <div className="absolute top-10 right-10 w-60 h-60 bg-[hsl(210_80%_50%/0.06)] rounded-full blur-[100px]" />
      
      <ScrollReveal className="container max-w-3xl text-center px-5 relative z-10">
        <Shield className="w-12 h-12 md:w-16 md:h-16 text-trust mx-auto mb-4 md:mb-6" />

        <h2 className="font-display font-extrabold text-xl md:text-3xl lg:text-4xl text-foreground mb-4 md:mb-6">
          🛡️ Garantia blindada de 7 dias
        </h2>

        <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4">
          Eu sei que você já foi enganado(a) antes. Já comprou promessas que não funcionaram.
        </p>

        <p className="text-xs md:text-base text-muted-foreground mb-6 md:mb-8">
          Por isso, estou colocando TODO o risco nas minhas costas:
        </p>

        <div className="border-l-4 border-trust bg-card rounded-r-xl p-4 md:p-8 text-left shadow-sm mb-6 md:mb-8">
          <p className="text-sm md:text-lg text-foreground leading-relaxed">
            Se nos próximos <strong>7 dias</strong> você seguir o protocolo e, por <strong>QUALQUER motivo</strong>, não ficar satisfeito(a) com o resultado, você pede reembolso e recebe de volta <strong>cada centavo investido</strong>. Sem perguntas. Sem burocracia. Sem enrolação.
          </p>
        </div>

        <p className="text-sm md:text-lg font-semibold text-foreground">
          Ou seja: você só mantém o investimento se <strong className="text-primary">REALMENTE funcionar</strong> pra você.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default GuaranteeSection;
