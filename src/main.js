// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import common from './assets/js/common.js';
import VueResource from 'vue-resource';
import axios from 'axios';
// 引入全局组件
import globalCom from './components/common/index.js';
// 引入插件
import VuePlugins from './vue-plugins';
// 引入全局过滤器
import vfilters from './assets/js/vfilters.js';
for (let key in vfilters) {
  Vue.filter(key, vfilters[key]);
}
Vue.use(VuePlugins);
Vue.use(globalCom);
Vue.prototype.$axios = axios;
Vue.use(common);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.productionTip = false;
// axios--响应拦截
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  return response.data;
}, function (error) {
  // 处理响应失败
  return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
