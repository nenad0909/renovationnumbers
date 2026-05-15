import Link from "next/link";
import { CalculatorCard } from "@/components/CalculatorCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQSection } from "@/components/FAQSection";
import { calculatorDefinitions, categories } from "@/lib/calculators";

const faqs = [
  {
    question: "Are these home improvement estimates exact quotes?",
    answer:
      "No. The calculators provide planning ranges based on common cost drivers. Real bids depend on local labor, materials, permits, contractor pricing, and project scope."
  },
  {
    question: "Why do local contractor quotes vary so much?",
    answer:
      "Contractors may include different materials, prep work, warranties, timelines, overhead, and risk assumptions. Ask for itemized scopes before comparing totals."
  },
  {
    question: "Should I use the low, average, or high estimate?",
    answer:
      "Use the average estimate for early planning, the high estimate for budget stress testing, and real contractor bids before making financial decisions."
  },
  {
    question: "Do I need a contingency budget?",
    answer:
      "Most renovation projects benefit from a contingency because hidden conditions, code updates, and scope changes are common."
  }
];

const benefits = [
  "Free to use",
  "No signup required",
  "Easy estimates",
  "Adjustable assumptions",
  "Helpful for planning contractor conversations"
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden border-b border-white/10 bg-black">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 animate-slow-pan bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
        />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <h1
              className="text-balance text-4xl font-black uppercase tracking-tight text-black sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Free Home Improvement Cost Calculators
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-black sm:text-xl sm:text-[#A1A1A1]">
              Estimate renovation, repair, and upgrade costs before you start your next home project.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link className="btn-primary justify-center" href="/calculators">
                View Calculators
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link>
              <Link className="btn-orange justify-center" href="/home-renovation-budget-calculator">
                Start with Renovation Budget
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
              <div className="px-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1A1]">Calculators</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-black">{calculatorDefinitions.length}+</dd>
              </div>
              <div className="px-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1A1]">Categories</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-black">{categories.length}</dd>
              </div>
              <div className="px-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A1A1A1]">Cost</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-black">Free</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative isolate bg-black py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Find your starting point</span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Calculator Categories</h2>
            </div>
            <Link className="btn-ghost" href="/calculators">
              Browse all calculators
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_minmax(300px,380px)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category, index) => (
                <Link
                  className="group relative isolate flex flex-col justify-between overflow-hidden border border-white/10 bg-[#1A1A1A] p-6 transition duration-300 hover:border-[#61F3BB]/35 hover:bg-[#1e1e1e]"
                  href={category.href}
                  key={category.name}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#61F3BB]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center border border-[#61F3BB]/20 bg-[#61F3BB]/10 font-display text-sm font-bold text-[#61F3BB]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <svg aria-hidden="true" className="h-4 w-4 -translate-x-1 text-white/20 opacity-0 transition group-hover:translate-x-0 group-hover:text-[#61F3BB] group-hover:opacity-100" fill="none" viewBox="0 0 24 24">
                        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{category.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#A1A1A1]">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Sample estimate card */}
            <Link
              className="group relative isolate flex min-h-0 flex-col overflow-hidden border border-white/10 bg-[#1A1A1A] p-1.5 transition duration-300 hover:border-[#61F3BB]/35 lg:h-full"
              href="/kitchen-remodel-cost-calculator"
            >
              <div className="flex min-h-0 flex-1 flex-col bg-[#111111] p-6">
                <div className="shrink-0 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#61F3BB]">Sample Estimate</p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">Kitchen Remodel</h3>
                  </div>
                </div>
                <div className="mt-6 flex min-h-0 flex-1 flex-col justify-center gap-3">
                  {[
                    ["Project size", "180 sq ft"],
                    ["Remodel level", "Mid-range"],
                    ["Labor region", "Standard"]
                  ].map(([label, value]) => (
                    <div
                      className="flex items-center justify-between border border-white/10 bg-black px-4 py-3 transition group-hover:border-[#61F3BB]/20"
                      key={label}
                    >
                      <span className="text-sm text-[#A1A1A1]">{label}</span>
                      <strong className="text-sm font-semibold text-white">{value}</strong>
                    </div>
                  ))}
                </div>
                <div
                  className="relative mt-6 shrink-0 overflow-hidden p-5 text-white"
                  style={{
                    background: "linear-gradient(135deg, #0d1f14 0%, #1a2a1a 100%)",
                    border: "1px solid rgba(97,243,187,0.25)",
                    boxShadow: "0 8px 32px -8px rgba(97,243,187,0.25)"
                  }}
                >
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-white/65">Estimated average</p>
                  <strong className="relative mt-1 block font-display text-3xl font-bold text-[#61F3BB]">$47,800</strong>
                  <div className="relative mt-4 h-1.5 overflow-hidden bg-white/10">
                    <div
                      className="h-full w-2/3"
                      style={{ background: "linear-gradient(90deg, #3de0a5 0%, #61F3BB 100%)" }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured calculators */}
      <section className="relative isolate overflow-hidden bg-[#111111] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-1/3 -z-10 h-72 w-[40rem] rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(97,243,187,0.3), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="section-eyebrow">Top picks</span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Featured Calculators</h2>
              <p className="mt-4 text-base leading-7 text-[#A1A1A1] md:text-lg">
                Start with a focused calculator, then refine the assumptions as your project scope gets clearer.
              </p>
            </div>
            <Link className="btn-ghost" href="/calculators">
              Browse all calculators
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {calculatorDefinitions.map((calculator) => (
              <CalculatorCard calculator={calculator} key={calculator.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative isolate overflow-hidden bg-black py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="section-eyebrow">Why homeowners use it</span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Why Use This Site</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  className="group relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-6 transition hover:border-[#61F3BB]/30"
                  key={benefit}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#61F3BB]/5 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="relative grid h-10 w-10 place-items-center border border-[#61F3BB]/20 bg-[#61F3BB]/10 font-display text-sm font-bold text-[#61F3BB]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-4 font-bold tracking-tight text-white">{benefit}</h3>
                  <p className="relative mt-2 text-sm leading-7 text-[#A1A1A1]">
                    Get a clearer planning range before you request bids or make material decisions.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Disclaimer */}
      <section className="bg-[#111111] py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <DisclaimerBox>
            Estimates are for planning only. Actual costs vary by location, labor rates, material quality, permits, contractor pricing, and project complexity.
          </DisclaimerBox>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
