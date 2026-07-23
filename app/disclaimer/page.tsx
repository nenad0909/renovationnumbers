import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclaimer explaining that home improvement cost estimates are general planning tools and not professional advice.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111111]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(255,107,53,0.25), transparent)" }}
        />
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Breadcrumbs items={[{ label: "Disclaimer" }]} />
          <div className="mt-8 animate-fade-up">
            <span className="pill">Legal</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Disclaimer</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-site relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
          <p>Cost estimates on this site are general planning tools. They are not contractor bids and do not guarantee what your project will cost.</p>
          <h2>Actual Costs May Differ</h2>
          <p>Actual contractor bids may differ based on your location, permits, labor rates, material prices, contractor pricing, project complexity, access, hidden conditions, and scope changes.</p>
          <h2>Consult Qualified Professionals</h2>
          <p>Users should consult licensed contractors, inspectors, engineers, financial professionals, legal professionals, tax professionals, or local authorities when appropriate.</p>
          <h2>No Professional Advice</h2>
          <p>The calculators and content are not professional construction, financial, tax, legal, or real estate advice.</p>
        </article>
      </section>
    </main>
  );
}
