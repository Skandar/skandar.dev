import { globalStyle, style } from "@vanilla-extract/css";

import { tokens } from "../../styles/themes.css";
import { breakpoints } from "../../styles/tokens";

const body = style({
  display: "grid",
  marginInline: "auto",
  rowGap: tokens.spaces[16],
  gridTemplateColumns: `
    [full-start]
    ${tokens.spaces[36]}
    [content-start]
    1fr
    [content-end]
    ${tokens.spaces[36]}
    [full-end]
  `,
});

globalStyle(
  `${body} > :where(p, h1, h2, h3, h4, h5, h6, ul, ol, pre, table, blockquote, aside, article, div, [data-footnotes])`,
  {
    gridColumn: "full",

    "@media": {
      [`all and (min-width: ${breakpoints.sm})`]: {
        gridColumn: "content",
      },
    },
  },
);

globalStyle(`${body} :where(pre, img, :has(img))`, {
  gridColumn: "full",

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      gridColumn: "content",
    },
  },
});

globalStyle(`${body} > img, ${body} :has(img)`, {
  marginBlock: tokens.spaces[12],
});

globalStyle(`${body} > h2`, {
  marginBlockStart: tokens.spaces[32],
});

globalStyle(`${body} > h3`, {
  marginBlockStart: tokens.spaces[24],
});

globalStyle(`${body} > h4`, {
  marginBlockStart: tokens.spaces[16],
});

globalStyle(`${body} pre`, {
  paddingBlock: tokens.spaces[12],
  paddingInline: tokens.spaces[16],
  width: "100%",

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      paddingBlock: tokens.spaces[24],
      paddingInline: tokens.spaces[36],
    },
  },
});

globalStyle(`${body} blockquote`, {
  borderInlineStart: `${tokens.borders.widths[4]} solid ${tokens.theme.colors.accent}`,
  paddingBlock: tokens.spaces[8],
  paddingInlineStart: tokens.spaces[20],
});

globalStyle(`${body} :where(code:not(pre > code), kbd)`, {
  marginInline: tokens.spaces[2],
  paddingBlock: tokens.spaces[2],
  paddingInline: tokens.spaces[4],
  fontWeight: tokens.typography.text.md.fontWeight.bold,
  border: `${tokens.borders.widths[1]} solid ${tokens.theme.colors.accent}`,
  backgroundColor: tokens.theme.colors.foreground,
  boxDecorationBreak: "clone",
  // for Safari
  WebkitBoxDecorationBreak: "clone",
});

globalStyle(`${body} :where(ul, ol)`, {
  listStyle: "revert",
  listStylePosition: "outside",
  paddingInlineStart: tokens.spaces[16],
});

globalStyle(`${body} a`, {
  textDecoration: "underline",
});

globalStyle(`${body} figcaption`, {
  textAlign: "center",
  fontSize: tokens.typography.text.sm.fontSize,
});

export const styles = { body };
