;  //加入“；”目的：当引入多分js时，进行区分
var moduleB = (function () {
  var obj = {}

  var name = '小红'
  var flag = false

  console.log(name);

  obj.flag = flag

  return obj
})()
