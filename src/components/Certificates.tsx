import { motion } from "framer-motion";
import { certificates } from "../data/certificates";
import { ArrowUpRight, Award } from "lucide-react";

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-muted mb-4 uppercase"
        >
          Credentials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-instrument text-5xl md:text-6xl mb-6"
        >
          Certificates & <span className="italic text-transparent bg-clip-text bg-accent-gradient">Learning</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted max-w-xl text-lg font-light"
        >
          Courses, certifications and learning milestones.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-3xl border border-stroke bg-surface relative overflow-hidden flex flex-col justify-between min-h-[250px] interactive"
          >
            <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
            
            <div>
              <div className="flex items-center gap-3 mb-6 text-muted">
                <Award size={20} />
                <span className="text-xs uppercase tracking-widest">Certificate</span>
              </div>
              <h3 className="text-xl md:text-2xl font-instrument mb-2 pr-8">{cert.title}</h3>
              <p className="text-sm text-muted">Issued by {cert.issuer}</p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stroke/50">
              <span className="text-sm font-medium">{cert.date}</span>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-1 text-xs uppercase tracking-widest hover:text-white transition-colors group/link cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  View <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
