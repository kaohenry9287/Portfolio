import type { Project } from "@/lib/projects";


type Props = { project: Project; onOpen: (p: Project) => void };


export default function ProjectCard({ project, onOpen }: Props) {
    return (
        <button
            onClick={() => onOpen(project)}
            className="text-left group rounded-2xl border bg-white hover:shadow-md focus:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 border-black/10"
        >
            <div className="p-5">
                <div className="h-36 w-full rounded-xl flex items-center justify-center border bg-gray-50 border-black/5">
                    <span className="text-xs text-foreground/60">Add a 16:9 thumbnail</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:underline">{project.title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{project.oneLiner}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-brand text-brand">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-[11px] text-foreground/60">+{project.tech.length - 3} more</span>
                    )}
                </div>
            </div>
        </button>
    );
}