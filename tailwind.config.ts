import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const { themeVariants, prefersLight, prefersDark } = require("tailwindcss-theme-variants");
const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/discord_bot/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors:{
      "dark-background": "#121212",
      "custom" : "#1E2124",
      "transparent": 'transparent',
      "blue": colors.blue,
      "red": colors.red,
      "yellow": colors.yellow,
      "green": colors.green,
      "cyan": colors.cyan,
      "indigo": colors.indigo,
      'white': colors.white,
      'black': colors.black,
      'sky' : colors.sky,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
    plugins: [
        themeVariants({
            themes: {
                light: {
                    mediaQuery: prefersLight
                },
                dark: {
                  mediaQuery: prefersDark
                },
            },
        }),
     ],
};
export default config;
