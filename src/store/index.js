import Vue from "vue";
import Vuex from "vuex";

import { memberStore } from './member.store.js'


Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    memberStore,
  },
});
