"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.imgRoot = exports.loginRoot = exports.apiRoot = void 0;
// export const apiRoot = 'https://api.cicimm.net/api/v1';
var apiRoot = 'http://localhost:4000/api/v1'; // export const imgRoot = 'https://api.cicimm.net/';

exports.apiRoot = apiRoot;
var loginRoot = 'http://localhost:4000/api'; // export const loginRoot = 'https://api.cicimm.net/api';

exports.loginRoot = loginRoot;
var imgRoot = 'http://localhost:4000/';
exports.imgRoot = imgRoot;
var version = '1.24';
exports.version = version;