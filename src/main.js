import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import vuex from 'vuex';
import store from './store';

Vue.use(vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
