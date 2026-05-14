import { CalculatorCard } from "@/components/CalculatorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCalculatorsByCategory } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Remodeling Cost Calculators | Home Cost Numbers",
  description: "Estimate kitchen, bathroom, flooring, painting, and renovation budget costs with free remodeling calculators.",
  path: "/remodeling"
});

export default function RemodelingPage() {
  const calculators = getCalculatorsByCategory("Interior Remodeling");
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
          <Breadcrumbs items={[{ label: "Remodeling" }]} />
          <div className="mt-8 max-w-3xl animate-fade-up">
            <span className="pill">Interior Remodeling</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
              Remodeling Cost Calculators
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#A1A1A1]">
              Plan interior remodels with practical calculators for kitchens, bathrooms, flooring, and whole-project budgets.
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
