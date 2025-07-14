import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";
import { breakpoints } from "../../styles/tokens";

export const header = style({
  borderBlockEnd: `${tokens.borders.widths[8]} dashed ${tokens.theme.colors.accent}`,
  paddingBlock: tokens.sizes[24],
  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      paddingBlock: tokens.sizes[48],
    },
  },
});

export const nav = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: `${tokens.sizes[2]} ${tokens.sizes[4]}`,

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      alignItems: "flex-start",
    },
  },
});

export const linkList = style({
  display: "flex",
  gap: tokens.sizes[16],
  listStyle: "none",

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      gap: tokens.sizes[32],
    },
  },
});

export const linkItem = style({
  display: "flex",
  gap: tokens.sizes[4],
  listStyle: "none",
});
