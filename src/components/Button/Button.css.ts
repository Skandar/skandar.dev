import { style, styleVariants } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const button = style({
  display: "inline-flex",
  lineHeight: "inherit",
  textDecoration: "none",
  userSelect: "none",
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderColor: "transparent",
  transition: `
    color ${tokens.transitions.durations[300]} ${tokens.transitions.timingFunctions.ease},
    background-color ${tokens.transitions.durations[300]} ${tokens.transitions.timingFunctions.ease},
    border-color ${tokens.transitions.durations[300]} ${tokens.transitions.timingFunctions.ease}
  `,
});

const sizes = styleVariants({
  small: {
    padding: `${tokens.spaces[8]} ${tokens.spaces[12]}`,
    borderWidth: tokens.borders.widths[1],
    fontSize: tokens.typography.text.sm.fontSize,
  },
  medium: {
    padding: `${tokens.spaces[12]} ${tokens.spaces[16]}`,
    borderWidth: tokens.borders.widths[2],
  },
});

const variants = styleVariants({
  filled: {
    color: tokens.theme.colors.main,
    backgroundColor: tokens.theme.colors.accent,
  },
  outline: {
    color: tokens.theme.colors.accent,
    borderColor: tokens.theme.colors.accent,
  },
  ghost: {
    color: tokens.theme.colors.accent,
  },
});

export const styles = { button, variants, sizes };
