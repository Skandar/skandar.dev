import Callout from "~/components/Callout/Callout.astro";
import { Image, Picture } from "astro:assets";
import Link from "./Link/Link.astro";

/**
 * This object is used to import all possible components in Article.
 */
export const customComponents = {
  Callout,
  Image,
  Picture,
  Link,
};
