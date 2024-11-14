import { style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";

const container = style({
  textAlign: "center",

  selectors: {
    "&::before": {
      content: '""',
      display: "block",
      marginBlock: tokens.spaces[24],
      marginInline: "auto",
      height: tokens.spaces[4],
      width: tokens.sizes[128],
      borderBlockStart: `${tokens.spaces[4]} solid ${tokens.theme.colors.accent}`,
    },
  },
});

const title = style({
  marginBlockEnd: tokens.spaces[20],
});

const links = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: tokens.spaces[24],
  rowGap: tokens.spaces[8],
});

export const styles = { container, title, links };
