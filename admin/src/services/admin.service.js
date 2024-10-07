// import axios from "axios";
import api from "../api";

/**
 * get category API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getCategory = async (token) => {
  const res = await api.get('/category', token);
  return res;
}

/**
 * create category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createCategory = async (data, token) => {
  const res = await api.post("/category", data, token, true);
  return res;
}

/**
 * update category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateCategory = async (id, data, token) => {
  const res = await api.post(`/category/update/${id}`, data, token, true);
  return res;
}

/**
 * delete category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteCategory = async (id, token) => {
  const res = await api.deleteData(`/category/${id}`, token);
  return res;
}


/**
 * get product API.
 * @param {*} data 
 * @param {*} token 
 * @param {*} searchName 
 * @returns 
 */
export const getProduct = async (token, searchName=null) => {
  const param = {};
  searchName ? param.name = searchName : null;
  const res = await api.get('/product', param, token);
  return res;
}

/**
 * create product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createProduct = async (data, token) => {
  const res = await api.post("/product", data, token, true);
  return res;
}

/**
 * update product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateProduct = async (id, data, token) => {
  const res = await api.post(`/product/update/${id}`, data, token, true);
  return res;
}

/**
 * delete product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteProduct = async (id, token) => {
  const res = await api.deleteData(`/product/${id}`, token);
  return res;
}

/**
 * get product by id.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */
export const getProductById = async (id, token) => {
  const res = await api.get(`/product/${id}`, {}, token);
  return res;
}

/**
 * delete media product image.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */
export const deleteMedia = async (id, token) => {
  const res = await api.deleteData(`/media/${id}`, token);
  return res;
}

/**
 * get user API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getUser = async (token) => {
  const res = await api.get('/user', token);
  return res;
}

/**
 * create user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createUser = async (data, token) => {
  const res = await api.post("/user", data, token, true);
  return res;
}

/**
 * update user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateUser = async (id, data, token) => {
  const res = await api.post(`/user/update/${id}`, data, token, true);
  return res;
}

/**
 * delete user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteUser = async (id, token) => {
  const res = await api.deleteData(`/user/${id}`, token);
  return res;
}

/**
 * get user API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getArticle = async (token) => {
  const res = await api.get('/article', token);
  return res;
}

/**
 * create article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createArticle = async (data, token) => {
  const res = await api.post("/article", data, token, true);
  return res;
}

/**
 * update article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateArticle = async (id, data, token) => {
  const res = await api.post(`/article/update/${id}`, data, token, true);
  return res;
}

/**
 * delete article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteArticle = async (id, token) => {
  const res = await api.deleteData(`/article/${id}`, token);
  return res;
}

/**
 * get package API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getPackage = async (token) => {
  const res = await api.get('/package', token);
  return res;
}

/**
 * create package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createPackage = async (data, token) => {
  const res = await api.post("/package", data, token, true);
  return res;
}

/**
 * update package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updatePackage = async (id, data, token) => {
  const res = await api.post(`/user/package/${id}`, data, token, true);
  return res;
}

/**
 * delete package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deletePackage = async (id, token) => {
  const res = await api.deleteData(`/package/${id}`, token);
  return res;
}

/**
 * get banner API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getBanner = async (token) => {
  const res = await api.get('/banner', token);
  return res;
}

/**
 * update banner API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateBanner = async (id, data, token) => {
  const res = await api.post(`/banner/update/${id}`, data, token, true);
  return res;
}

/**
 * create banner API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createBanner = async (data, token) => {
  const res = await api.post(`/banner`, data, token, true);
  return res;
}

/**
 * delete category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteBanner = async (id, token) => {
  const res = await api.deleteData(`/banner/${id}`, token);
  return res;
}

/**
 * get order API.
 * @param {*} data 
 * @param {*} token 
 * @param {*} searchName 
 * @returns 
 */
export const getOrder = async (token, searchName=null) => {
  const param = {};
  searchName ? param.name = searchName : null;
  const res = await api.get('/order', param, token);
  return res;
}

/**
 * create order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const createOrder = async (data, token) => {
  const res = await api.post("/order", data, token, true);
  return res;
}

/**
 * update order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const updateOrder = async (id, data, token) => {
  const res = await api.post(`/order/update/${id}`, data, token, true);
  return res;
}

/**
 * delete order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const deleteOrder = async (id, token) => {
  const res = await api.deleteData(`/order/${id}`, token);
  return res;
}

/**
 * get order by id.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */
export const getOrderById = async (id, token) => {
  const res = await api.get(`/order/${id}`, {}, token);
  return res;
}
