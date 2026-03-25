import { useState, useEffect } from "react";

interface Props {
  onNext: (answer: any) => void;
}

const LOAD_TEXTS = [
  "Calculando seu potencial de desinchar...",
  "Identificando os maiores bloqueios...",
  "Montando sua projeção de resultado..."
];

export default function LoadingStep({ onNext }: Props) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Total wait time = 4.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // +2% every 90ms = ~4.5 seconds to 100
      });
    }, 90);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < LOAD_TEXTS.length - 1 ? prev + 1 : prev));
    }, 1500); // Change text every 1.5s

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => onNext(true), 600);
    }
  }, [progress, onNext]);

  return (
    <div className="flex flex-col h-full animate-fade-in w-full items-center justify-center min-h-[60vh]">
      
      <div className="w-32 h-32 relative mb-12">
        {/* Outer rotating ring */}
        <svg className="w-full h-full absolute inset-0 text-primary/20 animate-spin" viewBox="0 0 100 100">
          <circle className="stroke-current" strokeWidth="4" fill="transparent" cx="50" cy="50" r="46" />
        </svg>
        
        {/* Inner progress ring */}
        <svg className="w-full h-full absolute inset-0 text-primary rotate-[-90deg] transition-all duration-300" viewBox="0 0 100 100">
          <circle 
            className="stroke-current" 
            strokeWidth="4" 
            fill="transparent" 
            cx="50" 
            cy="50" 
            r="46" 
            strokeDasharray="289" // 2 * pi * 46 = 289
            strokeDashoffset={289 - (progress / 100) * 289}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-white glow-text">
          {Math.min(progress, 100)}%
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 text-center">
        {progress === 100 ? "Seu plano está pronto!" : "Analisando suas respostas..."}
      </h1>
      
      <div className="h-8 flex items-center justify-center">
        <p className="text-primary font-medium text-center animate-pulse">
          {progress === 100 ? "Redirecionando..." : LOAD_TEXTS[textIndex]}
        </p>
      </div>

    </div>
  );
}
