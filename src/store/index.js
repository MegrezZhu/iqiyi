import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import main from './modules/main';
const isProd = process.env.NODE_ENV === 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    main
  },
  strict: !isProd
});
