/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#6c6db2",
        200: "#6c6db2",
        300: "#6c6db2",
        400: "#6c6db2",
        500: "#6c6db2",
        600: "#6c6db2",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      primary: {
        100: "#6c6db2", // Más fuerte
        500: "#4d648d", // Predeterminado
        900: "#1a2333", // Más oscuro
      },
      secondary: {
        100: "#f30b86", // Más fuerte
        500: "#888888", // Predeterminado
        900: "#333333", // Más oscuro
      },
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
