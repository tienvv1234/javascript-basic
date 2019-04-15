const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // webpack will automatically figure out where this code is located and will bundle it together with index.js
  // we import polyfill in order to not convert but polyfill the features that we cannot convert with the babel loader (promise)
  entry: ['babel-polyfill', './src/js/index.js'], // the entry is where webpack will start the bundling, can import many entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  mode: 'development', // for develop
  devServer: {
    contentBase: './dist/' // here we will specify the folder from which webpack should serve our files
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        // what this rule does here is it tests all javascript files, and if it is a javascript file than it will
        // apply the babel-loader
        test: /\.js$/, // this will test all javascript files or with file end with .js (regular expression)
        exclude: /node_modules/, // that we want to exclude everything that's in a node_modules folder, if we wouldn't do this, the babel would apply to all of thousands of javascript files
        use: {
          loader: 'babel-loader' // using babel-loader
        }
      }
    ]
  }
};
