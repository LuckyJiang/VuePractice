import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


/**
 *Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。 它采用 集中式存储管理 应用的所有组件的状态
 *    把需要多个组件共享的变量全部存储在一个对象里面。然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。

 */
