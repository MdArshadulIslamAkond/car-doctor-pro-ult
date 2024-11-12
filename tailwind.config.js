/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=mytheme]"],
          "primary": "#FF3811",
          "secondary": "#FF912C",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          ".btn-primary": {
            "color":"#ffffff"
          },
          ".btn-outline.btn-primary:hover": {
            "color":"#ffffff"
        },
        ".btn-outline": {
          "color": "#FF3811",
          "borderColor": "#FF3811",
        },
        ".btn-outline:hover": {
            "color": "#ffffff", 
            "backgroundColor": "#FF3811",
            "borderColor": "#FF3811",
          },
        
          // ".btn-outline:hover": {
          //   "color": "green", 
          //   "backgroundColor": "#ffffff",
          
          // },
          
      },
    },
    "dark",
    "cupcake",
  ],
}
};

