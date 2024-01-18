/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        sigmar: ["Sigmar", "sans-serif"],
      },
      keyframes: {
        hoveryellow: {
          "0%": { color: "white" },
          "100%": { color: "#FFD300", transform: "translateY(-5px)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        comefromright: {
          "0%": {
            transform: "translateX(100px)",
          },
          "90%": {
            transform: "translateX(-8px)"
          },
          "100%": {
            transform: "translateX(0px)"
          }
        },
        comefromleft: {
          "0%": {
            transform: "translateX(-100px)",
          },
          "90%": {
            transform: "translateX(8px)"
          },
          "100%": {
            transform: "translateX(0px)"
          }
        },
        comefrombottom: {
          "0%": {
            transform: "translateY(100px)",
          },
          "100%": {
            transform: "translateY(0px)"
          }
        },
      },
      animation: {
        hoveryellow: "hoveryellow 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
