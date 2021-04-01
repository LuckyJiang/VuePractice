import Vue from 'vue'
import App from './App'

/**
 * 1、手动关闭eslint:config/index.js：useEslint:false;
 */


/**
 * 2、Runtime-Compiler与Runtime-only的区别？
 *    从视觉将，二者的区别只在src/main.js文件中：
 *        runtimecompiler----template:Vue实例的时候，在用子组件APP的时候，是放到了componets属性中进行注册，并在tempalte中使用<App/>
 *        runtimeonly----render:Vue实例的时候，在用子组件APP的时候,没有进行子组件的注册，而是通过render函数进行使用。
 *    runtime-compiler(v1)：template运行的过程
 *        template -> ast -> render -> vdom -> UI
 *
 *    runtime-only(v2)(1.性能更高 2.下面的代码量更少)：render运行的程序
 *        render -> vdom -> UI
 *    总结：runtime-only比runtime-compiler性能更高，且代码量更少
 *        如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler
 *        如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only
 */


Vue.config.productionTip = false

/* eslint-disable no-new */
// const cpn = {
//   template: '<div>{{message}}</div>',
//   data() {
//     return {
//       message: '我是组件message'
//     }
//   }
// }

new Vue({
  el: '#app',
  render: function (createElement) {
    //createElement的简写就是h
    // 1.普通用法: createElement('标签', {标签的属性}, [''])
    // return createElement('h2',
    //   {class: 'box'},
    //   ['Hello World', createElement('button', ['按钮'])])

    // 2.传入组件对象:
    return createElement(App)
  }
})


