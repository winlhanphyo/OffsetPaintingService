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
 * @returns 
 */
export const getProduct = async (token) => {
  const res = await api.get('/product', token);
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
 * get article API.
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
 * get article detail API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const detailArticle = async (id, data, token) => {
  const res = await api.post(`/article/${id}`, data, token, true);
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
