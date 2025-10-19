import Image from "next/image";

export default function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="group rounded-xl border border-black/10 bg-brand2 backdrop-blur
                 p-4 flex flex-col items-center justify-center gap-3
                 shadow-sm hover:shadow-md transition-all duration-200
                 hover:-translate-y-0.5"
    >
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        {/* fallback to initial if icon missing */}
        {icon ? (
          <Image src={icon} alt={name} fill className="object-contain" />
        ) : (
          <div className="h-full w-full rounded-lg bg-brand text-white grid place-items-center">
            <span className="text-sm font-bold">{name[0]}</span>
          </div>
        )}
      </div>
      <div className="text-center text-sm md:text-[15px] font-medium text-foreground">
        {name}
      </div>
    </div>
  );
}
