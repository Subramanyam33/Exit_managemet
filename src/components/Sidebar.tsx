import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", Icon: Home },
  { to: "/resignation", label: "Resignation", Icon: FileText },
  { to: "/clearance", label: "Exit Clearance", Icon: ShieldCheck },
  { to: "/interview", label: "Exit Interview", Icon: MessageSquare },
  { to: "/relieving", label: "Relieving", Icon: CheckCircle2 },
  { to: "/settlement", label: "Settlement", Icon: DollarSign },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="min-h-screen w-72 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 px-5 py-8 text-slate-100 shadow-[0_20px_80px_rgba(15,23,42,0.4)]">
      <div className="mb-10 rounded-[2rem] bg-slate-900/80 p-5 shadow-[0_15px_30px_rgba(15,23,42,0.25)]">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-3xl bg-sky-500 text-base font-bold text-white shadow-lg shadow-sky-500/30">
            HR
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Employee</p>
            <p className="text-sm font-semibold text-white">Resignation System</p>
          </div>
        </div>
      </div>

      <nav className="space-y-3">
        {links.map(({ to, label, Icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`group flex items-center gap-4 rounded-[1.75rem] px-4 py-4 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-slate-800/90 text-white shadow-[0_18px_40px_rgba(56,189,248,0.25)]"
                  : "bg-slate-950/70 text-slate-300 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-3xl border border-slate-800 bg-slate-900 transition ${
                  active
                    ? "border-sky-300 bg-sky-500 text-white shadow-[0_0_0_2px_rgba(56,189,248,0.35)]"
                    : "border-slate-800 bg-slate-950 text-slate-400 group-hover:border-slate-700"
                }`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
