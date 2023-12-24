/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      sm: "1.2rem",
      base: "1.4rem",
      xl: "1.6rem",
      "2xl": "1.7rem",
      "3xl": "2rem",
      "4xl": "2.2rem",
      "5xl": "2.4rem",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#32a9b7",
        danger: "#e1813a",
        white: "#fff",
        light: "rgba(255, 255, 255, 0.8)",
        black: "#131313",
        bg: "#1f2641",
        bg1: "#2e3267",
        bg2: "#424890",
      },
      fontFamily: {
        sans: ["poppins", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
