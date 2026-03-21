import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative z-10 border-b border-white/[0.06] py-20 pb-16">
      {/* available tag */}
      <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent animate-pulse2" />
        full stack engineer @ Teoresi Group · open to side projects
      </div>

      <h1 className="mb-4 font-mono text-[clamp(32px,6vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
        <span className="font-light text-muted">$ </span>
        <span className="text-accent">{siteConfig.handle}</span>
        <br />
        <span className="font-light text-muted">full stack engineer</span>
      </h1>

      <p className="mb-8 max-w-[500px] text-[15px] leading-[1.75] text-muted">
        I build things end-to-end —{" "}
        <strong className="font-medium text-content">
          Go backends, React frontends, Flutter apps
        </strong>
        . From REST APIs and auth systems to mobile apps and admin dashboards.
        Currently employed, open to interesting side work.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-[4px] border border-accent bg-accent px-5 py-[10px] font-mono text-[12px] font-semibold tracking-[0.05em] text-[#0b0a10] transition-all duration-150 hover:bg-[#c99aff] hover:border-[#c99aff] hover:shadow-[0_0_18px_rgba(181,123,255,0.3)]"
        >
          <span>↗</span> get in touch
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.12] px-5 py-[10px] font-mono text-[12px] tracking-[0.05em] text-muted transition-all duration-150 hover:border-white/[0.22] hover:text-content"
        >
          view projects
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.12] px-5 py-[10px] font-mono text-[12px] tracking-[0.05em] text-muted transition-all duration-150 hover:border-white/[0.22] hover:text-content"
        >
          github
        </a>
      </div>
    </section>
  );
}
