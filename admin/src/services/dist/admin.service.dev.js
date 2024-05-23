"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBanner = exports.getBanner = exports.deleteArticle = exports.detailArticle = exports.updateArticle = exports.createArticle = exports.getArticle = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = void 0;

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
 * delete category API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateCategory = updateCategory;

var deleteCategory = function deleteCategory(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/category/".concat(id), token));

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
 * get product API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.deleteCategory = deleteCategory;

var getProduct = function getProduct(token) {
  var res;
  return regeneratorRuntime.async(function getProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/product', token));

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
 * create product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getProduct = getProduct;

var createProduct = function createProduct(data, token) {
  var res;
  return regeneratorRuntime.async(function createProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/product", data, token, true));

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
 * update product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createProduct = createProduct;

var updateProduct = function updateProduct(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateProduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/product/update/".concat(id), data, token, true));

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
 * delete product API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateProduct = updateProduct;

var deleteProduct = function deleteProduct(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteProduct$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/product/".concat(id), token));

        case 2:
          res = _context8.sent;
          return _context8.abrupt("return", res);

        case 4:
        case "end":
          return _context8.stop();
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


exports.deleteProduct = deleteProduct;

var getUser = function getUser(token) {
  var res;
  return regeneratorRuntime.async(function getUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/user', token));

        case 2:
          res = _context9.sent;
          return _context9.abrupt("return", res);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};
/**
 * create user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getUser = getUser;

var createUser = function createUser(data, token) {
  var res;
  return regeneratorRuntime.async(function createUser$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/user", data, token, true));

        case 2:
          res = _context10.sent;
          return _context10.abrupt("return", res);

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
};
/**
 * update user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createUser = createUser;

var updateUser = function updateUser(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateUser$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/user/update/".concat(id), data, token, true));

        case 2:
          res = _context11.sent;
          return _context11.abrupt("return", res);

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
};
/**
 * delete user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateUser = updateUser;

var deleteUser = function deleteUser(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteUser$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/user/".concat(id), token));

        case 2:
          res = _context12.sent;
          return _context12.abrupt("return", res);

        case 4:
        case "end":
          return _context12.stop();
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


exports.deleteUser = deleteUser;

var getArticle = function getArticle(token) {
  var res;
  return regeneratorRuntime.async(function getArticle$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/article', token));

        case 2:
          res = _context13.sent;
          return _context13.abrupt("return", res);

        case 4:
        case "end":
          return _context13.stop();
      }
    }
  });
};
/**
 * create article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getArticle = getArticle;

var createArticle = function createArticle(data, token) {
  var res;
  return regeneratorRuntime.async(function createArticle$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/article", data, token, true));

        case 2:
          res = _context14.sent;
          return _context14.abrupt("return", res);

        case 4:
        case "end":
          return _context14.stop();
      }
    }
  });
};
/**
 * update article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createArticle = createArticle;

var updateArticle = function updateArticle(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateArticle$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/article/update/".concat(id), data, token, true));

        case 2:
          res = _context15.sent;
          return _context15.abrupt("return", res);

        case 4:
        case "end":
          return _context15.stop();
      }
    }
  });
};
/**
 * get article detail API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateArticle = updateArticle;

var detailArticle = function detailArticle(id, data, token) {
  var res;
  return regeneratorRuntime.async(function detailArticle$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/article/".concat(id), data, token, true));

        case 2:
          res = _context16.sent;
          return _context16.abrupt("return", res);

        case 4:
        case "end":
          return _context16.stop();
      }
    }
  });
};
/**
 * delete article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.detailArticle = detailArticle;

var deleteArticle = function deleteArticle(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteArticle$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/article/".concat(id), token));

        case 2:
          res = _context17.sent;
          return _context17.abrupt("return", res);

        case 4:
        case "end":
          return _context17.stop();
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


exports.deleteArticle = deleteArticle;

var getBanner = function getBanner(token) {
  var res;
  return regeneratorRuntime.async(function getBanner$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/banner', token));

        case 2:
          res = _context18.sent;
          return _context18.abrupt("return", res);

        case 4:
        case "end":
          return _context18.stop();
      }
    }
  });
};
/**
 * update banner API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getBanner = getBanner;

var updateBanner = function updateBanner(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateBanner$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/banner/update/".concat(id), data, token, true));

        case 2:
          res = _context19.sent;
          return _context19.abrupt("return", res);

        case 4:
        case "end":
          return _context19.stop();
      }
    }
  });
};

exports.updateBanner = updateBanner;