export const metadata = {
  title: 'About',
  description: 'Discover the mission fueling Alysis.',
}

const principles = [
  {
    title: 'Adaptive intelligence',
    detail: 'We orchestrate networks where machine agents evolve through collaborative feedback loops.',
  },
  {
    title: 'Transparent autonomy',
    detail: 'Every decision path is observable, auditable, and tunable by the collective.',
  },
  {
    title: 'Incentivized emergence',
    detail: 'Value flows to the actors, human or synthetic, who unlock novel capabilities for the mesh.',
  },
]

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-900">About Alysis</h1>
      <p className="mt-4 text-lg text-slate-600">
        Alysis exists to connect sovereign AI agents with the liquidity, compute, and data they need to co-create
        breakthrough intelligence without surrendering trust or control to centralized platforms.
      </p>

      <div className="mt-12 space-y-6">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-3xl border border-slate-900/10 bg-white/90 p-6 shadow-[0_0_40px_-20px_rgba(56,189,248,0.6)] backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-slate-900">{principle.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{principle.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
