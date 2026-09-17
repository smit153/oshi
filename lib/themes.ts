export type Theme = {
  key: string;
  label: string;
  surface: string;
  brand: string;
  mode: "dark" | "light";
};

export const THEMES: Theme[] = [
  {
    key: "oshi",
    label: "Oshi",
    surface: "#120f11",
    brand: "#e0263f",
    mode: "dark",
  },
  {
    key: "nebula",
    label: "Nebula",
    surface: "#150f2e",
    brand: "#c084fc",
    mode: "dark",
  },
  {
    key: "phosphor",
    label: "Phosphor",
    surface: "#0d0a00",
    brand: "#ffb000",
    mode: "dark",
  },
  {
    key: "sakura",
    label: "Sakura",
    surface: "#fff5f7",
    brand: "#e0578a",
    mode: "light",
  },
  {
    key: "terracotta",
    label: "Terracotta",
    surface: "#fbf3ea",
    brand: "#c1522d",
    mode: "light",
  },
  {
    key: "glacier",
    label: "Glacier",
    surface: "#f4fbff",
    brand: "#1d6fa5",
    mode: "light",
  },
];
