import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DeveloperPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll(".word");
    if (textElements && textElements.length > 0) {
      gsap.fromTo(
        textElements,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  const text = "Code is not just about writing software. It's about turning an idea into something people can use.";
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4 md:px-8 w-full bg-surface/50 backdrop-blur-sm border-y border-stroke/50 overflow-hidden relative flex items-center justify-center min-h-[50vh]"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute w-[50vw] h-[50vw] max-w-lg max-h-lg bg-accent-gradient opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 
          ref={textRef}
          className="font-inter font-light text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-white"
        >
          {words.map((word, i) => {
            const isIdea = word.toLowerCase().includes("idea");
            return (
              <span 
                key={i} 
                className={`word inline-block mr-3 mb-2 ${isIdea ? "font-instrument italic text-accent bg-clip-text text-transparent bg-accent-gradient text-5xl md:text-7xl lg:text-8xl -translate-y-1 md:-translate-y-2" : ""}`}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
