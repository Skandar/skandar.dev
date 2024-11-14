import { assignVars, fontFace, globalStyle } from "@vanilla-extract/css";
import {
  darkThemeColors,
  lightThemeColors,
  themeContract,
  tokens,
} from "./themes.css";

const nunitoSans = fontFace([
  {
    src: 'local("Nunito Sans"), local("NunitoSans"), url("/fonts/nunito-sans-400.woff2") format("woff2")',
    fontWeight: 400,
    fontStyle: "normal",
  },
  {
    src: 'local("Nunito Sans"), local("NunitoSans"), url("/fonts/nunito-sans-700.woff2") format("woff2")',
    fontWeight: 700,
    fontStyle: "normal",
  },
  {
    src: 'local("Nunito Sans"), local("NunitoSans"), url("/fonts/nunito-sans-900.woff2") format("woff2")',
    fontWeight: 900,
    fontStyle: "normal",
  },
]);

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: light)": {
      vars: assignVars(themeContract, lightThemeColors),
    },
    "(prefers-color-scheme: dark)": {
      vars: assignVars(themeContract, darkThemeColors),
    },
  },
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("::selection", {
  color: tokens.theme.colors.background,
  backgroundColor: tokens.theme.colors.accent,
});

globalStyle(":focus-visible", {
  outlineStyle: tokens.borders.styles.solid,
  outlineColor: tokens.theme.colors.accent,
  outlineWidth: tokens.borders.widths[4],
  outlineOffset: tokens.borders.widths[4],
});

globalStyle("html, body", {
  scrollbarGutter: "stable",
  blockSize: "100%",
  padding: 0,
  margin: 0,
  fontFamily: `${nunitoSans}, system-ui, sans-serif`,
});

globalStyle("html", {
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      scrollBehavior: "smooth",
    },
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
    },
  },
});

globalStyle("body", {
  display: "flex",
  flexDirection: "column",
  color: tokens.theme.colors.text,
  fontSize: tokens.typography.text.md.fontSize,
  lineHeight: 1.5,
  backgroundColor: tokens.theme.colors.background,
});

globalStyle("button", {
  cursor: "pointer",
  fontFamily: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("picture", {
  display: "block",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  textWrap: "balance",
});

globalStyle("h2, h3, h4, h5, h6", {
  lineHeight: 1.15,
  textWrap: "balance",
});

globalStyle("h1", {
  fontSize: `clamp(
    ${tokens.typography.display.xl.fontSize},
    6vw,
    ${tokens.typography.display.xxl.fontSize}
  )`,
  fontWeight: tokens.typography.display.xxl.fontWeight.black,
  lineHeight: 1.2,
});

globalStyle("h2", {
  // fontSize: tokens.typography.display.xl.fontSize,
  fontSize: `clamp(
    ${tokens.typography.display.lg.fontSize},
    5vw,
    ${tokens.typography.display.xl.fontSize}
  )`,
  fontWeight: tokens.typography.display.xl.fontWeight.black,
});

globalStyle("h3", {
  // fontSize: tokens.typography.display.lg.fontSize,
  fontSize: `clamp(
    ${tokens.typography.display.md.fontSize},
    4vw,
    ${tokens.typography.display.lg.fontSize}
  )`,
  fontWeight: tokens.typography.display.lg.fontWeight.bold,
});

globalStyle("h4", {
  // fontSize: tokens.typography.display.md.fontSize,
  fontSize: `clamp(
    ${tokens.typography.display.sm.fontSize},
    3vw,
    ${tokens.typography.display.md.fontSize}
  )`,
  fontWeight: tokens.typography.display.md.fontWeight.bold,
});
