import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "About Home Cost Numbers",
  description: "Learn about Home Cost Numbers, a free planning resource for home improvement and renovation cost calculators.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111111]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(97,243,187,0.3), transparent)" }}
        />
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-8 animate-fade-up">
            <span className="pill">About</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              About {siteConfig.name}
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
          <div className="space-y-5 text-base leading-8 text-[#A1A1A1] md:text-lg">
            <p>
              {siteConfig.name} provides free planning calculators for homeowners who want to understand renovation, repair, and upgrade costs before starting a project.
            </p>
            <p>
              The calculators are designed to make cost conversations easier. They help you identify major assumptions, compare project scenarios, and prepare better questions for contractors.
            </p>
            <p>
              The site does not replace professional quotes, inspections, licensed contractors, financial advice, legal advice, or permit guidance. Use it as an early budgeting resource, then confirm pricing with qualified local professionals.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
