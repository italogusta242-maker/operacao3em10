import { useState } from "react";
import { QuizStepData } from "../../data/quizData";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
  answers: any;
}

export default function NumberInputStep({ step, onNext, answers }: Props) {
  const [value, setValue] = useState(answers[step.id] || "");

  const handleContinue = () => {
    if (value && !isNaN(Number(value))) {
      onNext(Number(value));
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

      <div className="flex-1 flex flex-col items-center justify-center animate-fade-up animation-delay-600 w-full mb-10 mt-8">
        <div className="text-center mb-8">
          <span className="text-6xl font-black text-white">{value}</span>
          <span className="text-2xl text-muted-foreground ml-1">kg</span>
        </div>
        
        <div className="w-full max-w-xs relative px-4">
          <input
            type="range"
            min="40"
            max="150"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full appearance-none bg-transparent h-12 focus:outline-none cursor-grab active:cursor-grabbing slider-thumb-premium slider-track-premium"
            style={{
               background: `linear-gradient(to right, #ff6600 0%, #ff6600 ${(value - 40) / (150 - 40) * 100}%, rgba(255,255,255,0.1) ${(value - 40) / (150 - 40) * 100}%, rgba(255,255,255,0.1) 100%)`,
               borderRadius: '999px',
               height: '8px',
               marginTop: '20px'
            }}
          />
          {/* Custom tick marks under slider */}
          <div className="flex justify-between text-[10px] text-muted-foreground/40 mt-3 font-semibold px-1 pointer-events-none">
            <span>40kg</span>
            <span>70kg</span>
            <span>100kg</span>
            <span>150kg</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 pb-2">
        <button
          onClick={handleContinue}
          disabled={!value || isNaN(Number(value))}
          className="w-full bg-primary text-primary-foreground font-black py-4 rounded-xl text-lg uppercase tracking-wider
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(122,255,122,0.2)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
