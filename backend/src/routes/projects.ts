import { Router, Request, Response } from "express";
const r = Router();

// Replace with your real content later
const projects = [
  {
    slug: "studyabroader",
    title: "StudyAbroader",
    oneLiner: "Real-tivme study abroad discussion site.",
    tech: ["Next.js", "Node.js", "Socket.io", "AWS EC2"],
    problem:
      "Students lacked a focused forum with real-time messaging for study abroad planning.",
    solution:
      "Built SSR with Next.js + Socket.io chat rooms; improved discoverability and retention.",
    images: ["/images/studyabroader-1.png", "/images/studyabroader-2.png"],
  },
  {
    slug: "stylish",
    title: "STYLiSH",
    oneLiner: "Fashion e-commerce with JWT + payments.",
    tech: ["React", "Node.js", "JWT", "TapPay"],
    problem: "Fragmented checkout and auth flow caused drop‑offs.",
    solution:
      "Designed REST APIs, JWT auth, and a streamlined cart → payment flow with webhooks.",
    images: ["/images/stylish-1.png"],
  },
  {
    slug: "humano",
    title: "HumanoMaximus.org",
    oneLiner: "Service finder MVP with time-slot filtering.",
    tech: ["Next.js", "TypeScript", "Maps API", "PostgreSQL"],
    problem: "Direct clinic scheduling was unrealistic for MVP.",
    solution:
      "Pivoted to filtering/organizing locations by user time windows; clean results UX.",
    images: ["/images/humano-1.png", "/images/humano-2.png"],
  },
];

r.get("/", (_req: Request, res: Response) => res.json(projects));

r.get("/:slug", (req: Request, res: Response) => {
  const p = projects.find((x) => x.slug === req.params.slug);
  return p ? res.json(p) : res.status(404).json({ error: "Not found" });
});

export default r;
