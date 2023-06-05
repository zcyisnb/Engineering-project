const { resolve } = require('path')
//处理html
const HtmlPlugin = require('html-webpack-plugin')
//克隆public文件
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  //入口
  entry: './src/index.js',
  //出口
  output: {
    //文件存放位置
    path: resolve(__dirname, '../build'),
    //文件名
    filename: './js/build.js'
  },
  //插件
  plugins: [
    new HtmlPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: resolve(__dirname, '../build'),
          globOptions: {
            // htmlplug已经处理过index.html了. copyplug不要再处理index.html,否则无法打包
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  //模式
  mode: 'production'

}