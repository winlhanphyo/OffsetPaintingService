"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.updateProduct = exports.createProduct = exports.getProduct = exports.updateCategory = exports.createCategory = exports.getCategory = void 0;

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import axios from "axios";

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
          _context.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/category', token));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * create category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getCategory = getCategory;

var createCategory = function createCategory(data, token) {
  var res;
  return regeneratorRuntime.async(function createCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/category", data, token, true));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * update category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createCategory = createCategory;

var updateCategory = function updateCategory(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/category/update/".concat(id), data, token, true));

        case 2:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 4:
        case "end":
          return _context3.stop();
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


exports.updateCategory = updateCategory;

var getProduct = function getProduct(token) {
  var res;
  return regeneratorRuntime.async(function getProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/product', token));

        case 2:
          res = _context4.sent;
          return _context4.abrupt("return", res);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/**
 * create category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getProduct = getProduct;

var createProduct = function createProduct(data, token) {
  var res;
  return regeneratorRuntime.async(function createProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/product", data, token, true));

        case 2:
          res = _context5.sent;
          return _context5.abrupt("return", res);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/**
 * update category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createProduct = createProduct;

var updateProduct = function updateProduct(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/product/update/".concat(id), data, token, true));

        case 2:
          res = _context6.sent;
          return _context6.abrupt("return", res);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};
/**
 * get user API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.updateProduct = updateProduct;

var getUser = function getUser(token) {
  var res;
  return regeneratorRuntime.async(function getUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/user', token));

        case 2:
          res = _context7.sent;
          return _context7.abrupt("return", res);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.getUser = getUser;