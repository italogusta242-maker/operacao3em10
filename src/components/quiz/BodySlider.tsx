import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BodySliderProps {
  images: string[];
  labels: string[];
  value: number;
  onChange: (index: number) => void;
}

export function BodySlider({ images, labels, value, onChange }: BodySliderProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto h-full animate-fade-in select-none">
      {/* Container da Imagem */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-[300px]">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <img
          src={images[value]}
          alt={labels[value]}
          className="h-full max-h-[70vh] w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        />
      </div>

      {/* Controles do Slider */}
      <div className="w-full px-4 pt-4 pb-8 space-y-6">
        {/* Labels Superiores (Interativas) */}
        <div className="flex justify-between w-full px-2">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => onChange(index)}
              className={cn(
                "text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300",
                index === value 
                  ? "text-primary scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" 
                  : "text-muted-foreground/40 hover:text-muted-foreground/70"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Input Range Customizado */}
        <div className="relative w-full h-12 flex items-center pb-2">
          {/* Track customizada */}
          <div className="absolute inset-x-0 h-1 bg-white/10 rounded-full" />
          <div 
            className="absolute left-0 h-1 bg-primary rounded-full"
            style={{ width: `${(value / (labels.length - 1)) * 100}%` }}
          />

          <input
            type="range"
            min="0"
            max={labels.length - 1}
            step="1"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="absolute inset-x-0 w-full h-12 bg-transparent appearance-none cursor-pointer z-10 
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 
                       [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                       [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary 
                       [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(34,197,94,0.8),0_4px_10px_rgba(0,0,0,0.5)]
                       [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
