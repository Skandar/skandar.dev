import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const section = style({
  flexGrow: 1,
});

const title = style({
  marginBlockEnd: tokens.spaces[16],
});

const list = style({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spaces[36],
});

const item = style({
  maxWidth: "min(80ch, 100%)",
});

export const styles = { section, title, list, item };
