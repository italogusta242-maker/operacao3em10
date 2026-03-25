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
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-8 text-center sm:text-left">
        {step.headline && <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mb-2 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center mt-4 animate-fade-up animation-delay-600 mb-24">
        <div className="relative flex items-center w-full max-w-[200px]">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-card border-2 border-white/10 rounded-2xl text-center text-5xl font-extrabold py-6 text-white focus:outline-none focus:border-primary transition-colors pr-10"
            placeholder="00"
            autoFocus
          />
          <span className="absolute right-6 text-xl text-muted-foreground font-bold font-body">kg</span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-white/5 sm:relative sm:bg-transparent sm:border-t-0 sm:p-0">
        <button
          onClick={handleContinue}
          disabled={!value || isNaN(Number(value))}
          className="w-full sm:max-w-md mx-auto block bg-primary text-primary-foreground font-bold py-4 rounded-xl text-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(122,255,122,0.3)] disabled:shadow-none"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
