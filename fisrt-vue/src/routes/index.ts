import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../shared/views/HomeView.vue";
import CounterView from "../counter/views/CounterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/counter", name: "counter", component: CounterView },
  ],
});

export default router;
