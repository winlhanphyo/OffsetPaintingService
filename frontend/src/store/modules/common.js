const state = {
  data: {
    lang: "en"
  }
};

const getters = {
  StateCommon: (state) => state.data,
};

const actions = {
  async commonData({ commit }, detail) {
    await commit("setCommonData", detail);
  },
  async resetDetailData({commit}) {
    await commit("resetCommonData", null);
  }
};

const mutations = {
  setCommonData(state, common) {
    Object.keys(common).map(key => {
      state.data[key] = common[key];
    });
  },
  resetCommonData(state, common) {
    console.log("------common", common);
    state.data = {
      lang: 'en'
    };
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};