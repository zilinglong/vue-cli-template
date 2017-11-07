export default {
  install(Vue, options) {
    Vue.prototype.qianfenhao = function (num) {
      num = num + '';
      var re = /(-?\d+)(\d{3})/;
      while (re.test(num)) {
        num = num.replace(re, '$1,$2');
      }
      return num;
    };
  }
};
