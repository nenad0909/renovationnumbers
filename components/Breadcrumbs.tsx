import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#A1A1A1]">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link className="px-1 transition hover:text-[#61F3BB]" href="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-1.5" key={item.label}>
            <svg aria-hidden="true" className="h-3.5 w-3.5 text-white/25" fill="none" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            {item.href ? (
              <Link className="px-1 transition hover:text-[#61F3BB]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
