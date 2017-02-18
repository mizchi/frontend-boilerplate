/* flow */
const AsyncAwaitPlugin = require('webpack-async-await')

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  plugins: [
    new AsyncAwaitPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
