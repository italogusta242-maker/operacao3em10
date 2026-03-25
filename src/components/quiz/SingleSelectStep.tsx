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
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-8 text-center sm:text-left">
        {step.headline && <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mb-2 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="flex flex-col gap-3 flex-1 mt-2 animate-fade-up animation-delay-600">
        {step.options?.map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              // slight delay for visual feedback
              setTimeout(() => onNext(opt.id), 300);
            }}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group
              ${currentAnswer === opt.id 
                ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(122,255,122,0.15)]' 
                : 'border-white/10 bg-card hover:border-primary/40 hover:bg-card/80'}`}
          >
            <span className={`font-medium text-sm sm:text-base ${currentAnswer === opt.id ? 'text-primary' : 'text-foreground group-hover:text-primary transition-colors'}`}>
              {opt.label}
            </span>
            <div className={`w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-colors
              ${currentAnswer === opt.id ? 'border-primary bg-primary' : 'border-white/20 group-hover:border-primary/50'}`}>
              {(currentAnswer === opt.id || true) && <Check className={`w-3 h-3 text-background transition-opacity ${currentAnswer === opt.id ? 'opacity-100' : 'opacity-0 glow-hover'}`} />}
            </div>
          </button>
        ))}
      </div>

      {step.badges && (
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {step.badges.map((badge, idx) => (
            <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/20">
              {badge}
            </span>
          ))}
        </div>
      )}

      {step.footerText && (
        <div className="mt-8 text-center text-xs text-muted-foreground border-t border-white/5 pt-4">
          {step.footerText}
        </div>
      )}
    </div>
  );
}
