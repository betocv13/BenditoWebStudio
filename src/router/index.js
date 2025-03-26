import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import AccountView from "../views/AccountView.vue";
import { getAuth } from "firebase/auth";
import app from "@/firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAdmin = user && user.email === "betito.castillo.98@icloud.com";

  if (requiresAuth && !user) {
    // Not logged in? Block any protected route
    next("/login");
  } else if (to.path === "/admin" && !isAdmin) {
    // Logged in but not admin? Block access to /admin
    next("/account");
  } else {
    // All good
    next();
  }
});

export default router;