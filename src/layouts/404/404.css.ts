import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const title = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: tokens.spaces[20],
});

export const styles = { title };
