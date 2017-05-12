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
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  watch: true,
};

