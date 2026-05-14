import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function adsTxtPublisherId() {
  return siteConfig.ads.adsensePublisherId.replace(/^ca-/i, "");
}

export function GET() {
  const body = `google.com, ${adsTxtPublisherId()}, DIRECT, f08c47fec0942fa0\n`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, must-revalidate"
    }
  });
}
