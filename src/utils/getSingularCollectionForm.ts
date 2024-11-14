const collections = {
  articles: "articles",
} as const;

export const getSingularCollectionForm = (
  collectionName: keyof typeof collections,
) => collections[collectionName] || collectionName;
