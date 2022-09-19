// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//引入组件方式1：全部都加载：所有组价放入到一个js中
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//引入组件方式2：路由懒加载代码： const Home = () => import('../components/Home')
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.配置路由和组件之间的应用关系
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    //路由嵌套：/home/news 或者 /home/message
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',    //建议：子路由内部的path 不要加 ”/“
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next()
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

// 创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

/**
 *  导航守卫
 *  导航钩子的三个参数解析:
 *  to: 即将要进入的目标的路由对象.
 *  from: 当前导航即将要离开的路由对象.
 *  next: 调用该方法后, 才能进入下一个钩子.
 */

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  //功能目的：每个路由对应一个组件，每个组件对应的title不一致，当切换路由的时候，修改title
  document.title = to.matched[0].meta.title
  // document.title = to.meta.title   //一般用上面的方法，用这个方法，首页一般获取不到名字
  // console.log(to);
  // console.log('++++');
  //在beforeEach中必须调用next（）方法，才能进入下一个钩子
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('----');
})

// 3.将router对象传入到Vue实例
export default router

