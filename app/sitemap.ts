import type { MetadataRoute } from "next";
import { calculatorDefinitions } from "@/lib/calculators";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/calculators",
    "/remodeling",
    "/exterior",
    "/maintenance",
    "/faq",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/disclaimer"
  ];

  const calculatorRoutes = calculatorDefinitions.map((calculator) => `/${calculator.slug}`);

  return [...staticRoutes, ...calculatorRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/calculators" ? 0.9 : 0.75
  }));
}
