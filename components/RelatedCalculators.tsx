import Link from "next/link";
import type { CalculatorDefinition } from "@/lib/types";

export function RelatedCalculators({ calculators }: { calculators: CalculatorDefinition[] }) {
  return (
    <section className="border border-white/10 bg-[#1A1A1A] p-6">
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#61F3BB]" />
        <h2 className="text-xl font-bold uppercase tracking-tight text-white">Related Calculators</h2>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {calculators.map((calculator) => (
          <Link
            className="group flex items-center justify-between gap-3 border border-white/10 bg-black/40 p-4 transition hover:border-[#61F3BB]/35 hover:bg-[#1e1e1e]"
            href={`/${calculator.slug}`}
            key={calculator.slug}
          >
            <span className="block font-semibold text-white group-hover:text-[#61F3BB] transition-colors">{calculator.name}</span>
            <svg aria-hidden="true" className="h-4 w-4 shrink-0 -translate-x-1 text-white/20 transition group-hover:translate-x-0 group-hover:text-[#61F3BB]" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
