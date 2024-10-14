"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderById = exports.deleteOrder = exports.updateOrderStatus = exports.updateOrder = exports.createOrder = exports.getOrder = exports.deleteBanner = exports.createBanner = exports.updateBanner = exports.getBanner = exports.deletePackage = exports.updatePackage = exports.createPackage = exports.getPackage = exports.deleteArticle = exports.updateArticle = exports.createArticle = exports.getArticle = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.deleteMedia = exports.getProductById = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = void 0;

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
 * @param {*} searchName 
 * @returns 
 */


exports.deleteCategory = deleteCategory;

var getProduct = function getProduct(token) {
  var searchName,
      param,
      res,
      _args5 = arguments;
  return regeneratorRuntime.async(function getProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          searchName = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;
          param = {};
          searchName ? param.name = searchName : null;
          _context5.next = 5;
          return regeneratorRuntime.awrap(_api["default"].get('/product', param, token));

        case 5:
          res = _context5.sent;
          return _context5.abrupt("return", res);

        case 7:
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
 * get product by id.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */


exports.deleteProduct = deleteProduct;

var getProductById = function getProductById(id, token) {
  var res;
  return regeneratorRuntime.async(function getProductById$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get("/product/".concat(id), {}, token));

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
 * delete media product image.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */


exports.getProductById = getProductById;

var deleteMedia = function deleteMedia(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteMedia$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/media/".concat(id), token));

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
 * get user API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.deleteMedia = deleteMedia;

var getUser = function getUser(token) {
  var res;
  return regeneratorRuntime.async(function getUser$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/user', token));

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
 * create user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getUser = getUser;

var createUser = function createUser(data, token) {
  var res;
  return regeneratorRuntime.async(function createUser$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/user", data, token, true));

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
 * update user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createUser = createUser;

var updateUser = function updateUser(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateUser$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/user/update/".concat(id), data, token, true));

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
 * delete user API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateUser = updateUser;

var deleteUser = function deleteUser(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteUser$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/user/".concat(id), token));

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
 * get user API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.deleteUser = deleteUser;

var getArticle = function getArticle(token) {
  var res;
  return regeneratorRuntime.async(function getArticle$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/article', token));

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
 * create article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getArticle = getArticle;

var createArticle = function createArticle(data, token) {
  var res;
  return regeneratorRuntime.async(function createArticle$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/article", data, token, true));

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
 * update article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createArticle = createArticle;

var updateArticle = function updateArticle(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateArticle$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/article/update/".concat(id), data, token, true));

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
 * delete article API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateArticle = updateArticle;

var deleteArticle = function deleteArticle(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteArticle$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/article/".concat(id), token));

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
 * get package API.
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */


exports.deleteArticle = deleteArticle;

var getPackage = function getPackage(token) {
  var res;
  return regeneratorRuntime.async(function getPackage$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/package', token));

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
/**
 * create package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getPackage = getPackage;

var createPackage = function createPackage(data, token) {
  var res;
  return regeneratorRuntime.async(function createPackage$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/package", data, token, true));

        case 2:
          res = _context20.sent;
          return _context20.abrupt("return", res);

        case 4:
        case "end":
          return _context20.stop();
      }
    }
  });
};
/**
 * update package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createPackage = createPackage;

var updatePackage = function updatePackage(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updatePackage$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/user/package/".concat(id), data, token, true));

        case 2:
          res = _context21.sent;
          return _context21.abrupt("return", res);

        case 4:
        case "end":
          return _context21.stop();
      }
    }
  });
};
/**
 * delete package API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updatePackage = updatePackage;

var deletePackage = function deletePackage(id, token) {
  var res;
  return regeneratorRuntime.async(function deletePackage$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/package/".concat(id), token));

        case 2:
          res = _context22.sent;
          return _context22.abrupt("return", res);

        case 4:
        case "end":
          return _context22.stop();
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


exports.deletePackage = deletePackage;

var getBanner = function getBanner(token) {
  var res;
  return regeneratorRuntime.async(function getBanner$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get('/banner', token));

        case 2:
          res = _context23.sent;
          return _context23.abrupt("return", res);

        case 4:
        case "end":
          return _context23.stop();
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
  return regeneratorRuntime.async(function updateBanner$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/banner/update/".concat(id), data, token, true));

        case 2:
          res = _context24.sent;
          return _context24.abrupt("return", res);

        case 4:
        case "end":
          return _context24.stop();
      }
    }
  });
};
/**
 * create banner API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateBanner = updateBanner;

var createBanner = function createBanner(data, token) {
  var res;
  return regeneratorRuntime.async(function createBanner$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/banner", data, token, true));

        case 2:
          res = _context25.sent;
          return _context25.abrupt("return", res);

        case 4:
        case "end":
          return _context25.stop();
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


exports.createBanner = createBanner;

var deleteBanner = function deleteBanner(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteBanner$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/banner/".concat(id), token));

        case 2:
          res = _context26.sent;
          return _context26.abrupt("return", res);

        case 4:
        case "end":
          return _context26.stop();
      }
    }
  });
};
/**
 * get order API.
 * @param {*} data 
 * @param {*} token 
 * @param {*} searchName 
 * @returns 
 */


exports.deleteBanner = deleteBanner;

var getOrder = function getOrder(token) {
  var searchName,
      param,
      res,
      _args27 = arguments;
  return regeneratorRuntime.async(function getOrder$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          searchName = _args27.length > 1 && _args27[1] !== undefined ? _args27[1] : null;
          param = {};
          searchName ? param.name = searchName : null;
          _context27.next = 5;
          return regeneratorRuntime.awrap(_api["default"].get('/order', param, token));

        case 5:
          res = _context27.sent;
          return _context27.abrupt("return", res);

        case 7:
        case "end":
          return _context27.stop();
      }
    }
  });
};
/**
 * create order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.getOrder = getOrder;

var createOrder = function createOrder(data, token) {
  var res;
  return regeneratorRuntime.async(function createOrder$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/order", data, token, true));

        case 2:
          res = _context28.sent;
          return _context28.abrupt("return", res);

        case 4:
        case "end":
          return _context28.stop();
      }
    }
  });
};
/**
 * update order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.createOrder = createOrder;

var updateOrder = function updateOrder(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateOrder$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/order/update/".concat(id), data, token, true));

        case 2:
          res = _context29.sent;
          return _context29.abrupt("return", res);

        case 4:
        case "end":
          return _context29.stop();
      }
    }
  });
};
/**
 * update order status API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateOrder = updateOrder;

var updateOrderStatus = function updateOrderStatus(id, data, token) {
  var res;
  return regeneratorRuntime.async(function updateOrderStatus$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return regeneratorRuntime.awrap(_api["default"].post("/order/update/status/".concat(id), data, token, true));

        case 2:
          res = _context30.sent;
          return _context30.abrupt("return", res);

        case 4:
        case "end":
          return _context30.stop();
      }
    }
  });
};
/**
 * delete order API.
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */


exports.updateOrderStatus = updateOrderStatus;

var deleteOrder = function deleteOrder(id, token) {
  var res;
  return regeneratorRuntime.async(function deleteOrder$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return regeneratorRuntime.awrap(_api["default"].deleteData("/order/".concat(id), token));

        case 2:
          res = _context31.sent;
          return _context31.abrupt("return", res);

        case 4:
        case "end":
          return _context31.stop();
      }
    }
  });
};
/**
 * get order by id.
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */


exports.deleteOrder = deleteOrder;

var getOrderById = function getOrderById(id, token) {
  var res;
  return regeneratorRuntime.async(function getOrderById$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return regeneratorRuntime.awrap(_api["default"].get("/order/".concat(id), {}, token));

        case 2:
          res = _context32.sent;
          return _context32.abrupt("return", res);

        case 4:
        case "end":
          return _context32.stop();
      }
    }
  });
};

exports.getOrderById = getOrderById;