// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.配置组件和路径的映射关系
const routes = [
  {
    //路由的默认路径
    path: '',
    // redirect重定向指定默认路径
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

// 3.创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  //HTML5的history模式 它有五种模式改变URL而不刷新页面
  //pushState：
  //replaceState：
  //go：
  mode: 'history',
  //修改vue按钮被选中所加class的名称，
  // 默认情况下，某个<router-link>被点击之后，会给该标签，添加一个名叫router-link-active的class
  linkActiveClass: 'active'
})

// 4.将router对象传入到Vue实例
export default router

