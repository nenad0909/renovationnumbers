"use client";

export function PrintButton() {
  return (
    <button
      className="inline-flex items-center gap-2 border border-white/15 bg-transparent px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:border-[#61F3BB]/40 hover:text-[#61F3BB]"
      onClick={() => window.print()}
      type="button"
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
        <path d="M6 9V4h12v5M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
      Print / Save Estimate
    </button>
  );
}
