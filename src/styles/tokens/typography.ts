const fontSize = {
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  24: "1.5rem",
  30: "1.875rem",
  36: "2.25rem",
  48: "3rem",
  60: "3.75rem",
  72: "4.5rem",
} as const;

const fontWeight = {
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
} as const;

const letterSpacing = {
  normal: "normal",
  tide: "-0.02em",
} as const;

export const typography = {
  text: {
    xl: {
      fontSize: fontSize[24],
      fontWeight,
    },
    lg: {
      fontSize: fontSize[20],
      fontWeight,
    },
    md: {
      fontSize: fontSize[18],
      fontWeight,
    },
    sm: {
      fontSize: fontSize[16],
      fontWeight,
    },
    xs: {
      fontSize: fontSize[14],
      fontWeight,
    },
  },
  display: {
    xxl: {
      fontSize: fontSize[48],
      fontWeight,
      letterSpacing: letterSpacing.tide,
    },
    xl: {
      fontSize: fontSize[36],
      fontWeight,
      letterSpacing: letterSpacing.tide,
    },
    lg: {
      fontSize: fontSize[30],
      fontWeight,
    },
    md: {
      fontSize: fontSize[24],
      fontWeight,
    },
    sm: {
      fontSize: fontSize[20],
      fontWeight,
    },
    xs: {
      fontSize: fontSize[18],
      fontWeight,
    },
  },
};
