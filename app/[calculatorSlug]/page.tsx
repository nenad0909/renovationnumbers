import { notFound } from "next/navigation";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { calculatorDefinitions, getCalculator } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

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
    path: `/${calculator.slug}`,
    keywords: [
      calculator.name.toLowerCase(),
      calculator.shortName.toLowerCase(),
      calculator.category.toLowerCase(),
      `${calculator.shortName.toLowerCase()} cost`,
      `${calculator.shortName.toLowerCase()} estimate`
    ]
  });
}

export default async function CalculatorPage({ params }: PageProps) {
  const { calculatorSlug } = await params;
  const calculator = getCalculator(calculatorSlug);

  if (!calculator) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/${calculator.slug}`;

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calculator.name,
    description: calculator.metaDescription,
    url: pageUrl,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`
    },
    image: `${siteConfig.url}/og-image.jpg`,
    about: {
      "@type": "Thing",
      name: calculator.category
    }
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${calculator.name}`,
    description: calculator.intro,
    inLanguage: "en-US",
    url: pageUrl,
    totalTime: "PT2M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0"
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter project details",
        text: "Fill in your project size, materials, and other key inputs in the calculator form."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Review the estimated range",
        text: "Review the low, average, and high planning estimates plus the cost breakdown."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Compare with contractor bids",
        text: "Use the estimate as a baseline when requesting and comparing local contractor quotes."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <CalculatorLayout calculator={calculator} />
    </>
  );
}
