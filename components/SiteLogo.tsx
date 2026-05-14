import { siteConfig } from "@/lib/site-config";

export function SiteLogo({ className = "h-[54px] w-auto shrink-0" }: { className?: string }) {
  return (
    <img alt={siteConfig.name} src="/logo.svg" width={507} height={193} decoding="async" className={`object-contain object-left ${className}`} />
  );
}
