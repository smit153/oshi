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
    brand: "#74c0fc",
    mode: "dark",
  },
  {
    key: "dracula",
    label: "Dracula",
    surface: "#282a36",
    brand: "#ff79c6",
    mode: "dark",
  },
  {
    key: "acid",
    label: "Acid",
    surface: "#0d0d0d",
    brand: "#00ff41",
    mode: "dark",
  },
  {
    key: "catppuccin",
    label: "Catppuccin",
    surface: "#eff1f5",
    brand: "#8839ef",
    mode: "light",
  },
  {
    key: "solarized-light",
    label: "Solarized Light",
    surface: "#fdf6e3",
    brand: "#b58900",
    mode: "light",
  },
  {
    key: "ember",
    label: "Ember",
    surface: "#ffffff",
    brand: "#b91c1c",
    mode: "light",
  },
];
