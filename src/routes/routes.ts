import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
  path: string;
  to: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes = [
  {
    path: "/lazy1",
    to: "/lazy1",
    Component: LazyPage1,
    name: "Lazy 1",
  },
  {
    path: "/lazy2",
    to: "/lazy2",
    Component: LazyPage2,
    name: "Lazy 2",
  },
  {
    path: "/lazy3",
    to: "/lazy3",
    Component: LazyPage3,
    name: "Lazy 3",
  },
];
