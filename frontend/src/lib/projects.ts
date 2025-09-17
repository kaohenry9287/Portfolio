export type Project = {
    slug: string;
    title: string;
    oneLiner: string;
    tech: string[];
    problem: string;
    solution: string;
    images?: string[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8080";

export async function fetchProjects(): Promise<Project[]> {
    const res = await fetch(`${API_BASE}/api/projects`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load projects");
    return res.json();
}

export async function fetchProject(slug: string): Promise<Project | null> {
    const res = await fetch(`${API_BASE}/api/projects/${slug}`, {
        cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
}
