import { camel2Kebab } from "./utils";

export type Child = null | string | HTMLElement | false;
export type Children = Child | Child[];

const appendChild = (el: HTMLElement, c: Children) => {
  if (c instanceof Array) {
    for (const cc of c) appendChild(el, cc);
  } else if (typeof c === "string") {
    el.appendChild(document.createTextNode(c));
  } else if (c) {
    el.appendChild(c);
  }
};

export const createFragment = (props: Record<string, any> = {}, ...children: Children[]) => {
	return children
}

export const createElement = (
  tag: string | Function,
  props: Record<string, any> = {},
  ...children: Children[]
) => {
  if (tag instanceof Function) {
    return tag(props, children);
  }
  const el = document.createElement(tag);
  Object.entries(props || {}).forEach(([key, value]) => {
    if (key === "style") {
      Object.entries(value).forEach(([styleName, styleValue]) => {
        styleName = camel2Kebab(styleName);
        (el.style as any)[styleName] = typeof styleValue === 'number' ? `${styleValue}px` : styleValue;
      })
    } else if (key.startsWith("on") && key.toLowerCase() in window) {
      el.addEventListener(key.toLowerCase().slice(2), value)
    } else {
      (el as any)[key] = props[key];
    }
  });
  for (const child of children) {
    appendChild(el, child);
  }
  return el;
};