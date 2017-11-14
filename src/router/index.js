import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import IndexPage from '@/components/indexPage';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/IndexPage',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/',
      redirect: '/IndexPage'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      // component: HelloWorld
      component: resolve => {
        require.ensure(['@/components/HelloWorld'], () => {
          resolve(require('@/components/HelloWorld'));
        });
      }
    }
  ]
});
