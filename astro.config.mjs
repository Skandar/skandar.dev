import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import sitemap from "@astrojs/sitemap";

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
        // Choose from Shiki's built-in themes (or add your own)
        // https://shiki.style/themes
        theme: "github-dark",
        // Alternatively, provide multiple themes
        // See note below for using dual light/dark themes
        // themes: {
        //   light: 'github-light',
        //   dark: 'github-dark',
        // },
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://shiki.style/languages
        // langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
        // Add custom transformers: https://shiki.style/guide/transformers
        // Find common transformers: https://shiki.style/packages/transformers
        // transformers: [],
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
