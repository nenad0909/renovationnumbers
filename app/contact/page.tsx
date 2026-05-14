import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Contact Home Cost Numbers",
  description: "Contact Home Cost Numbers about calculator feedback, site questions, or general inquiries.",
  path: "/contact"
});

export default function ContactPage() {
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
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="mt-8 animate-fade-up">
            <span className="pill">Get in touch</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Contact</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
          <p className="text-lg leading-8 text-[#A1A1A1]">
            For site feedback, calculator suggestions, or general questions, contact us at{" "}
            <a className="font-semibold text-[#61F3BB] underline-offset-4 hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 border border-white/15 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-[#61F3BB]/40 hover:text-[#61F3BB]"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16v12H4z M4 6l8 7 8-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Send an email
          </a>
          <div className="mt-8 border border-white/10 bg-black/40 p-6 text-sm leading-7 text-[#A1A1A1]">
            Please do not send sensitive personal information, financial documents, contractor contracts, or private project records. We cannot provide professional construction, legal, financial, or tax advice.
          </div>
        </article>
      </section>
    </main>
  );
}
