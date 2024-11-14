import { style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";

const section = style({
  paddingBlock: tokens.spaces[20],
  paddingInline: tokens.spaces[12],
  border: `${tokens.sizes[8]} solid ${tokens.theme.colors.border}`,
  textAlign: "center",
});

const title = style({
  marginBlockEnd: tokens.spaces[16],
});

const list = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  rowGap: tokens.spaces[12],
  columnGap: tokens.spaces[16],
});

export const styles = { section, title, list };
