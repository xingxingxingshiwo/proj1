// 集成测试示例
const BACKEND_SERVER = 'http://localhost:18080'

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    index: 'index.html',
    disableHostCheck: true,
    proxy: {
      // 参考 https://cli.vuejs.org/zh/config/#devserver-proxy
      // 参考 https://github.com/chimurai/http-proxy-middleware#proxycontext-config
      '/api': {
        target: BACKEND_SERVER,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
