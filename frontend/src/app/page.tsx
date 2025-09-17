"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/lib/projects";
import { fetchProjects } from "@/lib/projects";


export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [open, setOpen] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((e) => setError(e?.message ?? "Failed to load"))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen">
      <Header />
      <Hero />


      <section id="projects" className="bg-white">
        <div className="container py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand">Projects</h2>
            <a href="#home" className="text-sm text-foreground/70 hover:opacity-80">Back to top</a>
          </div>


          {loading && <p className="mt-6 text-foreground/70">Loading projects…</p>}
          {error && <p className="mt-6 text-red-600">{error}</p>}


          {!loading && !error && (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} onOpen={setOpen} />)
              )}
            </div>
          )}
        </div>
      </section>


      <footer className="border-t">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Henry Kao. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:kaohenry9287@gmail.com" className="hover:opacity-80 text-brand">Email</a>
            <a href="https://github.com/kaohenry9287" className="hover:opacity-80 text-brand">GitHub</a>
            <a href="https://www.linkedin.com/in/chenhsuankao" className="hover:opacity-80 text-brand">LinkedIn</a>
          </div>
        </div>
      </footer>


      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </div>
  );
}