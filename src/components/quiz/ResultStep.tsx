import { AlertTriangle, TrendingDown } from "lucide-react";

interface Props {
  answers: any;
  onNext: () => void;
}

export default function ResultStep({ answers, onNext }: Props) {
  // Extract inputs
  const currentWeight = Number(answers[16]) || 80;
  const desiredWeight = Number(answers[17]) || 70;
  
  // Calculate potential -> the user requested it to be strictly fixed at "-3kg" always.
  const realisticDrop = 3;

  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-4 text-center shrink-0">
        <h2 className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1 animate-fade-up">Diagnóstico Finalizado</h2>
        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight animate-fade-up animation-delay-200">
          Seu Diagnóstico Personalizado
        </h1>
      </div>

      <div className="flex-1 flex flex-col gap-4 w-full animate-fade-up animation-delay-400 overflow-y-auto pr-1 pb-4 custom-scrollbar">
        {/* Bloco 1 - Perfil */}
        <div className="bg-card/50 border border-white/5 p-4 rounded-2xl relative overflow-hidden shadow-lg shrink-0">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
          
          <h3 className="text-white/40 mb-3 font-bold uppercase tracking-widest text-[10px]">Análise de Perfil</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex flex-col">
              <span className="text-muted-foreground/60 text-[11px] font-bold">Peso Atual</span>
              <span className="text-xl font-bold text-white">{currentWeight} <span className="text-xs text-white/40 italic">kg</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground/60 text-[11px] font-bold">Meta</span>
              <span className="text-xl font-bold text-white">{desiredWeight} <span className="text-xs text-white/40 italic">kg</span></span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-primary font-black text-xs tracking-tight">Potencial em 10 dias</span>
              <span className="text-white/60 text-[10px]">Realista para o seu perfil</span>
            </div>
            <div className="text-2xl font-black text-primary flex items-center gap-1">
              <TrendingDown className="w-4 h-4" />
              -{realisticDrop}kg
            </div>
          </div>
        </div>

        {/* Bloco 2 - Bloqueios */}
        <div className="bg-card/50 border border-white/5 p-4 rounded-2xl shrink-0">
          <h3 className="text-white/40 mb-3 font-bold uppercase tracking-widest text-[10px]">Bloqueios identificados:</h3>
          
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-white/90 font-medium text-xs leading-tight">Provável retenção de líquido</span>
            </div>
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-white/90 font-medium text-xs leading-tight">Inflamação por alimentação inadequada</span>
            </div>
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-white/90 font-medium text-xs leading-tight">Metabolismo desacelerado por estresse</span>
            </div>
          </div>
        </div>

        {/* Headline Transicao */}
        <div className="p-3 border-l-2 border-primary bg-primary/5 rounded-r-xl shrink-0">
          <p className="text-sm font-semibold text-white/90 leading-tight">
            Com o <span className="text-primary">Protocolo Operação -3kg</span>, você tem <strong className="text-primary font-black">94%</strong> de chance de atingir sua meta logo na primeira semana.
          </p>
        </div>
      </div>

      <div className="shrink-0 pb-2">
        <button
          onClick={onNext}
          className="w-full bg-accent text-accent-foreground font-black py-4 rounded-xl text-lg uppercase tracking-wider
            hover:bg-accent/90 transition-all shadow-[0_0_25px_rgba(255,102,0,0.3)] animate-pulse"
        >
          Quero Começar Agora
        </button>
      </div>
    </div>
  );
}
