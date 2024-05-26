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

var _Package = _interopRequireDefault(require("../views/Package.vue"));

var _User = _interopRequireDefault(require("../views/User.vue"));

var _Article = _interopRequireDefault(require("../views/Article.vue"));

var _Order = _interopRequireDefault(require("../views/Order.vue"));

var _Billing = _interopRequireDefault(require("../views/Billing.vue"));

var _VirtualReality = _interopRequireDefault(require("../views/VirtualReality.vue"));

var _Rtl = _interopRequireDefault(require("../views/Rtl.vue"));

var _Profile = _interopRequireDefault(require("../views/Profile.vue"));

var _Signin = _interopRequireDefault(require("../views/Signin.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "/",
  redirect: "/dashboard-default",
  meta: {
    requiresAuth: true
  }
}, {
  path: "/dashboard-default",
  name: "Dashboard",
  component: _Dashboard["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/banner",
  name: "Banner",
  component: _Banner["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/category",
  name: "Category",
  component: _Category["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/product",
  name: "Product",
  component: _Product["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/package",
  name: "Package",
  component: _Package["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/article",
  name: "Article",
  component: _Article["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/order",
  name: "Order",
  component: _Order["default"],
  meta: {
    requiresAuth: true,
    userType: 'superAdmin'
  }
}, {
  path: "/user",
  name: "User",
  component: _User["default"],
  meta: {
    requiresAuth: true,
    userType: 'superAdmin'
  }
}, {
  path: "/billing",
  name: "Billing",
  component: _Billing["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/virtual-reality",
  name: "Virtual Reality",
  component: _VirtualReality["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/rtl-page",
  name: "RTL",
  component: _Rtl["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/profile",
  name: "Profile",
  component: _Profile["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/signin",
  name: "Signin",
  component: _Signin["default"]
} // {
//   path: "/signup",
//   name: "Signup",
//   component: Signup,
// },
];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: "active"
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    if (localStorage.getItem("token")) {
      console.log("existed storage");

      if (to.matched.some(function (record) {
        return record.meta.userType === 'superAdmin';
      })) {
        if (localStorage.getItem("superAdmin") === 'superAdmin') {
          next();
          return;
        } else {
          next("/dashboard-default");
        }
      }

      next();
      return;
    }

    next("/signin");
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;