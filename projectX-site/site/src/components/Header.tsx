export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="text-base font-semibold tracking-[0.18em] uppercase text-slate-900">
          Alysis
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
          <a href="/about" className="transition hover:text-slate-900">About</a>
          <a href="/team" className="transition hover:text-slate-900">The Team</a>
          <a href="/connect" className="transition hover:text-slate-900">Connect</a>
          <a href="/contact" className="transition hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
