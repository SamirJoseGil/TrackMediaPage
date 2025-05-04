import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#00e929',
          dark: '#00c924',
          light: '#33ee4f',
        },
        tracked: {
          black: '#000101',
          white: '#fefffe',
        },
        dark: {
          DEFAULT: '#000101',
          light: '#101010',
          lighter: '#1a1a1a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
} satisfies Config;
