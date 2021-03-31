const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

/**
 * 发布之后的配置
 * @type {function(...[*]=)}
 */
module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})


