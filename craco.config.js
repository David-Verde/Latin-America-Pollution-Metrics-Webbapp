/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
