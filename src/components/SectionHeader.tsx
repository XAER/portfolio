interface SectionHeaderProps {
  index: string;
  title: string;
}

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-[11px] tracking-[0.1em] text-accent opacity-70">
        {index}
      </span>
      <span className="text-[18px] font-medium tracking-tight text-content">
        {title}
      </span>
      <div className="ml-2 h-px flex-1 bg-white/[0.06]" />
    </div>
  );
}
