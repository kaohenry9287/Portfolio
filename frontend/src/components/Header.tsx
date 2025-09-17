export default function Header() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
            <nav className="container py-3 flex items-center justify-between">
                <a href="#home" className="font-semibold tracking-tight text-foreground hover:opacity-80">Henry Kao</a>
                <div className="flex items-center gap-6 text-sm">
                    <a href="#home" className="hover:opacity-80 text-foreground/80">Website</a>
                    <a href="#projects" className="hover:opacity-80 text-foreground/80">Projects</a>
                </div>
            </nav>
        </header>
    );
}