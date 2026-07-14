import { useState, type FormEvent } from "react";

function Settlement() {
  const [settlementAmount, setSettlementAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!settlementAmount.trim() || !remarks.trim()) return;
    alert("Final Settlement Completed Successfully");
  };

  return (
    <section className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-xl">
      <h1 className="text-2xl font-semibold text-slate-900">Final Settlement</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="grid gap-6">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Settlement Amount</span>
            <input
              type="number"
              value={settlementAmount}
              onChange={(event) => setSettlementAmount(event.target.value)}
              placeholder="Enter settlement amount"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Remarks</span>
            <input
              value={remarks}
              onChange={(event) => setRemarks(event.target.value)}
              placeholder="Any additional remarks"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="rounded-3xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Process Settlement
          </button>
        </div>
      </form>
    </section>
  );
}

export default Settlement;
