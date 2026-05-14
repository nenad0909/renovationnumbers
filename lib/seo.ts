import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

const DEFAULT_KEYWORDS = [
  "home improvement cost calculator",
  "renovation cost estimate",
  "remodeling calculator",
  "home repair cost",
  "renovation budget",
  "home renovation calculator"
];

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime
}: SeoInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}/og-image.jpg`;
  const mergedKeywords = Array.from(new Set([...(keywords ?? []), ...DEFAULT_KEYWORDS]));

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: mergedKeywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.copyrightHolder }],
    creator: siteConfig.copyrightHolder,
    publisher: siteConfig.copyrightHolder,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} calculators`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    },
    category: "home improvement"
  };
}
