import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Series from "../moduls/movies/views/Series.vue";
import Cine from "../moduls/movies/views/Cine.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/series",
    name: "Series",
    component: Series,
  },
  {
    path: "/cine",
    name: "Cine",
    component: Cine,
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});
 
export default router;