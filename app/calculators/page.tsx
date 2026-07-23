import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorCard } from "@/components/CalculatorCard";
import { calculatorDefinitions, categories, getCalculatorsByCategory } from "@/lib/calculators";
import { buildMetadata, categoryAnchor } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home Improvement Calculators",
  description:
    "Browse free remodeling, repair, exterior, energy, and renovation budget calculators for common home improvement projects.",
  path: "/calculators"
});

export default function CalculatorsPage() {
  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111111]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(97,243,187,0.3), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Breadcrumbs items={[{ label: "Calculators" }]} />
          <div className="mt-8 max-w-3xl animate-fade-up">
            <span className="pill">All calculators</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Home Improvement Calculators
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#A1A1A1]">
              Choose a calculator to estimate common renovation, repair, exterior, energy, and budget planning projects.
            </p>
            <nav aria-label="Category quick links" className="mt-7 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  className="inline-flex items-center gap-1.5 border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80 transition hover:border-[#61F3BB]/40 hover:text-[#61F3BB]"
                  href={`#${categoryAnchor(category.name)}`}
                  key={category.name}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculatorDefinitions.map((calculator) => (
            <CalculatorCard calculator={calculator} key={calculator.slug} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {categories.map((category) => {
            const items = getCalculatorsByCategory(category.name);
            if (!items.length) return null;
            return (
              <div
                className="relative isolate overflow-hidden border border-white/10 bg-[#1A1A1A] p-6 md:p-8"
                id={categoryAnchor(category.name)}
                key={category.name}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="section-eyebrow">{`${items.length} calculator${items.length === 1 ? "" : "s"}`}</span>
                    <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>{category.name}</h2>
                  </div>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((calculator) => (
                    <CalculatorCard calculator={calculator} key={calculator.slug} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
