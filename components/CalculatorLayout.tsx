import { Breadcrumbs } from "./Breadcrumbs";
import { CalculatorForm } from "./CalculatorForm";
import { DisclaimerBox } from "./DisclaimerBox";
import { RelatedCalculators } from "./RelatedCalculators";
import type { CalculatorDefinition } from "@/lib/types";
import { getRelatedCalculators } from "@/lib/calculators";

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#61F3BB]" />
        <h2 className="text-xl font-bold uppercase tracking-tight text-white">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3 text-sm leading-7 text-[#A1A1A1] sm:grid-cols-2">
        {items.map((item) => (
          <li className="border border-white/10 bg-[#1A1A1A] p-4 transition hover:border-[#61F3BB]/25" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CalculatorLayout({ calculator }: { calculator: CalculatorDefinition }) {
  const related = getRelatedCalculators(calculator.related);

  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111111]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(97,243,187,0.25), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: calculator.name }]} />
          <div className="mt-8 max-w-3xl animate-fade-up">
            <span className="pill">{calculator.category}</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              {calculator.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#A1A1A1]">{calculator.intro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#A1A1A1]">
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 font-semibold text-white">
                <svg className="h-3.5 w-3.5 text-[#61F3BB]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                Free planning tool
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <div className="space-y-12">
          <CalculatorForm calculator={calculator} />
          <section className="border border-white/10 bg-[#1A1A1A] p-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#61F3BB]" />
              <h2 className="text-xl font-bold uppercase tracking-tight text-white">Assumptions You Can Adjust</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#A1A1A1]">
              {calculator.assumptions.map((assumption) => (
                <li className="border border-white/10 bg-black/40 p-3.5" key={assumption}>
                  {assumption}
                </li>
              ))}
            </ul>
          </section>
          <div className="grid gap-10">
            <ContentList items={calculator.content.affectsCost} title="What Can Make the Cost Higher" />
            <ContentList items={calculator.content.reduceCost} title="How to Reduce Cost" />
            <ContentList items={calculator.content.callProfessional} title="When to Call a Professional" />
            <ContentList items={calculator.content.mistakes} title="Common Mistakes to Avoid" />
            <section className="relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-6">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#61F3BB]" />
                <h2 className="text-xl font-bold uppercase tracking-tight text-white">Example Calculation</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#A1A1A1] md:text-base">{calculator.content.example}</p>
            </section>
          </div>
          <RelatedCalculators calculators={related} />
          <DisclaimerBox />
        </div>
        <aside className="space-y-6">
          <div className="hidden border border-white/10 bg-[#1A1A1A] p-6 lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-[#61F3BB]/20 bg-[#61F3BB]/10 text-[#61F3BB]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2v6m0 12v2m10-10h-6M4 12H2m17.07-7.07-4.24 4.24M9.17 14.83l-4.24 4.24m14.14 0-4.24-4.24M9.17 9.17 4.93 4.93" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-white">Planning Tip</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-[#A1A1A1]">
              Use this estimate as a starting range, then request multiple local quotes with the same scope so bids are easier to compare.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
