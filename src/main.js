// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
// import Vuex from 'vuex';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import routerMap from './common/router';
// import tabRouterMap from './common/tabRouter';
// import vuexStore from './store/store';
// import Taber from 'vue-tabs';
import App from './App';

/* 路由配置 */
Vue.use(Router);
const router = new Router(routerMap);

/* tab路由配置 */
// Vue.use(Taber);
// const taber = new Taber({
//   tabs:tabRouterMap,
//   persist: true
// });

/* vuex引入 */
// Vue.use(Vuex);
// const store = new Vuex.Store(vuexStore);

/* element引入 */
Vue.use(ElementUI);

/* resource引入 */
Vue.use(VueResource);

/* eslint-disable no-new */
window.vueApp = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  // taber,
  // store
});
