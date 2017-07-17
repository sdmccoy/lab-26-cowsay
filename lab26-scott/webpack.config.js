'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //will tell webpack where to load the app from, the mainjs
  entry: `${__dirname}/src/main.js`,
  //tell webpack where to put the bundles after they are built
  output: {
    //what do we want the files called. hash is a random string created by wp
    filename: 'bundle-[hash].js',
    //where do we want to bundles when done building
    path: `${__dirname}/build`,
    //what to prefix all src and href tags with.
    publicPath: '/',
  },

  plugins: [
    //constructor that adds dynamic script/link tags to index.html
    new HtmlPlugin({template: `${__dirname}/src/index.html`}),
    //constructor that makes a bundle from our sass style
    new ExtractPlugin('bundle-[hash].css'),
  ],
   module: {
     //configure/set rules for the loaders
     rules: [
       //take our js extension files and turn them from es6 to es5 using babel
       {
         //regex for the extension
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       },
       //turn our sass/scss in to css
       {
         test: /\.scss$/,
         loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
       },
     ],
   },
};
