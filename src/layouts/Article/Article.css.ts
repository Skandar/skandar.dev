import { globalStyle, style } from "@vanilla-extract/css";
import { tokens } from "~/styles/themes.css";
import { breakpoints } from "~/styles/tokens";

const body = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  marginInline: "auto",
  rowGap: tokens.spaces[16],

  "@media": {
    [`all and (min-width: ${breakpoints.sm})`]: {
      gridTemplateColumns:
        "[full-start] 7ch [content-start] 1fr [content-end] 7ch [full-end]",
    },
  },
});

globalStyle(
  `${body} > :where(p, h1, h2, h3, h4, h5, h6, ul, ol, pre, table, blockquote, aside, article, div, [data-footnotes])`,
  {
    gridColumn: "content",
  },
);

globalStyle(`${body} :where(img, :has(img))`, {
  gridColumn: "full",
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
  padding: tokens.spaces[20],
});

globalStyle(`${body} img`, {
  display: "block",
  width: "100%",
  maxWidth: "fit-content",
  height: "auto",
  marginInline: "auto",
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
