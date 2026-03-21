import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-8">
      <span className="font-mono text-[11px] text-muted">
        © {new Date().getFullYear()}{" "}
        <span className="text-accent">{siteConfig.handle}</span>
      </span>
      <span className="font-mono text-[11px] text-muted">
        go · react · flutter ·{" "}
        <span className="text-accent">curiosity</span>
      </span>
    </footer>
  );
}
