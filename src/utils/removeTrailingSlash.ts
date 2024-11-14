export const removeTrailingSlash = (str: string) => {
  if (str.length < 2) {
    return str;
  }

  return str.replace(/\/+$/, "");
};
