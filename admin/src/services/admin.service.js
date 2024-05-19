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

