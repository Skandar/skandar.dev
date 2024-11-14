import { style } from "@vanilla-extract/css";

import { tokens } from "~/styles/themes.css";
import { breakpoints } from "~/styles/tokens";

const main = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[64],
  paddingBlock: tokens.spaces[48],
  // When there is a few content, the footer will be at the bottom of the page
  flexGrow: 1,

  "@media": {
    [`all and (min-width: ${breakpoints.md})`]: {
      paddingBlock: tokens.spaces[128],
    },
  },
});

export const styles = { main };
