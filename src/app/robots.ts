import { MetadataRoute } from "next";
import { APP_CONFIG } from "@/constants/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${APP_CONFIG.SITE_URL}/sitemap.xml`,
  };
}
