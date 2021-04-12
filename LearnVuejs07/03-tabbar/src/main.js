import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


/**
 *给文件夹起别名，这个是webpack的配置，应该在webpack中进行修改：
 *    （1）：在文件夹build下：
 *    resolve: {
        //导入文件如果包含以下三个文件后缀的扩展，则表示可是将其省略
        extensions: ['.js', '.vue', '.json'],
        //对文件夹路径去一个别名
        alias: {
          '@': resolve('src'),
          'assets': resolve('src/assets'),
          'components': resolve('src/components'),
          'views': resolve('src/views'),
        }
      }
 *
 *    （2）如何使用别名：
 *    通过import引入组件则可以直接使用别名，比如：@
 *    如果不是通过import的形式引入的，则需要在别名前加~，比如：~@
 *
 */
