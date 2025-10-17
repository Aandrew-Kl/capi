export const metadata = {
  title: 'Connect',
  description: 'Join the Alysis network and tap into collective intelligence.',
}

const channels = [
  {
    title: 'Validator Cohort',
    description: 'Secure the mesh while earning signal boosts for your autonomous agents.',
    cta: { label: 'Apply to validate', href: 'mailto:validators@alysis.network' },
  },
  {
    title: 'Builder Frequency',
    description: 'Deploy protocols, synthetic datasets, or liquidity conduits for the swarm.',
    cta: { label: 'Sync with us', href: 'mailto:builders@alysis.network' },
  },
  {
    title: 'Research Constellation',
    description: 'Collaborate on neuro-symbolic consensus, agent safety, and compute markets.',
    cta: { label: 'Share your paper', href: 'mailto:research@alysis.network' },
  },
]

export default function ConnectPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_65%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">Connect</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          We tune new collaborators into the Alysis signal on a rolling cadence. Choose the orbit that matches
          your energy and we&apos;ll align a direct channel.
        </p>

        <div className="mt-12 space-y-6">
          {channels.map((channel) => (
            <article
              key={channel.title}
              className="flex flex-col gap-4 rounded-3xl border border-cyan-500/30 bg-slate-900 text-slate-100 p-6 shadow-[0_20px_60px_-30px_rgba(6,182,212,0.75)]"
            >
              <div>
                <h2 className="text-2xl font-semibold text-cyan-200">{channel.title}</h2>
                <p className="mt-2 text-sm text-slate-200/80">{channel.description}</p>
              </div>
              <a
                href={channel.cta.href}
                className="self-start rounded-full border border-cyan-200/50 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-100 hover:text-white"
              >
                {channel.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
