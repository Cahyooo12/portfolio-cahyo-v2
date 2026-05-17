import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import ScrollReveal from '../components/ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-[1262px]">
        
        <ScrollReveal>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="text-[16px] font-light text-accent-blue">/</span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">Expertise</span>
          </div>
          <h2 className="mb-10 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-text-primary">
            Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-[1px] bg-border-subtle md:grid-cols-2">
          {Object.entries(skills).map(([key, group], idx) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={key} delay={idx * 0.1}>
                <div className="glass-card p-10 h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-border-medium">
                  <h3 className="mb-6 flex items-center gap-2 text-[17px] font-semibold text-text-primary">
                    <Icon size={18} color={group.color} />
                    {group.title}
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    {group.items.map((skill, i) => (
                      <div key={skill.name} className="flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span className="text-[14px] text-text-secondary">{skill.name}</span>
                          <span className="text-[12px] text-text-muted">{skill.pct}%</span>
                        </div>
                        <div className="h-[3px] overflow-hidden rounded-sm bg-bg-elevated shadow-inner">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.9, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                            className="h-full origin-left rounded-sm"
                            style={{ 
                              width: `${skill.pct}%`, 
                              backgroundImage: `linear-gradient(90deg, ${group.color}aa, ${group.color})`,
                              boxShadow: `0 0 10px ${group.color}40`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
