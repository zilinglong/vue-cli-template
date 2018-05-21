import components from './components';
import {
  vueUse
} from '@/utils/plugins';
const VuePlugin = {
  install: function (Vue) {
    if (Vue._tal_vue_installed_) {
      return;
    }
    Vue._tal_vue_installed_ = true;
    for (let component in components) {
      Vue.use(components[component]);
    }
  }
};
vueUse(VuePlugin);
export default VuePlugin;
