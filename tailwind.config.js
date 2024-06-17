/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "400px",
      desktop: "1000px",
    },
    fontFamily: {
      IRANSansLight: "IRANSansLight",
    },
    extend: {
      animation: {
        fadeInDown: "fadeInDown 2s linear ",
        fadeInRight: "fadeInRight 3s linear ",
        zoomIn: "zoomIn 3s linear ",
      },
      backgroundImage: {
        kitchen: "url('/public/images/image10.png')",
      },
    },
  },
  plugins: [],
};
