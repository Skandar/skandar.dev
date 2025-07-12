import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

import {
  sizes,
  spaces,
  colors,
  typography,
  borders,
  transitions,
} from "./tokens";

export const themeContract = createThemeContract({
  colors: {
    main: null,
    accent: null,
    text: null,
    background: null,
    foreground: null,
    border: null,
    danger: null,
  },
});

export const darkThemeColors = {
  colors: {
    main: colors.black,
    accent: colors.white,
    text: colors.white,
    background: colors.black,
    foreground: colors.darkGray,
    border: colors.white,
    danger: colors.red,
  },
};

export const lightThemeColors = {
  colors: {
    main: colors.white,
    accent: colors.black,
    text: colors.black,
    background: colors.white,
    foreground: colors.lightGray,
    border: colors.black,
    danger: colors.red,
  },
};

createGlobalTheme(":root[data-theme=dark]", themeContract, darkThemeColors);

createGlobalTheme(":root[data-theme=light]", themeContract, lightThemeColors);

export const tokens = createGlobalTheme(":root", {
  sizes,
  spaces,
  colors,
  typography,
  borders,
  transitions,
  theme: themeContract,
});
