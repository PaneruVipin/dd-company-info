/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        intro_image_1:
          "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000')",
        intro_image_2:
          "url('https://img.freepik.com/premium-photo/majestic-mountain-lake-vista-artwork_435508-108.jpg?w=2000')",
        intro_image_3:
          "url('https://img.freepik.com/premium-photo/beautiful-landscape-view-with-pastel-colors_553012-15005.jpg?w=2000')",
        intro_image_4:
          "url('https://img.freepik.com/premium-photo/summervaporwave_849761-15418.jpg?w=2000')",
        intro_image_5:
          "url('https://img.freepik.com/premium-photo/summer-travel-vacation-holiday-concept-wooden-pier-sunset-phuket-thailand_960782-2156.jpg?w=2000')",
        intro_image_6:
          "url('https://img.freepik.com/premium-photo/purple-sunset-lake-with-wooden-dock-mountains-background_849761-19005.jpg?w=2000')",
          footer_bg: "url('/footer-bg-1.png')",
      },
    },
  },
  plugins: [],
};
