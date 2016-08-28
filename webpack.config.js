/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "webpack" }]*/
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'application.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
    }]
  },
  devServer: {
    contentBase: 'public'
  }
}
