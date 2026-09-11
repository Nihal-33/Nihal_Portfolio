import { motion } from "framer-motion";
import { Layout, Server, BrainCircuit, ShoppingCart, LayoutDashboard, Rocket, Calculator } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Modern responsive websites for businesses, portfolios and brands.",
    icon: Layout
  },
  {
    title: "Full-Stack Applications",
    description: "Frontend + backend + APIs + database integration.",
    icon: Server
  },
  {
    title: "AI Applications",
    description: "AI assistants, summarizers, AI tools and intelligent workflows.",
    icon: BrainCircuit
  },
  {
    title: "E-Commerce",
    description: "Modern online stores and product experiences.",
    icon: ShoppingCart
  },
  {
    title: "Dashboards",
    description: "Admin panels, analytics dashboards and internal tools.",
    icon: LayoutDashboard
  },
  {
    title: "Custom Digital Products",
    description: "Turning product ideas into functional web applications.",
    icon: Rocket
  },
  {
    title: "Billing Software",
    description: "Customized billing and invoicing software for businesses.",
    icon: Calculator
  }
];

export function Services() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-stroke mt-12">
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-muted mb-4 uppercase"
        >
          What Services I Provide
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-instrument text-5xl md:text-6xl mb-6"
        >
          Digital <span className="italic text-transparent bg-clip-text bg-accent-gradient">Services</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <service.icon size={20} className="transition-colors" />
            </div>
            <h3 className="font-medium text-lg mb-3">{service.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
