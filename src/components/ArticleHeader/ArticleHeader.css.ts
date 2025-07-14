import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { tokens } from "../../styles/themes.css";

const header = style({
  paddingBlockEnd: tokens.spaces[64],
  marginInline: "auto",
});

const title = style({
  marginBlockEnd: tokens.spaces[16],
});

const group = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[4],
});

const groupTitle = style({
  fontWeight: tokens.typography.text.md.fontWeight.bold,
});

const info = style({
  display: "flex",
  flexWrap: "wrap",
  rowGap: tokens.spaces[16],
  columnGap: tokens.spaces[32],
});

const tags = style({
  display: "flex",
  gap: tokens.spaces[8],
  flexWrap: "wrap",
  marginInlineStart: calc.negate(tokens.spaces[8]),
});

const tag = style({
  marginBlockStart: calc.negate(tokens.spaces[2]),
  paddingBlock: tokens.spaces[2],
  paddingInline: tokens.spaces[8],
  borderRadius: tokens.borders.radii[2],
  backgroundColor: tokens.theme.colors.foreground,
});

export const styles = {
  header,
  title,
  group,
  groupTitle,
  tags,
  tag,
  info,
};
