import Link from "next/link";
import type { CalculatorDefinition } from "@/lib/types";

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "Interior Remodeling": "#61F3BB",
    "Exterior Projects": "#FF6B35",
    "Repairs & Maintenance": "#FFE24A",
    "Systems & Utilities": "#BEEBFF",
    "Planning & Budget": "#E5D4FF"
  };
  const color = colors[category] ?? "#61F3BB";

  return (
    <span
      className="inline-flex items-center border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide"
      style={{ borderColor: `${color}30`, color, backgroundColor: `${color}10` }}
    >
      {category}
    </span>
  );
}

export function CalculatorCard({ calculator }: { calculator: CalculatorDefinition }) {
  return (
    <Link
      className="group flex h-full flex-col border border-white/10 bg-[#1A1A1A] p-6 transition hover:border-[#61F3BB]/40 hover:bg-[#1e1e1e]"
      href={`/${calculator.slug}`}
    >
      <div className="flex items-start justify-between gap-3">
        <CategoryBadge category={calculator.category} />
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0 -translate-x-1 text-white/20 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#61F3BB]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
      <h2 className="mt-4 text-lg font-bold tracking-tight text-white group-hover:text-[#61F3BB] transition-colors">
        {calculator.name}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#A1A1A1]">{calculator.description}</p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#61F3BB] opacity-0 transition group-hover:opacity-100">
        Calculate now
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </Link>
  );
}
