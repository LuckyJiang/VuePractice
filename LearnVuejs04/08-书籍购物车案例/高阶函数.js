/**
 * 编程范式: 命令式编程/声明式编程
 * 编程范式: 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
 * filter/map/reduce
 * 1. filter中的回调函数有一个要求: 必须返回一个boolean值,表示是否将当前遍历的对象加入到新数组中
 *    true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
 *    false: 当返回false时, 函数内部会过滤掉这次的n
 * 2. map:中的回调函数：根据遍历的对象做一写逻辑处理，返回的值即将被加入到新数组中
 * 3. reduce函数的使用：对数组中所有的内容进行汇总：
 *    reduce 有两个参数：第一个参数为：回调函数；第二个参数：表示初始化值
 *    reduce 回调函数（reduce的第一个参数）中又有两个参数，第一个为：上次汇总的结果，第二个为当前遍历的数组中的对象。
 * @type {number[]}
 */
const nums = [10, 20, 111, 222, 444, 40, 50]

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (prevValue, n) {
  return prevValue + n
}, 0)
console.log(total);

// 1.filter函数的使用
// // 10, 20, 40, 50
// let newNums = nums.filter(function (n) {
//   return n < 100
// })
// // console.log(newNums);
//
// // 2.map函数的使用
// // 20, 40, 80, 100
// let new2Nums = newNums.map(function (n) { // 20
//   return n * 2
// })
// console.log(new2Nums);
//
/**
 * 3.reduce函数的使用
 * reduce作用对数组中所有的内容进行汇总：
 * 第一个参数为：回调函数
 * 第二个参数：0:表示初始化值
 */
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// console.log(total);

// reduce函数的使用每次回调的参数详解
// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第二次: preValue 60 n 80
// 第二次: preValue 140 n 100
// 240
