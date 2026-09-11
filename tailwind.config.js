/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
