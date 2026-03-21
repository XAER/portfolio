import { interests } from "@/data/site";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 border-b border-white/[0.06] py-14">
      <SectionHeader index="03" title="about" />
      <div className="grid grid-cols-2 gap-3">
        {/* Background */}
        <div className="rounded-[6px] border border-white/[0.06] bg-[#11101a] p-5">
          <h3 className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.1em] text-accent opacity-80">
            background
          </h3>
          <p className="text-[13px] leading-[1.75] text-muted">
            Full stack engineer comfortable across the whole surface —{" "}
            <strong className="font-medium text-content">
              Go APIs, React SPAs, Flutter apps
            </strong>
            . I care about clean architecture, good UX, UI and DX, and building things
            that actually work. Employed full-time, selectively available for
            side projects worth my evenings.
          </p>
        </div>

        {/* Interests */}
        <div className="rounded-[6px] border border-white/[0.06] bg-[#11101a] p-5">
          <h3 className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.1em] text-accent opacity-80">
            interests
          </h3>
          <ul className="flex flex-col gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[10px] text-[13px] text-muted"
              >
                <span className="font-mono text-[15px] text-accent opacity-80">
                  ›
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
