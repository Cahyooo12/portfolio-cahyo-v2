import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: true };
      // Format usually comes out like "07:15 AM"
      const timeString = now.toLocaleTimeString('en-US', options);
      setTime(timeString + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-bg-primary px-6 py-[100px] text-center overflow-hidden">
      {/* Ambient Glow */}
      <div className="ambient-glow bg-accent-blue w-[500px] h-[500px] top-[10%] left-1/2 -translate-x-1/2 opacity-[0.05]"></div>
      
      <div className="relative z-10 mx-auto max-w-[1262px]">
        
        <ScrollReveal>
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-blue-light">
            Let's work together
          </p>
          <h2 className="mx-auto mb-5 max-w-[600px] font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.03em] text-text-primary">
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-10 max-w-[440px] text-[17px] leading-[1.65] text-text-tertiary">
            Web app, mobile app, or both — I'm open to freelance, full-time, and remote collaborations.
          </p>
          
          <a 
            href="mailto:Cahsirat05@gmail.com" 
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent-blue px-6 text-[15px] font-medium text-white transition-colors hover:bg-accent-blue-hover"
          >
            Cahsirat05@gmail.com
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-[480px] text-left">
            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-[13px] text-text-secondary">Name</label>
              <input type="text" required className="h-11 rounded-md border border-border-subtle bg-bg-secondary px-3 text-[15px] text-text-primary outline-none focus:border-accent-blue focus:bg-bg-elevated transition-colors backdrop-blur-md" />
            </div>
            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-[13px] text-text-secondary">Email</label>
              <input type="email" required className="h-11 rounded-md border border-border-subtle bg-bg-secondary px-3 text-[15px] text-text-primary outline-none focus:border-accent-blue focus:bg-bg-elevated transition-colors backdrop-blur-md" />
            </div>
            <div className="mb-6 flex flex-col gap-1.5">
              <label className="text-[13px] text-text-secondary">Message</label>
              <textarea required rows="4" className="resize-y rounded-md border border-border-subtle bg-bg-secondary p-3 text-[15px] text-text-primary outline-none focus:border-accent-blue focus:bg-bg-elevated transition-colors backdrop-blur-md"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="flex w-full h-11 items-center justify-center rounded-full bg-accent-blue text-[15px] font-medium text-white transition-colors hover:bg-accent-blue-hover disabled:bg-bg-elevated disabled:text-text-muted"
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-6 border-t border-border-subtle pt-10">
            <a href="mailto:Cahsirat05@gmail.com" className="flex items-center gap-1.5 text-[14px] text-text-tertiary transition-colors hover:text-accent-blue-light">
              <FaEnvelope size={16} /> Email
            </a>
            <a href="https://github.com/Cahyooo12" className="flex items-center gap-1.5 text-[14px] text-text-tertiary transition-colors hover:text-accent-blue-light">
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/Cahyo" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[14px] text-text-tertiary transition-colors hover:text-accent-blue-light">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://cahyodev.my.id" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[14px] text-text-tertiary transition-colors hover:text-accent-blue-light">
              <FaGlobe size={16} /> Website
            </a>
          </div>
        </ScrollReveal>

      </div>
      
      <footer className="relative mt-32 overflow-hidden bg-bg-secondary pt-16">
        {/* Top Border Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"></div>
        
        <div className="mx-auto max-w-[1262px] px-6">
          <div className="flex flex-col items-center justify-between gap-8 border-b border-border-subtle pb-12 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <h3 className="text-[24px] font-bold tracking-tight text-text-primary mb-2">Ready to create something amazing?</h3>
              <p className="text-[15px] text-text-tertiary">Let's build the future of the web together.</p>
            </div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-text-primary px-8 text-[14px] font-bold text-bg-primary transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">Back to Top <span className="transition-transform group-hover:-translate-y-1">↑</span></span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-between pt-8 pb-4 md:flex-row">
            <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
              © {new Date().getFullYear()} CAHYO PORTFOLIO. ALL RIGHTS RESERVED.
            </p>
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green"></span>
              </span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                YOGYAKARTA, ID — LOCAL TIME: <span className="text-text-secondary font-semibold">{time}</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* HUGE CAHYO TEXT WITH INTERACTIVE GLOW */}
        <div className="group flex w-full select-none justify-center overflow-hidden leading-none relative cursor-default pt-8">
          <h1 
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
            }}
            className="font-display text-[22vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-text-secondary to-text-secondary/0 translate-y-[20%] opacity-50 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:from-text-primary group-hover:to-text-tertiary group-hover:translate-y-[15%] group-hover:scale-[1.02]"
          >
            CAHYO.
          </h1>
        </div>
      </footer>
    </section>
  );
}
