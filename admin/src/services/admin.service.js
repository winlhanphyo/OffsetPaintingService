import api from "../api";

/**
 * get category API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const getCategory = async (token) => {
    console.log("-------getCategory", token);
  const res = await api.get('/api/category', token);
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
  const res = await api.get('/api/product', token);
  return res;
}

