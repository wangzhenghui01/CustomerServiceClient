//path is a built-in node.js module,
var path = require('path')
//css-loaders.js in the same directory
var cssLoaders = require('./css-loaders')
//__dirname The name of the directory that the currently executing script resides in.
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  //entry point
  entry: {
    app: './src/android.js'
  },
  //output
  output: {
    //build output absolute directory
    path: path.resolve(__dirname, '../dist-android/static'),
    //public URL address of the output files when referenced in a browser
    publicPath: './static/',
    filename: '[name].js'
  },
  //resolve modules and files path
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  //resolve loaders path
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          `${projectRoot}\\src`,
          `${projectRoot}\\build`,
          `${projectRoot}\\examples`,
          `${projectRoot}\\test`,
          `${projectRoot}\\node_modules\\vue-client\\src`,
          `${projectRoot}\\node_modules\\vue-strap\\src`,
          `${projectRoot}\\node_modules\\system-phone\\src`
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: false,
      extract: false
    })
  },
  plugins: [],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
