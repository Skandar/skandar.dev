import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

export const entry = style({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spaces[8],
});

export const link = style({
  display: "inline-flex",
  flexDirection: "column",
  gap: tokens.spaces[4],
});

export const title = style({
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

export const description = style({
  fontSize: tokens.typography.text.md.fontSize,
  color: tokens.theme.colors.text,
});

export const styles = { entry, link, title, description };
