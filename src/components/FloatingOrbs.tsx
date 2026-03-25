import { motion } from "framer-motion";

const orbs = [
  { size: 6, x: "15%", y: "20%", duration: 5, delay: 0, opacity: 0.4 },
  { size: 4, x: "80%", y: "30%", duration: 7, delay: 1, opacity: 0.3 },
  { size: 5, x: "60%", y: "70%", duration: 4, delay: 0.5, opacity: 0.5 },
  { size: 3, x: "30%", y: "80%", duration: 6, delay: 2, opacity: 0.35 },
  { size: 4, x: "75%", y: "60%", duration: 5.5, delay: 1.5, opacity: 0.45 },
];

const FloatingOrbs = () => (
  <>
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="hidden md:block absolute rounded-full pointer-events-none"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: "hsl(24 100% 50%)",
          boxShadow: `0 0 ${orb.size * 3}px ${orb.size}px hsl(24 100% 50% / 0.4)`,
        }}
        animate={{
          y: [-20, 20, -20],
          opacity: [orb.opacity * 0.6, orb.opacity, orb.opacity * 0.6],
        }}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: orb.delay,
        }}
      />
    ))}
  </>
);

export default FloatingOrbs;
