import { formatCurrency } from "@/lib/calculator-utils";
import type { CalculatorResult } from "@/lib/types";

function valuesAreEqualRange(low: number, average: number, high: number) {
  const eps = 0.005;
  return Math.abs(low - average) < eps && Math.abs(average - high) < eps;
}

export function ResultCard({ result }: { result: CalculatorResult }) {
  const singleAmount = valuesAreEqualRange(result.low, result.average, result.high);
  const extras = result.extras ?? [];
  const extrasGridClass =
    extras.length <= 1 ? "grid-cols-1" : extras.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3";

  return (
    <div className="relative isolate overflow-hidden border border-white/10 bg-[#111111] p-6 shadow-soft">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full opacity-40 blur-3xl"
        style={{ backgroundImage: "radial-gradient(closest-side, rgba(97,243,187,0.4), transparent)" }}
      />
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#61F3BB]" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Estimated Project Range</h3>
      </div>
      {singleAmount ? (
        <div
          className="result-range-cell mt-6 p-6 shadow-glow sm:p-8"
          style={{ background: "linear-gradient(135deg, #1a2a1a 0%, #0d1f14 100%)", border: "1px solid rgba(97,243,187,0.25)" }}
        >
          <strong className="result-range-value-single block font-display font-bold tracking-tight text-[#61F3BB]">
            {formatCurrency(result.average)}
          </strong>
        </div>
      ) : (
        <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-3">
          <div className="result-range-cell min-w-0 border border-white/10 bg-white/5 p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Low</span>
            <strong className="result-range-value mt-1 block font-display font-bold text-white">{formatCurrency(result.low)}</strong>
          </div>
          <div
            className="result-range-cell min-w-0 p-4"
            style={{
              background: "linear-gradient(135deg, #1a2a1a 0%, #0d1f14 100%)",
              border: "1px solid rgba(97,243,187,0.3)",
              boxShadow: "0 8px 32px -8px rgba(97,243,187,0.3)"
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#61F3BB]/80">Average</span>
            <strong className="result-range-value-accent mt-1 block font-display font-bold text-[#61F3BB]">{formatCurrency(result.average)}</strong>
          </div>
          <div className="result-range-cell min-w-0 border border-white/10 bg-white/5 p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">High</span>
            <strong className="result-range-value mt-1 block font-display font-bold text-white">{formatCurrency(result.high)}</strong>
          </div>
        </div>
      )}
      {result.unitLabel && result.unitCost !== undefined ? (
        <div className="mt-5 flex min-w-0 flex-wrap items-center justify-between gap-4 border border-white/10 bg-white/5 p-4 text-sm">
          <span className="text-white/65">{result.unitLabel}</span>
          <strong className="whitespace-nowrap font-display text-lg font-bold tabular-nums text-white">
            {result.unitLabel === "Allocated" ? `${Math.round(result.unitCost * 100)}%` : formatCurrency(result.unitCost)}
          </strong>
        </div>
      ) : null}
      {extras.length ? (
        <div className={`mt-5 grid gap-2 text-sm ${extrasGridClass}`}>
          {extras.map((extra) => (
            <div className="result-range-cell min-w-0 border border-white/10 bg-white/5 p-3" key={extra.label}>
              <span className="block text-xs uppercase tracking-[0.12em] text-white/55">{extra.label}</span>
              <strong className="result-range-extra-value mt-1 block font-display font-bold text-white">{extra.value}</strong>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
