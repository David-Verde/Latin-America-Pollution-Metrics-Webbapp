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
        dribble: '#282828',
        head: '#282828',
        category: '#373737',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
