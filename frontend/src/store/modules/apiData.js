import { getCategory, getCategoryProduct, getProduct, getBanner, getPackage, getArticle } from "../../services/offset.service";

const state = {
  categories: [],
  products: [],
  banners: [],
  packages: [],
  articles: [],
  categoryProducts: [],
  productCount: 1
};

const getters = {
  StateCategory: (state) => state.categories,
  StateProduct: (state) => state.products,
  StateBanner: (state) => state.banners,
  StatePackage: (state) => state.packages,
  StateArticle: (state) => state.packages,
};

const actions = {
  async GetCategory({ commit }, token) {
    const result = await getCategory(token);
    const data = result?.data?.data;
    await commit("setCategory", data);
  },
  async GetProduct({ commit }, token) {
    const result = await getProduct(token);
    console.log("------result", result?.data);
    const data = result?.data;
    await commit("setProduct", data);
  },
  async GetBanner({ commit }, token) {
    const result = await getBanner(token);
    const data = result?.data?.data;
    await commit("setBanner", data);
  },
  async GetPackage({ commit }, token) {
    const result = await getPackage(token);
    const data = result?.data?.data;
    await commit("setPackage", data);
  },
  async GetArticle({ commit }, token) {
    console.log("----------getArticle reducer");
    const result = await getArticle(token);
    const data = result?.data?.data;
    await commit("setArticle", data);
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
    state.products = data?.data;
    state.productCount = data?.count;

  },
  setPackage(state, data) {
    state.packages = data;
  },
  setArticle(state, data) {
    state.articles = data;
  },
  setBanner(state, data) {
    state.banners = data;
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