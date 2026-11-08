export const toKebabCase = (value: string) =>
  value.trim().toLowerCase().split(" ").join("-");
