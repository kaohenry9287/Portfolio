import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
    return (
        <section id="home" className="relative bg-brand">
            <div className="container py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative md:col-span-1 mx-auto h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-4 border-white"
                >
                    <Image
                        src="/images/Photo.jpg"       // put me.jpg in frontend/public/images/
                        alt="Photo of Henry"
                        fill                       // fills the circle
                        sizes="(min-width: 768px) 18rem, 14rem"
                        className="object-cover object-center"   // nice crop
                        priority
                    />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:col-span-2"
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Henry Kao</h1>
                    <p className="mt-4 text-foreground/80 max-w-prose text-white">
                        Full‑Stack Software Engineer specializing in <span className="font-semibold">Node.js</span>,
                        <span className="font-semibold"> React/Next.js</span>, and <span className="font-semibold">AWS</span>.
                        I build clean, scalable web apps that balance UX, performance, and reliability.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["TypeScript", "Node.js", "Next.js", "React", "PostgreSQL", "AWS", "Docker"].map((s) => (
                            <span key={s} className="px-3 py-1 rounded-full text-xs font-semibold border border-white text-white">
                                {s}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}