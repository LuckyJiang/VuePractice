export default {
  // context: 上下文
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()  //外部传过来的payload。success 为回调
  //   }, 1000)
  // },
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  }
}
