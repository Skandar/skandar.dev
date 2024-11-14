import { describe, expect, test } from "vitest";

import { useTranslations } from "../utils";
import { DEFAULT_LANG, type Language } from "../ui";

describe("useTranslations", () => {
  describe.each([
    {
      lang: DEFAULT_LANG,
      langName: "English",
      expected: ["Home"],
    },
    {
      lang: "ru" as const,
      langName: "Russian",
      expected: ["Главная"],
    },
    {
      lang: "uk" as const,
      langName: "Ukranian",
      expected: ["Головна"],
    },
    {
      lang: "ro" as const,
      langName: "Romanian",
      expected: ["Acasă"],
    },
  ])("when the language is $langName", ({ lang, expected }) => {
    const t = useTranslations(lang as Language);

    test("should return the correct translation", () => {
      expect(t("nav.home")).toBe(expected[0]);
    });
  });
});
