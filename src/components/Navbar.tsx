import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={cn(
            "pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-5xl rounded-full border border-stroke transition-all duration-500 backdrop-blur-md",
            scrolled ? "bg-surface/80 shadow-lg" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-instrument font-bold text-lg leading-none pt-1">
              NJ
            </div>
            <span className="font-medium hidden sm:block">Nihal Jaiswal</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted hover:text-white transition-colors interactive"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all interactive group relative overflow-hidden"
            >
              <span className="relative z-10">Let's Talk ↗</span>
              <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              <span className="relative z-10 group-hover:text-black opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity">Let's Talk ↗</span>
            </button>
            
            <button
              className="md:hidden p-2 text-white interactive"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-black/60 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-white interactive"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8 text-2xl font-instrument">
              {links.map((link) => (
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="hover:text-white/70 transition-colors interactive"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 text-lg font-inter bg-white text-black px-8 py-3 rounded-full interactive"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
