export default   {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  more20stuLength(state, getters) {
    //getters 中的方法A 调用getters 中的方法B
    return getters.more20stu.length
  },
  //getters接收外部传入的变量  return的结果为 函数。
  moreAgeStu(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}
