import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.prototype.test = function () {
//   console.log('test');
// }
// Vue.prototype.name = "coderwhy"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);

// const obj = {
//   name: 'why'
// }
//
// Object.defineProperty(obj, 'age', 18)

/**
 * 动态路由：即url中的部分url是由组件中的某个属性决定的
 *   如何获取动态路由中的某个参数？
 *
 * 路由懒加载：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
 *
 * 路由懒加载做了什么?
 *    路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块.
 *    只有在这个路由被访问到的时候, 才加载对应的组件
 *
 * 懒加载形式：
 *    在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
 *    const Home = () => import('../components/Home.vue')
 */
