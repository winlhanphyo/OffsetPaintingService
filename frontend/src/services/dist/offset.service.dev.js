"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPackage = exports.getBanner = exports.getCategoryProduct = exports.getArticleDetail = exports.getArticle = exports.getMediaWithProductId = exports.getPackageDetail = exports.getProductDetail = exports.getProduct = exports.getCategory = exports.register = exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { loginRoot } from "../../config";

/**
 * login API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
var login = function login(data) {
  var res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('https://api.cicimm.net/api/login', data));

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
 * register API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.login = login;

var register = function register(data) {
  var res;
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('https://api.cicimm.net/api/signup', data));

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
 * get category API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.register = register;

var getCategory = function getCategory(token) {
  var res;
  return regeneratorRuntime.async(function getCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/category', token));

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


exports.getCategory = getCategory;

var getProduct = function getProduct(token) {
  var res;
  return regeneratorRuntime.async(function getProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("-------getProduct", token);
          _context4.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/product', token));

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
/**
 * get product detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getProduct = getProduct;

var getProductDetail = function getProductDetail(token, id) {
  var res;
  return regeneratorRuntime.async(function getProductDetail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("-------get product detail service", token);
          _context5.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get("/product/".concat(id), token));

        case 3:
          res = _context5.sent;
          return _context5.abrupt("return", res);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/**
 * get package detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getProductDetail = getProductDetail;

var getPackageDetail = function getPackageDetail(token, id) {
  var res;
  return regeneratorRuntime.async(function getPackageDetail$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("-------get package detail service", token);
          _context6.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get("/package/".concat(id), token));

        case 3:
          res = _context6.sent;
          return _context6.abrupt("return", res);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};
/**
 * get media with product id.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getPackageDetail = getPackageDetail;

var getMediaWithProductId = function getMediaWithProductId(token, id) {
  var res;
  return regeneratorRuntime.async(function getMediaWithProductId$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get("/media/product/".concat(id), token));

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
/**
 * get article API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getMediaWithProductId = getMediaWithProductId;

var getArticle = function getArticle(token) {
  var res;
  return regeneratorRuntime.async(function getArticle$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log("-------get article service", token);
          _context8.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/article', token));

        case 3:
          res = _context8.sent;
          return _context8.abrupt("return", res);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};
/**
 * get article detail API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getArticle = getArticle;

var getArticleDetail = function getArticleDetail(token, id) {
  var res;
  return regeneratorRuntime.async(function getArticleDetail$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log("-------get article detail service", token);
          _context9.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get("/article/".concat(id), token));

        case 3:
          res = _context9.sent;
          return _context9.abrupt("return", res);

        case 5:
        case "end":
          return _context9.stop();
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


exports.getArticleDetail = getArticleDetail;

var getCategoryProduct = function getCategoryProduct(token) {
  var res;
  return regeneratorRuntime.async(function getCategoryProduct$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          console.log("-------getCategory", token);
          _context10.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/category/product', token));

        case 3:
          res = _context10.sent;
          return _context10.abrupt("return", res);

        case 5:
        case "end":
          return _context10.stop();
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
  return regeneratorRuntime.async(function getBanner$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          console.log("-------getBanner", token);
          _context11.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/banner', token));

        case 3:
          res = _context11.sent;
          return _context11.abrupt("return", res);

        case 5:
        case "end":
          return _context11.stop();
      }
    }
  });
};
/**
 * get package API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.getBanner = getBanner;

var getPackage = function getPackage(token) {
  var res;
  return regeneratorRuntime.async(function getPackage$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          console.log("-------getPackage", token);
          _context12.next = 3;
          return regeneratorRuntime.awrap(_api["default"].get('/package', token));

        case 3:
          res = _context12.sent;
          return _context12.abrupt("return", res);

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
};

exports.getPackage = getPackage;