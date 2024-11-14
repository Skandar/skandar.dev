import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";

const callout = style({
  backgroundColor: tokens.theme.colors.foreground,
  paddingInline: tokens.spaces[4],
  paddingBlock: tokens.spaces[8],
  border: `5px solid ${tokens.theme.colors.accent}`,
});

const variant = styleVariants({
  info: {
    backgroundColor: tokens.theme.colors.foreground,
  },
  warning: {
    backgroundColor: tokens.theme.colors.accent,
  },
});

const badge = style({
  backgroundColor: "red",
});

export const styles = { callout, variant, badge };
