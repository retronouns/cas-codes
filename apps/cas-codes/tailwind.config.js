/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      cas: {
        "dark": "#f9688d",
        "light": "#f8d0d0",
        "bg": "#fbf0e8",
        "text": "#534859",
      },
    },
    keyframes: {
      squiggle: {
        "0%": { filter: "url(#squiggly-0)" },
        "25%": { filter: "url(#squiggly-1)" },
        "50%": { filter: "url(#squiggly-2)" },
        "75%": { filter: "url(#squiggly-3)" },
        "100%": { filter: "url(#squiggly-4)" },
      },
    },
    animation: {
      squiggle: "squiggle 0.4s infinite",
    },
    fontFamily: {
      "cas": ["VictorMono", "monospace"],
    },
  },
};
export const plugins = [];
