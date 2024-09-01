import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactUsView.vue')
  },
  {
    path: '/quota',
    name: 'quota',
    component: () => import('../views/QuotaView.vue')
  },
  {
    path: '/article/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleDetailView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductDetailView.vue')
  },
  {
    path: '/package/:id',
    name: 'package',
    component: () => import('../views/PackageDetailView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/packages',
    name: 'packages',
    component: () => import('../views/PackageListView.vue')
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: () => import('../views/ForgetPassword.vue')
  },
  {
    path: '/change-password',
    name: 'changePassword',
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '/forget-password-update/:userId/:token',
    name: 'updatePassword',
    component: () => import('../views/UpdatePassword.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/ProductSearchView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/OrderPayment.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      console.log("existed storage")
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router
