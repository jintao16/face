const target = 'http://192.168.1.15:18088';

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 4001,
    proxy: {
      '/business': {
        target: target, // 接口域名
        changeOrigin: true // 是否跨域
      },
      '/common': {
        target: target,
        changeOrigin: true
      },
      '/client': {
        target: target,
        changeOrigin: true
      },
      '/basic': {
        target: target,
        changeOrigin: true
      },
      '/auth': {
        target: target,
        changeOrigin: true
      }
    }
  }
};
