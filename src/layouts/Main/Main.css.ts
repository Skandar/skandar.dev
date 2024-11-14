import { style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";
import { breakpoints } from "~/styles/tokens";

const hero = style({
  "@media": {
    [`all and (min-width: ${breakpoints.md})`]: {
      paddingBlockEnd: tokens.spaces[128],
    },
  },
});

const heroTitle = style({
  fontSize: "min(10rem, 14vw)",
  lineHeight: 1,
  textTransform: "uppercase",
});

const heroSecondLine = style({
  display: "inline-flex",
  alignItems: "baseline",
  flexWrap: "wrap",
  rowGap: tokens.spaces[32],
  // distance between large title and small title
  columnGap: "0.04lh",
});

const heroDescription = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[8],
  fontSize: tokens.typography.display.xl.fontSize,
  lineHeight: 1,
});

const articles = style({
  marginBlockEnd: tokens.spaces[64],
});

const articlesTitle = style({
  marginBlockEnd: tokens.spaces[16],
});

export const styles = {
  hero,
  heroSecondLine,
  heroTitle,
  heroDescription,
  articles,
  articlesTitle,
};
