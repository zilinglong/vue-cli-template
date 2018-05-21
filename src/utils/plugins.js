export function registerComponent(Vue, name, def) {
  Vue._tal_components_ = Vue._tal_components_ || {};
  const loaded = Vue._tal_components_[name];
  if (!loaded && def && name) {
    Vue._tal_components_[name] = true;
    Vue.component(name, def);
  }
  return loaded;
};

export function registerComponents(Vue, components) {
  for (let component in components) {
    registerComponent(Vue, component, components[component]);
  }
};

export function vueUse(VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
};
