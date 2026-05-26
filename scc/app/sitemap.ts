import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondchance-collision.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastSignificantUpdate = new Date("2026-05-26T00:00:00.000Z");

  return [
    {
      url: `${siteUrl}/`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/right-to-know`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/collision-repair-blaine-mn`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/collision-repair-lino-lakes-mn`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/collision-repair-ramsey-county-mn`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bumper-to-bumper-collision-repair`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: lastSignificantUpdate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
