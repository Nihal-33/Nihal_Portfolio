import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["CODE", "CREATE", "BUILD", "INNOVATE"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Word cycling
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 700);

    // Progress counter
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        clearInterval(wordInterval);
        setTimeout(() => {
          onComplete();
        }, 500); // Wait a bit at 100% before fading out
      }
    }, interval);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-background text-text p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex justify-between items-start font-inter text-sm md:text-base tracking-widest text-muted">
        <div>
          PORTFOLIO<br />
          NIHAL JAISWAL
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-[1.5em] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={wordIndex}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="font-instrument text-5xl md:text-7xl lg:text-8xl italic leading-none"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-end w-full">
        <div className="font-instrument text-6xl md:text-8xl tabular-nums leading-none mb-4">
          {progress.toString().padStart(3, "0")}
        </div>
        <div className="w-full h-[2px] bg-surface relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent-gradient"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
