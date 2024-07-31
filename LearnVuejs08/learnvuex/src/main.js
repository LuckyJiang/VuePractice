import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

//将Vuex对象挂在到Vue实例中
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
 *    流程：首先定义Vuex对象  ====> 挂载到Vue实例中   ====>   在插件内部使用。
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
 *               给state中的对象添加新的属性，例如给info增加一个height属性：//修改属性的行为常发生在mutations种，因为mutations
 *               是唯一修改state值、或为state增加属性的地方，这样才可以被devtools统一管理；
 *                    方式1：使用Vue.set(state.info, 'height', 183)：
 *                    方式2：state.info = {...state.info, 'height':playload.height}
 *               在其他组件种使用：
 *                     this.$store.state.info;
 *           单一状态树： 用户管理应用层级的全部状态；每个状态分片管理。
 *
 *    mutations: 对状态进行修改，建议是同步的操作
 *                mutations种定义的方法，第一个参数默认为state；
 *                mutations种常用常量名称作为函数的名称；
 *                在通过mutation更新数据的时候, 有可能我们希望携带一些额外的参数; 参数被称为是mutation的载荷(Payload)
 *                mutations中传一个参数的时候，跟之前普通传参一样，当传多个参数的时候，则通过payload
 *
 *                          // this.$store.commit('incrementCount', count)
                            // 2.特殊的提交封装
                                    this.$store.commit({
                                        type: 'incrementCount',  //type为方法名称
                                        count
                                     })

 *                          定义：changeCount(state,payload){
 *                                  state.count = payload.count;
 *                                }
 *                          触发：this.$store.commit("changeCount",{count:0});  第二个参数为 Payload
 *                               this.$store.commit({type:'changeCount', count:100});
 *                ★★★  关于mutations的响应式：参考src/store/mutation.js 中的updateInfo 方法
 *
 *
 *    actions:  action建议处理异步操作，执行完成之后，再去mutations中修改state,比如：网络请求等。
 *              actions中定义方法，第一个参数默认为context：context是一个与store具有同样state和事件的对象，但不是同一个对象
 *                    increment(context, payload){  //在actions中触发mutations的方法。
 *                        context.commit('increment',payload)
 *                    }
 *              在Vue组件中, 如果我们调用action中的方法, 那么就需要使用dispatch,dispatch:分发一个行为
 *                    this.$store.dispatch('increment',{count:1});
 *               总结:mutations的方法访问常用commit   actions的方法访问用dispatch.
 *
 *    getters:类似单个组件中的计算属性，比如需要从store中获取一些state变异后的状态
 *            getters方法中的第一个参数为state, 第二个参数为 getters, 第三个参数为 rootState(在子modules中的getters中使用)
 *            使用1，普通使用,如果方法返回的是变量值，使用时不需要加括号：
 *                <h2>{{$store.getters.powerCounter}}</h2>
 *            使用2：getters内方法调用内部内部的getters方法
 *                  more20stuLength(state, getters) {
 *                     return getters.more20stu.length
 *                  }
 *            使用3：getters接收外部传入的变量，思路：getters的方法返回一个变量
 *                  定义方法：
                    moreAgeStu(state) {
                       return age => { return state.students.filter(s => s.age > age) }
                    }
                    使用：$store.getters.moreAgeStu(12) //有人问，为什么这里的方法加上括号了呢，因为这个方法返回的是函数呀.....
 *
 *    modules:随着项目的扩大，state会越来越臃肿，这时候可是让每个module管理一部分state,每个module是一个对象，里面可以定义state,mutations,actions等
 *          使用某个module中的state:  $store.state.a.name  //a 为index.js中某个module的别称
 *          使用某个module中的getters: 参考 src/store/modules/moduleA.js
 *          //todo moduleA访问moduleB中的state.
 *
 *
 *    组件中如何使用：
 *        <h2>{{$store.state.counter}}</h2>
          <h2>{{$store.getters.powerCounter}}</h2>
 *
 *    介绍一个组件：devtools:当vuex在mutations中修改state时，这个组件可以记录每个组件对state修改的状态
 *
 *3、子组件使用父组件的定义的参数
 *    方案1：通过props实现，同时在父组件显示子组件的时候，需要将使用的参数绑定到子组件的标签a中
 *    方案2：vuex
 */
