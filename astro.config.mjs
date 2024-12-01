import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import sitemap from "@astrojs/sitemap";

import lightTheme from "./src/styles/shikijs/light.json"
import darkTheme from "./src/styles/shikijs/dark.json"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    optimizeDeps: {
      include: undefined,
      noDiscovery: true,
    },
    plugins: [
      vanillaExtractPlugin(),
    ],
  },
  site: "https://skandar.dev",
  integrations: [
    mdx({
      optimize: true,
      shikiConfig: {
        theme: lightTheme,
        themes: {
          light: lightTheme,
          dark: darkTheme,
        },
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://shiki.style/languages
        // langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
        // Transformers https://shiki.style/packages/transformers
        // transformers: [
        //   transformerNotationHighlight(),
        //   transformerNotationErrorLevel()
        // ]
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ru: "ru",
          uk: "uk",
          ro: "ro"
        },
      }
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "uk", "ro"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  trailingSlash: "never",
});
