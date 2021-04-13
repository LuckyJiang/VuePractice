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
 *1、Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。 它采用 集中式的存储并管理应用中所有组件的状态
 *    把需要多个组件共享的变量全部存储在一个对象里面。然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。
 *    vuex两大特点：状态管理；响应式
 *
 *2、Vuex中的结构：
 *
 *                        Backend API
 *                             \
 *                             \
 *                             \
 *                             \
 *       \------dispatch--->Actions----commit----->>-\
 *       \                                           \
 *       \                                           \
 *       \                                           \
 *  Vue Componets                                 Mutations<---------Devtools
 *       \                                           \
 *       \                                           \
 *       \                                           \
 *       \-------<<Render---- state ------mutate---<<\
 *
 *  ***************************其他组件应该按照规定好的规则，方式对共享变量进行访问和修改*******************
 *    state:对象，保存状态
 *               给state中的对象添加新的属性：
 *                    方式1：使用Vue.set(state.info, 'height', 183)
 *                    方式2：state.info = {...}
 *    mutations: 对状态进行修改，建议是同步的操作
 *               在通过mutation更新数据的时候, 有可能我们希望携带一些额外的参数; 参数被称为是mutation的载荷(Payload)
 *               mutations的
 *                          定义：changeCount(state,payload){
 *                                  state.count = payload.count;
 *                                }
 *                          触发：this.$store.commit("changeCount",{count:0});  第二个参数为Payload
 *                               this.$store.commit({type:'changeCount', count:100});
 *    actions:  action建议处理异步操作，执行完成之后，再去mutations中修改state,比如：网络请求等。
 *              actions中定义方法：context是一个与store具有同样state和事件的对象，但不是同一个对象
 *                    increment(context, payload){
 *                        context.commit('increment',payload)
 *                    }
 *              在Vue组件中, 如果我们调用action中的方法, 那么就需要使用dispatch
 *                    this.$store.dispatch('increment',{count:1});
 *    getters:
 *    modules:
 *
 *    组件中如何使用：
 *        <h2>{{$store.state.counter}}</h2>
          <h2>{{$store.getters.powerCounter}}</h2>
 *
 *    介绍一个组件：devtools:当vuex在mutations中修改state时，这个组件可以记录每个组件对state修改的状态
 *
 *3、子组件使用父组件的定义的参数
 *    方案1：通过props实现，同时在父组件显示子组件的时候，需要将使用的参数绑定到子组件的标签中
 *    方案2：vuex
 */
