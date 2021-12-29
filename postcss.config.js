module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': { url: 'inline' },
    tailwindcss: {},
    'postcss-preset-env': {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
}
