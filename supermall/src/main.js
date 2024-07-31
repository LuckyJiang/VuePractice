import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/**
 * src 划分目录结构
 * assets: 资源 包括图片资源、样式css
 * common: 公共的js文件，例如constant 常量文件，例如utils.js  mixin.js
 * components: 组件，放一些公共的组件，常在views中使用
 *    common: 公共组件,当前项目中使用的，也有可能用于其他项目使用
 *    content: 与业务相关的公共组件
 * network: 网络相关
 * router: 路由相关
 * views： 大视图
 * store:
 */
