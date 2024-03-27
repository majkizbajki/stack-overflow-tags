/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#222426",
          dark: "#222426",
        },
        primary: {
          light: "#F48023",
          dark: "#F48023",
        },
        secondary: {
          light: "#FFFFFF",
          dark: "#FFFFFF",
        },
        error: {
          light: "#DC2626",
          dark: "#DC2626",
        },
      },
    },
  },
  plugins: [],
};
