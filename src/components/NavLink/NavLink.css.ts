import { style } from "@vanilla-extract/css";
import { tokens } from "src/styles/themes.css";

export const link = style({
  color: "inherit",
  textDecoration: "none",
  fontSize: tokens.typography.text.lg.fontSize,
  fontWeight: tokens.typography.text.lg.fontWeight.bold,
});
