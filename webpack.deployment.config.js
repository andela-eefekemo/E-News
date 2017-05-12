const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/js/client.js',
  output: {
    path: __dirname,
    filename: 'public/client.min.js',
    publicPath: 'public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },
    ],
  },
  watch: true,
};

