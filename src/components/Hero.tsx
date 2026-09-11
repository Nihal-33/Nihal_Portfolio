import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "AI Builder",
  "Software Developer",
  "Vibe Coder",
  "Problem Solver",
];

const floatingElements = [
  { text: "< React />", top: "20%", left: "10%", delay: 0 },
  { text: "{ TypeScript }", top: "70%", left: "15%", delay: 1 },
  { text: "AI", top: "15%", right: "15%", delay: 0.5 },
  { text: "Node.js", top: "60%", right: "10%", delay: 1.5 },
  { text: "Java", top: "40%", left: "5%", delay: 0.8 },
  { text: "C++", top: "80%", right: "20%", delay: 1.2 },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Role rotation
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);



  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden py-32">
      {/* Floating Elements (Subtle Parallax effect) */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-white/50 font-inter text-sm md:text-base whitespace-nowrap pointer-events-none hidden md:block"
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.text}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.2em] text-muted mb-6 uppercase"
        >
          B.Tech CSE • Parul University • 2025—2029
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="font-instrument text-7xl md:text-9xl leading-[0.9] mb-6"
        >
          Nihal<br />
          <span className="italic opacity-90">Jaiswal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-10 md:h-12 flex items-center justify-center overflow-hidden mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-3xl font-inter font-light text-accent bg-clip-text text-transparent bg-accent-gradient"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base md:text-lg text-muted max-w-2xl mb-10 leading-relaxed font-light"
        >
          I build websites, full-stack applications, AI-powered tools and digital products by combining clean engineering with modern design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button onClick={() => scrollTo('#projects')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium interactive hover:scale-105 transition-transform flex items-center justify-center gap-2">
            View My Work <span className="transform rotate-45">↓</span>
          </button>
          <button onClick={() => scrollTo('#contact')} className="w-full sm:w-auto px-8 py-4 rounded-full border border-stroke text-white hover:bg-white/5 transition-colors interactive flex items-center justify-center gap-2 group relative overflow-hidden">
             <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-20 transition-opacity z-0" />
             <span className="relative z-10 flex items-center gap-2">Let's Connect ↗</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 flex items-center gap-2 text-xs md:text-sm text-muted bg-surface/50 border border-stroke px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for freelance & internship opportunities
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-50 z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
