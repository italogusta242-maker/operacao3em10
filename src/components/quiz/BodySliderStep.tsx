import { useState } from 'react';
import { BodySlider } from './BodySlider';
import { QuizStepData } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { onSliderChange, onSliderFinal } from '@/lib/tracker';

interface BodySliderStepProps {
  step: QuizStepData;
  onNext: (answer: string) => void;
  answers: Record<number, any>;
}

export function BodySliderStep({ step, onNext, answers }: BodySliderStepProps) {
  // Inicializa com o valor já salvo se existir, ou o primeiro (índice 0)
  const initialValue = 0;
  const [selectedIndex, setSelectedIndex] = useState(initialValue);

  const images = step.options?.map(opt => opt.imageUrl || '') || [];
  const labels = step.options?.map(opt => opt.label) || [];

  const handleNext = () => {
    const selectedOption = step.options?.[selectedIndex];
    if (selectedOption) {
      onSliderFinal(selectedOption.id);
      onNext(selectedOption.id);
    }
  };

  const handleChange = (val: number) => {
    setSelectedIndex(val);
    const selectedOption = step.options?.[val];
    if (selectedOption) {
      onSliderChange(selectedOption.id);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="text-center space-y-2 mb-4 px-4 overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white leading-tight">
          {step.question}
        </h2>
        {step.sub && (
          <p className="text-muted-foreground text-sm font-medium">
            {step.sub}
          </p>
        )}
      </div>

      <div className="flex-1 min-h-0">
        <BodySlider
          images={images}
          labels={labels}
          value={selectedIndex}
          onChange={handleChange}
        />
      </div>

      <div className="mt-auto pt-4 px-4">
        <Button 
          onClick={handleNext}
          className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-background rounded-2xl shadow-lg shadow-primary/20 transition-all border-none"
        >
          {step.id === 3 ? 'Continuar' : 'Definir Objetivo'}
        </Button>
      </div>
    </div>
  );
}
