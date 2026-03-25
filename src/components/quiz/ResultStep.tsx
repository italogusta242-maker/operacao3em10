import { AlertTriangle, TrendingDown } from "lucide-react";

interface Props {
  answers: any;
  onNext: () => void;
}

export default function ResultStep({ answers, onNext }: Props) {
  // Extract inputs
  const currentWeight = Number(answers[16]) || 80;
  const desiredWeight = Number(answers[17]) || 70;
  
  // Calculate potential -> realistic potential in 10 days is between 3 and 7kg
  // We can just cap it at what the user wants or max 7kg.
  const diff = currentWeight - desiredWeight;
  const realisticDrop = diff > 7 ? 7 : (diff < 3 ? 3 : diff);

  return (
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-8 text-center">
        <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-2 animate-fade-up">Diagnóstico Finalizado</h2>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight animate-fade-up animation-delay-200">
          Seu Diagnóstico Personalizado
        </h1>
      </div>

      <div className="flex-1 flex flex-col gap-6 w-full animate-fade-up animation-delay-400 mb-32">
        {/* Bloco 1 - Perfil */}
        <div className="bg-card/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
          
          <h3 className="text-white/60 mb-6 font-semibold uppercase tracking-wider text-xs">Análise de Perfil</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Peso Atual</span>
              <span className="text-2xl font-bold text-white">{currentWeight} <span className="text-sm text-white/50">kg</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">Meta</span>
              <span className="text-2xl font-bold text-white">{desiredWeight} <span className="text-sm text-white/50">kg</span></span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-primary font-bold">Potencial em 10 dias</span>
              <span className="text-white text-sm">Realista para o seu perfil</span>
            </div>
            <div className="text-3xl font-black text-primary flex items-center gap-1">
              <TrendingDown className="w-5 h-5 opacity-80" />
              -{realisticDrop}kg
            </div>
          </div>
        </div>

        {/* Bloco 2 - Bloqueios */}
        <div className="bg-card/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
          <h3 className="text-white/60 mb-6 font-semibold uppercase tracking-wider text-xs">Principais bloqueios identificados:</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white font-medium">Provável retenção de líquido</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white font-medium">Inflamação por alimentação inadequada</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white font-medium">Metabolismo desacelerado por estresse</span>
            </div>
          </div>
        </div>

        {/* Headline Transicao */}
        <div className="mt-4 p-4 border-l-4 border-primary bg-primary/5 rounded-r-xl">
          <p className="text-lg font-medium text-white/90 leading-tight">
            Com o <span className="font-bold text-primary">Protocolo Operação -3kg em 10</span>, você tem <strong className="text-xl">94%</strong> de chance de atingir sua meta logo na primeira semana.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-white/5 z-50">
        <button
          onClick={onNext}
          className="w-full sm:max-w-md mx-auto block bg-accent text-accent-foreground font-extrabold py-5 rounded-xl text-xl uppercase tracking-wide
            hover:bg-accent/90 transition-all cta-shimmer shadow-[0_0_30px_rgba(255,102,0,0.4)]"
        >
          Quero Começar Agora
        </button>
      </div>
    </div>
  );
}
