import axios from "axios";
import api from "../api"
// import { loginRoot } from "../../config";

/**
 * login API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const login = async (data) => {
  const res = await axios.post('https://api.cicimm.net/api/login', data);
  return res;
}

/**
 * forget password.
 * @param {*} data 
 * @returns 
 */
export const forgetPassword = async (data) => {
  const res = await axios.post('https://api.cicimm.net/api/forget-password', data);
  return res;
}

/**
 * update password with token.
 * @param {*} data 
 * @returns 
 */
export const updatePassword = async (data) => {
  const res = await axios.post('https://api.cicimm.net/api/password-reset-update', data);
  return res;
}

/**
 * register API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
export const register = async (data) => {
  const res = await axios.post('https://api.cicimm.net/api/signup', data);
  return res;
}

/**
 * contact us API.
 * @param {*} data 
 */
export const contactUs = async (data) => {
  const res = await axios.post('https://api.cicimm.net/api/v1/contact', data);
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
 * @returns 
 */
export const getProduct = async (token, searchName=null) => {
  const param = {};
  searchName ? param.name = searchName : null;
  const res = await api.get('/product/', param, token);
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
  const param = {};
  searchName ? param.name = searchName : null;
  const res = await api.get('/article', param, token);
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
