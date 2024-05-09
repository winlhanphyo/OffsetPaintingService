"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Dashboard = _interopRequireDefault(require("../views/Dashboard.vue"));

var _Banner = _interopRequireDefault(require("../views/Banner.vue"));

var _Category = _interopRequireDefault(require("../views/Category.vue"));

var _Product = _interopRequireDefault(require("../views/Product.vue"));

var _User = _interopRequireDefault(require("../views/User.vue"));

var _Billing = _interopRequireDefault(require("../views/Billing.vue"));

var _VirtualReality = _interopRequireDefault(require("../views/VirtualReality.vue"));

var _Rtl = _interopRequireDefault(require("../views/Rtl.vue"));

var _Profile = _interopRequireDefault(require("../views/Profile.vue"));

var _Signup = _interopRequireDefault(require("../views/Signup.vue"));

var _Signin = _interopRequireDefault(require("../views/Signin.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "/",
  redirect: "/dashboard-default"
}, {
  path: "/dashboard-default",
  name: "Dashboard",
  component: _Dashboard["default"]
}, {
  path: "/banner",
  name: "Banner",
  component: _Banner["default"]
}, {
  path: "/category",
  name: "Category",
  component: _Category["default"]
}, {
  path: "/product",
  name: "Product",
  component: _Product["default"]
}, {
  path: "/user",
  name: "User",
  component: _User["default"]
}, {
  path: "/billing",
  name: "Billing",
  component: _Billing["default"]
}, {
  path: "/virtual-reality",
  name: "Virtual Reality",
  component: _VirtualReality["default"]
}, {
  path: "/rtl-page",
  name: "RTL",
  component: _Rtl["default"]
}, {
  path: "/profile",
  name: "Profile",
  component: _Profile["default"]
}, {
  path: "/signin",
  name: "Signin",
  component: _Signin["default"]
}, {
  path: "/signup",
  name: "Signup",
  component: _Signup["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: "active"
});
var _default = router;
exports["default"] = _default;