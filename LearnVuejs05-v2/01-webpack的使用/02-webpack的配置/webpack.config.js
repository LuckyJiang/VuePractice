const path = require('path')

module.exports = {
  entry: './src/main.js',    //指定入口
  output: {                //对应的出口
    path: path.resolve(__dirname, 'dist'),  //__dirname：node中自带的全局变量
    filename: 'bundle.js'
  },
}