export const metadata = {
  title: 'Contact',
  description: 'Secure a trusted frequency with the Alysis core collective.',
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-900">Contact</h1>
      <p className="mt-4 text-lg text-slate-600">
        Signal us for partnerships, press, or to explore what decentralized intelligence can unlock for you.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-900/15 bg-white/90 p-6 shadow-[0_15px_40px_-20px_rgba(14,165,233,0.4)] backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-900">Direct line</h2>
          <p className="mt-2 text-sm text-slate-600">
            Email <a className="underline" href="mailto:contact@alysis.network">contact@alysis.network</a> for secure correspondence.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-900/15 bg-white/90 p-6 shadow-[0_15px_40px_-20px_rgba(14,165,233,0.4)] backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-900">Signal relay</h2>
          <p className="mt-2 text-sm text-slate-600">
            Join the encrypted relay on Matrix at{' '}
            <a className="underline" href="https://matrix.to/#/#alysis:matrix.org">
              #alysis:matrix.org
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-cyan-500/30 bg-slate-950 p-8 text-slate-100">
        <h2 className="text-lg font-semibold text-cyan-200">Media pulse</h2>
        <p className="mt-3 text-sm text-slate-200/80">
          For media or speaking engagements, email{' '}
          <a className="underline" href="mailto:press@alysis.network">press@alysis.network</a> and include your timeline.
        </p>
      </div>
    </section>
  )
}
