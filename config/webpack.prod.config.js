const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//这个插件的主要作用是实现css分离
const baseConfig = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'ttx.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'ttx.min.js',
    library: 'ttx',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    },
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
        parallel: true,
        sourceMap: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css'
    })
  ]
})