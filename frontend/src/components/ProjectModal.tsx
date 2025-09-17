"use client";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";


type Props = { project: Project | null; onClose: () => void };


export default function ProjectModal({ project, onClose }: Props) {
    if (!project) return null;
    const slides = project.images ?? [];


    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-2xl"
                >
                    <div className="flex items-center justify-between px-6 py-4 bg-brand">
                        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                        <button onClick={onClose} className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20" aria-label="Close">Close</button>
                    </div>


                    <div className="px-6 py-6 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            <p className="text-foreground"><span className="font-semibold">Overview:</span> {project.oneLiner}</p>
                            <div>
                                <p className="text-foreground"><span className="font-semibold">Problem:</span> {project.problem}</p>
                                <p className="text-foreground mt-2"><span className="font-semibold">My Solution:</span> {project.solution}</p>
                            </div>
                            <div className="space-y-3">
                                {slides.map((src, i) => (
                                    <div key={i} className="w-full overflow-hidden rounded-xl border bg-gray-50 border-black/5">
                                        <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" />
                                    </div>
                                ))}
                                {slides.length === 0 && (
                                    <div className="rounded-xl border bg-gray-50 p-10 text-center text-sm text-foreground/60 border-black/5">
                                        Add screenshots to <code>images</code> for this project.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <h4 className="text-foreground font-semibold">Tech Stack</h4>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <li key={t} className="px-2.5 py-1 rounded-lg border text-sm border-brand text-brand">{t}</li>
                                ))}
                            </ul>
                            <div className="mt-6 text-sm">
                                <a href={`/${project.slug}`} className="font-semibold underline text-brand">Open dedicated page (optional)</a>
                                <p className="mt-1 text-[12px] text-foreground/60">Add a dynamic route later (e.g., app/projects/[slug]/page.tsx).</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}