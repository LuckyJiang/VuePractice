export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootState) {
      //rootState:大模块中定义的state
      //大模块只是的是 index.js中store对象最外层的的state
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      //这里的context指的是 当前module的store.
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  }
}
