/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'acorn':['Acorn']
    },
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bgimg': "url('/sr c/assets/bannner.avif')",
        'cate': "url('/src/assets/cabinet.png')",
        'indoorimg': "url('/src/assets/indoor1.jpg')",
      },
    },
  },
  plugins: [],
});

// module.exports = {
//   darkMode: ['class', '[data-mode="dark"]'],
//   // ...
// }


