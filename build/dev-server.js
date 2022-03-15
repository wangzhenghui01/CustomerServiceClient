var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware')
// var httpProxy = require('http-proxy')
var app = express()
var compiler = webpack(config)
// var proxy = httpProxy.createProxyServer()
//远程服务
var ldap = 'http://121.36.106.17:8400'
//本地服务
// var ldap = 'http://localhost:800'
var applyinstall = 'http://localhost:8084'
// var ldap = 'http://192.168.50.4:8400'
// var applyinstall = 'http://127.0.0.1:8080'

var proxyTable = {
  '/rs/vue/Login.json': {
    target: ldap
  },
  // 查找资源服务数据
  '/rs/search': {
    target: ldap
  },
  // 街道查询
  '/rs/sql/address_getstreetlist': {
    target: ldap
  },
  // 创建街道
  '/rs/logic/address_updatestreet': {
    target: ldap
  },
  // 创建小区
  '/rs/logic/address_updatearea': {
    target: ldap
  },
  // 用户登录服务地址
  '/rs/user': {
    target: ldap
  },
  '/rs/logic/getInitData': {
    target: ldap?ldap:applyinstall
  },
  '/rs/logic/getLogin': {
    target: ldap
  },
  '/rs/file': {    // 文件上传
    target: applyinstall
  },
  '/project': {    // 文件回显
    target: applyinstall
  },
  '/rs': {
    target: applyinstall
  },
  '/ws': {
    target: applyinstall,
    ws: true // 代理webSocket
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

module.exports = app.listen(8500, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8300')
})
