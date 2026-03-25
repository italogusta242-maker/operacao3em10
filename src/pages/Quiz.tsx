import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { quizSteps, QuizStepData } from "../data/quizData";
// Componentes parciais (que vamos criar a seguir)
import SingleSelectStep from "../components/quiz/SingleSelectStep";
import MultiSelectStep from "../components/quiz/MultiSelectStep";
import ImageSelectStep from "../components/quiz/ImageSelectStep";
import InfoStep from "../components/quiz/InfoStep";
import NumberInputStep from "../components/quiz/NumberInputStep";
import LoadingStep from "../components/quiz/LoadingStep";
import ResultStep from "../components/quiz/ResultStep";
import { CTA_URL } from "../components/CTAButton";
import { trackMetaEvent } from "@/lib/meta-pixel";

export default function Quiz() {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  const step: QuizStepData = quizSteps[currentStepIndex];
  
  // Progress is calculated for numbered screens (1 to 17) -> index 1 to 17
  // Screen 1: Index 1 -> so total numbered steps = 17.
  const isNumberedScreen = currentStepIndex >= 1 && currentStepIndex <= 17;
  const progressPercent = isNumberedScreen ? (currentStepIndex / 17) * 100 : 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStepIndex]);

  const handleNext = (answer?: any) => {
    if (answer !== undefined) {
      setAnswers((prev) => ({ ...prev, [currentStepIndex]: answer }));
    }
    if (currentStepIndex < quizSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      navigate("/");
    }
  };

  const renderStep = () => {
    switch (step.type) {
      case "entrada":
      case "single-select":
        return <SingleSelectStep step={step} onNext={handleNext} answers={answers} />;
      case "multi-select":
        return <MultiSelectStep step={step} onNext={handleNext} answers={answers} />;
      case "image-single-select":
        return <ImageSelectStep step={step} onNext={handleNext} answers={answers} />;
      case "info":
        return <InfoStep step={step} onNext={handleNext} />;
      case "number-input":
        return <NumberInputStep step={step} onNext={handleNext} answers={answers} />;
      case "loading":
        return <LoadingStep onNext={handleNext} />;
      case "result":
        return <ResultStep answers={answers} onNext={() => {
          trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
          window.location.href = CTA_URL;
        }} />;
      default:
        return <div>Unknown step type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white flex flex-col">
      {/* Background glow effects - inherited from design system */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full ptr-events-none opacity-50 z-0 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full ptr-events-none opacity-50 z-0 animate-pulse delay-1000"></div>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-[20px] z-0 ptr-events-none"></div>

      {/* Navbar & Progress */}
      <div className="relative z-10 w-full pt-4 pb-2 px-6 flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevious}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-card/60 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          
          <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Operação -3kg
          </div>
          
          {/* Spacer for centering */}
          <div className="w-10"></div>
        </div>

        {isNumberedScreen && (
          <div className="w-full flex-col gap-2 flex animate-fade-in">
            <div className="flex justify-between text-xs text-muted-foreground font-medium">
              <span>Progresso</span>
              <span className="text-primary">{currentStepIndex}/17</span>
            </div>
            <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <main className="relative z-10 flex-1 flex flex-col w-full max-w-md mx-auto px-6 pb-24 pt-6 animate-fade-up">
        {renderStep()}
      </main>
    </div>
  );
}
