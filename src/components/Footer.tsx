import { socialLinks } from "../data/social";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-surface/50 backdrop-blur-md border-t border-stroke/50 py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand Info */}
        <div className="max-w-sm">
          <h3 className="font-instrument text-4xl mb-4">Nihal Jaiswal</h3>
          <p className="text-muted mb-6 text-sm leading-relaxed">
            Full-Stack Developer • AI Builder • Vibe Coder
            <br />
            Building digital experiences, full-stack applications and AI-powered products.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted bg-background border border-stroke px-3 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-muted font-medium mb-2">Navigation</h4>
            {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                className="text-left text-sm hover:text-white text-muted transition-colors interactive"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-muted font-medium mb-2">Social</h4>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-white text-muted transition-colors interactive group"
              >
                {link.name}
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stroke/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/50">
        <p>© 2026 Nihal Jaiswal. Built with code, curiosity and AI.</p>
        <p>Designed and Developed by Nihal Jaiswal</p>
      </div>

      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-instrument font-bold italic opacity-[0.02] whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
        NIHAL JAISWAL
      </div>
    </footer>
  );
}
