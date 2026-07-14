function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-xl">
      <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-[1.75rem] border-t-4 border-blue-500 bg-gradient-to-br from-sky-50 to-sky-100 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-slate-900">Resignation Request</h2>
          <p className="mt-3 text-slate-600">Submit employee resignation.</p>
        </article>

        <article className="rounded-[1.75rem] border-t-4 border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-slate-900">Exit Clearance</h2>
          <p className="mt-3 text-slate-600">HR, IT, and Finance clearance process.</p>
        </article>

        <article className="rounded-[1.75rem] border-t-4 border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-slate-900">Exit Interview</h2>
          <p className="mt-3 text-slate-600">Employee feedback process.</p>
        </article>

        <article className="rounded-[1.75rem] border-t-4 border-cyan-500 bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-slate-900">Employee Relieved</h2>
          <p className="mt-3 text-slate-600">Exit process completed.</p>
        </article>

        <article className="rounded-[1.75rem] border-t-4 border-violet-500 bg-gradient-to-br from-violet-50 to-violet-100 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-slate-900">Settlement</h2>
          <p className="mt-3 text-slate-600">Final settlement process.</p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;
