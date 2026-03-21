"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const NAV_LINKS = [
  { label: "stack", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0a10]/88 backdrop-blur-[14px]">
      <div className="relative z-10 mx-auto flex h-[52px] max-w-[740px] items-center justify-between px-6">
        <span className="font-mono text-[13px] text-accent">
          <span className="text-muted">~/</span>
          {siteConfig.handle}
          <span className="text-muted">.dev</span>
        </span>

        <ul className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-mono text-[12px] tracking-[0.05em] transition-colors duration-150 ${
                  active === href.slice(1)
                    ? "text-accent"
                    : "text-muted hover:text-content"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
