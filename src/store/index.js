import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import main from './modules/main';
const isProd = process.env.NODE_ENV === 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  actions,
  getters,
  modules: {
    main
  },
  strict: !isProd
});
