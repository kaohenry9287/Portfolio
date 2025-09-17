import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section id="home" className="relative">
            <div className="container py-16 md:py-24 grid md:grid-cols-[280px,1fr] items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto h-56 w-56 md:h-72 md:w-72 rounded-full border-4 border-dashed flex items-center justify-center border-brand"
                >
                    <span className="text-center text-sm text-foreground/60 px-6">Your photo here — circle crop</span>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand">Chen‑Hsuan (Henry) Kao</h1>
                    <p className="mt-4 text-foreground/80 max-w-prose">
                        Full‑Stack Software Engineer specializing in <span className="font-semibold">Node.js</span>,
                        <span className="font-semibold"> React/Next.js</span>, and <span className="font-semibold">AWS</span>.
                        I build clean, scalable web apps that balance UX, performance, and reliability.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["TypeScript", "Node.js", "Next.js", "React", "PostgreSQL", "AWS", "Docker"].map((s) => (
                            <span key={s} className="px-3 py-1 rounded-full text-xs font-semibold border border-brand text-brand">
                                {s}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8">
                        <a href="#projects" className="inline-block px-5 py-2 rounded-xl font-semibold text-white bg-brand shadow">
                            See Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}