import Sidebar from "./Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ExitProgress from "./ExitProgress";

interface Station {
  name: string;
  path: string;
}

const stations: Station[] = [
  { name: "Submitted", path: "/resignation" },
  { name: "Clearance", path: "/clearance" },
  { name: "Interview", path: "/interview" },
  { name: "Relieved", path: "/relieving" },
  { name: "Settlement", path: "/settlement" },
];

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStage = stations.findIndex(
    (station) => station.path === location.pathname
  );

  const handleStationClick = (index: number) => {
    navigate(stations[index].path);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="bg-sky-600 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-950 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
              HR
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-200">Employee Resignation Management System</p>
              <p className="mt-1 text-sm text-slate-100/90">Workflow dashboard and approvals</p>
            </div>
          </div>
          <div className="rounded-3xl bg-sky-500/20 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-sky-900/10">
            Live process overview
          </div>
        </div>
      </div>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-slate-100">
          <div className="mx-auto max-w-7xl p-6 sm:p-8">
            {currentStage !== -1 && (
              <div className="space-y-6">
                <ExitProgress
                  stations={stations}
                  currentStage={currentStage}
                  onStationClick={handleStationClick}
                />
                <Outlet />
              </div>
            )}
            {currentStage === -1 && <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;


