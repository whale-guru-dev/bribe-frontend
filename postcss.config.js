// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    'postcss-font-magician': {
      variants: {
          'Roboto': {
              '300': [],
              '400': [],
              '700': []
          }
      },
      foundries: ['google']
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
