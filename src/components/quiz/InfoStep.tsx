import { QuizStepData } from "../../data/quizData";
import { CheckCircle2, Star } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

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
          <div className="w-full bg-card border border-white/5 rounded-xl overflow-hidden shrink-0 shadow-lg p-3">
            <p className="text-[10px] text-center text-muted-foreground font-semibold uppercase tracking-wider mb-2">Peso ao longo do tempo</p>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={[
                { semana: 'Sem 1', dieta: 82, protocolo: 82 },
                { semana: 'Sem 2', dieta: 80, protocolo: 80 },
                { semana: 'Sem 3', dieta: 81, protocolo: 78 },
                { semana: 'Sem 4', dieta: 79, protocolo: 76 },
                { semana: 'Sem 5', dieta: 81, protocolo: 75 },
                { semana: 'Sem 6', dieta: 80, protocolo: 73 },
                { semana: 'Sem 7', dieta: 82, protocolo: 72 },
                { semana: 'Sem 8', dieta: 80, protocolo: 70 },
              ]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="semana" tick={{ fill: '#888', fontSize: 9 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#888', fontSize: 9 }} axisLine={false} tickLine={false} domain={[68, 84]} />
                <Legend
                  verticalAlign="bottom"
                  iconType="line"
                  wrapperStyle={{ fontSize: 10, paddingTop: 4 }}
                />
                <Line type="monotone" dataKey="dieta" name="Dieta Comum" stroke="#ef4444" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="protocolo" name="Protocolo" stroke="#4ade80" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
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
