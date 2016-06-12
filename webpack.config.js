var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/* No production settings for now, only dev! */

module.exports = [{
  cache: true,
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extendsions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'eval-cheap-module-inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ConfApp',
      template: './src/index.ejs'
    })
  ]
}];
