import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";
import { breakpoints } from "../../styles/tokens";

export const entry = style({});

const link = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[8],
});

const figure = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  gap: tokens.spaces[16],

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      flexDirection: "row",
    },
  },
});

const image = style({
  flexGrow: 0,

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      flexBasis: "250px",
      maxWidth: "250px",
    },
  },
});

const caption = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[4],
  flexGrow: 1,
});

const title = style({
  fontSize: tokens.typography.display.lg.fontSize,
  color: tokens.theme.colors.text,
  textWrap: "balance",
  textDecoration: "2px underline transparent",
  transition: "text-decoration 0.15s ease-in-out",

  selectors: {
    [`${entry}:hover &`]: {
      textDecoration: `2px underline ${tokens.theme.colors.text}`,
    },
  },
});

const description = style({
  fontSize: tokens.typography.text.md.fontSize,
  color: tokens.theme.colors.text,
});

export const styles = {
  entry,
  link,
  title,
  description,
  figure,
  image,
  caption,
};
