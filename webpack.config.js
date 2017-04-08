/**
 * Created by chia-yenhung on 4/5/17.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/app.js'
  ],
  output: { path: __dirname, filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader' }
    ]
  },
};
