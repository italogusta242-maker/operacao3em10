import { QuizStepData } from "../../data/quizData";
import { motion } from "framer-motion";

interface Props {
  step: QuizStepData;
  onNext: (answer: any) => void;
}

export default function IntroHeroStep({ step, onNext }: Props) {
  return (
    <div className="flex flex-col h-full items-start justify-center text-left animate-fade-in w-full relative overflow-hidden px-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex flex-col items-start justify-center w-full max-w-lg z-10"
      >
        <p className="text-2xl sm:text-4xl font-black text-white leading-[1.1] sm:leading-[1.1] tracking-tight">
          {step.sub}
        </p>
      </motion.div>

      <div className="w-full shrink-0 pb-10 mt-auto max-w-md z-10 mx-auto">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => onNext(true)}
          className="w-full bg-primary text-primary-foreground font-black py-4 rounded-2xl text-base sm:text-lg
            hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(122,255,122,0.4)] uppercase tracking-widest
            active:scale-95 transform-gpu"
        >
          {step.ctaText || "Começar Agora"}
        </motion.button>
      </div>
    </div>
  );
}
