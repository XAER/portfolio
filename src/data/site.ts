export const siteConfig = {
  handle: "xaer",
  domain: "xaer.dev",
  email: "hi@xaer.dev",
  github: "https://github.com/XAER",
  linkedin: "https://linkedin.com/in/colonnelli-stefano/",
  title: "xaer — full stack engineer",
  description:
    "Full stack engineer building Go backends, React frontends, and Flutter apps. Employed, open to interesting side projects.",
  ogImage: "/og.png", // drop a 1200x630 image in /public
} as const;

export type StackItem = {
  name: string;
  badge: string;
  badgeVariant: "primary" | "secondary";
  desc: string;
  tags: string[];
};

export const stack: StackItem[] = [
  {
    name: "Go",
    badge: "backend",
    badgeVariant: "primary",
    desc: "REST APIs, microservices, auth systems. Fiber, GORM, clean layered architecture.",
    tags: ["fiber", "gorm", "jwt", "redis", "smtp"],
  },
  {
    name: "React / TypeScript",
    badge: "frontend",
    badgeVariant: "primary",
    desc: "SPAs and admin dashboards. Tailwind, React Hook Form, custom component systems.",
    tags: ["typescript", "tailwind", "next.js", "vite", "rhf"],
  },
  {
    name: "Flutter / Dart",
    badge: "mobile",
    badgeVariant: "primary",
    desc: "Cross-platform mobile apps. Supabase backend-as-a-service, real-time data, auth.",
    tags: ["flutter", "dart", "supabase", "realtime"],
  },
  {
    name: "Infra",
    badge: "ops",
    badgeVariant: "secondary",
    desc: "Containerised deployments, on-prem stacks, K8s migration. MySQL, MariaDB, Redis.",
    tags: ["docker", "k8s", "mysql", "redis"],
  },
];

export type ProjectStatus = "live" | "wip" | "open";

export type Project = {
  name: string;
  subtitle?: string;
  desc: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
};

export const karmaKomixIOSUrl = "https://apps.apple.com/it/app/karma-komix/id6745183053"
export const karmaKomixAndroidUrl = "https://play.google.com/store/apps/details?id=it.karmakomix.karma_komix"

export const projects: Project[] = [
  {
    name: "karma komix",
    subtitle: "mobile app",
    desc: "Flutter + Supabase comic reading app. User accounts, library management, reading progress, real-time sync.",
    status: "live",
    tags: ["flutter", "supabase", "dart"],
    url: undefined,
  },
  {
    name: "karma komix",
    subtitle: "admin dashboard",
    desc: "React + TypeScript superadmin panel for content management, user moderation, and analytics. Paired with the app.",
    status: "live",
    tags: ["react", "typescript", "supabase"],
    url: undefined,
  },
  {
    name: "xaer.dev",
    subtitle: undefined,
    desc: "This site. Next.js App Router, Tailwind CSS. Built to replace a LiveTerm template with something more personal.",
    status: "live",
    tags: ["next.js", "typescript", "tailwind"],
    url: "https://xaer.dev",
  },
  {
    name: "your side project →",
    subtitle: undefined,
    desc: "Open to backend, mobile, or fullstack work. If it's technically interesting, let's talk.",
    status: "open",
    tags: [],
    url: undefined,
  },
];

export const interests: string[] = [
  "cross-platform mobile (Flutter)",
  "backend systems & API design",
  "auth, security & infrastructure",
  "comics, manga & visual storytelling",
  "open source & dev tooling",
];
