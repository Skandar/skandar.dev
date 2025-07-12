import { style } from "@vanilla-extract/css";

import { tokens } from "~/styles/themes.css";

const root = style({
  flexGrow: 1,
});

const title = style({
  marginBlockEnd: tokens.spaces[16],
});

const tag = style({
  backgroundColor: tokens.theme.colors.foreground,
  paddingInline: tokens.spaces[12],
  borderRadius: tokens.borders.radii[4],
});

const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[64],
});

export const styles = { root, title, tag, wrapper };
