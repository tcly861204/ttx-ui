const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//这个插件的主要作用是实现css分离
const path = require('path')
module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../examples/main.js'), // 入口文件，也就是打包这个js文件
  output: {  // 打包的文件位置
    filename: 'js/[name].[hash:8].js', //当js文件更改， [hash]的值会变化，每次build会生成一个新的js文件，[hash:8]，只显示8位的hash值，打包出来当然文件名叫 bundle.js
    path: path.resolve(__dirname, '../local'), //resolve() 可以把相对路径解析成绝对路径， __dirname 是当前目录，路径必须是一个绝对路径，相对于根目录
    publicPath: '/',
    chunkFilename: "js/[name].chunk.js"
  },
  devServer: { // 开发服务器的配置
    port: 3000,
    progress: true, // 编译的进度条
    contentBase: path.join(__dirname, '../local'), // 以static目录为默认启动目录
    compress: true, // 自动压缩
    open: true,// 自动打开浏览器
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/index.html'), // 注意路径为根目录下的路径
      filename: 'index.html', // 打包后也叫做 index.html
      favicon: path.resolve(__dirname, '../examples/favicon.ico'),
      minify: {     // 压缩这个html文件(主要是对HTML文件进行压缩)
        removeAttributeQuotes: true,        // 删除这个html文件的双引号
        collapseWhitespace: true      // 变成一行
      },
      hash: false
    })
  ]
})