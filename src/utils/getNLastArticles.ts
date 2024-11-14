import type { AnyEntryMap, CollectionEntry } from "astro:content";

export const getNLastArticles = (
  articles: CollectionEntry<keyof AnyEntryMap>[],
  n: number = 5,
) => {
  const sortedArticles = [...articles];

  // Articles are sorted by publication date newest to oldest
  sortedArticles.sort(
    (a, b) => b.data.publishedTime.getTime() - a.data.publishedTime.getTime(),
  );

  return sortedArticles.slice(0, n);
};
