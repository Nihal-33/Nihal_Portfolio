import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workflow = [
  "Idea", "Prototype", "Build", "Test", "Launch"
];

export function VibeCoding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const lines = terminalRef.current.querySelectorAll('.terminal-line');
      
      gsap.set(lines, { opacity: 0, x: -10 });
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.to(lines, {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.1,
            ease: "steps(1)",
          });
        }
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-instrument text-5xl md:text-7xl mb-6"
          >
            I Don't Just Code.<br />
            <span className="italic text-transparent bg-clip-text bg-accent-gradient">I Build.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg font-light leading-relaxed mb-10 max-w-md"
          >
            I use modern AI tools, rapid prototyping and traditional software engineering to move from an idea to a working product faster.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 items-center">
            {workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="px-4 py-2 rounded-full border border-stroke bg-surface/50 text-sm font-medium"
                >
                  {step}
                </motion.div>
                {i < workflow.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                    className="text-muted"
                  >
                    ↓
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-[#0a0a0a] border border-stroke rounded-xl overflow-hidden shadow-2xl relative"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-stroke bg-surface/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto text-xs text-muted font-inter">vibe-coder ~ npm run build</div>
          </div>
          
          {/* Terminal Body */}
          <div ref={terminalRef} className="p-6 font-mono text-sm leading-loose text-gray-300">
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> idea = "build something useful"</div>
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> design()</div>
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> code()</div>
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> integrate_ai()</div>
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> test()</div>
            <div className="terminal-line"><span className="text-blue-400">&gt;</span> deploy()</div>
            <div className="terminal-line mt-4 text-green-400">✓ project ready</div>
            <div className="terminal-line mt-2 text-muted animate-pulse">_</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
