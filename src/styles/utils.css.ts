import { style } from "@vanilla-extract/css";

export const visuallyHidden = style({
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
});

export const styles = {
  visuallyHidden,
};
