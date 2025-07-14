import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const videoLink = style({
  position: "relative",
});

const playButton = style({
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  width: "100%",
  height: "100%",
});

const playButtonIcon = style({
  width: tokens.spaces[64],
  height: tokens.spaces[64],

  pointerEvents: "none",
  transition: "color 0.25s ease",
  filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",

  selectors: {
    [`${videoLink}:hover &`]: {
      color: tokens.theme.colors.danger,
    },
  },
});

export const styles = { videoLink, playButton, playButtonIcon };
