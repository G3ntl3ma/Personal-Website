const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const {
  themeVariants,
  prefersLight,
  prefersDark,
} = require("tailwindcss-theme-variants");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/discord_bot/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "dark-background": "#121212",
      custom: "#1E2124",
      transparent: "transparent",
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      cyan: colors.cyan,
      indigo: colors.indigo,
      white: colors.white,
      black: colors.black,
      sky: colors.sky,
      slate: colors.slate,
    },
    extend: {
      animation: {
         aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
