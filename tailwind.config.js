module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gill: ['Gill Sans'],
      lato: ['Lato'],
    },
    extend: {
      colors: {
        dribble: '#E35A8A',
        head: '#E35C93',
        category: '#E05883',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
