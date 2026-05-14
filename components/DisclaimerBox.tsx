export const standardDisclaimer =
  "This calculator provides a general estimate for planning purposes only. Actual costs may vary based on your location, labor rates, material choices, permits, contractor pricing, and project complexity. This is not professional construction, financial, or legal advice.";

export function DisclaimerBox({ children = standardDisclaimer }: { children?: string }) {
  return (
    <div className="relative overflow-hidden border border-[#FF6B35]/25 bg-[#FF6B35]/5 p-6 text-sm leading-7 text-white">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-[#FF6B35]"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
            <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
        <div>
          <h2 className="text-base font-semibold text-white">Important Disclaimer</h2>
          <p className="mt-2 text-[#A1A1A1]">{children}</p>
        </div>
      </div>
    </div>
  );
}
