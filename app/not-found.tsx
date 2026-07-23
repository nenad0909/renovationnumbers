import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found. Browse free home improvement cost calculators instead.",
  path: "/404"
});

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
      <span className="pill">404</span>
      <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
        Page Not Found
      </h1>
      <p className="mt-5 text-lg leading-8 text-[#A1A1A1]">
        That page does not exist. Try the calculator directory or start with a featured planning tool.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn-primary" href="/calculators">
          Browse Calculators
        </Link>
        <Link className="btn-orange" href="/home-renovation-budget-calculator">
          Start Budget Calculator
        </Link>
      </div>
    </main>
  );
}
