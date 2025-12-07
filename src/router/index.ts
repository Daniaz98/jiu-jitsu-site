import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import History from "../pages/Historia/HistoryPage.vue";
import OrigemPage from "../pages/Historia/OrigemPage.vue";
import GraduacaoPage from "../pages/Graduacao/GraduacaoPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/historia",
      name: "history",
      component: History,
    },
    {
      path: "/historia/origem",
      name: "origem",
      component: OrigemPage,
    },
    {
      path: "/historia/chegada-ao-brasil",
      name: "chegada-brasil",
      component: () => import("../pages/Historia/ChegadaBrasilPage.vue"),
    },
    {
      path: "/historia/atualmente",
      name: "atualmente",
      component: () => import("../pages/Historia/AtualmentePage.vue"),
    },
    {
      path:  "/graduacao",
      name: "graduacao",
      component: GraduacaoPage
    }
  ],
});

export default router;
