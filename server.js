const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
// 如果使用middleware，必须使用html-webpack-plugin插件，否则html文件无法正确的输出到express服务器的根目录
const config  = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{
  publicPath:'/'
}))

app.listen(3000,function(){
  console.log('http://localhost:3000')
})
