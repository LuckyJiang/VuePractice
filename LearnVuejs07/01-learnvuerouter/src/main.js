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
 * 1、动态路由：即url中的部分url是由组件中的某个属性决定的
 *   如何获取动态路由中的某个参数？
 *
 * 2、路由懒加载：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
 *
 * 3、路由懒加载做了什么?
 *    路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块.
 *    只有在这个路由被访问到的时候, 才加载对应的组件
 *
 * 4、懒加载形式：
 *    在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
 *    const Home = () => import('../components/Home.vue')
 *
 * 5、vuerouter-参数传递：
 *    传递参数主要有两种类型: params和query
 *    params的类型:
 *      配置路由格式: /router/:id
 *      传递的方式: 在path后面跟上对应的值
 *      传递后形成的路径: /router/123, /router/abc
 *    query的类型:
 *       配置路由格式: /router, 也就是普通配置
 *       传递的方式: 对象中使用query的key作为传递方式
 *       传递后形成的路径: /router?id=123, /router?id=abc
 *
 *    传递参数一：
      <router-link
        :to="
          {
              path: '/profile/' + 123,   //params类型
              query: {name: 'why', age: 18, height: 1.88}  //query类型
           }"
       ></router-link>
 *
 *
 *     传递参数二：在创建vue实例的时候：
 *     profileClick() {
          this.$router.push({
            path: '/profile/' + this.abc,
            query: {
              name: 'kobe',
              age: 19,
              height: 1.87
            }
         })
       }

      子组件中，如何获取值：
      <h2>{{$route.params.abc}}</h2>
      <h2>{{$route.query.age}}</h2>

 *6、$route和$router是有区别的？？？
 *    $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
 *    $route为当前router跳转对象里面可以获取name、path、query、params等
 */
