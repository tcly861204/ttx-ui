const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//这个插件的主要作用是实现css分离
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')// 这个插件作用是对单独抽离出来的css文件进行压缩。
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: {
    ttx: path.resolve(__dirname, '../src/main.js') // 入口文件，也就是打包这个js文件
  },
  output: {  // 打包的文件位置
    filename: 'js/[name].[hash:8].js', //当js文件更改， [hash]的值会变化，每次build会生成一个新的js文件，[hash:8]，只显示8位的hash值，打包出来当然文件名叫 bundle.js
    path: path.resolve(__dirname, '../dist'), //resolve() 可以把相对路径解析成绝对路径， __dirname 是当前目录，路径必须是一个绝对路径，相对于根目录
    publicPath: '/',
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../examples/routers')
    },
    extensions: [
      '.web.js',
      '.mjs',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
      '.scss'
    ]
  },
  module: { // 模块loader 默认是从右到左，从下到上执行,多个loader需要一个数组，loader是有顺序的，默认是从右向左执行，loader还可以写成 对象方式
    rules: [
      {
        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                }
              },
            ],
            less: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: true,
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 把样式都抽离成一个单独的css文件
          "css-loader",
          "postcss-loader"//给CSS3语法，比如transfrom加上前缀， 需要新建 postcss.config.js 配置文件，需要引用 autoprefixer 这个插件
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // 解析 @import这种语法的
          'postcss-loader',
          'less-loader' // 把less转变为css
        ]
      },
      {
        test: /\.html$/,    // 找到html文件
        use: 'html-withimg-loader'//解决html引入图片打包的问题
      },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images/'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,       // 找到所有的图片
        use: {// 做一个限制，当我们的图片，小于多少k的时候，用base64来转化，否则用file-loader产生真实的图片
          loader: 'url-loader',
          options: {
            name: "image/[name].[hash:8].min.[ext]",
            limit: 200 * 1024,   // 小于200k，会转化成base64
            outputPath: "static/"
          }
        }
      },
      {
        test: /\.js$/,  // 找到所有的js文件
        use: {
          loader: 'babel-loader' // 用babel-loader，需要把ES6转换成ES5语法
        },
        include: path.resolve(__dirname, '../src'),// 只查找src目录下的js，不找node_modules里面的js
      }
    ]
  },
  performance: {
    hints: false//取消警告提示
  },
  plugins: [  // 数组,放着所有的webpack插件
    new VueLoaderPlugin(),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      }
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
      root: path.resolve(__dirname, '..'),
      verbose: false,
      dry: false
    })
  ]
}