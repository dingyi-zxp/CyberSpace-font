import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import SignUp from "../views/SignIn/SignIn.vue"
import Home from "../views/Home/Home.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signup',
        component: SignUp
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router