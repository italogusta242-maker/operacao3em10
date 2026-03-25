import { QuizStepData } from "../../data/quizData";
import { Check } from "lucide-react";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
  answers: any;
}

export default function ImageSelectStep({ step, onNext, answers }: Props) {
  const currentAnswer = answers[step.id];

  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-4 text-center sm:text-left shrink-0">
        {step.headline && <h2 className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mb-1 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mb-1 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground text-xs animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1 animate-fade-up animation-delay-600 overflow-y-auto pr-1 pb-4 custom-scrollbar">
        {step.options?.map((opt, index) => {
          const isOddTotal = step.options!.length % 2 !== 0;
          const isLast = index === step.options!.length - 1;
          const isFullWidthRow = isOddTotal && isLast;

          return (
            <button
              key={opt.id}
              onClick={() => {
                setTimeout(() => onNext(opt.id), 250);
              }}
              className={`relative overflow-hidden group rounded-xl border transition-all duration-300 flex flex-col items-center justify-end shrink-0
                ${isFullWidthRow ? 'col-span-2' : ''}
                ${currentAnswer === opt.id 
                  ? 'border-primary ring-1 ring-primary' 
                  : 'border-white/5 hover:border-primary/30'}`}
              style={{ height: isFullWidthRow ? '120px' : '140px' }}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${opt.imageUrl || ''})`,
                  backgroundPosition: 'center',
                  backgroundColor: '#0a0a0a' 
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-2.5 w-full flex items-center justify-between">
                <span className={`font-bold text-[13px] text-left leading-tight drop-shadow-md ${currentAnswer === opt.id ? 'text-primary' : 'text-white'}`}>
                  {opt.label}
                </span>
                <div className={`w-3.5 h-3.5 shrink-0 rounded-full border flex items-center justify-center transition-colors
                  ${currentAnswer === opt.id ? 'border-primary bg-primary' : 'border-white/40 bg-black/50'}`}>
                  {currentAnswer === opt.id && <Check className="w-2 h-2 text-background" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
