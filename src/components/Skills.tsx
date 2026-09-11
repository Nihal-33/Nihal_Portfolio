import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { cn } from "../lib/utils";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-muted mb-4 uppercase"
        >
          Tools & Tech
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-instrument text-5xl md:text-6xl mb-6"
        >
          Skills & <span className="italic text-transparent bg-clip-text bg-accent-gradient">Technologies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted max-w-2xl text-lg font-light"
        >
          Tools and technologies I use to build modern digital products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-surface/30 border border-stroke hover:bg-surface/60 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gradient opacity-0 group-hover:opacity-[0.05] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500" />
            
            <h3 className="font-instrument text-2xl mb-6">{category.title}</h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-xs text-muted tracking-wide">{skill.level}</span>
                  </div>
                  <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                    <motion.div
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        skill.level === "Core Skill" ? "bg-accent-gradient w-full" :
                        skill.level === "Working With" ? "bg-white/60 w-[75%]" :
                        skill.level === "Exploring" ? "bg-white/40 w-[50%]" :
                        "bg-white/20 w-[25%]"
                      )}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
