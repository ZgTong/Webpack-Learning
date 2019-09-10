const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry:'./src/index.js',
  output:{
    //path:path.join('./dist/'),
    path:path.resolve(__dirname,'./dist/'),
    filename:'bundle.js'
  },
  mode: 'development',
  // 监视模式
  // watch: true
  devServer:{
    publicPath:'/',
    contentBase: "./src", // index.html在src中
    open:true,
    port:8070,
    hot:true,
    compress:true
  },
  plugins:[
    // devServer时根据模板在express项目根目录下生成HTML文件（类似于devserver生成内存中的bundle.js）
    // devServer时自动引入bundle.js
    // 打包时自动生成index.html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    // 打包时自动删除dist后再生成
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from:path.join(__dirname,'assets'),
        to: 'assets'
      }
    ]),
    new webpack.BannerPlugin('tongzuguangzhennb!')
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        // 从右到左读取
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        // 从右到左读取
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.s(a|c)ss$/,
        // 从右到左读取
        use:['style-loader','css-loader','sass-loader']
      },
      // {
      //   test:/\.jpg|jpeg|png|bpm|gif$/,
      //   // 从右到左读取
      //   use:'file-loader'
      // },
      // {
      //   test:/\.woff|woff2|eot|svg|ttf$/,
      //   // 从右到左读取
      //   use:'file-loader'
      // },
      {
        test:/\.woff|woff2|eot|svg|ttf$/,
        // 从右到左读取
        use:'url-loader'
      },
      {
        test:/\.jpg|jpeg|png|bpm|gif$/,
        // 从右到左读取
        use:{
          loader:'url-loader',
          options:{
            limit:2*1024,
            outputPath:'imgs',
            name:'[name]-[hash:12].[ext]'
          }
        }
      },
      {
        test:/\.js$/,
        // 从右到左读取
        use:{
          loader:'babel-loader',
          // options:{
          //   presets:['@babel/env'],
          //   plugins:[
          //     '@babel/plugin-proposal-class-properties',
          //     '@babel/plugin-transform-runtime'
          //   ]
          // }
        },
        exclude:/node_modules/
      },      
    ]
  },
  devtool:'cheap-module-eval-source-map'
}