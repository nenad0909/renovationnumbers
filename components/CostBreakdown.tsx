import { formatCurrency } from "@/lib/calculator-utils";
import type { BreakdownItem } from "@/lib/types";

export function CostBreakdown({ items }: { items: BreakdownItem[] }) {
  const max = Math.max(...items.map((item) => Math.abs(item.amount)), 1);

  return (
    <div className="border border-white/10 bg-[#1A1A1A] p-6">
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#61F3BB]" />
        <h3 className="text-base font-semibold text-white">Cost Breakdown</h3>
      </div>
      <div className="mt-5 space-y-4">
        {items.map((item) => {
          const width = `${Math.max(6, (Math.abs(item.amount) / max) * 100)}%`;
          const isNegative = item.amount < 0;
          return (
            <div key={item.label}>
              <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-white">{item.label}</span>
                <span
                  className={`shrink-0 whitespace-nowrap font-display tabular-nums font-semibold ${isNegative ? "text-[#61F3BB]" : "text-white"}`}
                >
                  {formatCurrency(item.amount)}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden bg-white/10">
                <div
                  className={`h-full transition-all duration-500`}
                  style={{
                    width,
                    background: isNegative ? "#61F3BB" : "linear-gradient(90deg, #3de0a5 0%, #61F3BB 100%)"
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
