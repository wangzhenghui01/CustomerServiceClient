var path = require('path')
var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/main.js',
    'android-app': './src/android.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: 'static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
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
          `${projectRoot}\\node_modules\\sale-client\\src`,
          `${projectRoot}\\node_modules\\ldap-clients\\src`,
          `${projectRoot}\\node_modules\\system-clients\\src`,
          `${projectRoot}\\node_modules\\system-phone\\src`,
          `${projectRoot}\\node_modules\\material-client\\src`
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
      },
      {
        test: /\.css/,
        loader: 'style!css'
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
