const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

/**
 * 只在开发阶段会用到的配置
 * @type {function(...[*]=)}
 */
module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})