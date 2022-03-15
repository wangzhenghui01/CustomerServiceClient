var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware')
// var httpProxy = require('http-proxy')
var app = express()
var compiler = webpack(config)
// var proxy = httpProxy.createProxyServer()

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = {
  '/rs': {
    target: 'http://192.168.30.94:8555'
    // target: 'http://192.168.30.86:8077'
  },
  '/AndroidRest/rs': {
    target: 'http://192.168.30.94:8555'
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
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE, OPTIONS')
//   res.header('X-Powered-By', '3,2,1')
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use('/static', express.static('./static'))

module.exports = app.listen(8089, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8089')
})
