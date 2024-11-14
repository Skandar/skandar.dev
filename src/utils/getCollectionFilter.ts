export const getCollectionFilter = ({
  lang,
  slug,
  draft,
  isDev,
}: {
  lang: string;
  slug: string;
  isDev: boolean;
  draft?: boolean;
}) => slug.startsWith(lang) && (isDev || !draft);
