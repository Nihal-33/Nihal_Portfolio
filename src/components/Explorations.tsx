import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Code2, Sparkles, LayoutDashboard, Terminal, Compass, Cpu } from "lucide-react";

// Enhanced placeholders for the grid
const explorations = [
  { id: 1, type: "UI", icon: Compass },
  { id: 2, type: "AI", icon: Sparkles },
  { id: 3, type: "Dashboard", icon: LayoutDashboard },
  { id: 4, type: "Code", icon: Terminal },
  { id: 5, type: "Landing", icon: Code2 },
  { id: 6, type: "Product", icon: Cpu },
];

export function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile to reduce movement
    const isMobile = window.innerWidth < 768;
    const movement = isMobile ? 50 : 200;

    if (containerRef.current && col1Ref.current && col2Ref.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        animation: gsap.to(col1Ref.current, { y: movement, ease: "none" }),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        animation: gsap.to(col2Ref.current, { y: -movement, ease: "none" }),
      });
    }
  }, []);

  return (
    <section className="py-32 px-4 md:px-8 w-full overflow-hidden bg-background/50 backdrop-blur-sm border-y border-stroke/50 relative" ref={containerRef}>
      <div className="absolute inset-0 bg-accent-gradient opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text */}
        <div className="w-full lg:w-1/3 relative z-10 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-instrument text-5xl md:text-7xl mb-6 leading-tight"
          >
            Experiments &<br />
            <span className="italic text-transparent bg-clip-text bg-accent-gradient">Explorations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg font-light leading-relaxed"
          >
            A visual playground for code, interfaces, AI experiments and creative ideas.
          </motion.p>
        </div>

        {/* Parallax Gallery */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4 md:gap-8 h-[600px] md:h-[800px] overflow-hidden rotate-[-5deg] scale-110">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-4 md:gap-8 -mt-[200px]">
            {explorations.slice(0, 3).map((item) => (
              <div key={item.id} className="w-full aspect-[4/5] rounded-3xl bg-surface/80 backdrop-blur-md border border-stroke flex flex-col items-center justify-center p-8 relative overflow-hidden group interactive cursor-pointer shadow-2xl">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gradient opacity-0 group-hover:opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-700 z-0" />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col items-center gap-4 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-background/50 border border-stroke flex items-center justify-center text-muted group-hover:text-white transition-colors duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-xl md:text-2xl font-instrument text-muted group-hover:text-white transition-colors duration-500 text-center">
                    {item.type}<br />
                    <span className="text-sm font-inter uppercase tracking-widest opacity-50">Experiment</span>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none z-30" />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-4 md:gap-8 mt-[100px]">
            {explorations.slice(3, 6).map((item) => (
              <div key={item.id} className="w-full aspect-[4/5] rounded-3xl bg-surface/80 backdrop-blur-md border border-stroke flex flex-col items-center justify-center p-8 relative overflow-hidden group interactive cursor-pointer shadow-2xl">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-gradient opacity-0 group-hover:opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-opacity duration-700 z-0" />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col items-center gap-4 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-background/50 border border-stroke flex items-center justify-center text-muted group-hover:text-white transition-colors duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-xl md:text-2xl font-instrument text-muted group-hover:text-white transition-colors duration-500 text-center">
                    {item.type}<br />
                    <span className="text-sm font-inter uppercase tracking-widest opacity-50">Concept</span>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none z-30" />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
