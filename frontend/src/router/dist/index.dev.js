"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: '/home',
  name: 'home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/HomeView.vue'));
    });
  }
}, {
  path: '/about',
  name: 'about',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/AboutView.vue'));
    });
  }
}, {
  path: '/contact',
  name: 'contact',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ContactUsView.vue'));
    });
  }
}, {
  path: '/quota',
  name: 'quota',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/QuotaView.vue'));
    });
  }
}, {
  path: '/article/:id',
  name: 'articleDetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ArticleDetailView.vue'));
    });
  }
}, {
  path: '/article',
  name: 'article',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ArticleView.vue'));
    });
  }
}, {
  path: '/login',
  name: 'login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/LoginView.vue'));
    });
  }
}, {
  path: '/register',
  name: 'register',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/RegisterView.vue'));
    });
  }
}, {
  path: '/product/:id',
  name: 'product',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ProductDetailView.vue'));
    });
  }
}, {
  path: '/products',
  name: 'products',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ProductListView.vue'));
    });
  }
}, {
  path: '/forget-password',
  name: 'forgetPassword',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/ForgetPassword.vue'));
    });
  }
}, {
  path: '/checkout',
  name: 'checkout',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/CheckoutView.vue'));
    });
  }
}, {
  path: "/",
  redirect: "/home"
}, {
  path: "/:catchAll(.*)",
  redirect: "/"
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;