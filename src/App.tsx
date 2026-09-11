import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

// Components
import { BackgroundVideo } from "./components/BackgroundVideo";
import { LoadingScreen } from "./components/LoadingScreen";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { DeveloperPhilosophy } from "./components/DeveloperPhilosophy";
import { Skills } from "./components/Skills";
import { VibeCoding } from "./components/VibeCoding";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Explorations } from "./components/Explorations";
import { LearningLog } from "./components/LearningLog";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useSmoothScroll();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <BackgroundVideo />
          <main className="text-text min-h-screen selection:bg-surface selection:text-white relative z-0">
            <Navbar />
          
          <div className="flex flex-col gap-12 md:gap-24 overflow-hidden">
            <Hero />
            <About />
            <DeveloperPhilosophy />
            <Skills />
            <VibeCoding />
            
            <div className="relative">
              <Projects />
              <Services />
            </div>

            <Process />
            <Certificates />
            <Education />
            
            <Explorations />
            
            <LearningLog />
            <Stats />
            <Contact />
          </div>

          <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
