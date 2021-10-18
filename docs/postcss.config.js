const path = require('path')

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-node-sass')({
      includePaths: [path.join(__dirname, 'node_modules')],
      outputStyle: 'compressed',
    }),
    require('autoprefixer'),
  ],
}
