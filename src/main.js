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
Vue.use(globalCom);
Vue.prototype.$axios = axios;
Vue.use(common);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
