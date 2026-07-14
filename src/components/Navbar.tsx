function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600 text-sm font-black uppercase tracking-[0.24em] shadow-[0_10px_24px_rgba(56,189,248,0.2)]">
            HRMS
          </div>
          <div>
            <h1 className="text-xl font-semibold leading-tight">
              Employee Resignation Management System
            </h1>
            <p className="mt-1 text-sm text-slate-100">
              Workflow dashboard and approvals
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;