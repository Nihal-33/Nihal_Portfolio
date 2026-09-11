import { motion } from "framer-motion";

const logs = [
  { topic: "Building AI-powered applications", date: "Present", category: "AI" },
  { topic: "Exploring full-stack architecture", date: "Present", category: "Architecture" },
  { topic: "Improving Java and C++ fundamentals", date: "Ongoing", category: "Languages" },
  { topic: "Learning modern React development", date: "Ongoing", category: "Frontend" },
  { topic: "Experimenting with AI tools and vibe coding", date: "Present", category: "Workflow" },
];

export function LearningLog() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-16 border-b border-stroke pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-muted mb-4 uppercase"
        >
          Learning Log
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-instrument text-4xl md:text-5xl"
        >
          What I'm <span className="italic text-transparent bg-clip-text bg-accent-gradient">Exploring</span>
        </motion.h2>
      </div>

      <div className="flex flex-col">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-stroke/50 hover:border-stroke transition-colors"
          >
            <div className="mb-2 md:mb-0">
              <h3 className="text-lg md:text-xl font-medium group-hover:text-white text-muted transition-colors">{log.topic}</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-muted/60">
              <span className="px-2 py-1 rounded bg-surface border border-stroke">{log.category}</span>
              <span>{log.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
