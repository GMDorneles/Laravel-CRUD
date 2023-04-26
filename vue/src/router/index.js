import { createWebHashHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;