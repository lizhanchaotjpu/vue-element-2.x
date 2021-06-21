const CompressionPlugin = require('compression-webpack-plugin')
const {
  autoOpen,
  assetsDir,
  outputDir,
  devPort,
  host,
  publicPath,
  productionSourceMap,
  prodClearConsole
} = require('./src/conf/config').build
module.exports = {
  // 基本相对路径 baseUrl从 Vue CLI 3.3 起已弃用使用publicPath来替代。
  publicPath,
  // 构建输出目录（打包位置）
  outputDir,
  // assetsDir 放置生成的静态资源 (js、css、img、fonts) 的目录
  assetsDir,
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  //不需要生产环境的 source map，将其设置为 false 以加速生产环境构建。
  productionSourceMap,
  configureWebpack: (config) => {
    // 生产环境取消 console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = prodClearConsole
    }
  },
  chainWebpack: (config) => {
    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.(js|css|less|scss)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 删除源文件
        })
      )
    }
  },
  devServer: {
    open: autoOpen, // 设置自动打开
    host,
    port: devPort, // 设置端口
    proxy: {
      // 设置代理
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        secure: false, // 如果是http接口，需要配置该参数
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/variables.scss";'
      }
    }
  }
}
