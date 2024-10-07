import axios from "axios";
import api from "../api";
import { loginRoot, apiRoot } from "../../config";

/**
 * login API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const login = async (data) => {
  const res = await axios.post(`${loginRoot}/login`, data);
  return res;
}

/**
 * forget password.
 * @param {*} data 
 * @returns 
 */
export const forgetPassword = async (data) => {
  const res = await axios.post(`${loginRoot}forget-password`, data);
  return res;
}

/**
 * update password with token.
 * @param {*} data 
 * @returns 
 */
export const updatePassword = async (data) => {
  const res = await axios.post(`${loginRoot}/password-reset-update`, data);
  return res;
}

/**
 * register API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const register = async (data) => {
  const res = await axios.post(`${loginRoot}/signup`, data);
  return res;
}

/**
 * contact us API.
 * @param {*} data 
 */
export const contactUs = async (data) => {
  const res = await axios.post(`${apiRoot}/contact`, data);
  return res;
}

/**
 * create order API.
 * @param {*} data 
 */
export const createOrder = async (data, token) => {
  const res = await api.post(`/order`, data, token);
  return res;
}

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
 * get product API.
 * @param {*} data 
 * @param {*} token 
 * @param {*} searchName 
 * @param {*} pageData 
 * @returns 
 */
export const getProduct = async (token, searchName=null, pageData=null) => {
  let params = {};
  console.log("-----pageData", pageData);
  pageData ? params = pageData : "";
  searchName ? params.name = searchName : "";
  let res = null;
  if (!params) {
    console.log("-----not params", params);
    res = await axios.get(`${apiRoot}/product`, token);
  } else {
    console.log("-----params", params);
    res = await axios.get(`${apiRoot}/product`, {params});
  }
  
  return res;
}

/**
 * get product detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getProductDetail = async (token, id) => {
  const res = await api.get(`/product/${id}`, token);
  return res;
}

/**
 * get package detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getPackageDetail = async (token, id) => {
  console.log("-------get package detail service", token);
  const res = await api.get(`/package/${id}`, token);
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
export const getArticle = async (token, searchName=null) => {
  let params = {};
  searchName ? params.name = searchName : params = null;
  let res = null;
  if (!searchName) {
    res = await axios.get(`${apiRoot}/article`, token);
  } else {
    res = await axios.get(`${apiRoot}/article`, {params});
  }
  
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
