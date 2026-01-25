import type { MetadataRoute } from "next";
import { services } from "../content/services";
import { products } from "../content/products";
import { posts } from "../content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ampu.tech";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: new Date(),
    })),
    { url: `${baseUrl}/products`, lastModified: new Date() },
    ...products.map((p) => ({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: new Date(),
    })),
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];
}

