import type { Metadata, Viewport } from "next";
import { Archivo_Black, Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "900"]
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800"]
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400"]
});

const baseMetadata = buildMetadata({
  title: "Free Home Improvement Cost Calculators | Renovation Numbers",
  description:
    "Estimate remodeling, repair, and renovation costs with free home improvement calculators for kitchens, bathrooms, roofing, flooring, painting, HVAC, fences, decks, solar, and more."
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Free Home Improvement Cost Calculators | Renovation Numbers",
    template: `%s | ${siteConfig.name}`
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/web-app-manifest-192x192.png", sizes: "192x192" }]
  },
  other: {
    "google-adsense-account": siteConfig.ads.adsensePublisherId
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  founder: {
    "@type": "Person",
    name: siteConfig.copyrightHolder
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.contactEmail,
    contactType: "customer support",
    availableLanguage: ["English"]
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en-US",
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/calculators?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${archivoBlack.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero.png" fetchPriority="high" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <Script
          id="gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=G-MVVRFK1F3Q"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MVVRFK1F3Q');
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#61F3BB] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black" href="#main-content">
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.ads.adsensePublisherId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
