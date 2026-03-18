import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(() => {
    // 23h 47m 12s in seconds
    const stored = sessionStorage.getItem("countdown_end");
    if (stored) {
      const remaining = Math.max(0, Math.floor((parseInt(stored) - Date.now()) / 1000));
      return remaining;
    }
    const seconds = 19 * 60 + 47;
    sessionStorage.setItem("countdown_end", String(Date.now() + seconds * 1000));
    return seconds;
  });

  useEffect(() => {
    if (time <= 0) return;
    const id = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [time]);

  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-lg px-4 py-2 mt-4">
      <span className="text-xs md:text-sm text-destructive font-semibold">Oferta expira em:</span>
      <span className="font-display font-black text-base md:text-lg text-white tabular-nums tracking-wider">
        {m}:{s}
      </span>
    </div>
  );
};

export default CountdownTimer;
