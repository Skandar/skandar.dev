import { style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";

const title = style({
  marginBlockEnd: tokens.spaces[16],
});

export const styles = { title };
