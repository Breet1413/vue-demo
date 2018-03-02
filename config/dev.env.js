'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//这个文件是针对生产环境的参数配置
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //这地方可以指定api访问的地址（因为我是本地spring boot搭建的后台框架），可以使IP地址，如 http://172.12.12.05:8081,
  API_ROOT: '"http://localhost:8081/"',
})
