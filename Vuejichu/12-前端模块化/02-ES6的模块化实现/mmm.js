// 1.导入的{}中定义的变量，注意{}中的变量名必须要和aaa.js中，通过export导出的变量名完全一致
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才, 哈哈哈');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量，注意{}中的变量名必须要和aaa.js中，通过export导出的变量名完全一致
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3.导入 export的function/class，注意{}中的变量名必须要和aaa.js中，通过export导出的变量名完全一致
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run()

// 4.导入 export default中的内容，注意如果导入export default 导出的变量，则用户定义的变量名不需要和导出的一致，可以自定义
import addr from "./aaa.js";

addr('你好啊');

// 5.统一全部导入
// import {flag, num, num1, height, Person, mul, sum} from "./aaa.js";

import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);

