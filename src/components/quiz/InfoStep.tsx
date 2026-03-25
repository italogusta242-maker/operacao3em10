import { QuizStepData } from "../../data/quizData";
import { CheckCircle2 } from "lucide-react";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
}

export default function InfoStep({ step, onNext }: Props) {
  return (
    <div className="flex flex-col h-full animate-fade-in w-full">
      <div className="mb-6 text-center sm:text-left">
        {step.headline && (
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight animate-fade-up">
            {step.headline}
          </h1>
        )}
        
        {step.sub && (
          <p className="text-muted-foreground whitespace-pre-line animate-fade-up animation-delay-200 text-lg leading-relaxed">
            {step.sub}
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-6 mt-4 mb-24 animate-fade-up animation-delay-400">
        {step.chartImage && (
          <div className="w-full h-48 bg-card border border-white/10 rounded-xl overflow-hidden relative shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${step.chartImage})`, backgroundColor: '#1a1a1a' }}
            />
          </div>
        )}

        {step.list && (
          <div className="flex flex-col gap-4">
            {step.list.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        )}

        {step.testimonial && (
          <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="italic text-lg text-white mb-4 font-normal leading-relaxed">
              {step.testimonial.text}
            </p>
            <p className="text-sm text-primary font-bold uppercase tracking-wider">
              {step.testimonial.author}
            </p>
          </div>
        )}

        {step.badges && (
          <div className="flex flex-wrap gap-2 justify-center py-4">
            {step.badges.map((badge, idx) => (
              <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold border border-primary/20 tracking-wide">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-white/5 sm:relative sm:bg-transparent sm:border-t-0 sm:p-0">
        <button
          onClick={() => onNext(true)}
          className="w-full sm:max-w-md mx-auto block bg-primary text-primary-foreground font-bold py-4 rounded-xl text-lg
            hover:bg-primary/90 transition-all cta-sonar shadow-[0_0_20px_rgba(122,255,122,0.3)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
