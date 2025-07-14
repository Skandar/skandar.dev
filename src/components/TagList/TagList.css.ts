import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const list = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  rowGap: tokens.spaces[12],
});

const item = style({
  maxWidth: "min(80ch, 100%)",
});

const link = style({
  fontSize: tokens.typography.display.lg.fontSize,
  color: tokens.theme.colors.text,
});

export const styles = { list, item, link };
