import { CalculatorCard } from "@/components/CalculatorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { calculatorDefinitions, getCalculatorsByCategory } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Exterior Project Cost Calculators | Home Cost Numbers",
  description: "Estimate roofing, fence, deck, exterior painting, and solar project costs with free home improvement calculators.",
  path: "/exterior"
});

export default function ExteriorPage() {
  const calculators = [
    ...getCalculatorsByCategory("Exterior Projects"),
    ...calculatorDefinitions.filter((calculator) => ["paint-cost-calculator", "solar-savings-calculator"].includes(calculator.slug))
  ];
  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111111]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(255,107,53,0.25), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Breadcrumbs items={[{ label: "Exterior" }]} />
          <div className="mt-8 max-w-3xl animate-fade-up">
            <span className="pill">Exterior Projects</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Exterior Project Cost Calculators
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#A1A1A1]">
              Estimate major outdoor projects such as roofing, fences, decks, exterior paint, and solar planning.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {calculators.map((calculator) => (
          <CalculatorCard calculator={calculator} key={calculator.slug} />
        ))}
      </section>
    </main>
  );
}
