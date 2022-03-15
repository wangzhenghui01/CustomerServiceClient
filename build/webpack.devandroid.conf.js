var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.baseandroid.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
})

module.exports = merge(baseConfig, {
  // eval-source-map is faster for development
  devtool: 'source-map',
  //devtool: '#eval-source-map',
  output: {
    // necessary for the html plugin to work properly
    // when serving the html from in-memory
    publicPath: '/'
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    //plugin trick
    new HtmlWebpackPlugin({
      filename: 'android.html',
      template: 'android.html',
      inject: true,
      chunks: ['android-app']
    })
  ]
})
