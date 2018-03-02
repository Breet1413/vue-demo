// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const querystring = require("querystring");
window.querystring = querystring;
window.global = global;
Vue.use(ElementUI)//使用elementUI
//拦截响应信息，如果返回未登录则跳转到首页并清空缓存
axios.interceptors.response.use((response) => {
  if (response && response.data && response.data.response && response.data.response.code) {
    const data = response.data.response
    switch (data.code) {
      case 1004:
        clearLocalStorage()
      default:
        return data
    }
  }
})
//拦截请求信息，在请求参数中加入
axios.interceptors.request.use(config => {
  if (config) {
    var params = window.querystring.parse(config.data);
    var serverDate = window.global.dateDiff + Date.parse(new Date());
    params.serverDate = serverDate;
    config.data = window.querystring.stringify(params);
  }
  return config
})
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
Vue.prototype.querystring = querystring;
Vue.prototype.global = global;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
