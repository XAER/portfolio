import { stack, type StackItem } from "@/data/site";
import SectionHeader from "./SectionHeader";

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-[3px] border border-white/[0.06] bg-white/[0.03] px-[7px] py-[2px] font-mono text-[10px] text-muted">
      {label}
    </span>
  );
}

function StackCard({ item }: { item: StackItem }) {
  return (
    <div className="group rounded-[6px] border border-white/[0.06] bg-[#11101a] p-[18px] transition-all duration-150 hover:border-[rgba(181,123,255,0.25)] hover:bg-[rgba(181,123,255,0.04)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[13px] font-medium text-content">
          {item.name}
        </span>
        <span
          className={`rounded-[3px] border px-2 py-[2px] font-mono text-[10px] uppercase tracking-[0.07em] ${
            item.badgeVariant === "primary"
              ? "border-[rgba(181,123,255,0.2)] bg-[rgba(181,123,255,0.16)] text-accent"
              : "border-white/[0.06] bg-white/[0.04] text-muted"
          }`}
        >
          {item.badge}
        </span>
      </div>
      <p className="mb-3 text-[12px] leading-[1.55] text-muted">{item.desc}</p>
      <div className="flex flex-wrap gap-[5px]">
        {item.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="relative z-10 border-b border-white/[0.06] py-14">
      <SectionHeader index="01" title="stack" />
      <div className="grid grid-cols-2 gap-[10px]">
        {stack.map((item) => (
          <StackCard key={item.name + item.badge} item={item} />
        ))}
      </div>
    </section>
  );
}
