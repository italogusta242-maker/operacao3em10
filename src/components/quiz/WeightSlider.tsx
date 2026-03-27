import { useState, useRef, useEffect } from 'react';

interface WeightSliderProps {
  min?: number;
  max?: number;
  initial?: number;
  unit?: string;
  onChange: (value: number) => void;
}

export function WeightSlider({ min = 40, max = 150, initial = 75, unit = 'kg', onChange }: WeightSliderProps) {
  const safeInitial = typeof initial === 'number' && !isNaN(initial) ? initial : 75;
  const [value, setValue] = useState(safeInitial);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startValue = useRef(initial);

  const totalTicks = max - min;
  const tickWidth = 12; // px por tick

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startValue.current = value;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    
    const diff = e.clientX - startX.current;
    // Puxar para a direita (diff positivo) deve diminuir o valor (trazer ticks da esquerda)
    // Então subtraímos o deslocamento
    const steps = Math.round(diff / tickWidth);
    const newValue = Math.min(max, Math.max(min, startValue.current - steps));
    
    if (newValue !== value) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // Sincronizar caso o valor inicial mude externamente
  useEffect(() => {
    if (typeof initial === 'number' && !isNaN(initial)) {
      setValue(initial);
    }
  }, [initial]);

  return (
    <div className="flex flex-col items-center select-none w-full animate-fade-in touch-none">
      {/* Valor em destaque */}
      <div className="flex items-baseline gap-2 mb-10">
        <span className="text-7xl font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          {value}
        </span>
        <span className="text-2xl text-muted-foreground font-bold">{unit}</span>
      </div>

      {/* Régua de Balança */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="w-full relative h-16 flex items-center cursor-ew-resize overflow-hidden touch-none"
      >
        {/* Marcador Central (Fixo) */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary rounded-full z-20 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
        
        {/* Suporte de gradiente para esconder as bordas */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />

        {/* Ticks (Régua Móvel) */}
        <div 
          className="absolute inset-y-0 left-1/2 flex items-end pb-2 transition-transform duration-150 ease-out h-full will-change-transform"
          style={{ 
            // -6px alinha o centro do primeiro slot de 12px com a agulha no valor 'min'
            transform: `translateX(${(min - value) * 12 - 6}px)`
          }}
        >
          {Array.from({ length: totalTicks + 1 }, (_, i) => {
            const tickVal = min + i;
            const isMajor = tickVal % 5 === 0;
            const isCurrent = tickVal === value;
            
            return (
              <div key={i} className="flex flex-col items-center justify-end shrink-0" style={{ width: 12 }}>
                <div 
                  className={`rounded-full transition-all duration-300 ${
                    isCurrent 
                      ? 'w-[2px] h-10 bg-primary shadow-[0_0_12px_rgba(34,197,94,0.8)]' 
                      : isMajor 
                        ? 'w-[2px] h-6 bg-primary/50' 
                        : 'w-[1px] h-3 bg-white/10'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Faixas de Min/Max */}
      <div className="flex justify-between w-full px-4 mt-8">
        <span className="text-xs font-bold text-muted-foreground/30 tracking-widest uppercase">{min}{unit}</span>
        <div className="h-[1px] flex-1 mx-4 self-center bg-white/5" />
        <span className="text-xs font-bold text-muted-foreground/30 tracking-widest uppercase">{max}{unit}</span>
      </div>
    </div>
  );
}
