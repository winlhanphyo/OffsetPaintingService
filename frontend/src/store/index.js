import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import common from "./modules/common";

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
    common
  },
  plugins: [createPersistedState()],
})
