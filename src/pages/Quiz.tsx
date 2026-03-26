import { useState, useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { quizSteps, QuizStepData } from "../data/quizData";
// Componentes parciais (que vamos criar a seguir)
import SingleSelectStep from "@/components/quiz/SingleSelectStep";
import MultiSelectStep from "@/components/quiz/MultiSelectStep";
import ImageSelectStep from "@/components/quiz/ImageSelectStep";
import InfoStep from "@/components/quiz/InfoStep";
import NumberInputStep from "@/components/quiz/NumberInputStep";
import { BodySliderStep } from "@/components/quiz/BodySliderStep";
import LoadingStep from "@/components/quiz/LoadingStep";
import ResultStep from "@/components/quiz/ResultStep";
import { CTA_URL } from "../components/CTAButton";
import { captureUTMs, decorateURL } from "@/lib/utm";
import { trackMetaEvent } from "@/lib/meta-pixel";
import logo from "@/assets/logo-operacao-3em10.webp";
import { trackEvent, onStepEnter, onStepComplete, onSessionEnd } from "@/lib/tracker";

export default function Quiz() {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string | number, any>>({});
  const pageViewFired = useRef(false);

  useEffect(() => {
    if (pageViewFired.current) return;
    pageViewFired.current = true;
    trackMetaEvent("PageView");
  }, []);

  const step: QuizStepData = quizSteps[currentStepIndex];
  
  // Progress is calculated for numbered screens (1 to 17) -> index 1 to 17
  // Screen 1: Index 1 -> so total numbered steps = 17.
  const isNumberedScreen = currentStepIndex >= 1 && currentStepIndex <= 17;
  const progressPercent = isNumberedScreen ? (currentStepIndex / 17) * 100 : 0;

  useEffect(() => {
    captureUTMs();
    
    trackEvent({ event: 'session_start', meta: { 
      referrer: document.referrer,
      userAgent: navigator.userAgent,
    }});
    
    window.addEventListener('beforeunload', onSessionEnd);
    return () => window.removeEventListener('beforeunload', onSessionEnd);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (step.type === "result") {
      trackEvent({ event: 'result_view', stepIndex: currentStepIndex, stepId: String(step.id) });
    } else {
      onStepEnter(currentStepIndex, step.id);
    }
  }, [currentStepIndex]);

  const handleNext = (answer?: any) => {
    if (answer !== undefined) {
      setAnswers((prev) => ({ ...prev, [step.id]: answer }));
    }

    if (step.type !== 'result' && step.type !== 'loading') {
      onStepComplete(answer);
    }

    if (currentStepIndex < quizSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    trackEvent({ event: 'step_back', stepIndex: currentStepIndex, stepId: String(step.id) });
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
      case "body-slider":
        return <BodySliderStep step={step} onNext={handleNext} answers={answers} />;
      case "info":
        return <InfoStep step={step} onNext={handleNext} />;
      case "number-input":
        return <NumberInputStep step={step} onNext={handleNext} answers={answers} />;
      case "loading":
        return <LoadingStep onNext={handleNext} />;
      case "result":
        return <ResultStep answers={answers} onNext={() => {
          trackEvent({ event: 'result_cta_click' });
          trackMetaEvent("InitiateCheckout", { currency: "BRL", value: 47.0 });
          window.location.href = decorateURL(CTA_URL);
        }} />;
      default:
        return <div>Unknown step type</div>;
    }
  };

  return (
    <div className="h-[100dvh] bg-background relative selection:bg-primary/30 selection:text-white flex flex-col overflow-hidden">
      {/* Background glow effects - inherited from design system */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full ptr-events-none opacity-50 z-0 transform-gpu leading-none select-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full ptr-events-none opacity-50 z-0 transform-gpu leading-none select-none"></div>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-[20px] z-0 ptr-events-none transform-gpu leading-none select-none"></div>

      {/* Navbar com Progress Bar e Logo */}
      <div className="relative z-10 w-full pt-4 pb-2 px-6 flex flex-col items-center justify-center max-w-md mx-auto gap-4">
        <div className="w-full flex items-center justify-between">
          {currentStepIndex > 0 ? (
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-card/60 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
          ) : (
            <div className="w-10" />
          )}
          
          <div className="flex items-center gap-2">
            <img src={logo} alt="Operação -3kg em 10" className="w-8 h-8" />
            <span className="font-display font-black text-lg tracking-tight">
              <span className="text-gradient-accent text-glow-accent">Operação -3kg</span>{" "}
              <span className="text-gradient-primary">em 10</span>
            </span>
          </div>
          
          <div className="w-10"></div>
        </div>

        {/* Progress Bar (sem o número) */}
        {isNumberedScreen && (
          <div className="w-full h-1.5 bg-card/50 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(122,255,122,0.5)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Content - overflow-y-auto allowed only inside the main area se absolutely needed, 
          but the goal is to fit everything without scroll */}
      <main className="relative z-10 flex-1 flex flex-col w-full max-w-md mx-auto px-6 pb-6 pt-2 animate-fade-up overflow-hidden">
        <div key={currentStepIndex} className="h-full w-full flex flex-col overflow-hidden">
          {renderStep()}
        </div>
      </main>
    </div>
  );
}
