import { defineCollection, z } from "astro:content";
import { TAGS } from "~/i18n/ui";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  publishedTime: z.coerce.date(),
  modifiedTime: z.coerce.date().optional(),
  // tags: z.array(z.string()),
  tags: z.array(z.enum(Object.keys(TAGS) as [keyof typeof TAGS])),
  ogImage: z.string().optional(),
  ogImageAlt: z.string().optional(),
  ogType: z.enum(["website", "article"]).optional(),
  /** The topic that the article covers */
  section: z.string().optional(),
  draft: z.boolean().optional(),
});

const videoSchema = schema.extend({
  videoUrl: z.string(),
  videoCoverUrl: z.string(),
  videoCoverAlt: z.string(),
});

const articleCollection = defineCollection({
  type: "content",
  schema,
});

const videoCollection = defineCollection({
  type: "content",
  schema: videoSchema,
});

export const collections = {
  articles: articleCollection,
  videos: videoCollection,
};
