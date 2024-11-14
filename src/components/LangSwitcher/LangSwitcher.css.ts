import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/styles/tokens";
import { tokens } from "../../styles/themes.css";

const title = style({
  marginBlockEnd: tokens.spaces[20],
});

const button = style({
  flex: "1 1 50%",

  "@media": {
    [`all and (min-width: ${breakpoints.xs})`]: {
      flex: "initial",

      selectors: {
        // Disable double border between items
        "& + &": {
          borderInlineStart: "none",
        },
      },
    },
  },
});

const list = style({
  display: "inline-flex",
  flexDirection: "row",
  flexWrap: "wrap",

  "@media": {
    [`all and (min-width: ${breakpoints.xs})`]: {
      flexWrap: "nowrap",
    },
  },
});

export const styles = {
  title,
  list,
  button,
};
