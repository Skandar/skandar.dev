import type { AstroGlobal } from "astro";
import { ui, DEFAULT_LANG, type Language } from "./ui";

type Keys = keyof (typeof ui)[Language];

export function useTranslations(lang: Language) {
  return function t(key: Keys, replacements?: Record<string, string>) {
    let string = ui[lang][key] ?? ui[DEFAULT_LANG][key];

    if (!replacements) {
      return string;
    }

    for (const [replKey, replValue] of Object.entries(replacements)) {
      string = string.replace(`$${replKey}`, replValue);
    }

    return string;
  };
}

export const getCurrentLocale = (Astro: AstroGlobal): Language => {
  return (Astro.currentLocale || DEFAULT_LANG) as Language;
};
