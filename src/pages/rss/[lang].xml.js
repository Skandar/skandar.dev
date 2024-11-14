import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { languages } from "~/i18n/ui";

import { useTranslations } from "~/i18n/utils";
import { getCollectionFilter } from "~/utils/getCollectionFilter";
import { getLocalizedUrl } from "~/utils/getLocalizedPath";
import { getPathWithoutLocale } from "~/utils/getPathWithoutLocale";

export async function getStaticPaths() {
  return languages.map((lang) => ({
    params: {
      lang,
    },
  }));
}

export async function GET({ params, site }) {
  const { lang } = params;

  const t = useTranslations(lang);

  const articles = await getCollection("articles", ({ data, slug }) =>
    getCollectionFilter({
      lang,
      slug,
      isDev: false,
      draft: data.draft,
    }),
  );

  return rss({
    site,
    title: t("meta.title") || "Aleksandr Slugin's website",
    description: t("meta.description"),
    items: articles.map(({ data, slug, collection }) => {
      const link = getLocalizedUrl(
        lang,
        `/${collection}/${getPathWithoutLocale(slug)}`,
      );

      return {
        link,
        title: data.title,
        description: data.description,
        pubDate: data.publishedTime,
        customData: `<language>${lang}</language>`,
      };
    }),
  });
}
