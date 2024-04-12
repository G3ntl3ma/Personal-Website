import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/discord_bot/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors:{
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
      'sky' : colors.sky
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'toggle-sun': ' reverse 350ms forwards all 350ms ease-in w-[82px] h-[82px] border-[5px] border-yellow-500 absolute bg-yellow-300'
      },
      keyframes: {
        reverse: {
          '0%' : {left: "104px", width: "82px"},
          '60%': {left: "72px", width: "112px"},
          '100%': {left: "4px"}
        }
      }
    },
  },
  plugins: [],
};
export default config;
