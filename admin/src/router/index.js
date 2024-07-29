import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Banner from "../views/Banner.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import Package from "../views/Package.vue";
import User from "../views/User.vue";
import Article from "../views/Article.vue";
import Order from "../views/Order.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signin from "../views/Signin.vue";
import ChangePassword from "../views/ChangePassword.vue";
import UpdatePassword from "../views/UpdatePassword.vue";
import ProductCreate from "../views/components/ProductCreate.vue";
import ProductUpdate from "../views/components/ProductUpdate.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/banner",
    name: "Banner",
    component: Banner,
    meta: { requiresAuth: true },
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: { requiresAuth: true },
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    meta: { requiresAuth: true },
  },
  {
    path: "/product/create",
    name: "ProductCreate",
    component: ProductCreate,
    meta: { requiresAuth: true },
  },
  {
    path: "/product/update/:id",
    name: "ProductUpdate",
    component: ProductUpdate,
    meta: { requiresAuth: true },
  },
  {
    path: "/package",
    name: "Package",
    component: Package,
    meta: { requiresAuth: true },
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
    meta: { requiresAuth: true },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { requiresAuth: true, userType: 'superAdmin' },
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: { requiresAuth: true, userType: 'superAdmin' },
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: { requiresAuth: true },
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta: { requiresAuth: true },
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/update-password",
    name: "UpdatePassword",
    component: UpdatePassword,
  },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: Signup,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      console.log("existed storage")
      if (to.matched.some((record) => record.meta.userType === 'superAdmin')) {
        const temp = localStorage.getItem("user") || null;
        let userData = JSON.parse(temp);
        console.log(userData);
        if (userData?.type === 'superAdmin') {
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

export default router;
