import Vue from 'vue'
import App from './App.vue'

/**
 * vue-cli3:
 *    0配置:几乎看不到任何关于webpack的配置，将build、config等目录都移除掉了。
 *    移除了static文件夹
 *    增加了public文件夹：并将index.html放到了public中，public存放的文件，也会被原封不动的放到dist文件中
 *    babel.config.js：ES语法转换
 *    postcss.config.js：css相关转换
 *
 *
 * vue-cli2:初始化项目是：vue init webpack 项目名
 * vue-cli3:初始化项目是：vue create 项目名
 */
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
