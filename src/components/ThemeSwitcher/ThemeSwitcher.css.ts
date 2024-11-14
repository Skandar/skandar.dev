import { style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";

const title = style({
  marginBlockEnd: tokens.spaces[20],
});

const wrapper = style({
  display: "flex",
});

const button = style({
  selectors: {
    // Disable double border between items
    "& + &": {
      borderInlineStart: "none",
    },
  },
});

export const styles = { title, wrapper, button };
