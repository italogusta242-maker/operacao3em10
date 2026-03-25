import { QuizStepData } from "../../data/quizData";
import { CheckCircle2, Star } from "lucide-react";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
}

export default function InfoStep({ step, onNext }: Props) {
  return (
    <div className="flex flex-col h-full animate-fade-in w-full overflow-hidden">
      <div className="mb-4 text-center sm:text-left shrink-0">
        {step.headline && (
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight animate-fade-up">
            {step.headline}
          </h1>
        )}
        
        {step.sub && (
          <p className="text-muted-foreground whitespace-pre-line animate-fade-up animation-delay-200 text-sm leading-relaxed">
            {step.sub}
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-4 mt-2 overflow-y-auto pr-1 pb-20 custom-scrollbar animate-fade-up animation-delay-400">
        {step.chartImage && (
          <div className="w-full h-32 bg-card border border-white/5 rounded-xl overflow-hidden relative shrink-0 shadow-lg">
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${step.chartImage})`, backgroundColor: '#0a0a0a' }}
            />
          </div>
        )}

        {step.list && (
          <div className="flex flex-col gap-2 shrink-0">
            {step.list.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-card p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-foreground leading-tight">{item}</span>
              </div>
            ))}
          </div>
        )}

        {step.testimonial && (
          <div className="bg-gradient-to-br from-card to-card/50 p-4 rounded-2xl border border-white/5 relative overflow-hidden shrink-0">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <p className="italic text-sm text-white mb-3 font-medium leading-relaxed">
               "{step.testimonial.text.replace(/⭐/g, "").trim().replace(/^"|"$/g, "")}"
            </p>
            <div className="flex flex-col gap-1">
              <div className="text-orange-500 flex gap-0.5 text-xs">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                {step.testimonial.author}
              </p>
            </div>
          </div>
        )}

        {step.badges && (
          <div className="flex flex-wrap gap-1.5 justify-center py-2 shrink-0">
            {step.badges.map((badge, idx) => (
              <span key={idx} className="bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold border border-primary/20 tracking-wide">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 pb-2">
        <button
          onClick={() => onNext(true)}
          className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl text-base
            hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(122,255,122,0.2)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
