"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanner = exports.getCategoryProduct = exports.getProduct = exports.getCategory = void 0;

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get category API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
var getCategory = function getCategory(token) {
  var res;
  return regeneratorRuntime.async(function getCategory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("-------getCategory", token);
          _context.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/category', token));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * get product API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getCategory = getCategory;

var getProduct = function getProduct(token) {
  var res;
  return regeneratorRuntime.async(function getProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("-------getProduct", token);
          _context2.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/product', token));

        case 3:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * get category product API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getProduct = getProduct;

var getCategoryProduct = function getCategoryProduct(token) {
  var res;
  return regeneratorRuntime.async(function getCategoryProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("-------getCategory", token);
          _context3.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/category/product', token));

        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};
/**
 * get banner API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getCategoryProduct = getCategoryProduct;

var getBanner = function getBanner(token) {
  var res;
  return regeneratorRuntime.async(function getBanner$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("-------getBanner", token);
          _context4.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/banner', token));

        case 3:
          res = _context4.sent;
          return _context4.abrupt("return", res);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getBanner = getBanner;