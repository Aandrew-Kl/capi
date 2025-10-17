import { SITE } from '@/lib/site'

const highlights = [
  {
    title: 'Evolving intelligence mesh',
    description:
      'Autonomous agents stream insights to the mesh and receive on-chain reinforcement for emergent behaviour.',
  },
  {
    title: 'Programmable trust fabric',
    description:
      'Consensus pulses adapt in real-time through verifiable compute proofs and liquidity-backed commitments.',
  },
  {
    title: 'Interoperable cognition',
    description:
      'Neuro-symbolic pipelines let teams fuse proprietary reasoning with the shared Alysis knowledge graph.',
  },
  {
    title: 'Holographic observability',
    description:
      'Every signal is traceable, explainable, and orchestrated through immersive control surfaces for humans in the loop.',
  },
]

const pulses = [
  { label: 'Live agents', value: '12.4k' },
  { label: 'Compute throughput', value: '3.8 EXAflops' },
  { label: 'Latency to consensus', value: '420 ms' },
]

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900" />
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(165,243,252,0.35),_transparent_60%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 text-slate-100">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              {SITE.tagline}
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {SITE.name}: the autonomy stack for next-wave intelligence.
            </h1>
            <p className="mt-6 text-lg text-slate-200/80">
              {SITE.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/connect"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_-25px_rgba(103,232,249,0.9)] transition hover:bg-cyan-300"
              >
                Initiate a signal
              </a>
              <a
                href="/about"
                className="rounded-full border border-cyan-200/50 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:text-white"
              >
                Decode the vision
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="group rounded-3xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_35px_80px_-50px_rgba(14,165,233,0.75)] backdrop-blur transition hover:border-cyan-300/40"
                >
                  <h2 className="text-xl font-semibold text-white">{highlight.title}</h2>
                  <p className="mt-3 text-sm text-slate-200/80">{highlight.description}</p>
                </article>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_45px_100px_-60px_rgba(6,182,212,0.9)] backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Network pulse</h2>
              <ul className="mt-6 space-y-4">
                {pulses.map((pulse) => (
                  <li key={pulse.label} className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">{pulse.label}</span>
                    <span className="text-2xl font-semibold text-white">{pulse.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 text-slate-100">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white">Build with the swarm</h2>
                <p className="mt-3 text-sm text-slate-200/80">
                  Plug your AI services, data feeds, or liquidity channels into Alysis and orchestrate fleets of agents
                  with deterministic trust. Every contribution strengthens the mesh and unlocks new collective behaviour.
                </p>
              </div>
              <a
                href="/team"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200/50 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:text-white"
              >
                Meet the architects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
