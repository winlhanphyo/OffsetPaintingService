import api from "../api";

/**
 * get category API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getCategory = async (token) => {
  console.log("-------getCategory", token);
  const res = await api.get('/category', token);
  return res;
}

/**
 * get product API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getProduct = async (token) => {
  console.log("-------getProduct", token);
  const res = await api.get('/product', token);
  return res;
}

/**
 * get product detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getProductDetail = async (token, id) => {
  console.log("-------get product detail service", token);
  const res = await api.get(`/product/${id}`, token);
  return res;
}

/**
 * get media with product id.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getMediaWithProductId = async (token, id) => {
  const res = await api.get(`/media/product/${id}`, token);
  return res;
}

/**
 * get article API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getArticle = async (token) => {
  console.log("-------get article service", token);
  const res = await api.get('/article', token);
  return res;
}

/**
 * get article detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getArticleDetail = async (token, id) => {
  console.log("-------get article detail service", token);
  const res = await api.get(`/article/${id}`, token);
  return res;
}

/**
 * get category product API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getCategoryProduct = async (token) => {
  console.log("-------getCategory", token);
  const res = await api.get('/category/product', token);
  return res;
}

/**
 * get banner API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getBanner = async (token) => {
  console.log("-------getBanner", token);
  const res = await api.get('/banner', token);
  return res;
}

/**
 * get package API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getPackage = async (token) => {
  console.log("-------getPackage", token);
  const res = await api.get('/package', token);
  return res;
}
