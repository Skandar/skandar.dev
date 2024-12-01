import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { tokens } from "~/styles/themes.css";
import { breakpoints } from "~/styles/tokens";

const callout = style({
  position: "relative",
  gridColumn: "full",
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[12],
  paddingBlock: tokens.spaces[24],
  paddingInline: tokens.spaces[24],
  marginBlock: tokens.spaces[24],
  backgroundColor: tokens.theme.colors.foreground,
  borderInlineStart: `${tokens.sizes[4]} solid ${tokens.theme.colors.accent}`,
  borderInlineEnd: `${tokens.sizes[4]} solid transparent`,

  "@media": {
    [`all and (min-width: ${breakpoints.md})`]: {
      paddingBlock: tokens.sizes[32],
      paddingInline: tokens.spaces[32],
    },
  },
});

const variant = styleVariants({
  info: {
    backgroundColor: tokens.theme.colors.foreground,
  },
  warning: {
    backgroundColor: tokens.theme.colors.foreground,
  },
});

const badge = style({
  position: "absolute",
  insetInlineStart: calc.negate(tokens.sizes[2]),
  insetBlockStart: tokens.sizes[2],
  transform: "translate(-50%, -50%)",
  width: tokens.sizes[32],
  height: tokens.sizes[32],
  boxShadow: `0 0 0 ${tokens.sizes[4]} ${tokens.theme.colors.background}`,
  backgroundColor: tokens.theme.colors.background,
});

export const styles = { callout, variant, badge };
