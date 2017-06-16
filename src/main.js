import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Vuex);
Vue.use(MintUI);
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
