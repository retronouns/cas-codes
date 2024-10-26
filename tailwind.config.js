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
      fontFamily: {
        "cas": ["VictorMono", "monospace"],
      },
    },
  },
  plugins: [],
};
