import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for Renovation Numbers, including informational estimates, user responsibility, and limitations.",
  path: "/terms-of-use"
});

export default function TermsPage() {
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
          <Breadcrumbs items={[{ label: "Terms of Use" }]} />
          <div className="mt-8 animate-fade-up">
            <span className="pill">Legal</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Terms of Use</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-site relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
          <p>By using {siteConfig.name}, you agree that the site is provided for informational planning purposes only.</p>
          <h2>Informational Estimates Only</h2>
          <p>Calculator results are general estimates and are not professional advice, contractor bids, financial advice, legal advice, or permit guidance.</p>
          <h2>User Responsibility</h2>
          <p>You are responsible for verifying project scope, local prices, permits, and professional requirements before starting work.</p>
          <h2>No Guarantee of Accuracy</h2>
          <p>We do not guarantee that estimates, assumptions, or content will be accurate for your specific project or location.</p>
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent allowed by law, the site is not liable for decisions, losses, costs, or damages related to use of the calculators or content.</p>
          <h2>Changes to the Site</h2>
          <p>We may update calculators, assumptions, pages, or these terms over time.</p>
        </article>
      </section>
    </main>
  );
}
