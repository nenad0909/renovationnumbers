import { notFound } from "next/navigation";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { getCalculatorAnswerLead, getCalculatorFaqs } from "@/lib/calculator-seo";
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
    title: calculator.name,
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
  const answerLead = getCalculatorAnswerLead(calculator);
  const faqs = getCalculatorFaqs(calculator);

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
    name: `How to estimate ${calculator.shortName.toLowerCase()} costs`,
    description: answerLead,
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
        name: `Enter your ${calculator.shortName.toLowerCase()} project details`,
        text: `Adjust the default ${calculator.shortName.toLowerCase()} inputs such as size, materials, labor, and optional allowances.`
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Review the planning range",
        text: "Compare the low, average, and high estimate plus the cost breakdown to understand the main budget drivers."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Use the estimate for contractor quotes",
        text: calculator.content.example
      }
    ]
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }
      : null;

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
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <CalculatorLayout calculator={calculator} />
    </>
  );
}
