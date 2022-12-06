import {INCREMENT} from "./mutations-types";

//1.为 state 修改值或者加属性 的唯一地方
//2.同步方法， 第一个参数为state 第二个参数为payload
//3.通过常量定义方法名称
export default {
  // 方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    // console.log(count);
    console.log(payload);
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    //响应式
    state.info.name = 'coderwhy'

    // 错误的代码: 不能在mutations中进行异步操作
    // setTimeout(() => {
    //   state.info.name = 'coderwhy'
    // }, 1000)


    //做不到响应式，因为address不是初始化的时候，定义好的，该属性不会被监听，因此起不到响应式
    // state.info['address'] = '洛杉矶'

    //可以起到响应式的  给state.info 增加address属性
    // Vue.set(state.info, 'address', '洛杉矶')

    // 该方式做不到响应式
    // delete state.info.age

    //可以起到响应式
    // Vue.delete(state.info, 'age')
  }
}
