import { notFound } from "next/navigation";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { calculatorDefinitions, getCalculator } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ calculatorSlug: string }>;
};

export function generateStaticParams() {
  return calculatorDefinitions.map((calculator) => ({
    calculatorSlug: calculator.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { calculatorSlug } = await params;
  const calculator = getCalculator(calculatorSlug);

  if (!calculator) {
    return {};
  }

  return buildMetadata({
    title: calculator.title,
    description: calculator.metaDescription,
    path: `/${calculator.slug}`
  });
}

export default async function CalculatorPage({ params }: PageProps) {
  const { calculatorSlug } = await params;
  const calculator = getCalculator(calculatorSlug);

  if (!calculator) {
    notFound();
  }

  return <CalculatorLayout calculator={calculator} />;
}
