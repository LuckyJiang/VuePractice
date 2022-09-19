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
 *  1、assets:一般存放资源文件，css、img等
 *
 *
 * 2、引入文件：
 *    2.1、在script标签中引用文件：@import
 *        方式1：
 *         <style>
               @import "./assets/css/base.css";
            </style>

          方式2：import MainTabBar from './components/mainTabbar/MainTabBar'
 *
 * 3、关于slot插槽设置属性：<div v-if="!isActive"><slot name="item-icon"></slot></div>
 *    建议slot被一个div包围，然后所有的属性设置和事件绑定都写在div中，因为后期slot会被外部的东西全部替换。
 *
 * 4、 给文件夹起别名，这个是webpack的配置，应该在webpack中进行修改：
 *    （1）：在文件夹build下：
 *    resolve: {
        //导入文件如果包含以下三个文件后缀的扩展，则表示可是将其省略
        extensions: ['.js', '.vue', '.json'],
        //给文件夹路径取一个别名
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
