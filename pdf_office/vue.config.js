/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-02-24 15:29:52
 * @LastEditors: solid
 * @LastEditTime: 2022-10-21 23:48:07
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  outputDir: 'plugin',
  assetsDir: 'static',
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: { // 配置跨域
    //   '/v1': {
    //     target: `https://api44o.ilovepdf.com`, //请求后台接口
    //     changeOrigin: true, // 允许跨域
    //     pathRewrite: {
    //       '^/v1': '/' // 重写请求
    //     }
    //   },
    //   '/zh-cn': {
    //     target: `https://www.ilovepdf.com/zh-cn/`, //请求后台接口
    //     changeOrigin: true, // 允许跨域
    //     pathRewrite: {
    //       '^/zh-cn': '/' // 重写请求
    //     },
    //   },
    // },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "STF",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
