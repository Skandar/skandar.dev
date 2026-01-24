import { getRelativeLocaleUrl } from "astro:i18n";
import { removeTrailingSlash } from "./removeTrailingSlash";
import type { Language } from "~/i18n/ui";

/**
 * Add the locale to the URL
 */
// export const getLocalizedUrl = (locale: string, url: string) =>
//   removeTrailingSlash(getRelativeLocaleUrl(locale, url));

export const getLocalizedUrl = (locale: Language, url: string) => {
  return removeTrailingSlash(getRelativeLocaleUrl(locale, url));
};
