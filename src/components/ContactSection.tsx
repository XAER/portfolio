import { siteConfig } from "@/data/site";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-14">
      <SectionHeader index="04" title="contact" />
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-[6px] border border-white/[0.06] bg-[#11101a] px-8 py-7">
        <div>
          <h3 className="mb-[6px] text-[16px] font-medium text-content">
            let&apos;s talk
          </h3>
          <p className="text-[13px] leading-[1.6] text-muted">
            Interesting project? Technical question? Just say hi.
            <br />
            Reach me at{" "}
            <span className="text-content">{siteConfig.email}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-[10px]">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-[4px] border border-accent bg-accent px-5 py-[10px] font-mono text-[12px] font-semibold tracking-[0.05em] text-[#0b0a10] transition-all duration-150 hover:bg-[#c99aff] hover:border-[#c99aff] hover:shadow-[0_0_18px_rgba(181,123,255,0.3)]"
          >
            ↗ email me
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.12] px-5 py-[10px] font-mono text-[12px] tracking-[0.05em] text-muted transition-all duration-150 hover:border-white/[0.22] hover:text-content"
          >
            github
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.12] px-5 py-[10px] font-mono text-[12px] tracking-[0.05em] text-muted transition-all duration-150 hover:border-white/[0.22] hover:text-content"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
