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
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-6 text-center sm:text-left">
        {step.headline && <h2 className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mb-2 animate-fade-up">{step.headline}</h2>}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight animate-fade-up animation-delay-200">
          {step.question || step.headline}
        </h1>
        {step.sub && <p className="text-muted-foreground animate-fade-up animation-delay-400">{step.sub}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1 mt-2 animate-fade-up animation-delay-600">
        {step.options?.map((opt, index) => {
          // In an odd number of options, make the last one span full width
          const isOddTotal = step.options!.length % 2 !== 0;
          const isLast = index === step.options!.length - 1;
          const isFullWidthRow = isOddTotal && isLast;

          return (
            <button
              key={opt.id}
              onClick={() => {
                setTimeout(() => onNext(opt.id), 300);
              }}
              className={`relative overflow-hidden group rounded-xl border transition-all duration-300 flex flex-col items-center justify-end
                ${isFullWidthRow ? 'col-span-2' : ''}
                ${currentAnswer === opt.id 
                  ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background' 
                  : 'border-white/10 hover:border-primary/50'}`}
              style={{ minHeight: '180px' }}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${opt.imageUrl})`,
                  backgroundPosition: 'center',
                  // Using a placeholder fallback if image doesn't exist yet
                  backgroundColor: '#1a1a1a' 
                }}
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="relative z-10 p-3 w-full flex items-center justify-between">
                <span className={`font-semibold text-sm sm:text-base text-left ${currentAnswer === opt.id ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'}`}>
                  {opt.label}
                </span>
                <div className={`w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-colors
                  ${currentAnswer === opt.id ? 'border-primary bg-primary' : 'border-white/40'}`}>
                  {currentAnswer === opt.id && <Check className="w-3 h-3 text-background" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
