import TopBar from './topbar';
import {
  registerComponents,
  vueUse
} from '../../utils/plugins';

const components = {
  TopBar
};

const VuePlugin = {
  install(Vue) {
    registerComponents(Vue, components);
  }
};
vueUse(VuePlugin);
export default VuePlugin;
