import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';
const isProd = process.env.NODE_ENV === 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: !isProd
});
