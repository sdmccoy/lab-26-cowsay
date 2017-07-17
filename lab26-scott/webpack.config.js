'use strict';

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
    new 
  ]
};
