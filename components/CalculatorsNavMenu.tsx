"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { calculatorDefinitions } from "@/lib/calculators";

type CalculatorsNavMenuProps = {
  calculatorsHref: string;
};

export function CalculatorsNavMenu({ calculatorsHref }: CalculatorsNavMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative"
      onBlurCapture={(e) => {
        const next = e.relatedTarget;
        if (next instanceof Node && e.currentTarget.contains(next)) return;
        setOpen(false);
      }}
      onFocusCapture={() => setOpen(true)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link aria-expanded={open} className="nav-link inline-flex items-center gap-1" href={calculatorsHref}>
        Calculators
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </Link>
      <div
        aria-hidden={!open}
        className={`absolute left-1/2 top-full z-50 flex w-max min-w-[min(600px,calc(100vw-3rem))] max-w-[600px] -translate-x-1/2 pt-3 transition-[visibility,opacity] duration-150 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="border border-white/10 bg-[#0a0a0a] p-3 shadow-soft backdrop-blur">
          <div className="grid grid-cols-2 gap-1">
            {calculatorDefinitions.map((calculator) => (
              <Link
                className="group/item flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-[#61F3BB] focus:bg-white/5 focus:outline-none"
                href={`/${calculator.slug}`}
                key={calculator.slug}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
              >
                <span>{calculator.name}</span>
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 -translate-x-1 text-white/30 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-[#61F3BB]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
