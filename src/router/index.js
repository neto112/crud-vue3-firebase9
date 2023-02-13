import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCity from "../views/AddCity";
import EditCity from "../views/EditCity";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add-city",
    name: "addcity",
    component: AddCity,
  },
  {
    path: "/cities/:cityId",
    name: "editcity",
    component: EditCity,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;