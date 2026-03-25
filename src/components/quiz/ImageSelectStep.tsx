import { QuizStepData } from "../../data/quizData";
import { Check } from "lucide-react";
import { onOptionSelect } from "@/lib/tracker";

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

      <div className="flex flex-col gap-3 flex-1 animate-fade-up animation-delay-600 overflow-y-auto pr-1 pb-4 custom-scrollbar">
        {step.options?.map((opt) => (
          <button
            key={opt.id}
            onClick={() => {
              onOptionSelect(opt.id);
              setTimeout(() => onNext(opt.id), 250);
            }}
            className={`relative overflow-hidden group rounded-xl border transition-all duration-300 flex flex-col cursor-pointer p-0 w-full h-[220px] shrink-0
              ${currentAnswer === opt.id 
                ? 'border-primary ring-1 ring-primary' 
                : 'border-transparent bg-[#111] hover:border-white/10'}`}
          >
            {/* Image */}
            <img 
              src={opt.imageUrl || ''} 
              alt={opt.label}
              className="w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            
            {/* Label */}
            <span className={`absolute bottom-3 left-4 text-base font-bold transition-colors z-10
              ${currentAnswer === opt.id ? 'text-primary drop-shadow-[0_0_8px_rgba(122,255,122,0.5)]' : 'text-white drop-shadow-md'}`}>
              {opt.label}
            </span>

            {/* Radio Indicator */}
            <div className={`absolute bottom-3 right-4 w-5 h-5 rounded-full border flex items-center justify-center transition-all z-10
              ${currentAnswer === opt.id ? 'border-primary bg-primary' : 'border-white/40 bg-transparent'}`}>
              {currentAnswer === opt.id && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
