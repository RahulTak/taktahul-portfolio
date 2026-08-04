import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://buildswiftly.in",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}