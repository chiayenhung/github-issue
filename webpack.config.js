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
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      {
        test: /\.woff(2)?$/i,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot)$/i,
        loader: "file-loader"
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      }
    ]
  },
};
