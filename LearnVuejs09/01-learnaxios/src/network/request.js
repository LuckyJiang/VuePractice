import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  //请求成功时候的拦截，请求失败时候的拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标，比如loading

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息

    // 必须将config返回
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截：将axios封装的字段过滤掉，只剩下后端返回的数据
  //响应成功的拦截，响应失败的拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    //主要对数据进行过滤
    return res.data
  }, err => {
    // 根据status判断报错的错误码，跳转到不同的错误提示页面
    console.log(err);
  })

  // 3.发送真正的网络请求： instance(config)默认会返回一个Promise
  return instance(config)
}

//自定义返回Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// export function request(config) {
//   // 1.创建axios的实例:
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }


