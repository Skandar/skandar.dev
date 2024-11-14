/**
 * Use breakpoint from this file directly.
 *
 * We can't use breakpoints as theme tokens because we can't use CSS custom properties in media queries.
 */
export const breakpoints = {
  xs: "24rem", // ~384px
  sm: "40rem", // ~640px
  md: "48rem", // ~768px
  lg: "64rem", // ~1024px
  xl: "90rem", // ~1440px
  xxl: "272rem", // ~2560px
} as const;
