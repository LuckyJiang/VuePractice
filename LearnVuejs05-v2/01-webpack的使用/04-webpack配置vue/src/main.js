// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊,李银河!</h2>')

// 5.使用Vue进行开发
import Vue from 'vue'
// 以下两个App都可以
// import App from './vue/app'   //app.js中模板和js代码未分离
import App from './vue/App.vue'  //模板和js代码未分离

/**
 * el 与template的区别？
 * el：用于和index.html中的#app进行绑定
 * tempalte:tempalte中的东西，会将el，即：#app，包括#app本身和#app中的内容，全部替换，之后就没有#app了
 */
new Vue({
  el: '#app',
  //在tempalte中使用以下自己定义的app组件：<App/>
  template: '<App/>',
  components: {
    App
  }
})
