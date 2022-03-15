var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.devandroid.conf')
var proxyMiddleware = require('http-proxy-middleware')
var http = require('http')
// var httpProxy = require('http-proxy')

var app = express()
var compiler = webpack(config)
// var proxy = httpProxy.createProxyServer()

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = {
//   '/materials': {
//     target: 'http://192.168.50.202:8081'
//   },
//   '/images': {
//     // target: 'http://192.168.50.202:8081'
//     target: 'http://192.168.50.202:8081'
//   },
//   '/rs/user': {
//     target: 'http://192.168.50.202:8081'
//     // target: 'http://127.0.0.1:82'
//   },
//   '/SaleRest/rs': {
//     // target: 'http://127.0.0.1:8082'
//     target: 'http://127.0.0.1:8081/'
//   },
//   '/rs/db': {
//     // target: 'http://192.168.50.202:8081'
//     target: 'http://192.168.50.202:8081'
//   },
//   '/excel': {
//     // target: 'http://127.0.0.1:8082'
//     target: 'http://127.0.0.1:8081/'
//   },
  '/rs': {
    // target: 'http://127.0.0.1:8082'
    target: 'http://127.0.0.1:8077'
  },
  '/AndroidRest/rs': {
//     // target: 'http://127.0.0.1:8082'
    target: 'http://127.0.0.1:8077'
  }
}

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use('/static', express.static('./static'))

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  // 改变源实现跨域
  //options.changeOrigin = true
  Object.assign(options, {
    onProxyRes(proxyRes, req, res) {
      // res.header('Access-Control-Allow-Origin', '*')
      // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE, OPTIONS')
    }
  })
  app.use(proxyMiddleware(context, options))
})

app.listen(8082, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8082')
})
