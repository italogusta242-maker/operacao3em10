import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GuaranteeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-[hsl(210_79%_95%)]" id="garantia">
      <div ref={ref} className={`container max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <Shield className="w-16 h-16 text-trust mx-auto mb-6" />

        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
          🛡️ Garantia Blindada de 7 Dias
        </h2>

        <p className="text-lg text-foreground mb-4">
          Eu sei que você já foi enganado(a) antes. Já comprou promessas que não funcionaram.
        </p>

        <p className="text-base text-muted-foreground mb-8">
          Por isso, estou colocando TODO o risco nas minhas costas:
        </p>

        <div className="border-l-4 border-trust bg-card rounded-r-xl p-6 md:p-8 text-left shadow-sm mb-8">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Se nos próximos <strong>7 dias</strong> você seguir o protocolo e, por <strong>QUALQUER motivo</strong>, não ficar satisfeito(a) com o resultado — você pede reembolso e recebe de volta <strong>cada centavo investido</strong>. Sem perguntas. Sem burocracia. Sem enrolação.
          </p>
        </div>

        <p className="text-lg font-semibold text-foreground">
          Ou seja: você só mantém o investimento se <strong className="text-primary">REALMENTE funcionar</strong> pra você.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
