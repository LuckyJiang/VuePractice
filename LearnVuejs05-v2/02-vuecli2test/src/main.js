// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/**
 * Vue cli：脚手架
 * 1、文件夹static:
 *    这个文件加里面存放静态资源文件，之后会原封不动的放到dist文件夹中，也就是说static中的图片，不会被编译成base64,
 *    也不会被重命名，也不会被修改大小。
 * 2、在引入依赖babel-preset-env"的时候，一定要一个.babelrc的文件对应
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
