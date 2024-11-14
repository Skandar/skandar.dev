import { languages } from "src/i18n/ui";

export const getPathWithoutLocale = (path: string) => {
  // if path is empty or has only one segment ('/') we don't need to do anything
  if (path.length < 2) {
    return path;
  }

  const segments = path
    .split("/")
    .filter((segment) => segment && !languages.includes(segment as any));

  return segments.join("/");
};
