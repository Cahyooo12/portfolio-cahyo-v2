import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto grid w-full max-w-[1262px] grid-cols-1 items-start gap-20 md:grid-cols-2">
        
        {/* Left */}
        <ScrollReveal>
          <div className="mb-5 flex items-center gap-2.5">
            <span className="text-[16px] font-light text-accent-blue">/</span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">About Me</span>
          </div>
          <h2 className="mb-6 font-display text-[clamp(32px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.025em] text-text-primary">
            Web developer.<br />App builder.<br /><span className="text-gradient">Problem solver.</span>
          </h2>
          <div className="text-[16px] leading-[1.75] text-text-tertiary">
            <p className="mb-4">
              I'm a Full Stack & Apps Developer based in Yogyakarta, Indonesia. Mahasiswa S1 Sistem Informasi di Universitas AMIKOM Yogyakarta. I specialize in modern web applications and cross-platform mobile experiences — fast, reliable, and built with care.
            </p>
            <p className="mb-4">
              Whether architecting a scalable API, crafting a smooth React UI, or shipping a Flutter app to the App Store — I bring the same obsession with quality to everything I build. Saya percaya perubahan besar dimulai dari tindakan kecil.
            </p>
          </div>
          
          <div className="mt-7 flex flex-wrap gap-2">
            {['Clean Architecture', 'Cross-platform', 'API Design', 'UI/UX Aware', 'Open Source'].map(tag => (
              <span key={tag} className="rounded-full border border-border-subtle bg-bg-elevated px-3.5 py-1.5 text-[13px] text-text-secondary shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-[1px] bg-border-subtle overflow-hidden rounded-2xl">
            <div className="glass-card p-6 text-center">
              <div className="text-[36px] font-bold tracking-[-0.03em] text-text-primary">3+</div>
              <div className="mt-1 text-[12px] text-text-tertiary">Years exp.</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-[36px] font-bold tracking-[-0.03em] text-text-primary">20+</div>
              <div className="mt-1 text-[12px] text-text-tertiary">Projects</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-[36px] font-bold tracking-[-0.03em] text-text-primary">8+</div>
              <div className="mt-1 text-[12px] text-text-tertiary">Mobile apps</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Card */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card flex flex-col gap-[18px] rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-text-muted">Name</span>
              <span className="text-[15px] text-text-secondary">Cahyo</span>
            </div>
            <div className="h-[1px] bg-border-subtle" />
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-text-muted">Role</span>
              <span className="text-[15px] text-text-secondary">Full Stack · Apps Developer</span>
            </div>
            <div className="h-[1px] bg-border-subtle" />
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-text-muted">Based in</span>
              <span className="text-[15px] text-text-secondary">Yogyakarta, Indonesia</span>
            </div>
            <div className="h-[1px] bg-border-subtle" />
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-text-muted">Education</span>
              <span className="text-[15px] text-text-secondary">S1 Sistem Informasi · Universitas AMIKOM</span>
            </div>
            <div className="h-[1px] bg-border-subtle" />
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-text-muted">Available for</span>
              <span className="text-[15px] text-text-secondary">Freelance · Full-time · Remote</span>
            </div>
            <div className="h-[1px] bg-border-subtle" />
            <a href="#" className="mt-2 inline-block w-full rounded-full bg-accent-blue py-3 text-center text-[15px] text-white transition-colors hover:bg-accent-blue-hover">
              Download CV
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
