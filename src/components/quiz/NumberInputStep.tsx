import { useState } from "react";
import { QuizStepData } from "../../data/quizData";
import { WeightSlider } from "./WeightSlider";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
  answers: any;
}

export default function NumberInputStep({ step, onNext, answers }: Props) {
  const [value, setValue] = useState(answers[step.id] || 75);

  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-8 text-center sm:text-left shrink-0">
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight animate-fade-up">
          {step.question}
        </h1>
        <p className="text-muted-foreground text-xs animate-fade-up animation-delay-200">
          Deslize a régua para ajustar o valor exato.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center py-8 animate-fade-up animation-delay-400">
        <WeightSlider
          min={40}
          max={150}
          initial={value}
          unit="kg"
          onChange={(val) => setValue(val)}
        />
      </div>

      <div className="mt-auto pt-6 animate-fade-up animation-delay-600 pb-2">
        <button
          onClick={() => onNext(value)}
          className="w-full py-4 bg-primary text-white text-lg font-bold rounded-xl transition-all hover:brightness-110 active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
