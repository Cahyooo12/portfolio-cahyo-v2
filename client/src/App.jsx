import { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import profileImg from './assets/profile.png';
import { projects } from './data/projects';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth number interpolation
  useEffect(() => {
    const controls = animate(displayProgress, progress, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (value) => setDisplayProgress(Math.round(value))
    });
    return controls.stop;
  }, [progress]);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const imageUrls = [
      profileImg,
      ...projects.map(p => p.image).filter(Boolean)
    ];

    let loadedCount = 0;

    if (imageUrls.length === 0) {
      document.body.style.overflow = 'auto';
      setLoading(false);
      return;
    }

    const promises = imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / imageUrls.length) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / imageUrls.length) * 100));
          resolve();
        };
      });
    });

    // Minimum delay to let the user see the epic loading screen
    const minDelay = new Promise(resolve => setTimeout(resolve, 2000));

    Promise.all([...promises, minDelay]).then(() => {
      // Add a tiny delay at 100% so it feels complete
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 500);
    });

  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0b] text-text-primary"
          >
            {/* Top Brand Logo */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12">
              <span className="font-display text-[16px] font-bold tracking-tight">Cahyo.</span>
            </div>
            
            {/* Massive Counter */}
            <div className="flex items-baseline">
              <h1 className="font-display text-[25vw] md:text-[20vw] font-black leading-none tracking-tighter">
                {displayProgress}
              </h1>
              <span className="font-display text-[8vw] md:text-[5vw] font-bold text-accent-blue ml-2">
                %
              </span>
            </div>

            {/* Bottom Progress Line */}
            <div className="absolute bottom-12 md:bottom-16 w-full px-8 md:px-24">
              <div className="flex w-full items-end justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                  LOADING EXPERIENCE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                  {displayProgress} / 100
                </span>
              </div>
              <div className="h-[2px] w-full overflow-hidden bg-border-subtle">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
