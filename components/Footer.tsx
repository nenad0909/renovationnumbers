import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { calculatorDefinitions } from "@/lib/calculators";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="inline-flex shrink-0 items-center" href="/">
              <SiteLogo className="h-[60px] w-auto max-h-[60px] max-w-[min(100%,420px)]" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#A1A1A1]">
              Free planning calculators for homeowners. Understand costs before starting your project.
            </p>
            <p className="mt-5 text-xs text-[#555]">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#61F3BB]">Calculators</h3>
            <ul className="mt-4 space-y-2">
              {calculatorDefinitions.slice(0, 8).map((calculator) => (
                <li key={calculator.slug}>
                  <Link
                    className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]"
                    href={`/${calculator.slug}`}
                  >
                    {calculator.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#61F3BB]">Info</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/about">About</Link>
              </li>
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/faq">FAQ</Link>
              </li>
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/contact">Contact</Link>
              </li>
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link className="text-sm text-[#A1A1A1] transition hover:text-[#61F3BB]" href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-6 text-[#555]">
            Estimates are for planning only. Actual costs vary by location, labor rates, material quality, permits, contractor pricing, and project complexity.
            Always consult qualified professionals before making financial or construction decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
