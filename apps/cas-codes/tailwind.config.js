/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        turbulence: {
          "0%": { filter: "url(#squiggly-0)" },
          "25%": { filter: "url(#squiggly-1)" },
          "50%": { filter: "url(#squiggly-2)" },
          "75%": { filter: "url(#squiggly-3)" },
          "100%": { filter: "url(#squiggly-4)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite",
        squiggle: "turbulence 0.4s infinite",
      },
      fontFamily: {
        "cas": ["VictorMono", "monospace"],
      },
    },
  },
  plugins: [],
};
