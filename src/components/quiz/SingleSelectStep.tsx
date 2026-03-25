import { QuizStepData } from "../../data/quizData";
import { Check } from "lucide-react";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
  answers: any;
}

export default function SingleSelectStep({ step, onNext, answers }: Props) {
  const currentAnswer = answers[step.id];

  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-4 text-center sm:text-left">
        {step.headline && <h2 className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mb-1 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mb-1 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground text-xs animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="flex flex-col gap-2 flex-1 animate-fade-up animation-delay-600 overflow-y-auto pr-1 custom-scrollbar">
        {step.options?.map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              setTimeout(() => onNext(opt.id), 250);
            }}
            className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group shrink-0
              ${currentAnswer === opt.id 
                ? 'border-primary bg-primary/10' 
                : 'border-white/5 bg-card/50 hover:border-primary/30'}`}
          >
            <span className={`font-semibold text-sm ${currentAnswer === opt.id ? 'text-primary' : 'text-foreground'}`}>
              {opt.label}
            </span>
            <div className={`w-4 h-4 shrink-0 rounded-full border flex items-center justify-center transition-colors
              ${currentAnswer === opt.id ? 'border-primary bg-primary' : 'border-white/20'}`}>
              {currentAnswer === opt.id && <Check className="w-2.5 h-2.5 text-background" />}
            </div>
          </button>
        ))}
      </div>

      {step.badges && (
        <div className="flex flex-wrap gap-1.5 justify-center mt-4 shrink-0">
          {step.badges.map((badge, idx) => (
            <span key={idx} className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold border border-primary/20">
              {badge}
            </span>
          ))}
        </div>
      )}

      {step.footerText && (
        <div className="mt-6 mb-2 text-center shrink-0">
          <p className="text-sm font-bold text-white/90 bg-white/5 border border-white/10 rounded-xl py-3 px-4 shadow-lg inline-flex items-center gap-2">
            <span className="text-lg">⚠️</span> {step.footerText.replace('⚠️ ', '')}
          </p>
        </div>
      )}
    </div>
  );
}
