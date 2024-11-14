import { style } from "@vanilla-extract/css";
import { tokens } from "../../styles/themes.css";

const title = style({
  marginBlockEnd: tokens.spaces[20],
});

const list = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spaces[8],
});

export const styles = {
  title,
  list,
};
