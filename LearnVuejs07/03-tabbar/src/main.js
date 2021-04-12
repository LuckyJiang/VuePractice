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
 *1、assets:一般存放资源文件，css、img等
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
 */
