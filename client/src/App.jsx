import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code } from 'lucide-react';

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

    // We also add a minimum delay of 1.5s so the loader isn't instantly flashing
    const minDelay = new Promise(resolve => setTimeout(resolve, 1500));

    Promise.all([...promises, minDelay]).then(() => {
      // Add a tiny delay at 100% so it feels complete
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 400);
    });

  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bg-primary"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue"
              >
                <Code size={32} />
              </motion.div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="h-1 w-48 overflow-hidden rounded-full bg-border-subtle">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="font-mono text-[12px] uppercase tracking-widest text-text-tertiary"
                  >
                    INITIALIZING CAHYO.DEV
                  </motion.span>
                  <span className="font-mono text-[12px] font-bold text-accent-blue">
                    {progress}%
                  </span>
                </div>
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
