import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN as string;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [`${baseUrl}/hero.svg`, `${baseUrl}/logo.svg`],
    },
    {
      url: `${baseUrl}#contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
