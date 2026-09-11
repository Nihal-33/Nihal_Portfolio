import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-instrument text-4xl md:text-5xl"
        >
          Education
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative pl-8 md:pl-0"
      >
        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
          <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
            <span className="text-sm font-instrument text-muted">2025 — 2029</span>
          </div>
          
          <div className="hidden md:flex flex-col items-center col-span-1 h-full">
            <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center relative z-10 text-white">
              <GraduationCap size={20} />
            </div>
            <div className="w-[1px] h-full bg-stroke flex-1 -mt-2 min-h-[100px]" />
          </div>

          <div className="absolute left-0 top-0 md:hidden w-8 h-8 rounded-full bg-surface border border-stroke flex items-center justify-center -translate-x-1/2 z-10 text-white">
            <GraduationCap size={14} />
          </div>
          <div className="absolute left-0 top-8 bottom-0 w-[1px] bg-stroke md:hidden -translate-x-1/2" />

          <div className="md:col-span-3 pb-8">
            <h3 className="text-xl md:text-2xl font-medium mb-1">B.Tech Computer Science & Engineering</h3>
            <div className="text-accent mb-4 font-instrument text-lg italic">Parul University</div>
            <p className="text-sm text-muted leading-relaxed max-w-lg">
              Currently pursuing a Bachelor's degree in Computer Science & Engineering with a strong interest in software development, AI and modern web technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
