import { style } from "@vanilla-extract/css";
import { tokens } from "src/styles/themes.css";

const footer = style({
  paddingBlock: tokens.sizes[64],
  borderBlockStart: `${tokens.borders.widths[8]} dashed ${tokens.theme.colors.accent}`,
});

const title = style({
  marginBlockEnd: tokens.sizes[16],
});

const top = style({
  display: "flex",
  justifyContent: "space-between",
  gap: tokens.sizes[40],
  flexWrap: "wrap",
  marginBlockEnd: tokens.sizes[48],
});

export const styles = {
  footer,
  title,
  top,
};
