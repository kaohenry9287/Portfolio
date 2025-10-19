"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[rgba(0,0,0,0.02)]">
      <div className="container py-7 md:py-10 bg-brand3">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-brand">My Skills</h2>
          <a href="#projects" className="text-sm text-foreground/70 hover:opacity-80">Skip to Projects</a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:gap-8">
          {SKILLS.map((cat, i) => (
            <div key={cat.title}>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground/60">
                {cat.title}
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
              >
                {cat.items.map((s) => (
                  <SkillCard key={s.name} name={s.name} icon={s.icon} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
