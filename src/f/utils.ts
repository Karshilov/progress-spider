export const camel2Kebab = (src: string) => {
  return src
    .split("")
    .reduce(
      (a, c) =>
        c.match(/[A-Z]/)
          ? [...a, [c.toLowerCase()]]
          : (() => {
              a[a.length - 1].push(c);
              return a;
            })(),
      [[]]
    )
    .map((item) => item.join(""))
    .join("-");
};
