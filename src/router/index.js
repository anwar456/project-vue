import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutUs from "../views/AboutUs.vue";
import SignIn from "../views/SignIn.vue";
import NotFound from "../views/NotFoundPage.vue";
import DashboardView from "../views/DashboardView.vue";
import store from "../store";
import DashHome from "../components/DashboardComponent/DashHome.vue";
import DataSource from "../components/DashboardComponent/DataSource.vue";
import EditUser from "../components/DashboardComponent/EditUser.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      if (store.state.isAuthenticated) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      if (store.state.isAuthenticated) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      if (store.state.isAuthenticated) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/home",
    name: "home",
    component: LandingPage,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      if (store.state.isAuthenticated) {
        next("/dashboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "DashHome",
        component: DashHome,
      },
      {
        path: "datasource",
        name: "DataSource",
        component: DataSource,
      },
      {
        path: "/edituser/:id",
        name: "EditUser",
        component: EditUser,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.isAuthenticated) {
      next("/signin");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
