const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:21508/', // 目标后端服务器地址
        changeOrigin: true, // 是否改变源地址
        pathRewrite: {
          '^/api': '/' // 重写路径
        }
      }
    }
  }
})
