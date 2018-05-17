import globalComponents from './global-comp.vue';
export default {
  install: function (Vue) {
    Vue.component('globalComponents', globalComponents);
  }
};
