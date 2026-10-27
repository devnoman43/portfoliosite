import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/projects/next-athlete-academy/recruitment-platform.webp`,
        `${SITE_URL}/projects/hockey-hero/equipment-membership.webp`,
        `${SITE_URL}/projects/smartpop/feature.webp`,
        `${SITE_URL}/projects/shine-checkout/00-feature.webp`,
      ],
    },
  ];
}
