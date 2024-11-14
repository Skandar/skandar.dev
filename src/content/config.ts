import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  publishedTime: z.coerce.date(),
  modifiedTime: z.coerce.date().optional(),
  tags: z.array(z.string()),
  ogImage: z.string().optional(),
  ogImageAlt: z.string().optional(),
  ogType: z.enum(["website", "article"]).optional(),
  /** The topic that the article covers */
  section: z.string().optional(),
  draft: z.boolean().optional(),
});

const articleCollection = defineCollection({
  type: "content",
  schema,
});

export const collections = { articles: articleCollection };
