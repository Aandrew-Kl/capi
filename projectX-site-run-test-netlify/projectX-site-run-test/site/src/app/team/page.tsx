export const metadata = {
  title: 'The Team',
  description: 'Meet the minds designing the Alysis intelligence mesh.',
}

const team = [
  {
    name: 'Dr. Eva Lumen',
    role: 'Founder & Systems Architect',
    focus: 'Designs the self-healing consensus fabric and agent governance.',
  },
  {
    name: 'Jules Orion',
    role: 'Neuro-Symbolic Lead',
    focus: 'Builds the hybrid reasoning models powering autonomous agents.',
  },
  {
    name: 'Mara Yun',
    role: 'Network Economics',
    focus: 'Shapes token flows and incentive loops for collaborative compute.',
  },
  {
    name: 'Kai Solace',
    role: 'Experience Engineer',
    focus: 'Crafts immersive tooling for orchestrating AI-native workflows.',
  },
]

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-900">The Team</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Alysis draws on a collective of builders who fuse distributed systems, machine intelligence,
        and crypto-economics into a single adaptive network.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {team.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 shadow-[0_0_30px_-15px_rgba(56,189,248,0.6)] backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-slate-900">{member.name}</h2>
            <p className="mt-1 text-sm uppercase tracking-widest text-cyan-600">{member.role}</p>
            <p className="mt-3 text-sm text-slate-600">{member.focus}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
