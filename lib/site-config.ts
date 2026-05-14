export const siteConfig = {
  name: "Renovation Numbers",
  copyrightHolder: "Nenad Milicevic",
  futureDomain: "RenovationNumbers.com",
  url: "https://renovationnumbers.com",
  description:
    "Free home improvement cost calculators for remodeling, repairs, maintenance, and renovation budgeting.",
  contactEmail: "i@inenad.com",
  ads: {
    showPlaceholders: true,
    adsensePublisherId: "ca-pub-5997243351653069"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    { label: "Remodeling", href: "/remodeling" },
    { label: "Exterior", href: "/exterior" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" }
  ]
};

export function getCopyrightYear(): number {
  return new Date().getFullYear();
}

