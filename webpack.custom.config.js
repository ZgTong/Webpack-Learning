const path = require('path')
module.exports = {
  entry:'./src/index.js',
  output:{
    //path:path.join('./dist/'),
    path:path.resolve(__dirname,'./dist/'),
    filename:'main.js'
  },
  mode: 'production',
  devServer:{
    publicPath:'/',
    contentBase: "./src", // index.html在src中
    open:true,
    port:8090,
    hot:true,
    compress:true
  }
}