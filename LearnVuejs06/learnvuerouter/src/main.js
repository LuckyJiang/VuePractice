import Vue from 'vue'
import App from './App'
import router from './router' //这里虽然 是文件夹，但是他会自动导入”index.jx“文件，其他名称的文件不可以

/**
 * vue-router基本使用
 * vue-router嵌套路由
 * vue-router参数传递
 * vue-router导航守卫
 */

/**
 * 前端路由的核心是什么呢？
 *    （1）改变URL，但是页面不进行整体的刷新。改变url方式不刷新的方案：
 *        方案1：修改url的hash属性，修改hash不刷新页面：location.hash="/hah"
 *        方案2：html5的history模式；
 *            history.pushState(data,title,url);  //一直放在栈顶，可以实现回退和前进
 *            history.replaceState(data,title,url); //替换，将栈顶的地址替换掉，没有对应的回退和前进
 *            history.go();
 *            history.back() 等价于 history.go(-1)  //回退到上一页
 *            history.forward() 则等价于 history.go(1) //
 *            后三个结构，对应浏览器的前进和后退
 *
 *      （2）一般一个url对应一个组件：路由用于设定访问路径，见根路径和组件映射起来，url的改变就是组件的改变
 *
 *
 *在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)   ==>参考router/index.js
 *     第一步：导入路由对象，并且调用 Vue.use(VueRouter)
 *     第二步：创建路由实例，并且传入路由映射配置
 *     第三步：在Vue实例中挂载创建的路由实例
 *     第四步：通过标签使用路由: 通过<router-link>和<router-view>
 *          <router-link>：vue内置组件
 *          <router-link>：点击之后，修改路由url，即进行组件的切换
 *          <router-view>：决定组件切换后在哪里显示
 */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
