"use client";

import { useEffect, useState } from "react";
import { projects, karmaKomixIOSUrl, karmaKomixAndroidUrl, type Project, type ProjectStatus } from "@/data/site";
import SectionHeader from "./SectionHeader";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-[rgba(181,123,255,0.2)] bg-[rgba(181,123,255,0.16)] text-accent",
  wip: "border-[rgba(245,166,35,0.2)] bg-[rgba(245,166,35,0.08)] text-[#f5a623]",
  open: "border-white/[0.06] bg-white/[0.04] text-muted",
};

function ProjectRow({ project }: { project: Project }) {
  const Inner = (
    <div className="group relative grid grid-cols-[1fr_auto] items-start gap-5 border-b border-white/[0.06] py-[22px] last:border-none">
      {/* hover bg */}
      <div className="pointer-events-none absolute -left-4 -right-4 bottom-0 top-0 rounded-[6px] bg-[rgba(181,123,255,0.08)] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-[5px] flex items-center gap-2 font-mono text-[14px] font-medium text-content transition-colors duration-150 group-hover:text-accent">
          {project.name}
          {project.subtitle && (
            <span className="font-normal text-[10px] text-muted">
              — {project.subtitle}
            </span>
          )}
        </div>
        <p className="max-w-[480px] text-[13px] leading-[1.6] text-muted">
          {project.desc}
        </p>
      </div>

      <div className="relative flex flex-col items-end gap-[7px] pt-[2px]">
        <span
          className={`rounded-[3px] border px-[9px] py-[3px] font-mono text-[10px] uppercase tracking-[0.07em] whitespace-nowrap ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap justify-end gap-[5px]">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-[3px] border border-white/[0.06] bg-white/[0.03] px-[7px] py-[2px] font-mono text-[10px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {Inner}
      </a>
    );
  }

  return Inner;
}

export default function ProjectsSection() {
  const [karmaKomixUrl, setKarmaKomixUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setKarmaKomixUrl(isIOS ? karmaKomixIOSUrl : karmaKomixAndroidUrl);
  }, []);

  const resolvedProjects = projects.map((p) =>
    p.name === "karma komix" && p.subtitle === "mobile app"
      ? { ...p, url: karmaKomixUrl }
      : p
  );

  return (
    <section id="projects" className="relative z-10 border-b border-white/[0.06] py-14">
      <SectionHeader index="02" title="projects" />
      <div>
        {resolvedProjects.map((p) => (
          <ProjectRow key={p.name + (p.subtitle ?? "")} project={p} />
        ))}
      </div>
    </section>
  );
}
