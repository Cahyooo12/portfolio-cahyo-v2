import { ChevronDown } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-44px)] items-stretch overflow-hidden bg-bg-primary">
      {/* Ambient Glows */}
      <div className="ambient-glow bg-accent-blue w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="ambient-glow bg-accent-purple w-[400px] h-[400px] bottom-[10%] right-[10%] opacity-10"></div>

      {/* Large Center Profile Photo */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:flex justify-center">
        <div className="w-full max-w-[1262px] h-full relative">
          <motion.div
            className="absolute bottom-0 left-[300px] right-[350px] h-[88vh] max-h-[850px] flex justify-center items-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={profileImg}
              alt="Cahyo Profile"
              className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1262px] relative z-10 grid-cols-1 px-6 md:grid-cols-[1fr_380px]">

        {/* LEFT COLUMN */}
        <div className="relative flex flex-col justify-end py-16 pb-24 md:pb-[60px]">

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-[480px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 h-[2px] w-10 bg-text-primary" />
            <h1 className="mb-5 font-display text-[clamp(42px,5vw,64px)] font-bold leading-[1.02] tracking-[-0.035em] text-text-primary">
              I'm <span className="text-gradient">Cahyo</span>,<br />a <span className="text-gradient-accent">Full Stack<br />&amp; Apps Dev.</span>
            </h1>
            <p className="mb-9 max-w-[360px] text-[15px] leading-[1.7] text-text-tertiary">
              Building end-to-end web applications and cross-platform mobile apps — clean architecture, performant code, experiences people love.
            </p>
            <button
              onClick={scrollToAbout}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue text-white transition-colors hover:bg-accent-blue-hover animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown size={20} />
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="relative z-10 flex flex-col justify-center gap-0 border-t border-border-subtle py-12 md:border-l md:border-t-0 md:px-8 md:py-12">

          <div className="border-b border-border-subtle py-7 first:pt-0 last:border-0 last:pb-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">About Me</p>
            <p className="mb-4 text-[14px] leading-[1.65] text-text-tertiary">
              Full Stack & Apps Developer based in Yogyakarta. A Bachelor of Information Systems student at AMIKOM University Yogyakarta.
            </p>
            <a href="#about" className="inline-flex items-center gap-1.5 border-b border-border-medium pb-0.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-text-primary transition-colors hover:border-accent-blue-light hover:text-accent-blue-light">
              Learn more <span className="text-[11px]">→</span>
            </a>
          </div>

          <div className="border-b border-border-subtle py-7 first:pt-0 last:border-0 last:pb-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">My Work</p>
            <p className="mb-4 text-[14px] leading-[1.65] text-text-tertiary">
              Web platforms, mobile apps, and full-stack products — shipped and live across multiple clients and industries.
            </p>
            <a href="#projects" className="inline-flex items-center gap-1.5 border-b border-border-medium pb-0.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-text-primary transition-colors hover:border-accent-blue-light hover:text-accent-blue-light">
              Browse portfolio <span className="text-[11px]">→</span>
            </a>
          </div>

          <div className="border-b border-border-subtle py-7 first:pt-0 last:border-0 last:pb-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">Follow Me</p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:Cahsirat05@gmail.com" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-[15px] text-text-tertiary transition-colors hover:border-accent-blue hover:bg-accent-blue hover:text-white" aria-label="Email"><FaEnvelope size={18} /></a>
              <a href="https://github.com/Cahyooo12" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-[15px] text-text-tertiary transition-colors hover:border-accent-blue hover:bg-accent-blue hover:text-white" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href="https://www.linkedin.com/in/cahyo-/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-[15px] text-text-tertiary transition-colors hover:border-accent-blue hover:bg-accent-blue hover:text-white" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="https://www.instagram.com/cahyo_sirat05/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-[15px] text-text-tertiary transition-colors hover:border-accent-blue hover:bg-accent-blue hover:text-white" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://cahyodev.my.id" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-[15px] text-text-tertiary transition-colors hover:border-accent-blue hover:bg-accent-blue hover:text-white" aria-label="Website"><FaGlobe size={18} /></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
