import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const LiveViewerCounter = () => {
  const [count, setCount] = useState(() => Math.floor(Math.random() * (450 - 300 + 1)) + 300);

  useEffect(() => {
    const tick = () => {
      setCount(Math.floor(Math.random() * (450 - 300 + 1)) + 300);
    };
    const id = setInterval(tick, Math.random() * 4000 + 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mt-3 text-xs md:text-sm text-muted-foreground animate-fade-in">
      <Zap className="w-3.5 h-3.5 text-accent" />
      <span>
        <strong className="text-accent tabular-nums">{count}</strong> pessoas visualizando agora
      </span>
    </div>
  );
};

export default LiveViewerCounter;
