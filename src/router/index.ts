import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/map",
  },
  {
    path: "/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/map",
      },
      {
        path: "map",
        component: () => import("@/views/Map.vue"),
      },
      {
        path: "diary",
        component: () => import("@/views/Diary.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
