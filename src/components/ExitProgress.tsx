import { Fragment } from "react";
import { ArrowDown, Check } from "lucide-react";

interface Station {
  name: string;
  path: string;
}
interface ExitProgressProps {
  stations?: Station[];
  currentStage?: number;
  onStationClick?: (index: number) => void;
}

export default function ExitProgress({
  stations = [],
  currentStage = 0,
  onStationClick = () => {},
}: ExitProgressProps) {
  const progress = Math.round(((currentStage + 1) / stations.length) * 100);

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-slate-900">
            Workflow Status: <span className="text-sky-600">{stations[currentStage]?.name}</span>
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Overall Progress: {progress}%
          </p>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {stations.slice(0, 4).map((station, index) => {
            const complete = index < currentStage;
            const active = index === currentStage;
            return (
              <article
                key={station.name}
                className={`rounded-[1.75rem] border p-5 shadow-sm transition ${
                  active
                    ? "border-sky-300 bg-white"
                    : complete
                    ? "border-slate-200 bg-slate-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">{station.name}</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">
                      Status: {complete ? "Completed" : active ? "Pending" : "Inactive"}
                    </p>
                  </div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-3xl ${
                    active
                      ? "bg-sky-500 text-white"
                      : complete
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                    {complete ? <Check size={18} /> : active ? <ArrowDown size={18} /> : index + 1}
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  {complete ? "Completed" : active ? "Awaiting review" : "Waiting..."}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-4 overflow-x-auto py-2 px-1">
          {stations.map((station, index) => {
            const complete = index < currentStage;
            const active = index === currentStage;
            return (
              <Fragment key={station.name}>
                <button
                  type="button"
                  onClick={() => onStationClick(index)}
                  className={`min-w-[140px] rounded-[1.75rem] border p-4 text-left transition ${
                    active
                      ? "border-sky-300 bg-sky-500/10 text-slate-900"
                      : complete
                      ? "border-slate-200 bg-slate-50 text-slate-700"
                      : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      active
                        ? "border-sky-500 bg-sky-500 text-white"
                        : complete
                        ? "border-emerald-400 bg-emerald-400 text-white"
                        : "border-slate-200 bg-slate-100 text-slate-500"
                    }`}>
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{station.name}</p>
                      <p className="text-xs text-slate-500">
                        {complete ? "Completed" : active ? "Current step" : "Upcoming"}
                      </p>
                    </div>
                  </div>
                </button>
                {index < stations.length - 1 && (
                  <div className={`h-1 flex-1 rounded-full ${complete ? "bg-sky-500" : "bg-slate-200"}`} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
