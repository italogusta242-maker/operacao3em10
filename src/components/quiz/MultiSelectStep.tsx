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
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-8 text-center sm:text-left">
        {step.headline && <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mb-2 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="flex flex-col gap-3 flex-1 mt-2 animate-fade-up animation-delay-600 mb-20">
        <p className="text-xs text-muted-foreground mb-1">Selecione todas as opções que se aplicam:</p>
        {step.options?.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 group
                ${isSelected 
                  ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(122,255,122,0.15)]' 
                  : 'border-white/10 bg-card hover:border-primary/40 hover:bg-card/80'}`}
            >
              <div className={`w-5 h-5 shrink-0 rounded border flex items-center justify-center transition-colors
                ${isSelected ? 'border-primary bg-primary' : 'border-white/20 group-hover:border-primary/50'}`}>
                <Check className={`w-3 h-3 text-background transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <span className={`font-medium text-sm sm:text-base ${isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary transition-colors'}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-white/5 sm:relative sm:bg-transparent sm:border-t-0 sm:p-0">
        <button
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="w-full sm:max-w-md mx-auto block bg-primary text-primary-foreground font-bold py-4 rounded-xl text-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all cta-sonar"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
