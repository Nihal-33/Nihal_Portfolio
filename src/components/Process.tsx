import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { id: "01", title: "Understand", desc: "Understand the problem and requirements." },
  { id: "02", title: "Plan", desc: "Design the architecture and user experience." },
  { id: "03", title: "Build", desc: "Develop the frontend, backend and integrations." },
  { id: "04", title: "Test", desc: "Test responsiveness, functionality and performance." },
  { id: "05", title: "Launch", desc: "Deploy and improve continuously." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current && containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        animation: gsap.to(lineRef.current, { height: "100%", ease: "none" }),
        scrub: 1,
      });
    }
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto" ref={containerRef}>
      <div className="text-center mb-20">
        <h2 className="font-instrument text-5xl md:text-6xl mb-6">
          How I <span className="italic text-transparent bg-clip-text bg-accent-gradient">Build</span>
        </h2>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-stroke -translate-x-1/2">
          <div ref={lineRef} className="w-full bg-accent-gradient h-0" />
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {processSteps.map((step, i) => (
            <div key={step.id} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-white -translate-x-1/2 z-10" />

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-1/2" />

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
              >
                <div className="text-sm font-instrument text-muted mb-2">{step.id}</div>
                <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
