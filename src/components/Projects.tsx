import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto" ref={containerRef}>
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-muted mb-4 uppercase"
        >
          Selected Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-instrument text-5xl md:text-7xl mb-6 leading-tight"
        >
          Things I've<br />
          <span className="italic text-transparent bg-clip-text bg-accent-gradient">built.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted max-w-xl text-lg font-light"
        >
          A collection of websites, applications, AI tools and experiments I've worked on.
        </motion.p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full rounded-3xl overflow-hidden border border-stroke bg-surface h-[60vh] min-h-[400px] interactive flex flex-col justify-end p-8 md:p-12"
          >
            {/* Background Image Setup */}
            <div className="absolute inset-0 bg-background z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
              {featuredProject.image ? (
                <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              ) : (
                <div className="w-full h-full bg-surface" />
              )}
              <div className="absolute inset-0 bg-accent-gradient opacity-[0.05] mix-blend-overlay" />
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-2xl">
              <span className="text-4xl md:text-6xl font-instrument text-white/20 mb-4">{featuredProject.id}</span>
              <h3 className="text-4xl md:text-5xl font-instrument mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-accent-gradient transition-all">{featuredProject.title}</h3>
              <p className="text-muted mb-6 text-sm md:text-base leading-relaxed max-w-lg">{featuredProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map(tech => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full border border-stroke bg-white/5 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href={featuredProject.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white transition-colors group/btn">
                Explore Project <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            {/* Hover Effects */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none z-30" />
          </motion.div>
        )}

        {/* Bento Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-stroke bg-surface aspect-square md:aspect-auto md:h-[450px] p-8 flex flex-col justify-between interactive"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-background z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full bg-surface" />
                )}
              </div>

              <div className="relative z-20 flex justify-between items-start w-full">
                <span className="text-2xl font-instrument text-white/30">{project.id}</span>
                <span className="text-xs uppercase tracking-widest text-muted">{project.category}</span>
              </div>

              <div className="relative z-20">
                <h3 className="text-2xl md:text-3xl font-instrument mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-accent-gradient transition-all">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-stroke bg-white/5 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] px-2 py-1 rounded-full border border-stroke bg-white/5 backdrop-blur-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <a href={project.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted group-hover:text-white transition-colors cursor-pointer relative z-40">
                  View <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
