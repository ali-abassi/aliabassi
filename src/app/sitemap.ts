import { MetadataRoute } from "next";
import { thoughts } from "@/data/thoughts";
import { workItems } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aliabassi.com";
  const lastModified = new Date();

  const mainRoutes = ["", "/work", "/tools", "/about", "/content"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const thoughtRoutes = thoughts.map((thought) => ({
    url: `${baseUrl}/thoughts/${thought.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const workDetailRoutes = workItems.map((w) => ({
    url: `${baseUrl}/work/${w.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...thoughtRoutes, ...workDetailRoutes];
}

