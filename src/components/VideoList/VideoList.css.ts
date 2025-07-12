import { style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";

const list = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  rowGap: tokens.spaces[36],
});

const item = style({
  maxWidth: "min(80ch, 100%)",
});

export const styles = { list, item };
