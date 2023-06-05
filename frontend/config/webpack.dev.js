const { resolve } = require('path')
const prod = require('./webpack.prod')

module.exports = {
  ...prod,
  //开发模式
  mode: 'development',
  //启动
  devServer: {
    static: {
      directory: resolve(__dirname, '../build'), //基于打包后的文件夹作为静态资源服务器的根目录
    },
    port: 9000, //设置端口号
    open: true, //自动打开浏览器
  },
}