import Vue from 'vue';
import router from './router';
import store from './store';
import App from './views/App.vue';
// 全局 filter
import * as filters from './utils/filter';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
