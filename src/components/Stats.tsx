import { motion } from "framer-motion";

const stats = [
  { value: "2025", label: "Started B.Tech CSE" },
  { value: "∞", label: "Ideas to Build" },
  { value: "8+", label: "Project Concepts" },
  { value: "24/7", label: "Learning Mindset" },
];

export function Stats() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-stroke">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="font-instrument text-5xl md:text-6xl text-white mb-4">{stat.value}</div>
            <div className="text-sm tracking-widest uppercase text-muted font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
