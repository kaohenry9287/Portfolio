import { Router, Request, Response } from "express";
const r = Router();

const projects = [
  { slug: "studyabroader", title: "StudyAbroader", tech: ["Next.js","Node"] },
  { slug: "stylish", title: "STYLiSH", tech: ["React","JWT"] }
];

r.get("/", (_req: Request, res: Response) => res.json(projects));

r.get("/:slug", (req: Request, res: Response) => {
  const p = projects.find(x => x.slug === req.params.slug);
  return p ? res.json(p) : res.status(404).json({ error: "Not found" });
});

export default r;

