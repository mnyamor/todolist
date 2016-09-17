const webpack = require('webpack');
const path = require('path');

module.exports = {
 devtool: 'inline-source-map',
 entry: [
  'webpack-dev-server/client?http://localhost:1337',
  'webpack/hot/dev-server',
  './app/index'
 ],
 output: {
   path: __dirname,
   filename: 'bundle.js',
   publicPath: '/static/'
 },
 resolve: {
  modulesDirectories: ['node_modules', 'app'],
  extensions: ['', '.js']
 },
 module:{
  loaders: [
    { 
      test: /\.js?$/, 
      exclude: /node_modules/, 
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    },
    { 
      test: /\.scss$/, 
      loader: 'style-loader!css-loader!sass-loader?sourceMap',
      include: path.join(__dirname, 'app/theme'), 
    },
    { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader?sourceMap',
      include: path.join(__dirname, 'app/theme'), 
    }
  ]
 },
 plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
 ]
};