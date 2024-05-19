import { getCategory, getCategoryProduct, getProduct } from "../../services/offset.service";

const state = {
  categories: [],
  products: [],
  categoryProducts: []
};

const getters = {
  StateCategory: (state) => state.categories,
  StateProduct: (state) => state.products,
};

const actions = {
  async GetCategory({ commit }, token) {
    const result = await getCategory(token);
    const data = result?.data?.data;
    await commit("setCategory", data);
  },
  async GetProduct({ commit }, token) {
    const result = await getProduct(token);
    const data = result?.data?.data;
    await commit("setProduct", data);
  },
  async GetCategoryProduct({ commit }, token) {
    const result = await getCategoryProduct(token);
    const data = result?.data?.data;
    await commit("setCategoryProduct", data);
  },
};

const mutations = {
  setCategory(state, data) {
    state.categories = data;
  },
  setProduct(state, data) {
    state.products = data;
  },
  setCategoryProduct(state, data) {
    state.categoryProducts = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};