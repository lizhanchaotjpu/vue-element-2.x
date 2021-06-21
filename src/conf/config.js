module.exports = {
  // 基础配置
  title: '管理系统', // 系统名称
  routeModel: 'history', //路由模式
  routerWhiteList: ['/login', '/editor'], // 路由白名单
  tokenName: 'token', // token名称
  timeOut: 60 * 1000, // axios request请求超时时间
  dataCode: {
    successCode: 200, // 接口响应 请求正常code
    invalidCode: 401 // 接口响应 无认证信息code
  },
  // 构建配置
  build: {
    devPort: 8080, // 开发环境端口
    host: '0.0.0.0',
    outputDir: 'dist', // 打包输出位置
    assetsDir: 'assets', // 打包输出静态资源位置
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    autoOpen: false, // 是否自动打开页面
    productionSourceMap: false, //不需要生产环境的 source map，将其设置为 false 以加速生产环境构建。
    prodClearConsole: true //生产环境取消 console.log
  },
  // api-server 配置
  apiServer: {
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8', //application/json;charset=UTF-8;application/x-www-form-urlencoded;charset=UTF-8
    development: 'http://127.0.0.1:9003/api',
    production: 'http://127.0.0.1:9005/api'
  },
  // 业务系统配置
  application: {
    placeholder: '---' //无效数据占位符
  }
}
