var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一:字面量增强
export {
  flag, sum
}

// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88


// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 5.export default

// const address = '北京市'
// export {
// //   address
// }
// export const address = '北京市'
// const address = '北京市'
//
// export default address

// 注意如果导入export default 导出的变量，则用户定义的变量名不需要和导出的一致，可以自定义
export default function (argument) {
  console.log(argument);
}







