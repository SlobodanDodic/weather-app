/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/home.jpg')",
        notFound: "url('../src/assets/notFound.jpg')",
        search: "url('../src/assets/search.jpg')",
        daily: "url('../src/assets/daily.jpg')",
      },
    },
    height: {
      "10h": "10vh",
      "20h": "20vh",
      "30h": "30vh",
      "40h": "40vh",
      "50h": "50vh",
      "60h": "60vh",
      "70h": "70vh",
      "80h": "80vh",
      "90h": "90vh",
      "100h": "100vh",
    },
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
