import Link from "next/link";
import { CalculatorsNavMenu } from "@/components/CalculatorsNavMenu";
import { SiteLogo } from "@/components/SiteLogo";
import { calculatorDefinitions } from "@/lib/calculators";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="inline-flex shrink-0 items-center" href="/">
          <SiteLogo className="h-[54px] w-auto max-h-[54px] max-w-[min(100%,360px)] sm:h-[60px] sm:max-h-[60px] md:max-w-[420px]" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 md:flex">
          {siteConfig.nav.map((item) =>
            item.label === "Calculators" ? (
              <CalculatorsNavMenu calculatorsHref={item.href} key={item.href} />
            ) : (
              <Link className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="btn-orange hidden md:inline-flex"
            href="/home-renovation-budget-calculator"
          >
            Start Budget
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
          <details className="group relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center border border-white/15 bg-white/5 text-white transition hover:border-[#61F3BB]/40 hover:text-[#61F3BB]">
              <span className="sr-only">Open menu</span>
              {/* hamburger — visible when closed */}
              <svg aria-hidden="true" className="h-5 w-5 group-open:hidden" fill="none" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
              {/* X — visible when open */}
              <svg aria-hidden="true" className="hidden h-5 w-5 group-open:block" fill="none" viewBox="0 0 24 24">
                <path d="M6 18 18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-72 border border-white/10 bg-[#0a0a0a] p-3 shadow-soft backdrop-blur">
              {siteConfig.nav.map((item) => (
                <Link className="block px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#61F3BB]" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/10 pt-2">
                {calculatorDefinitions.slice(0, 5).map((calculator) => (
                  <Link className="block px-3 py-2 text-sm text-white/50 transition hover:bg-white/5 hover:text-[#61F3BB]" href={`/${calculator.slug}`} key={calculator.slug}>
                    {calculator.shortName}
                  </Link>
                ))}
              </div>
              <Link
                className="btn-orange mt-3 w-full"
                href="/home-renovation-budget-calculator"
              >
                Start Budget
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
