import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Banner from "../views/Banner.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import User from "../views/User.vue";
import Article from "../views/Article.vue";
import Order from "../views/Order.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

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
    path: "/article",
    name: "Article",
    component: Article,
    meta: { requiresAuth: true },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { requiresAuth: true },
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: { requiresAuth: true },
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
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
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
      next();
      return;
    }
    next("/signup");
  } else {
    next();
  }
});

export default router;
