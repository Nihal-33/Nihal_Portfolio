import { motion } from "framer-motion";
import { Code2, PenTool, LayoutTemplate, Cpu, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-muted mb-6 uppercase"
          >
            About Me
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-instrument text-5xl md:text-7xl mb-8 leading-[1.1]"
          >
            I build ideas into <br />
            <span className="italic opacity-90 text-transparent bg-clip-text bg-accent-gradient">real digital products.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              I'm Nihal Jaiswal, a B.Tech Computer Science & Engineering student at Parul University. I enjoy building modern websites, full-stack applications and AI-powered products.
            </p>
            <p>
              My approach combines development, design, problem solving and AI tools to turn ideas into useful digital experiences.
            </p>
            <p>
              I'm continuously learning new technologies, experimenting with AI, and building projects that help me improve as a developer.
            </p>
          </motion.div>
        </div>

        {/* Focus Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-surface/50 border border-stroke p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gradient opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-1000" />
          
          <h3 className="text-xl font-instrument mb-8">Currently focused on</h3>
          
          <ul className="space-y-6">
            {[
              { icon: LayoutTemplate, text: "Full-Stack Development" },
              { icon: Sparkles, text: "AI Application Development" },
              { icon: PenTool, text: "Modern Web Technologies" },
              { icon: Cpu, text: "System Building" },
              { icon: Code2, text: "Problem Solving" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-muted hover:text-white transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-background border border-stroke flex items-center justify-center text-white">
                  <item.icon size={18} />
                </div>
                <span className="font-medium text-sm md:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
}
