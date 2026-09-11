import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Website",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      // 1. Save to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone,
            project_type: formData.projectType,
            message: formData.message
          }
        ]);

      if (supabaseError) throw supabaseError;

      // 2. Send Push Notification via ntfy.sh
      // We are using a unique topic name so only you receive these.
      const topicName = "nihal_portfolio_contact_alerts_773";
      
      await fetch(`https://ntfy.sh/${topicName}`, {
        method: 'POST',
        body: `New message from: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
        headers: {
          'Title': 'New Portfolio Contact!',
          'Priority': 'high',
          'Tags': 'envelope,sparkles'
        }
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", projectType: "Website", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-8 w-full relative overflow-hidden bg-background/30 backdrop-blur-sm border-t border-stroke/50">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent-gradient opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-instrument text-6xl md:text-8xl mb-8 leading-[0.9]"
          >
            Have an idea?<br />
            <span className="italic text-transparent bg-clip-text bg-accent-gradient">Let's build it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg font-light leading-relaxed max-w-md"
          >
            Whether you have a website idea, a full-stack application, an AI product or just want to collaborate, let's connect.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted ml-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-surface/50 border border-stroke rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted ml-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-surface/50 border border-stroke rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted ml-2">Phone No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-surface/50 border border-stroke rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="text-xs uppercase tracking-widest text-muted ml-2">Project Type</label>
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-surface/50 border border-stroke rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                >
                  <option>Website</option>
                  <option>Full-Stack Application</option>
                  <option>AI Application</option>
                  <option>E-Commerce</option>
                  <option>Dashboard</option>
                  <option>Billing Software</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                  ↓
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted ml-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-surface/50 border border-stroke rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="mt-4 w-full md:w-auto px-8 py-4 rounded-xl bg-white text-black font-medium interactive hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {status === "idle" && (
                <>
                  <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-20 transition-opacity z-0" />
                  <span className="relative z-10 flex items-center gap-2">Send Message <ArrowUpRight size={18} /></span>
                </>
              )}
              {status === "submitting" && <span className="animate-pulse">Sending...</span>}
              {status === "success" && <><CheckCircle2 size={18} className="text-green-600" /> Sent Successfully</>}
              {status === "error" && <span className="text-red-500">Error Sending. Try Again.</span>}
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
