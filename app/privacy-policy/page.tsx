import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Renovation Numbers, including cookies, analytics, advertising partners, and contact information.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
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
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <div className="mt-8 animate-fade-up">
            <span className="pill">Legal</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Privacy Policy</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-site relative overflow-hidden border border-white/10 bg-[#1A1A1A] p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />
          <p>This privacy policy is a template and should be reviewed by a qualified professional before launch.</p>
          <h2>Information We Collect</h2>
          <p>{siteConfig.name} does not require an account. Calculator inputs are used to show estimates in your browser and are not intended to collect sensitive personal information.</p>
          <h2>Cookies and Analytics</h2>
          <p>The site may use cookies and analytics tools in the future to understand traffic, improve pages, and measure performance.</p>
          <h2>Advertising Partners</h2>
          <p>If the site adds advertising in the future, advertising partners may use cookies or similar technologies consistent with applicable law and this policy.</p>
          <h2>No Sale of Personal Information</h2>
          <p>We do not sell personal information. If this changes, this policy should be updated before launch.</p>
          <h2>Contact</h2>
          <p>Questions can be sent to {siteConfig.contactEmail}.</p>
        </article>
      </section>
    </main>
  );
}
