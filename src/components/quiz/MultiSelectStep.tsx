import { useState } from "react";
import { QuizStepData } from "../../data/quizData";
import { Check } from "lucide-react";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
  answers: any;
}

export default function MultiSelectStep({ step, onNext, answers }: Props) {
  const [selected, setSelected] = useState<string[]>(answers[step.id] || []);

  const toggleOption = (id: string) => {
    setSelected((prev) => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-4 text-center sm:text-left shrink-0">
        {step.headline && <h2 className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mb-1 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mb-1 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground text-xs animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="flex flex-col gap-2 flex-1 animate-fade-up animation-delay-600 overflow-y-auto pr-1 mb-4 custom-scrollbar">
        <p className="text-[10px] text-muted-foreground/60 mb-1">Selecione todas as que se aplicam:</p>
        {step.options?.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 group shrink-0
                ${isSelected 
                  ? 'border-primary bg-primary/10' 
                  : 'border-white/5 bg-card/50 hover:border-primary/30'}`}
            >
              <div className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-colors
                ${isSelected ? 'border-primary bg-primary' : 'border-white/20'}`}>
                <Check className={`w-2.5 h-2.5 text-background transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <span className={`font-semibold text-sm ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="shrink-0 pb-2">
        <button
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl text-base
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(122,255,122,0.2)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
