type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <span className="section-eyebrow">Need to know</span>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>Frequently Asked Questions</h2>
      </div>
      <div className="divide-y divide-white/10 overflow-hidden border border-white/10 bg-[#1A1A1A]">
        {faqs.map((faq) => (
          <details className="group" key={faq.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-white transition hover:bg-white/5">
              <span className="pr-2 text-base md:text-lg">{faq.question}</span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center border border-white/15 bg-white/5 text-base font-bold text-[#61F3BB] transition-transform duration-300 group-open:rotate-45 group-open:border-[#61F3BB]/30 group-open:bg-[#61F3BB]/10"
              >
                +
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1">
              <p className="text-sm leading-7 text-[#A1A1A1] md:text-base">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
