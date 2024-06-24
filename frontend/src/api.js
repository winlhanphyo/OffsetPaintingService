import axios from "axios";
import Swal from 'sweetalert2';
import { apiRoot, imgRoot, version } from "../config";
import store from "./store";

const objectToQueryString = (obj) => {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

const doRequest = async (path, params, method, activeToken) => {

  const options = {
    method, headers: {}
  }
  if (params && Object.keys(params).length > 0) {
    if (method == 'GET') {
      console.log("param if----------", path, params, method);
      path += '?' + objectToQueryString(params)
      // console.log("chk options get", options)
    } else {
      options.data = params;
    }
  }
  if (activeToken) {
    options.headers = {
      Authorization: `Bearer ${activeToken}`,
      'content-type': 'application/json',
      method: 'HEAD',
      mode: 'no-cors',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    };
  }
  const httpMethods = method.toLowerCase();
  // axios.defaults.withCredentials = true;

  axios.interceptors.response.use(undefined, async function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        await store.dispatch("LogOut");
        return Swal.fire({
          position: 'bottom',
          icon: 'error',
          title: "Please Login <a href='https://cicimm.net/login'>Link</a>",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true
        });
      } else {
        Swal.fire({
          icon: "error",
          // title: "Oops...",
          text: "API error is occurred.",
          confirmButtonText: "Close",
        });
      }
    }
  });

  return axios({
    method: httpMethods, url: apiRoot + path, data: params, headers: options.headers
  }).then((res) => {
    if (res?.status === 204) {
      return undefined;
    }
    if (res?.status === 403) {
      activeToken = null;
    }

    if (res?.data?.code < 1) {
      Swal.fire({
        icon: "error",
        // title: "Oops...",
        text: res?.data?.info,
        confirmButtonText: "Close",
      });
    }
    return res;
  });
}
const get = (path, params, token) => {
  return doRequest(path, params, 'GET', token);
}

const post = (path, params, token) => {
  return doRequest(path, params, 'POST', token);
}

export default {
  get,
  post,
  apiRoot,
  imgRoot,
  version
}