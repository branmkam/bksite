/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
      },
      keyframes: {
        hoveryellow: {
          '0%': { backgroundColor: 'white' },
          '100%': { backgroundColor: '#FFD300'},
        }
      },
      animation: {
        hoveryellow: 'hoveryell 1s ease-in-out',
      }  
    },
  },
  plugins: [],
};
