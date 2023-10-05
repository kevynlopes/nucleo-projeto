import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjetosView from "../views/ProjetosView.vue";
import CursosView from "../views/CursosView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projetos",
      name: "home",
      component: ProjetosView,
    },
    {
      path: "/cursos",
      name: "home",
      component: CursosView,
    },
  ],
});

export default router;
