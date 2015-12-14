/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
'use strict';

var path = require('path');
var webpack = require('webpack');


module.exports = {
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, "bower_components")
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],

  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: './build',
  },

  entry: "./src/js/main.js",
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'},
    ]
  }
};
/* @license-end */

// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
