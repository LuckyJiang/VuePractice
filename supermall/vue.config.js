//别称定义 @的别名在vue3脚手架中中已经默认定义了，可以直接使用。
//通过module.exports的形式，该文件不需要在其他地方引用，因为vue会对所有的module.exports 进行整合。
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

