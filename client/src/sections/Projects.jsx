import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'Mobile App' },
    { id: 'design', label: 'UI/UX' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="projects" className="relative bg-bg-primary px-6 py-24 overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow bg-accent-blue w-[600px] h-[600px] top-[20%] left-[-200px] opacity-[0.08]"></div>
      
      <div className="relative z-10 mx-auto max-w-[1262px]">
        
        <ScrollReveal>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-[16px] font-light text-accent-blue">/</span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">My Work</span>
          </div>
          <h2 className="mb-10 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-text-primary">
            Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-1.5 text-[12px] transition-all ${
                  filter === f.id
                    ? 'border-accent-blue bg-accent-blue text-white'
                    : 'border-border-medium bg-transparent text-text-tertiary hover:border-accent-blue hover:bg-accent-blue hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-accent-blue/30"
              >
                {/* Image / Mockup Area */}
                <div className="relative w-full aspect-[16/10] bg-bg-primary overflow-hidden border-b border-border-subtle">
                  {/* Dynamic Abstract Background Glow */}
                  <div className={`absolute inset-0 opacity-[0.15] transition-transform duration-700 group-hover:scale-110 ${
                    p.cat === 'web' ? 'bg-gradient-to-br from-accent-blue via-bg-primary to-accent-purple' : 
                    p.cat === 'design' ? 'bg-gradient-to-br from-accent-purple via-bg-primary to-pink-500' : 'bg-gradient-to-br from-accent-green via-bg-primary to-teal-500'
                  }`}></div>
                  
                  {/* Browser Mockup Window */}
                  <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-xl border border-border-medium border-b-0 bg-[#0A0A0A] shadow-2xl transition-transform duration-500 group-hover:translate-y-2 flex flex-col overflow-hidden">
                     {/* Browser Header */}
                     <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1A1A1A] border-b border-white/5">
                       <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                     </div>
                     {/* Browser Content */}
                     <div className="flex flex-1 items-center justify-center bg-[#111] relative overflow-hidden">
                       <img 
                         src={p.image} 
                         alt={p.name} 
                         className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                       />
                       <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0"></div>
                     </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col gap-3 p-6 flex-1 bg-gradient-to-b from-bg-elevated to-bg-primary">
                  <div className="flex items-center justify-between">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.1em] ${
                      p.cat === 'web' ? 'text-accent-blue-light' : 
                      p.cat === 'design' ? 'text-accent-purple' : 'text-accent-green'
                    }`}>
                      {p.tag}
                    </p>
                    <a href={p.link} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-text-tertiary transition-colors hover:bg-accent-blue hover:text-white" aria-label="View Project">
                      <span className="text-[14px] -rotate-45 transition-transform group-hover:rotate-0">→</span>
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-[18px] font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent-blue-light">{p.name}</h3>
                    <p className="text-[13px] leading-[1.6] text-text-secondary line-clamp-3">{p.desc}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {p.stack.map(tech => (
                      <span key={tech} className="rounded-md bg-accent-blue/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-accent-blue-light border border-accent-blue/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
