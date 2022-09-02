import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage/index.vue";
import CountryDetails from "../views/CountryDetails/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/:id/details",
      name: "details",
      component: CountryDetails,
    },
  ],
});

export default router;
