import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import common from "./modules/common";
import apiData from "./modules/apiData";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
    apiData
  },
  plugins: [createPersistedState()],
})
