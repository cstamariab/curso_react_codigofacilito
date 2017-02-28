var path = require('path');

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/dist/index",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:['react','es2015','stage-0'],
          plugins:['react-html-attrs', 'transform-class-properties','transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + '/app/js',
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false , sourcemap: false})
  ],
}