/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {

          "primary": "#43767e",

          "secondary": "#42D9C8",

          "accent": "#326771",

          "neutral": "#191D24",

          "base-100": "#F9F8FC",

          "info": "#2c8c99",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#931621",
        },
      },
    ],
  },
}
