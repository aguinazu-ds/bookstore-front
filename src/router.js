import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/book",
        component: () => import("./components/BookList")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;