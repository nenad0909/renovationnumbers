import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home Improvement Cost Calculator FAQ | Home Cost Numbers",
  description: "Answers to common questions about renovation estimates, contractor quotes, contingencies, and local pricing.",
  path: "/faq"
});

const faqs = [
  {
    question: "How accurate are these renovation calculators?",
    answer:
      "They are planning tools, not bids. They help you understand cost drivers and likely ranges before you request local quotes."
  },
  {
    question: "Why should I get more than one contractor quote?",
    answer:
      "Multiple quotes help you compare scope, materials, timelines, warranties, and local labor assumptions. The cheapest total is not always the best value."
  },
  {
    question: "Why does location matter so much?",
    answer:
      "Labor rates, permit fees, material availability, disposal costs, and contractor demand vary by market. Local pricing should replace generic assumptions before you commit."
  },
  {
    question: "Can I use these estimates for financing decisions?",
    answer:
      "Use them only for early planning. Financing, tax, legal, and construction decisions should be based on professional advice and written bids."
  }
];

export default function FAQPage() {
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
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <div className="mt-8 max-w-3xl animate-fade-up">
            <span className="pill">Help center</span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#A1A1A1]">
              Clear answers about estimate ranges, local pricing, contractor quotes, and responsible renovation planning.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <FAQSection faqs={faqs} />
      </section>
    </main>
  );
}
